// Huntsville IV / Prime IV Hydration & Wellness - Site Constants

export const SITE_CONFIG = {
  name: "Prime IV Hydration & Wellness",
  location: "Huntsville",
  tagline: "Feel Better, Faster — Premium IV Therapy in Huntsville, AL",
  description:
    "Boost your energy, recover faster, support longevity, and optimize your health with doctor-supervised IV hydration therapy—conveniently located in Huntsville, AL.",
  url: "https://huntsvilleiv.com",
};

export const CONTACT = {
  phone: "(256) 692-6347",
  phoneClean: "2566926347",
  email: "jonesvalley@primeivhydration.com",
  address: {
    street: "2626 Carl T. Jones Drive",
    suite: "Suite B",
    city: "Huntsville",
    state: "AL",
    zip: "35802",
    full: "2626 Carl T. Jones Drive Suite B, Huntsville, AL 35802",
  },
};

export const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prime-iv-logo-white-TR9g8OTAtrJhOr4pwdZv4bdUtUgbNH.png";

export const PRICING = {
  introOffer: {
    price: 85,
    regularPrice: 164,
    description: "Your First VIP IV Therapy",
  },
  medicalClearance: 25,
};

export const HOURS = {
  weekdays: "9:00 AM - 6:00 PM",
  saturday: "10:00 AM - 4:00 PM",
  sunday: "Closed",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/primeivhuntsville",
  instagram: "https://instagram.com/primeivhuntsville",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "What We Offer",
    href: "#",
    children: [
      { label: "$85 IV Intro Offer", href: "/intro-offer" },
      { label: "NAD+ & Niagen", href: "/nad-niagen-special" },
      { label: "Full Menu", href: "/menu" },
      { label: "Medical Weight Loss", href: "/medical-weight-loss" },
      { label: "America's Favorite IV", href: "/myers-iv-therapy" },
      { label: "Specials & Promotions", href: "/specials" },
      { label: "Memberships", href: "/memberships" },
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
      { label: "Contact Us", href: "/contact" },
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
];

export const REVIEWS = [
  {
    name: "Sarah Mitchell",
    initials: "SM",
    date: "2 weeks ago",
    text: "Absolutely love this place! The staff is incredibly friendly and knowledgeable. I got the Myers' Cocktail IV and felt amazing afterwards. The spa-like atmosphere made me feel so relaxed. Already booked my next appointment!",
  },
  {
    name: "James Thompson",
    initials: "JT",
    date: "1 month ago",
    text: "First time trying IV therapy and Prime IV Huntsville exceeded all my expectations. The zero-gravity massage chairs are a game changer. Staff walked me through everything and made sure I was comfortable the entire time. Highly recommend!",
  },
  {
    name: "Jennifer Walsh",
    initials: "JW",
    date: "3 weeks ago",
    text: "I've been coming here monthly for the NAD+ treatments and the difference in my energy and mental clarity is remarkable. The team remembers my name and preferences every visit. This is what premium wellness should feel like.",
  },
  {
    name: "David Chen",
    initials: "DC",
    date: "1 month ago",
    text: "As someone who travels frequently for work, jet lag was killing me. A colleague recommended Prime IV and now it's my secret weapon. Quick, professional service and I'm back to 100% in no time. The Huntsville location is spotless and welcoming.",
  },
  {
    name: "Rachel Summers",
    initials: "RS",
    date: "2 weeks ago",
    text: "Came in feeling run down after a tough week and left feeling like a new person. The immunity boost IV was exactly what I needed. Beautiful facility, kind staff, and the results speak for themselves. 5 stars isn't enough!",
  },
  {
    name: "Michael Patterson",
    initials: "MP",
    date: "3 weeks ago",
    text: "My wife and I started coming here together and it's become our wellness ritual. The membership is such a great value and the team treats us like family. If you're on the fence about IV therapy, just try it once here - you won't regret it.",
  },
];
