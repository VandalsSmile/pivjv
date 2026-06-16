import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import Link from "next/link";
import {
  Zap,
  Dumbbell,
  Shield,
  Sparkles,
  Plane,
  Dna,
  ArrowRight,
  Phone,
  Check,
} from "lucide-react";
import { SERVICES, CONTACT, PRICING, SITE_CONFIG } from "@/lib/constants";


export const metadata: Metadata = {
  title: "IV Therapy Services | Vitamin Drips & Hydration Treatments",
  description:
    "Explore our full menu of IV therapy treatments including energy boosters, recovery drips, immunity support, beauty IVs, and advanced NAD+ therapies in Huntsville, AL.",
  keywords: [
    "IV therapy",
    "vitamin drips",
    "NAD+",
    "Myers Cocktail",
    "hydration therapy",
    "energy IV",
    "immunity IV",
    "beauty IV",
    "Huntsville AL",
  ],
  alternates: { canonical: "/iv-therapy" },
};

const iconMap = {
  Zap: Zap,
  Dumbbell: Dumbbell,
  Shield: Shield,
  Sparkles: Sparkles,
  Plane: Plane,
  Dna: Dna,
};

const dripsDetail = {
  energy: [
    {
      name: "NAD+ IV Infusion",
      description:
        "Advanced cellular energy therapy for mental clarity, focus, and anti-aging benefits.",
      benefits: ["Mental clarity", "Cellular repair", "Anti-aging", "Energy boost"],
    },
    {
      name: "Brainstorm Drip",
      description:
        "Optimize cognitive function and mental performance with targeted nutrients.",
      benefits: ["Focus", "Memory", "Cognitive function", "Mental clarity"],
    },
    {
      name: "Focus & Clarity Drip",
      description:
        "Sharpen your mind and enhance concentration for peak performance.",
      benefits: ["Concentration", "Alertness", "Productivity", "Brain function"],
    },
    {
      name: "Executive Recovery Drip",
      description:
        "Designed for high performers who need to recover quickly and stay sharp.",
      benefits: ["Stress relief", "Energy", "Recovery", "Mental performance"],
    },
  ],
  recovery: [
    {
      name: "Myers' Cocktail",
      description:
        "The gold standard of IV therapy - a time-tested blend of vitamins and minerals.",
      benefits: ["Hydration", "Energy", "Immune support", "Overall wellness"],
    },
    {
      name: "The Champion",
      description:
        "Ultimate athletic recovery formula to reduce soreness and optimize performance.",
      benefits: ["Muscle recovery", "Hydration", "Performance", "Endurance"],
    },
    {
      name: "Athletic Recovery Drip",
      description:
        "Replenish what you lose during intense workouts and competitions.",
      benefits: ["Electrolytes", "Muscle repair", "Energy restoration", "Hydration"],
    },
    {
      name: "Hydration Hero Drip",
      description:
        "Pure hydration therapy for rapid rehydration and wellness support.",
      benefits: ["Deep hydration", "Electrolyte balance", "Energy", "Wellness"],
    },
  ],
  immunity: [
    {
      name: "Immunity Armor",
      description:
        "Fortify your immune system with high-dose vitamins and antioxidants.",
      benefits: ["Immune defense", "Antioxidants", "Vitamin C", "Zinc"],
    },
    {
      name: "Cellular Defense Drip",
      description:
        "Support your body at the cellular level for optimal immune function.",
      benefits: ["Cellular health", "Immune support", "Detox", "Vitality"],
    },
    {
      name: "Wellness Booster Drip",
      description:
        "General wellness support to keep you feeling your best year-round.",
      benefits: ["Overall wellness", "Energy", "Immune support", "Vitality"],
    },
    {
      name: "The Revitalizer",
      description:
        "Comprehensive revitalization therapy for when you need a complete reset.",
      benefits: ["Energy", "Immune boost", "Hydration", "Recovery"],
    },
  ],
  beauty: [
    {
      name: "The Glow",
      description:
        "Enhance your natural radiance with beauty-boosting vitamins and antioxidants.",
      benefits: ["Radiant skin", "Hair health", "Nail strength", "Anti-aging"],
    },
    {
      name: "Beauty & Radiance Drip",
      description:
        "Premium beauty formula for glowing skin and overall vitality.",
      benefits: ["Skin health", "Collagen support", "Hydration", "Glow"],
    },
    {
      name: "Longevity Drip",
      description:
        "Anti-aging therapy designed to support cellular health and vitality.",
      benefits: ["Anti-aging", "Cellular repair", "Energy", "Longevity"],
    },
    {
      name: "The Skinny Drip",
      description:
        "Metabolism and energy support for your wellness goals.",
      benefits: ["Metabolism", "Energy", "Fat burning", "Wellness"],
    },
  ],
  lifestyle: [
    {
      name: "Jet Setter Drip",
      description:
        "Beat jet lag and travel fatigue with this recovery-focused formula.",
      benefits: ["Jet lag relief", "Energy", "Hydration", "Recovery"],
    },
    {
      name: "The After Party",
      description:
        "Rapid recovery from late nights and celebrations.",
      benefits: ["Hangover relief", "Hydration", "Nausea relief", "Energy"],
    },
    {
      name: "The Weekend Warrior",
      description:
        "Perfect for active weekends and busy schedules.",
      benefits: ["Recovery", "Energy", "Hydration", "Performance"],
    },
    {
      name: "Reboot Drip",
      description:
        "Complete system reset for when you need to start fresh.",
      benefits: ["Reset", "Detox", "Energy", "Clarity"],
    },
  ],
  advanced: [
    {
      name: "Niagen® Therapy",
      description:
        "Cutting-edge NAD+ precursor therapy for cellular health and longevity.",
      benefits: ["Cellular energy", "Anti-aging", "Brain function", "Metabolism"],
    },
    {
      name: "Detox & Recovery Drip",
      description:
        "Deep detoxification and recovery support for optimal wellness.",
      benefits: ["Detox", "Liver support", "Recovery", "Wellness"],
    },
    {
      name: "Migraine Relief Drip",
      description:
        "Targeted relief for migraine and headache symptoms.",
      benefits: ["Migraine relief", "Pain reduction", "Hydration", "Relaxation"],
    },
    {
      name: "Performance & Recovery Drip",
      description:
        "Elite-level performance support and accelerated recovery.",
      benefits: ["Peak performance", "Recovery", "Endurance", "Strength"],
    },
  ],
};

