// Shared by the IV chat widget (client) and /api/iv-chat (server).

import { PRICING } from "../constants";

export const IV_BOT_NAME = "Ivey";

export const IV_CHAT_ENDPOINT = "/api/iv-chat";

export const IV_CHAT_MODEL = "anthropic/claude-haiku-5.5";

/** Hard caps enforced on the server; the client mirrors them for a clean UX. */
export const IV_CHAT_LIMITS = {
  maxMessageChars: 1000,
  maxMessagesPerChat: 40,
};

export const IV_CHAT_TEASER_KEY = "hiv_iv_chat_teaser_seen";
export const IV_CHAT_LEAD_EVENT_KEY = "hiv_iv_chat_lead_events";

export const IV_CHAT_QUICK_REPLIES = [
  `Book my $${PRICING.introOffer.price} intro visit`,
  "What are your hours?",
  "Which drip is right for me?",
  "Have someone call me",
];

export const IV_STAFF_REQUEST_TYPES = [
  "booking_request",
  "callback_request",
  "question_for_staff",
  "member_request",
  "complaint_or_issue",
  "other",
] as const;

export type IvStaffRequestType = (typeof IV_STAFF_REQUEST_TYPES)[number];

export const IV_STAFF_REQUEST_LABELS: Record<IvStaffRequestType, string> = {
  booking_request: "Booking request",
  callback_request: "Callback request",
  question_for_staff: "Question for staff",
  member_request: "Member request",
  complaint_or_issue: "Issue / complaint",
  other: "Follow-up needed",
};

/**
 * True when a model call can be attempted. On Vercel, OIDC may be minted per
 * request even if AI_GATEWAY_API_KEY is unset, so the widget stays available
 * there. POST still returns a call/book fallback if the provider rejects it.
 */
export function isIvChatConfigured(): boolean {
  if (process.env.AI_GATEWAY_API_KEY?.trim()) return true;
  if (process.env.VERCEL_OIDC_TOKEN?.trim()) return true;
  return process.env.VERCEL === "1";
}
