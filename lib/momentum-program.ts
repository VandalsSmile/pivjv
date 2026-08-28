// "Keep the Momentum Going" — new-guest 3-visit discount program.
//
// This is the SINGLE SOURCE OF TRUTH for the program. The physical card handed
// to guests at the end of their intro visit, the on-site HTML card, the
// announcement article, and the exit-intent offer all read from here.
//
// Important copy rules agreed with the client:
//   • Visits 2 and 3 are expressed as PERCENTAGES ONLY — never publish dollar
//     math like "20% off = $144", because eligible drips have different base
//     prices.
//   • There is NO promo code for visits 2 and 3. The card itself is the
//     mechanism; staff hand-write the use-by dates on it.

import { CONTACT, PRICING } from "./constants";

export const MOMENTUM_PROGRAM = {
  name: "Keep the Momentum Going",
  tagline: "Three visits. Three reasons to keep feeling this good.",
  description:
    "One IV feels great. A few in a row is where the real change happens. Your card keeps the savings coming through your first three visits — then you choose the path that fits your life.",

  steps: [
    {
      number: 1,
      label: "First Visit",
      /** Rendered as the headline value on the card. */
      value: `$${PRICING.introOffer.price}`,
      valueNote: "New Client Special",
      window: null as string | null,
      description:
        "Your full intro IV therapy experience — wellness consult, a full-size primary drip of your choice, and time in a VIP massage chair.",
      accent: "navy" as const,
    },
    {
      number: 2,
      label: "Second Visit",
      value: "20% OFF",
      valueNote: null as string | null,
      window: "Complete within 60 days",
      description:
        "Come back within 60 days of your first visit and take 20% off any eligible regular-price IV. This is where most guests start noticing the difference stick.",
      accent: "orange" as const,
    },
    {
      number: 3,
      label: "Third Visit",
      value: "10% OFF",
      valueNote: null as string | null,
      window: "Complete within 45 days of visit 2",
      description:
        "Lock in the habit with 10% off any eligible regular-price IV within 45 days of your second visit.",
      accent: "navy" as const,
    },
  ],

  /** What guests graduate into after visit 3. */
  nextSteps: [
    {
      title: "Membership",
      description:
        "The best per-drip value if you come in monthly. Plans start at $110 with discounts on everything else.",
      href: "/memberships",
      cta: "Compare memberships",
    },
    {
      title: "Prepaid IV Pack",
      description:
        "Membership-level savings without a monthly commitment. Buy 6 or 12 drips up front and use them whenever.",
      href: "/iv-packs",
      cta: "See IV pack pricing",
    },
    {
      title: "Individual Visits",
      description:
        "No commitment at all. Book whenever you need a reset — you'll always be a familiar face here.",
      href: "/menu",
      cta: "Browse the full menu",
    },
  ],

  finePrintHeading: "The fine print",
  finePrint: [
    "Eligible regular-price IVs only.",
    "Completed visits required — each step unlocks the next.",
    "One use per guest per step.",
    "Cannot be combined with other offers, specials, or membership pricing.",
    "No cash value. Non-transferable.",
  ],
} as const;

export const MOMENTUM_FAQS = [
  {
    question: "What is the Keep the Momentum Going program?",
    answer: `It's a three-visit discount card for new guests at Prime IV Hydration & Wellness Jones Valley. Your first visit is our $${PRICING.introOffer.price} new client special, your second visit is 20% off, and your third visit is 10% off. After that you choose whichever option fits best — a membership, a prepaid IV pack, or individual visits.`,
  },
  {
    question: "Do I need a promo code for the second and third visits?",
    answer:
      "No. There is no code to remember. We hand you a physical card at the end of your first visit and write your use-by dates on it, so all you have to do is bring the card with you.",
  },
  {
    question: "How long do I have to use each discount?",
    answer:
      "Your second visit must be completed within 60 days of your first visit, and your third visit within 45 days of your second visit. Those windows exist because consistency is what actually makes IV therapy work — spacing your visits too far apart means starting over.",
  },
  {
    question: "How much is 20% off?",
    answer:
      "It depends on which IV you choose, because our drips have different base prices. The discount applies to whatever eligible regular-price IV you pick, so you get to decide where the savings go — a bigger drip for less, or a familiar favorite at a discount.",
  },
  {
    question: "Can I combine this with a monthly special or my membership?",
    answer:
      "No. The card discounts apply to eligible regular-price IVs and cannot be stacked with monthly specials, other promotions, or membership pricing. Our team will always help you take whichever discount saves you the most on that visit.",
  },
  {
    question: "What if I lose my card?",
    answer: `Just give us a call at ${CONTACT.phone}. We keep your visit history in your guest profile, so we can confirm where you are in the program and issue a replacement card.`,
  },
  {
    question: "What happens after my third visit?",
    answer:
      "You pick what fits. Most guests who come in monthly move to a membership for the lowest per-drip price. If you'd rather not commit to a subscription, a prepaid 6- or 12-IV pack gets you similar savings with drips that never expire. And individual visits are always welcome.",
  },
];
