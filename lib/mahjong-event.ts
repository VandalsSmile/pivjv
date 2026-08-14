// Mahjong Night at Prime IV Jones Valley — single source of truth for the
// event funnel page (/mahjong-night). Update this file only; the page, form,
// metadata, and schema all read from here.

import { PRICING } from "@/lib/constants";

export const MAHJONG_EVENT = {
  name: "Mahjong Night at Prime IV Jones Valley",

  /**
   * Calendar date. Set BOTH when the date is locked in:
   *   isoDate:   "2026-09-17"        (used for Event structured data)
   *   dateLabel: "Thursday, Sept 17" (used everywhere on the page)
   * Leave them null and the page automatically reads "Date announced soon".
   */
  isoDate: null as string | null,
  dateLabel: null as string | null,

  /** Display + machine-readable times. */
  startTime: "5:30 PM",
  endTime: "7:30 PM",
  timeLabel: "5:30 – 7:30 PM",
  startTime24: "17:30",
  endTime24: "19:30",

  /** Hard seat cap — the entire scarcity engine of this funnel. */
  seats: 24,

  /** All-in ticket price. Includes the Amplifier IV drip, food, and raffle entry. */
  ticketPrice: 75,

  /** One-time telehealth screening for first-time clients (state requirement). */
  screeningFee: PRICING.medicalClearance,

  drip: {
    name: "Amplifier IV",
    description:
      "A high-impact hydration and vitamin blend built for energy, focus, and recovery — delivered right at your seat while you play.",
  },

  raffle: {
    prize: "a brand-new Mahjong set",
    detail:
      "Every confirmed RSVP is automatically entered. We draw the winner live before the last hand of the night.",
  },
} as const;

/** Human-readable date, safe to render before the date is confirmed. */
export const EVENT_DATE_LABEL =
  MAHJONG_EVENT.dateLabel ?? "Date announced soon";

/** True once a real calendar date has been set above. */
export const HAS_EVENT_DATE = Boolean(
  MAHJONG_EVENT.isoDate && MAHJONG_EVENT.dateLabel,
);

/** e.g. "Thursday, Sept 17 · 5:30 – 7:30 PM" */
export const EVENT_WHEN_LABEL = `${EVENT_DATE_LABEL} · ${MAHJONG_EVENT.timeLabel}`;

export const WHATS_INCLUDED = [
  {
    icon: "Droplets",
    title: `${MAHJONG_EVENT.drip.name} Therapy Drip`,
    description: MAHJONG_EVENT.drip.description,
  },
  {
    icon: "Stethoscope",
    title: "Nurses On Hand All Night",
    description:
      "Our licensed nurses place and monitor every IV right there in the lounge, so you never leave the table or miss a turn.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Charcuterie, Drinks & Snacks",
    description:
      "A full charcuterie spread, refreshing drinks, and snacks throughout the night. Come hungry — it is included.",
  },
  {
    icon: "Gift",
    title: `Raffle Entry to Win ${MAHJONG_EVENT.raffle.prize}`,
    description: MAHJONG_EVENT.raffle.detail,
  },
  {
    icon: "Users",
    title: "A Table Full of Good Company",
    description: `Only ${MAHJONG_EVENT.seats} people are in the room. Bring a friend, or come solo and meet your next regular foursome.`,
  },
  {
    icon: "Armchair",
    title: "The VIP Lounge, All Yours",
    description:
      "Heated massage chairs, warm towels, and our spa-like lounge closed to the public for the evening.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    title: "Send Your RSVP",
    description: `Fill out the form below. It takes under a minute and holds your place in line for one of the ${MAHJONG_EVENT.seats} seats.`,
  },
  {
    title: "Wait for Your Confirmation",
    description:
      "We review RSVPs in the order they arrive and reach out to confirm. Your seat is not reserved until you hear back from us — please watch for our call, text, or email.",
  },
  {
    title: "Play, Drip & Win",
    description: `Arrive at ${MAHJONG_EVENT.startTime}, get settled with your ${MAHJONG_EVENT.drip.name} drip, eat well, play mahjong, and stick around for the raffle draw.`,
  },
] as const;

export const EVENT_FAQS = [
  {
    question: `What does the $${MAHJONG_EVENT.ticketPrice} cover?`,
    answer: `Everything for the evening: your ${MAHJONG_EVENT.drip.name} therapy drip administered by one of our nurses, the charcuterie board, drinks and snacks, mahjong at the table, and your entry into the raffle for ${MAHJONG_EVENT.raffle.prize}. It is one flat $${MAHJONG_EVENT.ticketPrice} for the whole night.`,
  },
  {
    question: "Do I need to pay the $25 telehealth screening?",
    answer: `Only if this is your first time receiving IV therapy with us. Alabama requires a one-time $${MAHJONG_EVENT.screeningFee} telehealth medical screening before your first infusion, and we will help you get it done before the event so you can walk in and start playing. If you are already a Prime IV client and have completed it, there is nothing extra to pay.`,
  },
  {
    question: "Is my seat reserved as soon as I submit the form?",
    answer: `Not quite — and this is the important part. There are only ${MAHJONG_EVENT.seats} seats and we fill them strictly first to RSVP, first served. Submitting the form puts you in line; your seat is confirmed only once our team reaches out to confirm it with you. If we fill up before your RSVP, we will let you know and offer you first access to the next event.`,
  },
  {
    question: "Do I need to know how to play mahjong?",
    answer:
      "Not at all. We will have people at the table who know the game and are happy to teach. Plenty of guests come having never played — you will pick it up within a hand or two, and honestly, the drip and the charcuterie do not require any skill whatsoever.",
  },
  {
    question: "Can I bring a friend?",
    answer: `Yes, and we encourage it — mahjong is better with a full table. Just have your friend submit their own RSVP so we can confirm both seats. Each seat counts toward the ${MAHJONG_EVENT.seats}-person cap, so send them the form sooner rather than later.`,
  },
  {
    question: `How long does the ${MAHJONG_EVENT.drip.name} drip take?`,
    answer: `A typical drip runs about 30 to 45 minutes, which fits comfortably inside the ${MAHJONG_EVENT.timeLabel} window. Your nurse will get you started shortly after you arrive so you are hydrated, playing, and finished with time left to enjoy the room.`,
  },
  {
    question: "What if I have a medical condition or take medication?",
    answer:
      "Let us know on the RSVP form and our nurses will review it with you. That is exactly what the telehealth screening is for — it makes sure the drip is appropriate and safe for you before the night of the event.",
  },
  {
    question: "Can I use my HSA or FSA card?",
    answer:
      "HSA and FSA cards may be accepted for eligible services. Coverage and reimbursement requirements vary by plan and individual circumstances, so we recommend confirming eligibility with your plan administrator beforehand.",
  },
];
