// Full Treatment Menu data — pricing mirrors the reference menu.

export type Drip = {
  name: string;
  price: string;
  description: string;
  badge?: "Top Seller" | "NEW";
};

export type DripCategory = {
  id: string;
  heading: string;
  subheading: string;
  icon: string;
  drips: Drip[];
};

export const DRIP_CATEGORIES: DripCategory[] = [
  {
    id: "energized",
    heading: "Feel Energized",
    subheading: "Boost Energy & Performance",
    icon: "Zap",
    drips: [
      {
        name: "Revitalizer",
        price: "$175",
        badge: "Top Seller",
        description:
          "Help overcome fatigue and restore natural energy and vitality.",
      },
      {
        name: "Weekend Warrior",
        price: "$175",
        description:
          "Enhance performance, energy, help reduce inflammation, and support lean muscle growth.",
      },
      {
        name: "Jetsetter",
        price: "$175",
        description: "Relieve jet lag, boost energy, and promote relaxation.",
      },
      {
        name: "BrainFuel+",
        price: "$245",
        badge: "NEW",
        description:
          "Boosts mental clarity, focus, and energy while supporting nerve health and cognitive function, with NAD+ for enhanced cellular energy.",
      },
    ],
  },
  {
    id: "stronger",
    heading: "Feel Stronger",
    subheading: "Strengthen Immunity & Wellness",
    icon: "Shield",
    drips: [
      {
        name: "Immunity Armor",
        price: "$210",
        badge: "Top Seller",
        description:
          "Supports your body's defenses to help prevent illness, reduce the duration of colds, and lessen symptoms for faster recovery.",
      },
      {
        name: "Myers' Cocktail",
        price: "$210",
        badge: "Top Seller",
        description:
          "The classic all-in-one for assisting with migraines, fatigue, allergies, GI disorders, fibromyalgia, and overall wellness.",
      },
      {
        name: "Gut Guardian",
        price: "$210",
        badge: "NEW",
        description:
          "Re-balance from the inside out with gut-friendly nutrients that aid digestion, reduce inflammation, and help you feel lighter and more balanced.",
      },
      {
        name: "Clean Slate",
        price: "$245",
        badge: "NEW",
        description:
          "Hit the reset button with micronutrients that support liver health, help reduce oxidative stress, and detoxify from within.",
      },
    ],
  },
  {
    id: "restored",
    heading: "Feel Restored",
    subheading: "Recover & Relieve Stress",
    icon: "Sparkles",
    drips: [
      {
        name: "Calm",
        price: "$175",
        badge: "NEW",
        description:
          "Stress and adrenal support for deep calm, tension relief, and recovery.",
      },
      {
        name: "Hormone Harmony",
        price: "$175",
        badge: "NEW",
        description:
          "Supports PMS, perimenopause, menopause, and andropause by promoting overall hormonal balance, relaxation, and vitality.",
      },
      {
        name: "Pre/Post-Surgical Renewal",
        price: "$210",
        description:
          "Boost healing, help prevent infections, minimize scar tissue, and replenish energy.",
      },
      {
        name: "Resurrection",
        price: "$210",
        description:
          "Alleviate hangover symptoms with hydration relief, headache and nausea support, plus assist liver detoxification.",
      },
    ],
  },
  {
    id: "renewed",
    heading: "Feel Renewed",
    subheading: "Renew Body & Balance",
    icon: "Dna",
    drips: [
      {
        name: "Skinny Drip",
        price: "$175",
        description:
          "Enhance diet and fitness goals by boosting metabolism, suppressing appetite, and increasing energy.",
      },
      {
        name: "Glow",
        price: "$210",
        description:
          "Anti-aging support with wrinkle reduction, collagen boost, clear skin, diminished age spots, and healthy hair and nails.",
      },
      {
        name: "Champion",
        price: "$210",
        badge: "Top Seller",
        description:
          "Ultimate pre/post workout performance drip with tissue repair and cell turnover support.",
      },
    ],
  },
];

export type Injection = {
  name: string;
  price: string;
  description: string;
};

