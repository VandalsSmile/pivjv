// Full Treatment Menu data — pricing mirrors the official Prime IV menu.

/* ------------------------------------------------------------------ */
/* Primary IV Treatments — $99                                         */
/* ------------------------------------------------------------------ */

export type PrimaryTreatment = {
  name: string;
  nutrient: string;
  icon: string;
};

export const PRIMARY_TREATMENT_PRICE = "$99";

export const PRIMARY_TREATMENTS: PrimaryTreatment[] = [
  { name: "Energy Boost", nutrient: "B-12", icon: "Zap" },
  { name: "Muscle Rescue", nutrient: "Amino Acid Blend", icon: "Dumbbell" },
  { name: "Heart Health", nutrient: "B-6", icon: "HeartPulse" },
  { name: "Anti-Inflammation", nutrient: "Magnesium", icon: "Flame" },
];

/* ------------------------------------------------------------------ */
/* Specialty IV Treatments — $150 & $180 tiers                         */
/* ------------------------------------------------------------------ */

export type SpecialtyDrip = {
  name: string;
  price: string;
  memberPrice: string;
  description: string;
};

export type SpecialtyTier = {
  id: string;
  price: string;
  memberPrice: string;
  drips: SpecialtyDrip[];
};

export const SPECIALTY_TIERS: SpecialtyTier[] = [
  {
    id: "tier-150",
    price: "$150",
    memberPrice: "$40",
    drips: [
      {
        name: "The Revitalizer",
        price: "$150",
        memberPrice: "$40",
        description:
          "Reinvigorates your energy and vitality, perfect for overcoming feelings of lethargy and fatigue.",
      },
      {
        name: "The Summit",
        price: "$150",
        memberPrice: "$40",
        description:
          "Combats symptoms of altitude sickness including headaches, dizziness, shortness of breath, and fatigue.",
      },
      {
        name: "The Jetsetter",
        price: "$150",
        memberPrice: "$40",
        description:
          "Relieves symptoms of jet lag, boosts energy, strengthens the immune system, and promotes relaxation.",
      },
      {
        name: "The After-Party",
        price: "$150",
        memberPrice: "$40",
        description:
          "Alleviates hangover symptoms including nausea, headaches, lethargy, and body aches.",
      },
      {
        name: "The Skinny Drip",
        price: "$150",
        memberPrice: "$40",
        description:
          "A nutrient-focused IV designed to complement healthy nutrition, activity and individualized wellness goals - with vitamin B12, amino acids, and our Lipolean injection.",
      },
      {
        name: "The Weekend Warrior",
        price: "$150",
        memberPrice: "$40",
        description:
          "Advances athletic performance, amplifies energy, increases lean muscle mass, and reduces inflammation.",
      },
      {
        name: "The After Burn",
        price: "$150",
        memberPrice: "$40",
        description:
          "Soothes, hydrates, and rejuvenates your skin post-sun exposure, while minimizing inflammation.",
      },
    ],
  },
  {
    id: "tier-180",
    price: "$180",
    memberPrice: "$70",
    drips: [
      {
        name: "The Myers' Cocktail",
        price: "$180",
        memberPrice: "$70",
        description:
          "The ultimate drip for overall health and wellness! Provides relief from migraines, allergies, fatigue, aches and pains, and symptoms of fibromyalgia and gastrointestinal disorders.",
      },
      {
        name: "The Glow",
        price: "$180",
        memberPrice: "$70",
        description:
          "A potent anti-aging drip that reduces wrinkles, boosts collagen, helps treat blemishes and dry skin, diminishes age spots, and promotes healthy hair and nails.",
      },
      {
        name: "The Champion",
        price: "$180",
        memberPrice: "$70",
        description:
          "The ultimate performance enhancer, ideal for pre or post workout. Includes all the benefits of 'The Weekend Warrior' plus aids in tissue repair and cell turnover.",
      },
      {
        name: "The Resurrection",
        price: "$180",
        memberPrice: "$70",
        description:
          "Provides all the benefits of 'The After Party' in addition to liver detoxification properties that help heal and neutralize toxins in the liver.",
      },
      {
        name: "The Immunity Armor",
        price: "$180",
        memberPrice: "$70",
        description:
          "Fortify your immune system with this potent blend, featuring Glutathione, Vitamin C, and Zinc, proven to prevent, shorten, and reduce the severity of colds, flu, and viral infections.",
      },
      {
        name: "Post-Bariatric Replenish",
        price: "$180",
        memberPrice: "$70",
        description:
          "Restore vital nutrients chronically depleted after weight loss surgery, while bolstering immune system strength, promoting healing, and aiding in the prevention of hair loss.",
      },
      {
        name: "Pre/Post-Surgical Renewal",
        price: "$180",
        memberPrice: "$70",
        description:
          "Harnessing vitamins, minerals, and amino acids that help prevent infections, minimize scar tissue formation, accelerate healing, and replenish energy levels.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Treatment Additives — member | non-member                           */
/* ------------------------------------------------------------------ */

export type Additive = {
  name: string;
  member: string;
  nonMember: string;
  description: string;
};

export const ADDITIVES: Additive[] = [
  {
    name: "Acetylcysteine",
    member: "$15",
    nonMember: "$30",
    description:
      "Supports liver detoxification and function, aids respiratory health, and acts as an antioxidant that protects against oxidative damage.",
  },
  {
    name: "Amino Acid Blend",
    member: "$15",
    nonMember: "$30",
    description:
      "Enhances immune function, athletic performance, gastrointestinal health, and fosters circulation and healing.",
  },
  {
    name: "B-5",
    member: "$15",
    nonMember: "$30",
    description:
      "Improves memory, concentration, and cognitive function, boosts energy, aids in nutrient metabolism, and optimizes oxygen utilization.",
  },
  {
    name: "B-6",
    member: "$15",
    nonMember: "$30",
    description:
      "Relieves muscle pains, lethargy, mood swings, depression, irritability, weakness, nausea, heart palpitations, and seizures, while increasing metabolism and burning fats for energy.",
  },
  {
    name: "Methylcobalamin B-12",
    member: "$15",
    nonMember: "$30",
    description:
      "Boosts energy, enhances heart and cognitive health, improves mood, aids red blood cell production, promotes healthy skin, hair, and nails, supports bone health, and benefits nerve health and homocysteine metabolism.",
  },
  {
    name: "B-Complex (B-100)",
    member: "$15",
    nonMember: "$30",
    description:
      "A balanced culmination of B1, B2, B3, B5, and B6 to provide a well rounded source of sustained energy. Supports proper nerve function, GI health, and healthy brain function.",
  },
  {
    name: "Biotin",
    member: "$15",
    nonMember: "$30",
    description:
      "Promotes healthy hair growth, enhances skin radiance, and strengthens nails, minimizing splitting and breakage.",
  },
  {
    name: "Calcium",
    member: "$15",
    nonMember: "$30",
    description:
      "Vital for bone strength and health, promotes blood pressure regulation, and is essential for muscle function.",
  },
  {
    name: "Glutathione",
    member: "$35",
    nonMember: "$45",
    description:
      "A master antioxidant that fights free radicals, promotes cell turnover, boosts immunity, detoxes the liver, and brightens skin while filling in fine lines and wrinkles. It also combats headaches, dizziness, lethargy, joint pain, and other symptoms.",
  },
  {
    name: "L-Arginine",
    member: "$15",
    nonMember: "$35",
    description:
      "Preserves muscle in individuals on low-calorie diets for weight loss and aids in building lean muscle mass for optimized workout outcomes.",
  },
  {
    name: "L-Carnitine",
    member: "$15",
    nonMember: "$30",
    description:
      "An amino acid that helps support healthy brain, heart, and muscle function. Can improve circulatory function and increase athletic performance.",
  },
  {
    name: "L-Lysine",
    member: "$15",
    nonMember: "$30",
    description:
      "An essential amino acid that increases energy, assists in lowering cholesterol, supports healthy tissues and bones, and helps protect against viruses and cold sores.",
  },
  {
    name: "Magnesium",
    member: "$15",
    nonMember: "$35",
    description:
      "Alleviates muscle cramps, reduces stress and anxiety, improves circulation, mitigates migraine effects, and supports better sleep.",
  },
  {
    name: "Taurine",
    member: "$15",
    nonMember: "$30",
    description:
      "Boosts energy, enhances brain function, promotes heart health, and aids in testosterone production.",
  },
  {
    name: "Toradol",
    member: "$30",
    nonMember: "$30",
    description:
      "Non-steroidal anti-inflammatory medication for relieving aches, pains, and headaches.",
  },
  {
    name: "Vitamin C",
    member: "$15",
    nonMember: "$30",
    description:
      "Crucial for collagen synthesis, it enhances skin health, relieves nerve pain, boosts immunity, speeds wound healing, increases energy, and reduces oxidative stress.",
  },
  {
    name: "Zinc",
    member: "$15",
    nonMember: "$30",
    description:
      "Regulates immune function, improves memory, supports gastrointestinal health, and promotes wound healing.",
  },
  {
    name: "Zofran",
    member: "$30",
    nonMember: "$30",
    description:
      "Quickly relieves nausea and vomiting associated with chemotherapy, radiation therapy, surgery, gastroenteritis, motion sickness, and hangovers.",
  },
];

/* ------------------------------------------------------------------ */
/* Injections                                                          */
/* ------------------------------------------------------------------ */

export type Injection = {
  name: string;
  price: string;
  description: string;
};

export const INJECTIONS: Injection[] = [
  {
    name: "Alpha Lipoic Acid (ALA)",
    price: "$35",
    description:
      "Lower blood sugar, support weight loss, reduce nerve pain & oxidative stress.",
  },
  {
    name: "Amino Acid Blend",
    price: "$35",
    description:
      "Enhances immune function, athletic performance, gastrointestinal health, and fosters circulation and healing.",
  },
  {
    name: "B-5",
    price: "$30",
    description:
      "Improve cognitive function, boost energy, optimize nutrient metabolism & oxygen utilization.",
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
      "A balanced culmination of B1, B2, B3, B5, and B6 to provide a well rounded source of sustained energy. Supports proper nerve function, GI health, and healthy brain function.",
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
      "A vital antioxidant that reduces oxidative stress, boosts energy through ATP production, and supports muscle endurance for longer strenuous activity.",
  },
  {
    name: "Glutathione",
    price: "$35",
    description:
      "A master antioxidant that fights free radicals, boosts immunity, detoxes the liver, promotes cell turnover, brightens skin, and reduces fine lines, fatigue, headaches, and joint pain.",
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
    name: "L-Glutamine",
    price: "$35",
    description:
      "Supports gut health by protecting the intestinal lining, aiding digestion, and promoting recovery and repair.",
  },
  {
    name: "L-Lysine",
    price: "$30",
    description:
      "An essential amino acid that increases energy, assists in lowering cholesterol, supports healthy tissues and bones, and helps protect against viruses and cold sores.",
  },
  {
    name: "Lipolean",
    price: "$35",
    description:
      "A provider-guided injection option that may be included as part of an individualized wellness or weight-management plan.",
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
      "Boosts energy, supports heart, brain, and nerve health, improves mood, aids red blood cell production, and promotes healthy skin, hair, nails, and bones.",
  },
  {
    name: "Mineral Blend",
    price: "$35",
    description:
      "Blend of minerals that can boost the body's immune system, neurological health, and metabolic activities.",
  },
  {
    name: "Taurine",
    price: "$30",
    description:
      "Boosts energy, enhances brain function, promotes heart health, and aids in testosterone production.",
  },
  {
    name: "Tri-Immune",
    price: "$35",
    description:
      "Powerful blend of antioxidants and minerals including Vitamin C, Zinc, and Glutathione that can provide a quick boost to the immune system.",
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

/* ------------------------------------------------------------------ */
/* NAD+ & Niagen® Injections                                           */
/* ------------------------------------------------------------------ */

export type DoseRow = {
  dose: string;
  single: string;
  pack: string;
};

export const NAD_INJECTIONS: DoseRow[] = [
  { dose: "100mg", single: "$75", pack: "$260" },
  { dose: "250mg", single: "$149", pack: "$520" },
];

export const NIAGEN_INJECTIONS: DoseRow[] = [
  { dose: "50mg", single: "$150", pack: "$525" },
  { dose: "100mg", single: "$250", pack: "$899" },
];

/* ------------------------------------------------------------------ */
/* Injection Packages                                                  */
/* ------------------------------------------------------------------ */

export type InjectionPackage = {
  count: string;
  price: string;
};

export const INJECTION_PACKAGES: InjectionPackage[] = [
  { count: "Any 12 Injections", price: "$285" },
  { count: "Any 8 Injections", price: "$240" },
  { count: "Any 4 Injections", price: "$130" },
];

/* ------------------------------------------------------------------ */
/* Find the Right Injection for Your Needs                             */
/* ------------------------------------------------------------------ */

export type InjectionGuide = {
  goal: string;
  options: string;
};

export const INJECTION_GUIDE: InjectionGuide[] = [
  {
    goal: "Improve Sleep",
    options: "Magnesium, Vitamin D, Mineral Blend, NAD+, Niagen®",
  },
  {
    goal: "Boost Energy",
    options:
      "Amino Acid Blend, B-5, B-12, B-Complex, CoQ10, L-Lysine, Lipolean, Taurine, Vitamin C, NAD+, Niagen®",
  },
  {
    goal: "Support Weight Loss",
    options:
      "ALA, Amino Acid Blend, B-12, B-5, Lipolean, Mineral Blend, Vitamin D",
  },
  {
    goal: "Healthier Hair, Skin and Nails",
    options: "B-12, Biotin, Glutathione, Tri-Immune, Vitamin C",
  },
  {
    goal: "Stronger Immune System",
    options:
      "Amino Acid Blend, B-6, Glutathione, L-Lysine, Mineral Blend, Tri-Immune, Vitamin C",
  },
  {
    goal: "Powerhouse Antioxidants",
    options: "ALA, CoQ10, Glutathione, Tri-Immune, Vitamin C",
  },
  {
    goal: "Enhance Athletic Performance & Recovery",
    options:
      "Amino Acid Blend, B-6, CoQ10, Glutathione, L-Arginine, L-Carnitine, Lipolean, Mineral Blend, NAD+, Niagen®",
  },
  {
    goal: "Cognitive Clarity & Focus",
    options: "B-5, B-12, B-Complex, L-Carnitine, Taurine, NAD+, Niagen®",
  },
];

/* ------------------------------------------------------------------ */
/* High-Dose & NAD+ Infusions                                          */
/* ------------------------------------------------------------------ */

export type PremiumInfusion = {
  name: string;
  note?: string;
  description: string;
  tiers: { label: string; price: string }[];
};

export const PREMIUM_INFUSIONS: PremiumInfusion[] = [
  {
    name: "High-Dose Vitamin C Infusions",
    note: "G6PD test needed for 25,000mg",
    description:
      "Administered intravenously, high-dose Vitamin C optimizes immune function, alleviates chronic disease symptoms, diminishes fine lines, wrinkles, and scars, promotes youthful skin through enhanced cell turnover, aids in managing nerve pain, prevents infections, accelerates wound healing, boosts energy levels, and reduces oxidative stress in the body.",
    tiers: [
      { label: "12,000mg · 1x", price: "$180" },
      { label: "12,000mg · 5x", price: "$675" },
      { label: "25,000mg · 1x", price: "$270" },
      { label: "25,000mg · 5x", price: "$999" },
    ],
  },
  {
    name: "Glutathione 'Beauty Boost' Infusions",
    description:
      "As we enter our 40s, our bodies' natural production of glutathione diminishes. High-dose glutathione is a comprehensive wellness upgrade! This potent antioxidant helps keep your skin looking youthful, boosts immunity, and contributes to increased energy levels.",
    tiers: [
      { label: "2,000mg · 1x", price: "$120" },
      { label: "2,000mg · 10x", price: "$950" },
    ],
  },
  {
    name: "NAD+ Infusions",
    note: "Pre-order required",
    description:
      "NAD+ promotes longevity, sharpens focus, supports cellular repair and mood balance, and aids in addiction recovery for whole-body cellular rejuvenation.",
    tiers: [
      { label: "500mg · 1x", price: "$499" },
      { label: "500mg · 4x", price: "$1,920" },
      { label: "1,000mg · 1x", price: "$720" },
      { label: "1,000mg · 4x", price: "$2,640" },
    ],
  },
];
