// Huntsville IV / Prime IV Hydration & Wellness - Site Constants

export const SITE_CONFIG = {
  name: "Prime IV Hydration & Wellness",
  location: "Huntsville",
  tagline: "Feel Better, Faster — Premium IV Therapy in Huntsville, AL",
  description:
    "Boost your energy, recover faster, support longevity, and optimize your health with doctor-supervised IV hydration therapy—conveniently located in Huntsville, AL.",
  url: "https://www.huntsvilleiv.com",
};

export const CONTACT = {
  phone: "(256) 692-6347",
  phoneClean: "2566926347",
  textToBook: "(256) 993-3095",
  textToBookClean: "2569933095",
  email: "jonesvalley@primeivhydration.com",
  address: {
    street: "2626 Carl T. Jones Drive",
    suite: "Suite B",
    city: "Huntsville",
    state: "AL",
    zip: "35802",
    full: "2626 Carl T. Jones Drive Suite B, Huntsville, AL 35802",
    mapsUrl:
      "https://www.google.com/maps/place/Prime+IV+Hydration+%26+Wellness+-+Huntsville-Jones+Valley/@34.6775269,-86.5522675,882m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88621363143910ed:0xc72bf3e141cf1e70!8m2!3d34.6775225!4d-86.5496926!16s%2Fg%2F11mdztgr4n",
    // Keyless Google Maps embed (no API key / referrer restrictions required)
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Prime%20IV%20Hydration%20%26%20Wellness%202626%20Carl%20T.%20Jones%20Drive%20Suite%20B%20Huntsville%20AL%2035802&z=15&output=embed",
  },
  reviewUrl:
    "https://www.google.com/search?q=prime+iv+huntsville+al&rlz=1C5CHFA_enUS837US837&oq=prime+iv+hunt&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOTINCAMQLhivARjHARiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI0NThqMGo5qAIGsAIB8QXBbRzILmvtGA&sourceid=chrome&ie=UTF-8#lrd=0x88621363143910ed:0xc72bf3e141cf1e70,3,,,,",
};

export const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prime-iv-logo-white-TR9g8OTAtrJhOr4pwdZv4bdUtUgbNH.png";

export const PRICING = {
  introOffer: {
    price: 85,
    regularPrice: 144,
    description: "Your First VIP IV Therapy",
    promoCode: "VIPIVHUNTSVILLEAL",
  },
  medicalClearance: 25,
  /** Standard non-member rate for a primary drip — the baseline pack savings are measured against. */
  nonMemberDrip: 180,
};

/**
 * Pre-purchase IV packs — built for loyal non-members who want membership-level
 * savings without a monthly commitment. Value/savings/per-IV are derived from
 * PRICING.nonMemberDrip so there is one source of truth for the math.
 */
export const IV_PACKS = [
  {
    id: "6-pack",
    name: "6-IV Pack",
    quantity: 6,
    price: 900,
    tagline: "Roughly one IV a month for half a year.",
    badge: null as string | null,
    highlight: false,
  },
  {
    id: "12-pack",
    name: "12-IV Pack",
    quantity: 12,
    price: 1700,
    tagline: "Our lowest possible price per IV — no membership required.",
    badge: "BEST VALUE",
    highlight: true,
  },
];

/** Derived pack economics: value, total savings, and effective per-IV price. */
export function getPackMath(pack: { quantity: number; price: number }) {
  const value = pack.quantity * PRICING.nonMemberDrip;
  const savings = value - pack.price;
  const perIv = Math.round(pack.price / pack.quantity);
  const percentOff = Math.round((savings / value) * 100);
  return { value, savings, perIv, percentOff };
}

// Online booking (Booker) deep links — Prime IV Huntsville (Jones Valley)
export const BOOKING_LINKS = {
  introOffer:
    "https://go.booker.com/location/PrimeIVHuntsvilleJonesValleyAL/detail-summary/4748907",
  nonMember:
    "https://go.booker.com/location/PrimeIVHuntsvilleJonesValleyAL/detail-summary/4757545",
  member:
    "https://go.booker.com/location/PrimeIVHuntsvilleJonesValleyAL/detail-summary/4748948",
  injection:
    "https://go.booker.com/location/PrimeIVHuntsvilleJonesValleyAL/detail-summary/4748886",
};

