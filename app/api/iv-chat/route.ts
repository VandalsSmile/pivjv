import { convertToModelMessages, isStepCount, streamText, tool, type UIMessage } from "ai";
import { z } from "zod";
import { sendLead } from "@/app/actions/send-lead";
import {
  clinicNow,
  formatLongDate,
  isBookableSlot,
  slotsForDate,
  upcomingOpenDays,
} from "@/lib/booking-schedule";
import { SERVICE_OPTIONS, isServiceId } from "@/lib/booking-services";
import { CONTACT } from "@/lib/constants";
import { clientIpFromHeaders } from "@/lib/lead-guard";
import {
  IV_CHAT_MODEL,
  IV_STAFF_REQUEST_LABELS,
  IV_STAFF_REQUEST_TYPES,
  isIvChatConfigured,
} from "@/lib/iv-bot/config";
import { chatContactBlockReason, chatLeadAccepted } from "@/lib/iv-bot/lead-gate";
import { isStaffAlertLimited } from "@/lib/iv-bot/rate-limit";
import { messageText, prepareIvChatTurn, type ChatMessage } from "@/lib/iv-bot/turn";

export const maxDuration = 30;

const SERVICE_IDS = SERVICE_OPTIONS.map((service) => service.id) as [
  string,
  ...string[],
];

function transcript(messages: ChatMessage[], guestName: string) {
  return messages
    .map((message) => {
      const text = messageText(message);
      if (!text) return "";
      const who = message.role === "user" ? guestName : "Ivey";
      return `${who}: ${text}`;
    })
    .filter(Boolean)
    .join("\n")
    .slice(0, 4000);
}

async function submitChatLead(input: {
  formName: string;
  notifySubject: string;
  confirmationType: "general" | "appointment";
  name: string;
  email: string;
  phone: string;
  fields: { label: string; value: string }[];
  formToken?: string;
  requireEmail: boolean;
  requirePhone: boolean;
  chatId: string;
  ip: string;
}) {
  const blocked = chatContactBlockReason({
    name: input.name,
    email: input.email,
    phone: input.phone,
    requireEmail: input.requireEmail,
    requirePhone: input.requirePhone,
  });
  if (blocked) {
    console.warn(`[lead-guard] filtered: chat-${blocked}`);
    return {
      ok: false as const,
      reason: `We couldn't submit that. Ask the visitor to call ${CONTACT.phone}.`,
    };
  }

  if (isStaffAlertLimited(input.chatId, input.ip)) {
    return {
      ok: false as const,
      reason: `A request was already sent from this chat. Ask the visitor to call ${CONTACT.phone}.`,
    };
  }

  const result = await sendLead({
    formName: input.formName,
    notifySubject: input.notifySubject,
    confirmationType: input.confirmationType,
    name: input.name.trim(),
    email: input.email.trim(),
    formToken: input.formToken,
    officeExtension: "",
    fields: [
      ...input.fields,
      { label: "Phone", value: input.phone.trim() },
    ],
  });

  if (!chatLeadAccepted(result)) {
    if (result.filtered) console.warn("[lead-guard] filtered: chat-lead");
    return {
      ok: false as const,
      reason: `We couldn't submit that automatically. Ask the visitor to call ${CONTACT.phone}.`,
    };
  }

  return { ok: true as const };
}

