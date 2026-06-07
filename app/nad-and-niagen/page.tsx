import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

const IMAGES = {
  niagen:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/niagen-goQclfnIu1moCbzYigEyoIOsRxrOOl.png",
};

export const metadata: Metadata = {
  title: "NAD+ & Niagen Therapy | Cellular Energy & Longevity",
  description:
    "Discover NAD+ and Niagen therapy at Prime IV Hydration & Wellness in Huntsville, AL. Support cellular energy, mental clarity, and healthy aging with advanced cellular therapies.",
  keywords: [
    "NAD+ therapy",
    "Niagen",
    "cellular energy",
    "anti-aging IV",
    "longevity",
    "Huntsville AL",
    "Prime IV NAD",
  ],
};

const BENEFITS = [
  {
    title: "Cellular Energy",
    description:
      "NAD+ fuels the mitochondria—your cells' energy factories—helping you feel more energized and resilient.",
  },
  {
    title: "Mental Clarity",
    description:
      "Support sharper focus, memory, and cognitive performance by replenishing NAD+ levels in the brain.",
  },
  {
    title: "Healthy Aging",
    description:
      "NAD+ supports DNA repair and cellular health, playing a key role in the body's natural aging processes.",
  },
  {
    title: "Metabolism Support",
    description:
      "Help your body convert nutrients into energy more efficiently and support a healthy metabolism.",
  },
  {
    title: "Recovery & Repair",
    description:
      "Aid recovery from physical and mental stress by supporting your body at the cellular level.",
  },
  {
    title: "Mood & Wellbeing",
    description:
      "Many clients report improved mood and an overall sense of wellbeing after NAD+ therapy.",
  },
];

export default function NadNiagenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                Advanced Cellular Therapy
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                NAD+ & Niagen® Therapy
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Unlock cellular energy, sharper focus, and healthy aging with
                NAD+ and Niagen® therapy—cutting-edge treatments designed to
                help you feel and perform your best.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book NAD+ Therapy
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.niagen}
                alt="Niagen NAD+ therapy treatment"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is NAD+ */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              The Science
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              What is NAD+?
            </h2>
            <p className="text-foreground-muted text-lg">
              NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in
              every cell of your body. It plays a vital role in energy
              production, DNA repair, and cellular health. As we age, NAD+
              levels naturally decline—which is why replenishing it through IV
              therapy can be so impactful. Niagen® is a patented form of NR
              (Nicotinamide Riboside), a precursor that helps your body produce
              more NAD+.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              The Benefits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Why Clients Choose NAD+ Therapy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl shadow-sm p-6 border border-border"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAD+ vs Niagen */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                NAD+ IV Infusion
              </h3>
              <p className="text-foreground-muted mb-4">
                Delivered directly into your bloodstream for maximum
                absorption. Ideal for those seeking a powerful cellular reset
                and noticeable energy boost.
              </p>
              <ul className="space-y-2">
                {[
                  "Direct IV delivery",
                  "Maximum bioavailability",
                  "Deep cellular support",
                  "Best for energy & clarity",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Niagen® Supplementation
              </h3>
              <p className="text-foreground-muted mb-4">
                A patented NAD+ precursor that supports your body&apos;s natural
                NAD+ production over time. A great complement to your wellness
                routine.
              </p>
              <ul className="space-y-2">
                {[
                  "Supports natural NAD+ production",
                  "Convenient daily support",
                  "Backed by research",
                  "Best for long-term wellness",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
