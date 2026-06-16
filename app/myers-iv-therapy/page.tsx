import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, ArrowRight, Star } from "lucide-react";
import { CONTACT, PRICING, SITE_CONFIG } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "America's Favorite IV | The Myers' Cocktail",
  description:
    "The Myers' Cocktail is the most popular and time-tested IV therapy in history. Get this classic blend of vitamins and minerals at Prime IV Hydration & Wellness in Huntsville, AL.",
  keywords: [
    "Myers Cocktail",
    "America's favorite IV",
    "classic IV therapy",
    "vitamin drip",
    "Huntsville AL Myers Cocktail",
  ],
};

const ingredients = [
  "Vitamin C for immune support",
  "B-Complex vitamins for energy",
  "Magnesium for muscle relaxation",
  "Calcium for bone and nerve health",
  "Hydration base for rapid absorption",
];

const goodFor = [
  "Low energy and fatigue",
  "Immune support during busy seasons",
  "General wellness and hydration",
  "Recovery from stress or travel",
];

export default function MyersIVPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              America&apos;s Favorite IV
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The Myers&apos; Cocktail
            </h1>
            <p className="text-white/80 text-lg mb-8">
              The most popular and time-tested IV in history. A carefully
              balanced blend of vitamins and minerals that has helped millions
              feel their best — now at {SITE_CONFIG.name} in{" "}
              {CONTACT.address.city}, AL.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/specials" className="btn-primary">
                Book ${PRICING.introOffer.price} VIP IV
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What&apos;s Inside
              </h2>
              <ul className="space-y-3">
                {ingredients.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Great For
              </h2>
              <ul className="space-y-3">
                {goodFor.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
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
