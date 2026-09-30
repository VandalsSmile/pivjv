export const SPECIALS_MONTH = "October";
export const SPECIALS_YEAR = 2026;

export const MONTHLY_SPECIALS = [
  {
    name: "The Go-Mode Reset",
    category: "Health & Wellness Special",
    discount: "$50 OFF",
    price: 160,
    regularPrice: 210,
    savingsLabel: "Save $50",
    tagline: "Myers' Cocktail + Taurine",
    description:
      "October is when schedules start filling up and the holiday rush begins creeping in. Instead of waiting until you feel completely depleted, make recovery part of your routine now. The Myers' Cocktail paired with Taurine for an energy boost supports hydration, normal energy metabolism, muscle and nerve function, and overall replenishment—all while giving you an opportunity to slow down and recharge.",
    includes: [
      {
        name: "Myers' Cocktail IV",
        note: "Classic vitamin & mineral blend for overall wellness",
        regularPrice: "$180",
      },
      {
        name: "Taurine Add-On",
        note: "Amino acid for an energy boost",
        regularPrice: "$30",
      },
    ],
    benefits: [
      "Hydration & normal energy metabolism",
      "Muscle & nerve function support",
      "Overall replenishment",
    ],
    addOns: [
      {
        name: "B-Complex Injection",
        detail:
          "A balanced blend of B vitamins for sustained energy, nerve function, and healthy brain function.",
        price: "$35",
      },
      {
        name: "CoQ10 Injection",
        detail: "Energy production, antioxidant defense, and heart health.",
        price: "$35",
      },
      {
        name: "NAD+ 100mg Injection",
        detail:
          "Promote longevity, focus, cellular repair, mood balance, energy, metabolic support, and addiction recovery.",
        price: "$75",
      },
    ],
    bestFor:
      "Busy professionals, parents, and anyone heading into a packed fall and holiday season who wants to stay ahead of feeling depleted and make recovery part of their routine.",
    theme: {
      bar: "bg-accent",
      badge: "bg-accent/10 text-accent-dark",
      accentText: "text-accent-dark",
      box: "bg-accent/5 border-accent/15",
      button: "bg-accent hover:bg-accent-dark text-white",
    },
  },
  {
    name: "Rested & Radiant",
    category: "Beauty & Aging Special",
    discount: "$40 OFF",
    price: 190,
    regularPrice: 230,
    savingsLabel: "Save $40",
    tagline: "Glow IV + Restoration Amplifier",
    description:
      "Late nights, packed schedules, changing routines, and everyday stress can leave you feeling—and looking—less refreshed. Rested & Radiant makes October about supporting your glow from the inside while giving yourself something increasingly hard to find this time of year: intentional time to recharge. Pair the Glow IV with the Restoration Amplifier for a beauty and healthy-aging special centered around hydration, antioxidant support, replenishment, and maintaining a refreshed appearance as the busy season begins.",
    includes: [
      {
        name: "The Glow IV",
        note: "Beauty & healthy-aging blend for skin, hair & nails",
        regularPrice: "$180",
      },
      {
        name: "Restoration Amplifier",
        note: "Antioxidant support & replenishment",
        regularPrice: "$50",
      },
    ],
    benefits: [
      "Hydration & antioxidant support",
      "Replenishment from the inside out",
      "A refreshed appearance for the busy season",
    ],
    addOns: [
      {
        name: "Biotin Injection",
        detail:
          "Promotes healthy hair growth, enhances skin radiance, and strengthens nails.",
        price: "$30",
      },
      {
        name: "Glutathione Injection",
        detail:
          "A master antioxidant that fights free radicals, promotes cell turnover, and brightens skin.",
        price: "$35",
      },
      {
        name: "NAD+ 100mg Injection",
        detail:
          "Promote longevity, focus, cellular repair, mood balance, energy, metabolic support, and addiction recovery.",
        price: "$75",
      },
    ],
    bestFor:
      "Anyone feeling less refreshed from late nights, packed schedules, and everyday stress who wants intentional time to recharge and support their glow as the busy season begins.",
    theme: {
      bar: "bg-pink",
      badge: "bg-pink/10 text-pink-dark",
      accentText: "text-pink-dark",
      box: "bg-pink/5 border-pink/15",
      button: "bg-pink hover:bg-pink-dark text-white",
    },
  },
];