// Day-by-day location hours (display order matches Google Business Profile)
export const HOURS = {
  days: [
    { day: "Sunday", hours: "10 AM – 5 PM" },
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "10 AM – 7 PM" },
    { day: "Wednesday", hours: "9 AM – 6 PM" },
    { day: "Thursday", hours: "10 AM – 7 PM" },
    { day: "Friday", hours: "9 AM – 6 PM" },
    { day: "Saturday", hours: "9 AM – 5 PM" },
  ],
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/huntsvillejonesvalley",
  instagram: "https://instagram.com/primeivjonesvalley",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "What We Offer",
    href: "#",
    children: [
      { label: "$85 IV Intro Offer", href: "/intro-offer" },
      {
        label: "Keep the Momentum Going",
        href: "/learn-more/keep-the-momentum-going",
        highlight: true,
      },
      { label: "NAD+ & Niagen", href: "/nad-niagen-special", highlight: true },
      { label: "Full Menu", href: "/menu" },
      {
        label: "Medical Weight Loss",
        href: "/medical-weight-loss",
        highlight: true,
      },
      {
        label: "America's Favorite IV",
        href: "/myers-iv-therapy",
        highlight: true,
      },
      { label: "Specials & Promotions", href: "/specials" },
      { label: "Gift Cards", href: "/gift-cards" },
      { label: "Memberships", href: "/memberships" },
      { label: "Multi IV Pack Deals", href: "/iv-packs", highlight: true },
      {
        label: "Corporate & Team Wellness",
        href: "/corporate-team-wellness",
        highlight: true,
      },
      { label: "Mahjong Night Event", href: "/mahjong-night", highlight: true },
      { label: "IV Matcher Quiz", href: "/iv-matcher" },
    ],
  },
  {
    label: "How We Help",
    href: "#",
    children: [
      { label: "Book an Appointment", href: "/book" },
      { label: "Why Prime IV", href: "/#why-primeiv" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Who We Are",
    href: "#",
    children: [
      { label: "About Prime IV Huntsville", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/book#contact" },
    ],
  },
  {
    label: "Learn More",
    href: "#",
    children: [
      { label: "Resource Center", href: "/learn-more" },
      {
        label: "What is IV Therapy?",
        href: "/learn-more/what-is-iv-therapy-complete-guide",
      },
      {
        label: "IV Therapy vs Supplements",
        href: "/learn-more/iv-therapy-vs-oral-supplements",
      },
      {
        label: "IV Therapy for Stress",
        href: "/learn-more/chronic-stress-iv-therapy-recovery",
      },
    ],
  },
];

export const SERVICES = [
  {
    id: "energy",
    title: "Energy & Performance",
    description: "Recharge your body and sharpen your focus.",
    icon: "Zap",
    drips: [
      "NAD+ IV Infusion",
      "Brainstorm Drip",
      "Focus & Clarity Drip",
      "Executive Recovery Drip",
    ],
  },
  {
    id: "recovery",
    title: "Recovery & Hydration",
    description: "Reduce soreness and rehydrate efficiently.",
    icon: "Dumbbell",
    drips: [
      "Myers' Cocktail",
      "The Champion",
      "Athletic Recovery Drip",
      "Hydration Hero Drip",
    ],
  },
  {
    id: "immunity",
    title: "Immunity & Wellness",
    description: "Support your immune system and feel resilient.",
    icon: "Shield",
    drips: [
      "Immunity Armor",
      "Cellular Defense Drip",
      "Wellness Booster Drip",
      "The Revitalizer",
    ],
  },
  {
    id: "beauty",
    title: "Beauty & Anti-Aging",
    description: "Promote healthier skin, hair, and overall vitality.",
    icon: "Sparkles",
    drips: [
      "The Glow",
      "Beauty & Radiance Drip",
      "Longevity Drip",
      "The Skinny Drip",
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle & Travel",
    description: "Recover from travel, late nights, or busy weeks.",
    icon: "Plane",
    drips: [
      "Jet Setter Drip",
      "The After Party",
      "The Weekend Warrior",
      "Reboot Drip",
    ],
  },
  {
    id: "advanced",
    title: "Advanced Therapies",
    description: "Cutting-edge treatments for optimal cellular health.",
    icon: "Dna",
    drips: [
      "Niagen® Therapy",
      "Detox & Recovery Drip",
      "Migraine Relief Drip",
      "Performance & Recovery Drip",
    ],
  },
];

export const MEMBERSHIPS = [
  {
    name: "Select",
    price: 110,
    value: 194,
    features: [
      "1 Primary Drip of your choice",
      "1 B-12 or Lipolean shot",
      "VIP Status & Massage Chair access",
      "50% discount on additional additives",
    ],
    highlight: false,
  },
  {
    name: "Essentials",
    price: 189,
    value: 320,
    features: [
      "ANY Drip of your choice",
      "2 B-12 or Lipolean shots",
      "VIP Status & Massage Chair access",
      "15% OFF additional drips & injections",
      "50% discount on additional additives",
    ],
    highlight: false,
  },
  {
    name: "Transformation",
    price: 359,
    value: 605,
    features: [
      "ANY 2 Drips of your choice",
      "ANY 3 Injections of your choice",
      "VIP Status & Massage Chair access",
      "20% OFF additional drips & injections",
      "50% discount on additional additives",
    ],
    highlight: true,
    badge: "BEST VALUE",
  },
  {
    name: "Enlightenment",
    price: 649,
    valueText: "Ultimate flexibility & savings",
    features: [
      "ANY 4 IV Drips of your choice",
      "ANY 5 Injections of your choice",
      "VIP Status & Massage Chair access",
      "25% OFF additional drips & injections",
      "50% discount on additional additives",
    ],
    highlight: false,
    badge: "PREMIUM",
  },
];

export const BENEFITS = [
  {
    title: "More Energy",
    description: "Say goodbye to brain fog and fatigue.",
    icon: "Zap",
  },
  {
    title: "Faster Recovery",
    description: "Bounce back from workouts, travel, or long weeks.",
    icon: "Droplets",
  },
  {
    title: "Stronger Immunity",
    description: "Support your body when it needs it most.",
    icon: "Shield",
  },
  {
    title: "Hydrated & Refreshed",
    description: "Replenish what your body is missing—fast.",
    icon: "Sparkles",
  },
];

export const WHY_PRIME_IV = [
  "Fast relief from fatigue, dehydration, and burnout",
  "Advanced hydration + vitamin therapy",
  "Designed for performance, recovery, and longevity",
  "Safe, medically supervised treatments",
];

export const TARGET_AUDIENCE = [
  "Professionals needing energy & focus",
  "Fitness enthusiasts seeking faster recovery",
  "Busy parents who can't afford downtime",
  "Anyone looking to feel better—quickly",
];

export const TRUST_SIGNALS = [
  "Licensed medical professionals administer every treatment",
  "High-quality, pharmaceutical-grade ingredients",
  "Clean, comfortable, spa-like environment",
];

export const FAQS = [
  {
    question: "How often should I get IV therapy?",
    answer:
      "Most clients benefit from IV therapy 1-4 times per month, depending on their wellness goals. Our team will help you create a personalized schedule based on your needs, lifestyle, and health objectives.",
  },
  {
    question: "Is IV therapy worth it for busy professionals?",
    answer:
      "Absolutely. IV therapy delivers vitamins, minerals, and hydration directly to your bloodstream, bypassing the digestive system for faster, more efficient absorption. Many professionals find it helps with energy, focus, and recovering from demanding schedules.",
  },
  {
    question: "Can IV therapy help with workouts and recovery?",
    answer:
      "Yes! Our Athletic Recovery and Champion drips are specifically designed to reduce muscle soreness, replenish electrolytes, and speed up recovery after intense workouts or competitions.",
  },
  {
    question: "Do I need to know which drip to choose before I arrive?",
    answer:
      "Not at all. Our wellness team will consult with you about your goals and recommend the best IV therapy for your needs. We're here to guide you every step of the way.",
  },
  {
    question: "How soon will I feel the effects?",
    answer:
      "Many clients report feeling better during or immediately after their session. The full benefits typically develop over 24-48 hours as your body utilizes the nutrients.",
  },
  {
    question: "Is Prime IV Huntsville convenient for nearby areas?",
    answer:
      "Yes! We're conveniently located on Carl T. Jones Drive, easily accessible from Jones Valley, Hampton Cove, Madison, and surrounding Huntsville areas.",
  },
  {
    question: "Can I use my HSA or FSA card to pay for services?",
    answer:
      "HSA and FSA cards may be accepted for eligible services. Coverage and reimbursement requirements vary by plan and individual circumstances. We recommend confirming eligibility with your HSA or FSA plan administrator before receiving treatment.",
  },
];

export const REVIEWS = [
  {
    name: "Christopher Martin",
    initials: "CM",
    date: "2 weeks ago",
    text: "Allison and Ann are amazing, and my experience here was perfect. Walked out feeling awesome.",
  },
  {
    name: "Mary Morgan Newman",
    initials: "MN",
    date: "6 weeks ago",
    text: "When my husband and I came down with food poisoning, Prime IV got us in within 45 min of calling. The entire staff was amazing and got us feeling so much better.",
  },
  {
    name: "Chelsea Beasley",
    initials: "CB",
    date: "8 weeks ago",
    text: "The staff was so knowledgeable, kind and helpful! I felt so good by the time I walked out the door!",
  },
  {
    name: "Cori Daly",
    initials: "CD",
    date: "10 weeks ago",
    text: "Ms Ann & her staff are all wonderful. Very relaxing environment that covers all the bases on making this a pleasant experience. Very accommodating & helpful.",
  },
  {
    name: "Adrian Wilson",
    initials: "AW",
    date: "11 weeks ago",
    text: "My recent visit to Prime IV Hydration & Wellness was hands down one of the most hospitable and well-executed wellness experiences I've had.",
  },
  {
    name: "Tracey Smith",
    initials: "TS",
    date: "12 weeks ago",
    text: "This place and what they do is amazing! I received the Myers infusion and vitamin D3 shot, which only took about 40 minutes. I felt incredible afterward.",
  },
  {
    name: "Jessica Dixon",
    initials: "JD",
    date: "13 weeks ago",
    text: "Hands down the best place to come to get an IV! Great staff and amenities.",
  },
  {
    name: "Jennifer Nichols",
    initials: "JN",
    date: "15 weeks ago",
    text: "Ann and her team at Prime IV are TOP NOTCH! I couldn't wait for them to open here in Huntsville after experiencing them elsewhere.",
  },
  {
    name: "Carrie Tomlin",
    initials: "CT",
    date: "18 weeks ago",
    text: "This was worth every penny plus! The facility is beautiful, calm and relaxing, and pristine. Mrs Ann the owner and the team were wonderful.",
  },
  {
    name: "Kim Worley",
    initials: "KW",
    date: "20 weeks ago",
    text: "The staff is amazing. I went in post back surgery with severe leg cramps going up to my hips and back. The girls helped me with the right mix and within 1 hr I was already feeling better.",
  },
  {
    name: "Mia Pile",
    initials: "MP",
    date: "26 weeks ago",
    text: "I feel human again! Was in terrible pain from an accident and the IV they curated for me made a world of difference!",
  },
  {
    name: "Allison Hill",
    initials: "AH",
    date: "31 weeks ago",
    text: "This place is amazing! From the greeting at the front desk with the wellness water and hot towels by the wonderful staff, every detail was perfect.",
  },
];
