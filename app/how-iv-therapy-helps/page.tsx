import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Check, Heart, Activity, Sparkles, Dumbbell } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "How IV Therapy Helps | Wellness, Recovery, Beauty & Fitness",
  description:
    "Discover how IV therapy supports health & wellness, hangover & illness recovery, beauty & aging, and fitness & exercise recovery at Prime IV Hydration & Wellness in Huntsville, AL.",
  keywords: [
    "how IV therapy helps",
    "IV therapy benefits",
    "hangover recovery",
    "beauty IV",
    "fitness recovery",
    "Huntsville AL",
  ],
};

const SECTIONS = [
  {
    id: "wellness",
    icon: Heart,
    label: "Health & Wellness",
    title: "Support Your Everyday Health & Wellness",
    description:
      "Life is demanding. IV therapy helps you stay at your best by delivering hydration, vitamins, and minerals directly into your bloodstream for fast, efficient absorption. Whether you're fighting fatigue, burnout, or just want to feel your best, our wellness drips help you thrive.",
    benefits: [
      "Combat fatigue and brain fog",
      "Boost energy and focus",
      "Support overall vitality",
      "Maintain optimal hydration",
    ],
  },
  {
    id: "recovery",
    icon: Activity,
    label: "Hangover & Illness Recovery",
    title: "Bounce Back From Hangovers & Illness",
    description:
      "Had a late night or feeling under the weather? Our recovery drips rapidly rehydrate your body, ease nausea, and replenish the nutrients you've lost. Feel human again—fast—with targeted IV therapy designed to get you back on your feet.",
    benefits: [
      "Rapid rehydration",
      "Relief from nausea and headaches",
      "Replenish lost electrolytes",
      "Support immune recovery",
    ],
  },
  {
    id: "beauty",
    icon: Sparkles,
    label: "Beauty & Aging",
    title: "Glow From the Inside Out",
    description:
      "Beautiful skin starts at the cellular level. Our beauty drips are rich in antioxidants like glutathione and skin-loving nutrients like biotin to support radiant skin, healthy hair, and strong nails—while combating the visible signs of aging.",
    benefits: [
      "Promote radiant, glowing skin",
      "Support healthy hair and nails",
      "Powerful antioxidant protection",
      "Combat signs of aging",
    ],
  },
  {
    id: "fitness",
    icon: Dumbbell,
    label: "Fitness & Exercise Recovery",
    title: "Recover Faster & Perform Better",
    description:
      "Push harder and recover smarter. Whether you're a weekend warrior or a serious athlete, our fitness drips help reduce muscle soreness, replenish electrolytes, and accelerate recovery so you can get back to training at your peak.",
    benefits: [
      "Reduce muscle soreness",
      "Replenish electrolytes",
      "Accelerate recovery",
      "Enhance athletic performance",
    ],
  },
];

export default function HowIVTherapyHelpsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              How We Help
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              How IV Therapy Helps You Feel Your Best
            </h1>
            <p className="text-white/80 text-lg mb-8">
              From everyday wellness to recovery, beauty, and fitness—discover
              how doctor-supervised IV therapy can support your unique goals.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {SECTIONS.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {SECTIONS.map((section, index) => {
        const Icon = section.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`section-padding ${isEven ? "bg-background" : "bg-background-alt"} scroll-mt-32`}
          >
            <div className="container-custom mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                      {section.label}
                    </p>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-foreground-muted mb-6">
                    {section.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {section.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/iv-therapy" className="btn-primary">
                    Explore Treatments
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={isEven ? "" : "lg:order-1"}>
                  <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      Ready to feel the difference?
                    </h3>
                    <p className="text-white/80 mb-6">
                      Our team will help you choose the perfect treatment for
                      your goals. Same-day appointments are often available.
                    </p>
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="btn-secondary w-full justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      Call {CONTACT.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaSection />
    </>
  );
}
