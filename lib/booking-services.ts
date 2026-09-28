import { PRICING } from "@/lib/constants";

// Labels intentionally match the service cards on /book so guests see the
// same name from card → form → confirmation.
export const SERVICE_OPTIONS = [
  {
    id: "intro",
    label: `$${PRICING.introOffer.price} First-Time Intro Offer`,
    isIntro: true,
  },
  { id: "non-member", label: "Non-Member IV Appointment", isIntro: false },
  { id: "member", label: "Member Appointment", isIntro: false },
  { id: "injection", label: "Injection Therapy Appointment", isIntro: false },
] as const;

export type ServiceId = (typeof SERVICE_OPTIONS)[number]["id"];

export function isServiceId(value: unknown): value is ServiceId {
  return SERVICE_OPTIONS.some((s) => s.id === value);
}