export function GET() {
  return Response.json({ enabled: isIvChatConfigured() });
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const turn = prepareIvChatTurn({
    body: payload,
    origin: req.headers.get("origin"),
    referer: req.headers.get("referer"),
    ip: clientIpFromHeaders((name) => req.headers.get(name)),
    configured: isIvChatConfigured(),
  });

  if (turn.kind !== "ready") {
    return Response.json(turn.body, { status: turn.status });
  }

  const uiMessages = turn.messages as UIMessage[];

  const result = streamText({
    model: IV_CHAT_MODEL,
    instructions: turn.instructions,
    messages: await convertToModelMessages(uiMessages),
    maxOutputTokens: 700,
    stopWhen: isStepCount(5),
    tools: {
      checkAvailability: tool({
        description:
          "Get open appointment times from the same hours the /book form uses. Pass a date to see that day's times, or omit it for the next open days. Never guess a time.",
        inputSchema: z.object({
          date: z
            .string()
            .regex(/^\d{4}-\d{2}-\d{2}$/)
            .optional()
            .describe("YYYY-MM-DD in America/Chicago"),
        }),
        execute: async ({ date }) => {
          const now = clinicNow();
          if (date) {
            const times = slotsForDate(date, now);
            return times.length
              ? { date, label: formatLongDate(date), times }
              : {
                  date,
                  label: formatLongDate(date),
                  times: [],
                  note: "No open times that day (closed, past, or too soon).",
                };
          }
          return {
            days: upcomingOpenDays(now, 5).map((iso) => ({
              date: iso,
              label: formatLongDate(iso),
              times: slotsForDate(iso, now),
            })),
          };
        },
      }),
      requestBooking: tool({
        description:
          "Submit an appointment request through the website booking system. The spa gets an alert email and the guest gets a confirmation email when the address is valid. Staff then confirm the time. Only call after the visitor agrees to the service, date, and time and gives name, email, and phone.",
        inputSchema: z.object({
          serviceId: z.enum(SERVICE_IDS),
          date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
          time: z.string().max(20),
          name: z.string().min(1).max(80),
          email: z.string().max(120),
          phone: z.string().max(30),
          notes: z.string().max(600).optional(),
        }),
        execute: async (booking) => {
          if (!isServiceId(booking.serviceId)) {
            return { ok: false, reason: "Unknown service. Use intro, non-member, member, or injection." };
          }
          const service = SERVICE_OPTIONS.find((item) => item.id === booking.serviceId);
          if (!service) {
            return { ok: false, reason: "Unknown service." };
          }
          if (!isBookableSlot(booking.date, booking.time, clinicNow())) {
            return {
              ok: false,
              reason: "That time isn't available. Call checkAvailability and offer open times.",
            };
          }

          const sent = await submitChatLead({
            formName: "IV Chatbot Booking",
            notifySubject: "New IV Booking Request from Website (via Ivey chat)",
            confirmationType: "appointment",
            name: booking.name,
            email: booking.email,
            phone: booking.phone,
            requireEmail: true,
            requirePhone: true,
            formToken: turn.formToken,
            chatId: turn.id,
            ip: turn.ip,
            fields: [
              { label: "Service", value: service.label },
              { label: "Requested Date", value: formatLongDate(booking.date) },
              { label: "Requested Time", value: booking.time },
              { label: "Notes", value: booking.notes?.trim() ?? "" },
              { label: "Page", value: turn.pagePath ?? "" },
              { label: "Chat transcript", value: transcript(turn.messages, booking.name.trim()) },
            ],
          });

          if (!sent.ok) return sent;
          return {
            ok: true,
            service: service.label,
            date: formatLongDate(booking.date),
            time: booking.time,
          };
        },
      }),
      notifyStaff: tool({
        description:
          "Email the Prime IV Jones Valley team so someone follows up. Requires the visitor's name plus a phone number or email they gave in this chat. Do not use for a booking that requestBooking already submitted.",
        inputSchema: z.object({
          requestType: z.enum(IV_STAFF_REQUEST_TYPES),
          name: z.string().min(1).max(80),
          phone: z.string().max(30).optional(),
          email: z.string().max(120).optional(),
          service: z.string().max(120).optional(),
          preferredTiming: z.string().max(120).optional(),
          clientStatus: z.enum(["new", "returning", "member", "unknown"]).optional(),
          urgency: z.enum(["normal", "time_sensitive"]),
          summary: z.string().min(1).max(1200),
        }),
        execute: async (alert) => {
          const sent = await submitChatLead({
            formName: "IV Chatbot",
            notifySubject: `${alert.urgency === "time_sensitive" ? "URGENT " : ""}[Ivey Chatbot] ${IV_STAFF_REQUEST_LABELS[alert.requestType]}: ${alert.name}`.slice(0, 180),
            confirmationType: "general",
            name: alert.name,
            email: alert.email ?? "",
            phone: alert.phone ?? "",
            requireEmail: false,
            requirePhone: false,
            formToken: turn.formToken,
            chatId: turn.id,
            ip: turn.ip,
            fields: [
              { label: "Request", value: IV_STAFF_REQUEST_LABELS[alert.requestType] },
              { label: "Email", value: alert.email ?? "" },
              { label: "Service", value: alert.service ?? "" },
              { label: "Preferred time", value: alert.preferredTiming ?? "" },
              { label: "Client", value: alert.clientStatus ?? "unknown" },
              { label: "Summary", value: alert.summary },
              { label: "Page", value: turn.pagePath ?? "" },
              { label: "Chat transcript", value: transcript(turn.messages, alert.name.trim()) },
            ],
          });
          return sent.ok ? { ok: true } : sent;
        },
      }),
    },
    onError: ({ error }) => {
      console.error("[iv-chat] stream error:", error);
    },
  });

  return result.toUIMessageStreamResponse();
}
