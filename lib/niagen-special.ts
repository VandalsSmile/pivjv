import {
  CONTACT,
  NAD_HOLIDAY_SPECIAL,
  VETERANS_DAY_SPECIAL,
} from "./constants";
import {
  NAD_INJECTIONS,
  NIAGEN_INJECTIONS,
  PREMIUM_INFUSIONS,
} from "./menu-data";
import { absoluteUrl } from "./structured-data";

/** Existing injection request form. No separate lead path. */
export const NIAGEN_INJECTION_BOOKING_PATH =
  "/book?service=injection#booking-form";

export type HolidaySpecialItem = {
  group: "NAD+ injection" | "Niagen injection" | "NAD+ infusion";
  dose: string;
  regular: string;
  sale: string;
};

export function priceToNumber(price: string): number {
  return Number(price.replace(/[^0-9.]/g, ""));
}

export function formatPrice(amount: number): string {
  return Number.isInteger(amount)
    ? `$${amount.toLocaleString("en-US")}`
    : `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

/** Regular menu price string → holiday sale price string. */
export function holidaySalePrice(regular: string): string {
  const amount = priceToNumber(regular);
  const sale =
    Math.round(amount * (100 - NAD_HOLIDAY_SPECIAL.percentOff)) / 100;
  return formatPrice(sale);
}

function nadInfusionSingles() {
  const infusion = PREMIUM_INFUSIONS.find((item) => item.name === "NAD+ Infusions");
  if (!infusion) throw new Error("PREMIUM_INFUSIONS is missing NAD+ Infusions");
  return infusion.tiers
    .filter((tier) => tier.label.endsWith("1x"))
    .map((tier) => ({
      dose: tier.label.replace(/\s*·\s*1x$/, ""),
      price: tier.price,
    }));
}

/** Every priced single item the holiday special covers, from the menu data. */
export function holidaySpecialItems(): HolidaySpecialItem[] {
  return [
    ...NAD_INJECTIONS.map((row) => ({
      group: "NAD+ injection" as const,
      dose: row.dose,
      regular: row.single,
      sale: holidaySalePrice(row.single),
    })),
    ...NIAGEN_INJECTIONS.map((row) => ({
      group: "Niagen injection" as const,
      dose: row.dose,
      regular: row.single,
      sale: holidaySalePrice(row.single),
    })),
    ...nadInfusionSingles().map((row) => ({
      group: "NAD+ infusion" as const,
      dose: row.dose,
      regular: row.price,
      sale: holidaySalePrice(row.price),
    })),
  ];
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

/** True from startsOn through endsOn inclusive, clinic time. */
export function isHolidaySpecialActive(now = new Date()): boolean {
  const today = clinicDateISO(now);
  return (
    today >= NAD_HOLIDAY_SPECIAL.startsOn && today <= NAD_HOLIDAY_SPECIAL.endsOn
  );
}

/** Shown before and during the offer; hidden once endsOn has passed, clinic time. */
export function isVeteransDaySpecialVisible(now = new Date()): boolean {
  return clinicDateISO(now) <= VETERANS_DAY_SPECIAL.endsOn;
}

function dateLabel(iso: string, withYear: boolean): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    ...(withYear ? { year: "numeric" } : {}),
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function holidaySpecialEndLabel(): string {
  return dateLabel(NAD_HOLIDAY_SPECIAL.endsOn, true);
}

/** "November 1 – December 31, 2026" */
export function holidaySpecialRangeLabel(): string {
  return `${dateLabel(NAD_HOLIDAY_SPECIAL.startsOn, false)} – ${holidaySpecialEndLabel()}`;
}

export function holidaySpecialOfferSchema(path: string, now = new Date()) {
  const active = isHolidaySpecialActive(now);
  const items = holidaySpecialItems();
  const prices = items.map((item) =>
    priceToNumber(active ? item.sale : item.regular),
  );
  const offer: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    name: active
      ? `${NAD_HOLIDAY_SPECIAL.label}: ${NAD_HOLIDAY_SPECIAL.percentOff}% off NAD+ and Niagen`
      : "NAD+ and Niagen injections and infusions",
    priceCurrency: "USD",
    lowPrice: String(Math.min(...prices)),
    highPrice: String(Math.max(...prices)),
    offerCount: items.length,
    availability: "https://schema.org/LimitedAvailability",
    url: absoluteUrl(path),
    description: active
      ? `${NAD_HOLIDAY_SPECIAL.percentOff}% off ${NAD_HOLIDAY_SPECIAL.appliesTo}, ${holidaySpecialRangeLabel()}. Call ${CONTACT.phone} to book.`
      : "NAD+ and Niagen injections and NAD+ infusions at standard menu prices.",
  };
  if (active) {
    offer.validFrom = NAD_HOLIDAY_SPECIAL.startsOn;
    offer.priceValidUntil = NAD_HOLIDAY_SPECIAL.endsOn;
  }
  return offer;
}

/** Knowledge-base bullets for the chat. Regular rows stay in the menu sections. */
export function holidaySpecialKnowledgeLines(now = new Date()): string[] {
  const fee =
    "Do not mention the $25 telehealth screening for an injection-only NAD+ or Niagen booking. It does not apply. Still mention that fee for a new client's first IV visit, including an NAD+ or Niagen infusion.";
  if (!isHolidaySpecialActive(now)) {
    const ended = clinicDateISO(now) > NAD_HOLIDAY_SPECIAL.endsOn;
    return [
      ended
        ? `- The ${NAD_HOLIDAY_SPECIAL.label} (${NAD_HOLIDAY_SPECIAL.percentOff}% off NAD+ and Niagen) ended on ${holidaySpecialEndLabel()}. Quote standard menu prices. ${fee}`
        : `- No NAD+ or Niagen discount is running yet. Quote standard menu prices. ${fee}`,
    ];
  }
  const items = holidaySpecialItems().map(
    (item) =>
      `${item.group} ${item.dose} ${item.sale} (reg. ${item.regular})`,
  );
  return [
    `- ${NAD_HOLIDAY_SPECIAL.label} ${NAD_HOLIDAY_SPECIAL.percentOff}% off ${NAD_HOLIDAY_SPECIAL.appliesTo}, ${holidaySpecialRangeLabel()}. No promo code. Tell the guest to call ${CONTACT.phone} to book. NAD+ infusions require a pre-order.`,
    `- Holiday sale prices: ${items.join("; ")}. Niagen infusion IVs are also ${NAD_HOLIDAY_SPECIAL.percentOff}% off; the menu does not list a regular Niagen infusion price, so do not invent one — have the guest call.`,
    `- ${NAD_HOLIDAY_SPECIAL.priceNote} Do not invent a pack price. ${fee}`,
  ];
}
