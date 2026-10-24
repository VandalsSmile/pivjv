import { CONTACT } from "../constants";
import { isAllowedLeadOrigin } from "../lead-guard";
import { buildIvInstructions } from "./knowledge";
import { IV_CHAT_LIMITS } from "./config";
import { isChatRateLimited } from "./rate-limit";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id?: string;
  role: ChatRole;
  parts: { type: string; text?: string }[];
};

export type ReadyTurn = {
  kind: "ready";
  id: string;
  messages: ChatMessage[];
  instructions: string;
  pagePath?: string;
  formToken?: string;
  ip: string;
};

export type StopTurn = {
  kind: "filtered" | "rate_limited" | "invalid" | "blocked" | "unconfigured";
  status: number;
  body: Record<string, unknown>;
};

export type ChatTurn = ReadyTurn | StopTurn;

const ABUSE =
  /ignore (all |any )?(previous|prior|above|your) (instructions|rules|prompt)|system prompt|jailbreak|\b(bomb|explosive|make a weapon)\b|child porn|sexual (content )?(of|with) (a )?(child|minor)/i;

const OFF_TOPIC =
  /\b(python|javascript|typescript|sql|regex|homework|term paper|bitcoin|crypto|stock tip|election|democrat|republican)\b|\bwrite (me )?(a |an )?(poem|story|code|script|essay)\b/i;

const ON_TOPIC =
  /\b(iv|drip|nad|niagen|inject|book|hour|price|cost|member|gift|weight|huntsville|jones|prime|spa|visit|appointment|special|myers|glow|hydrat|vitamin|bridal|corporate|pack|menu|where|address|phone|text|hello|hi|hey)\b/i;

export function messageText(message: ChatMessage): string {
  return message.parts
    .map((part) => (part.type === "text" && typeof part.text === "string" ? part.text : ""))
    .join("")
    .trim();
}

export function classifyVisitorText(text: string): "ok" | "abuse" | "off_topic" {
  if (ABUSE.test(text)) return "abuse";
  if (OFF_TOPIC.test(text) && !ON_TOPIC.test(text)) return "off_topic";
  return "ok";
}

function blockedMessage(kind: "abuse" | "off_topic"): string {
  if (kind === "abuse") {
    return `I can only help with visits to Prime IV in ${CONTACT.address.city}. Please call ${CONTACT.phone} or book online if you need the spa.`;
  }
  return `I only answer questions about Prime IV Hydration & Wellness in ${CONTACT.address.city} — drips, pricing, hours, and booking. Call ${CONTACT.phone} or book online if you'd like a person.`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

export function prepareIvChatTurn(input: {
  body: unknown;
  origin: string | null;
  referer: string | null;
  ip: string;
  configured: boolean;
  now?: Date;
}): ChatTurn {
  const now = input.now ?? new Date();

  if (!isAllowedLeadOrigin(input.origin)) {
    return { kind: "filtered", status: 200, body: { filtered: true } };
  }
  if (input.referer) {
    let refererOrigin: string | null = null;
    try {
      refererOrigin = new URL(input.referer).origin;
    } catch {
      refererOrigin = null;
    }
    if (!refererOrigin || !isAllowedLeadOrigin(refererOrigin)) {
      return { kind: "filtered", status: 200, body: { filtered: true } };
    }
  }

  if (!isRecord(input.body)) {
    return { kind: "invalid", status: 400, body: { error: "Invalid request." } };
  }

  const officeExtension = typeof input.body.officeExtension === "string" ? input.body.officeExtension : "";
  const legacyHoneypot = typeof input.body.honeypot === "string" ? input.body.honeypot : "";
  if (`${officeExtension} ${legacyHoneypot}`.trim()) {
    return { kind: "filtered", status: 200, body: { filtered: true } };
  }

  const id = input.body.id;
  const rawMessages = input.body.messages;
  if (typeof id !== "string" || id.length < 1 || id.length > 100) {
    return { kind: "invalid", status: 400, body: { error: "Invalid request." } };
  }
  if (!Array.isArray(rawMessages) || rawMessages.length < 1 || rawMessages.length > IV_CHAT_LIMITS.maxMessagesPerChat) {
    return { kind: "invalid", status: 400, body: { error: "Invalid request." } };
  }

  const messages: ChatMessage[] = [];
  for (const raw of rawMessages) {
    if (!isRecord(raw)) {
      return { kind: "invalid", status: 400, body: { error: "Invalid request." } };
    }
    if (raw.role !== "user" && raw.role !== "assistant") continue;
    if (!Array.isArray(raw.parts)) continue;
    const parts = raw.parts.filter(isRecord).map((part) => ({
      type: typeof part.type === "string" ? part.type : "",
      text: typeof part.text === "string" ? part.text : undefined,
    }));
    messages.push({
      id: typeof raw.id === "string" ? raw.id : undefined,
      role: raw.role,
      parts,
    });
  }

  const latest = messages.at(-1);
  if (!latest || latest.role !== "user") {
    return { kind: "invalid", status: 400, body: { error: "Invalid request." } };
  }
  const text = messageText(latest);
  if (!text) {
    return { kind: "invalid", status: 400, body: { error: "Invalid request." } };
  }
  if (text.length > IV_CHAT_LIMITS.maxMessageChars) {
    return {
      kind: "invalid",
      status: 413,
      body: { error: "That message is a little long — please shorten it." },
    };
  }

  if (isChatRateLimited(input.ip, now.getTime())) {
    return {
      kind: "rate_limited",
      status: 429,
      body: { error: `You're sending messages quickly. Please call us at ${CONTACT.phone}.` },
    };
  }

  const topic = classifyVisitorText(text);
  if (topic !== "ok") {
    return {
      kind: "blocked",
      status: 200,
      body: { error: blockedMessage(topic), blocked: topic },
    };
  }

  if (!input.configured) {
    return {
      kind: "unconfigured",
      status: 503,
      body: {
        error: `Chat is unavailable right now. Please call ${CONTACT.phone} or book online.`,
        fallback: true,
      },
    };
  }

  const pagePath =
    typeof input.body.pagePath === "string" ? input.body.pagePath.slice(0, 200) : undefined;
  const formToken =
    typeof input.body.formToken === "string" ? input.body.formToken.slice(0, 500) : undefined;

  return {
    kind: "ready",
    id,
    messages: messages.slice(-30),
    instructions: buildIvInstructions({ now, pagePath }),
    pagePath,
    formToken,
    ip: input.ip,
  };
}
