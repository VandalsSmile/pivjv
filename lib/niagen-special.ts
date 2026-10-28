import { CONTACT, NIAGEN_50MG_SPECIAL } from "./constants";
import { NIAGEN_INJECTIONS } from "./menu-data";
import { absoluteUrl } from "./structured-data";

/** Existing injection request form. No separate lead path. */
export const NIAGEN_INJECTION_BOOKING_PATH =
  "/book?service=injection#booking-form";

export function niagen50mgStandard() {
  const row = NIAGEN_INJECTIONS.find(
    (item) => item.dose === NIAGEN_50MG_SPECIAL.dose,
  );
  if (!row) {
    throw new Error(
      `NIAGEN_INJECTIONS is missing ${NIAGEN_50MG_SPECIAL.dose}`,
    );
  }
  return row;
}

/** Clinic calendar date, YYYY-MM-DD, America/Chicago. */
export function clinicDateISO(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** True through endsOn inclusive. A past endsOn hides the special on the next build. */
export function isNiagen50SpecialActive(now = new Date()): boolean {
  return clinicDateISO(now) <= NIAGEN_50MG_SPECIAL.endsOn;
}

export function niagenSpecialEndLabel(): string {
  const [year, month, day] = NIAGEN_50MG_SPECIAL.endsOn.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function niagen50OfferSchema(path: string, now = new Date()) {
  const active = isNiagen50SpecialActive(now);
  const standard = niagen50mgStandard();
  const offer: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: active
      ? `${NIAGEN_50MG_SPECIAL.label}: 50mg Niagen injection`
      : "50mg Niagen injection",
    price: active
      ? String(NIAGEN_50MG_SPECIAL.price)
      : standard.single.replace(/[^0-9.]/g, ""),
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    url: absoluteUrl(path),
    description: active
      ? `${NIAGEN_50MG_SPECIAL.label} through ${niagenSpecialEndLabel()} for one 50mg Niagen injection at ${CONTACT.phone}. Standard single is ${standard.single}. ${NIAGEN_50MG_SPECIAL.packNote}`
      : `One 50mg Niagen injection at the standard menu price. Standard 4-pack is ${standard.pack}.`,
  };
  if (active) offer.priceValidUntil = NIAGEN_50MG_SPECIAL.endsOn;
  return offer;
}

/** One knowledge-base bullet for the 50mg row. 100mg stays on the menu table. */
export function niagen50KnowledgeLine(now = new Date()): string {
  const standard = niagen50mgStandard();
  const pack = `${NIAGEN_50MG_SPECIAL.packNote} Do not invent a pack price.`;
  const fee =
    "Do not mention the $25 telehealth screening for an injection-only Niagen booking. It does not apply. Still mention that fee for IV intro visits.";
  if (!isNiagen50SpecialActive(now)) {
    return `- Niagen injection ${standard.dose}: single ${standard.single}, pack ${standard.pack}. The November 2026 special ended on ${niagenSpecialEndLabel()}. Quote the standard single price. ${pack} ${fee}`;
  }
  return `- Niagen injection ${standard.dose}: ${NIAGEN_50MG_SPECIAL.label} $${NIAGEN_50MG_SPECIAL.price} for a single injection through ${niagenSpecialEndLabel()} (standard single ${standard.single}). Quote $${NIAGEN_50MG_SPECIAL.price} and tell the guest to call ${CONTACT.phone} to book. ${pack} Standard 4-pack on the menu is ${standard.pack}. ${fee}`;
}