export const INJECTIONS: Injection[] = [
  {
    name: "Amino Acid Blend",
    price: "$35",
    description:
      "Enhances immune function, athletic performance, gastrointestinal health, and fosters circulation and healing.",
  },
  {
    name: "B-6",
    price: "$30",
    description:
      "Relieves muscle pains, lethargy, mood swings, depression, irritability, weakness, nausea, heart palpitations, and seizures, while increasing metabolism and burning fats for energy.",
  },
  {
    name: "B-Complex (B-100)",
    price: "$35",
    description:
      "A balanced culmination of B1, B2, B3, B5, and B6 to provide a well-rounded source of sustained energy. Supports proper nerve function, GI health, and healthy brain function.",
  },
  {
    name: "Biotin",
    price: "$30",
    description:
      "Promotes healthy hair growth, enhances skin radiance, and strengthens nails, minimizing splitting and breakage.",
  },
  {
    name: "CoQ10",
    price: "$35",
    description:
      "A vital antioxidant that reduces oxidative stress in the heart and other tissues, enhances ATP production for increased energy, and supports muscle endurance for longer periods of strenuous activity.",
  },
  {
    name: "Glutathione",
    price: "$35",
    description:
      "A master antioxidant that fights free radicals, promotes cell turnover, boosts immunity, detoxes the liver, and brightens skin while filling in fine lines and wrinkles. Also combats headaches, dizziness, lethargy, and joint pain.",
  },
  {
    name: "L-Arginine",
    price: "$35",
    description:
      "Preserves muscle in individuals on low-calorie diets for weight loss and aids in building lean muscle mass for optimized workout outcomes.",
  },
  {
    name: "L-Carnitine",
    price: "$35",
    description:
      "An amino acid that helps support healthy brain, heart, and muscle function. Can improve circulatory function and increase athletic performance.",
  },
  {
    name: "L-Lysine",
    price: "$30",
    description:
      "An essential amino acid that increases energy, assists in lowering cholesterol, supports healthy tissues and bones, and helps protect against viruses and cold sores.",
  },
  {
    name: "LipoLean",
    price: "$35",
    description:
      "A fat-burning injection featuring a potent mix of vitamins, minerals, and amino acids that aid the body in weight loss efforts, enhanced energy levels, and accelerated metabolism.",
  },
  {
    name: "Magnesium Sulfate",
    price: "$30",
    description:
      "Alleviates muscle cramps, reduces stress and anxiety, improves circulation, mitigates migraine effects, and supports better sleep.",
  },
  {
    name: "Methylcobalamin B-12",
    price: "$30",
    description:
      "Boosts energy, enhances heart and cognitive health, improves mood, aids red blood cell production, promotes healthy skin, hair, and nails, supports bone health, and benefits nerve health.",
  },
  {
    name: "Taurine",
    price: "$30",
    description:
      "Boosts energy, enhances brain function, promotes heart health, and aids in testosterone production.",
  },
  {
    name: "Vitamin C",
    price: "$30",
    description:
      "Crucial for collagen synthesis, it enhances skin health, relieves nerve pain, boosts immunity, speeds wound healing, increases energy, and reduces oxidative stress.",
  },
  {
    name: "Vitamin D",
    price: "$35",
    description:
      '"The Sunshine Vitamin" functions like a hormone essential for overall health. It helps fight diseases, reduces symptoms of depression, and supports weight loss efforts.',
  },
];

export const NAD_INJECTIONS = [
  { dose: "100mg", single: "$99", pack: "$345" },
  { dose: "250mg", single: "$175", pack: "$610" },
];

export type Amplifier = {
  name: string;
  price: string;
  description: string;
};

export const AMPLIFIERS: Amplifier[] = [
  {
    name: "The Alpha",
    price: "$89",
    description: "Antioxidant powerhouse (Alpha Lipoic Acid)",
  },
  {
    name: "The Restoration",
    price: "$89",
    description: "Skin renewal (Glutathione + Biotin)",
  },
  {
    name: "The Awaken",
    price: "$89",
    description: "Instant energy (B-100, B-12, Taurine)",
  },
  {
    name: "The Unwind",
    price: "$89",
    description: "Stress relief (Magnesium, Amino Acid Blend, B-100)",
  },
  {
    name: "Liver Cleanse",
    price: "$89",
    description: "Detox and flush toxins (Glutathione + NAC)",
  },
  {
    name: "The Shield",
    price: "$89",
    description: "Immune defense (Vitamin C, B-6, Amino Acid Blend)",
  },
];

export type PremiumInfusion = {
  name: string;
  badge?: "Top Seller" | "NEW";
  dose: string;
  description: string;
  tiers: { label: string; price: string }[];
};

export const PREMIUM_INFUSIONS: PremiumInfusion[] = [
  {
    name: 'High-Dose Glutathione "Beauty Boost" IV Infusion',
    badge: "Top Seller",
    dose: "2,000mg",
    description:
      "This potent antioxidant helps keep skin youthful, strengthens immunity, and boosts energy for a full-body wellness upgrade.",
    tiers: [
      { label: "1x", price: "$140" },
      { label: "3x", price: "$380" },
      { label: "5x", price: "$595" },
      { label: "10x", price: "$1,100" },
    ],
  },
  {
    name: "High-Dose Vitamin C IV Infusion",
    dose: "12,000mg / 25,000mg",
    description:
      "Support immunity, collagen production, help prevent infection, enhance wound healing.",
    tiers: [
      { label: "12,000mg 1x", price: "$199" },
      { label: "12,000mg 4x", price: "$1,129" },
      { label: "25,000mg 1x", price: "$315" },
      { label: "25,000mg 4x", price: "$1,175" },
    ],
  },
  {
    name: "NAD+ IV Infusion",
    dose: "250mg / 500mg / 750mg / 1,000mg",
    description:
      "Promote longevity, focus, cellular repair, mood balance, support addiction recovery.",
    tiers: [
      { label: "250mg 1x", price: "$299" },
      { label: "500mg 1x", price: "$595" },
      { label: "750mg 1x", price: "$729" },
      { label: "1,000mg 1x", price: "$840" },
      { label: "1,000mg 4x", price: "$3,080" },
    ],
  },
  {
    name: "Niagen IV Infusion",
    badge: "NEW",
    dose: "250mg / 500mg / 1,000mg",
    description:
      "Advanced NAD+ infusion for rapid energy, focus and healthy aging benefits with superior absorption and minimal side effects.",
    tiers: [
      { label: "250mg 1x", price: "$715" },
      { label: "250mg 4x", price: "$2,717" },
      { label: "500mg 1x", price: "$1,070" },
      { label: "500mg 4x", price: "$4,066" },
      { label: "1,000mg 1x", price: "$1,605" },
      { label: "1,000mg 4x", price: "$6,099" },
    ],
  },
];