export default function IVTherapyPage() {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: "IV Therapy Services", description: "Energy, recovery, immunity, beauty, and advanced NAD+ IV therapy treatments in Huntsville, AL.", path: "/iv-therapy", serviceType: "IV Therapy" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "IV Therapy", path: "/iv-therapy" }])]} />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Our IV Therapy Menu
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Premium IV Therapy Treatments in {CONTACT.address.city}, AL
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Discover our comprehensive menu of IV therapies designed to help
              you feel your best. From energy and recovery to beauty and
              advanced cellular therapies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/specials" className="btn-primary">
                Book ${PRICING.introOffer.price} VIP IV
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-outline"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap];
        const drips = dripsDetail[service.id as keyof typeof dripsDetail] || [];
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${isEven ? "bg-background" : "bg-background-alt"}`}
          >
            <div className="container-custom mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-foreground-muted">{service.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {drips.map((drip) => (
                  <div
                    key={drip.name}
                    className="bg-white rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {drip.name}
                    </h3>
                    <p className="text-foreground-muted mb-4">
                      {drip.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {drip.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          <Check className="w-3 h-3" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Myers Cocktail Feature */}
      <section id="myers" className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                The Gold Standard
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                {"The Myers' Cocktail"}
              </h2>
              <p className="text-white/80 text-lg mb-6">
                {"The most popular and time-tested IV therapy in history. The Myers' Cocktail is a carefully balanced blend of vitamins and minerals that has helped millions feel their best."}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vitamin C for immune support",
                  "B-Complex vitamins for energy",
                  "Magnesium for muscle relaxation",
                  "Calcium for bone and nerve health",
                  "Hydration base for rapid absorption",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/specials" className="btn-primary">
                Book Your Session
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Dumbbell className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Perfect For Everyone
                </h3>
                <p className="text-white/70">
                  Whether you&apos;re an athlete, busy professional, or just
                  looking to optimize your health, the Myers&apos; Cocktail is a
                  great starting point for your IV therapy journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
