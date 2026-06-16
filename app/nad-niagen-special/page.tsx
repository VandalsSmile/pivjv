import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, ArrowRight, Dna } from "lucide-react";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "NAD+ & Niagen 25% OFF | Cellular Energy Therapy Special",
  description:
    "Save 25% on NAD+ and Niagen therapies at Prime IV Hydration & Wellness in Huntsville, AL. Support cellular energy, mental clarity, and healthy aging.",
  keywords: [
    "NAD+ IV therapy",
    "Niagen special",
    "NAD+ discount",
    "cellular energy IV",
    "Huntsville AL NAD+",
  ],
};

const benefits = [
  "Boosts cellular energy production",
  "Supports mental clarity and focus",
  "Promotes healthy aging at the cellular level",
  "Aids recovery, metabolism, and overall wellness",
];

export default function NadNiagenPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Limited-Time Special
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              NAD+ &amp; Niagen — 25% OFF
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Recharge your cells with the most advanced longevity therapies
              available at {SITE_CONFIG.name} in {CONTACT.address.city}, AL — now
              25% off for a limited time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/specials#claim-form" className="btn-primary">
                Claim 25% Off
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Dna className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why NAD+ &amp; Niagen?
              </h2>
              <p className="text-foreground-muted mb-6">
                NAD+ is a coenzyme found in every cell, essential for energy and
                cellular repair. Niagen® is a patented NAD+ precursor that helps
                your body raise NAD+ levels efficiently. Together they support
                energy, clarity, and healthy aging.
              </p>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/10 rounded-2xl p-10 text-center">
              <span className="text-6xl font-bold text-secondary">25%</span>
              <p className="text-foreground-muted mt-2 mb-6">
                Off all NAD+ &amp; Niagen therapies
              </p>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-secondary w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                Call to Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
