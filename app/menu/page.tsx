import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";
import { CONTACT, PRICING, SERVICES } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "IV Therapy Menu | Full List of Drips & Injections",
  description:
    "Browse the full Prime IV Hydration & Wellness menu in Huntsville, AL. Explore our complete list of IV drips, vitamin injections, and add-on boosters with pricing.",
  keywords: [
    "IV therapy menu",
    "IV drip list",
    "vitamin injections",
    "IV pricing",
    "Huntsville AL",
    "Prime IV menu",
  ],
};

const INJECTIONS = [
  { name: "Vitamin B-12", description: "Boost energy and metabolism." },
  { name: "Lipo-Lean (MIC + B-12)", description: "Support fat metabolism and weight goals." },
  { name: "Vitamin D3", description: "Strengthen immunity and bone health." },
  { name: "Glutathione", description: "Master antioxidant for detox and glowing skin." },
  { name: "Taurine", description: "Support energy, focus, and recovery." },
  { name: "Biotin", description: "Promote healthy hair, skin, and nails." },
  { name: "Vitamin C", description: "Immune support and antioxidant protection." },
  { name: "Tri-Immune Boost", description: "Powerful immune-strengthening blend." },
];

const ADDONS = [
  "Extra Vitamin C",
  "Glutathione Push",
  "Magnesium",
  "B-Complex",
  "Zinc",
  "Amino Blend",
  "Anti-Nausea (Zofran)",
  "Toradol (Pain Relief)",
];

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Our Full Menu
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Prime IV {CONTACT.address.city} Menu
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Explore our complete menu of IV drips, vitamin injections, and
              add-on boosters. Every treatment is administered by licensed
              healthcare professionals using medical-grade ingredients.
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

      {/* IV Drips by Category */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              IV Drips
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Signature IV Infusions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-foreground-muted text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.drips.map((drip) => (
                    <li
                      key={drip}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      {drip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Injections */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Vitamin Injections
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Quick Boost Injections
            </h2>
            <p className="text-foreground-muted mt-4 max-w-2xl mx-auto">
              In a hurry? Our vitamin injections deliver a fast, targeted boost
              in just minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INJECTIONS.map((injection) => (
              <div
                key={injection.name}
                className="bg-white rounded-xl shadow-sm p-6 border border-border"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {injection.name}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {injection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Add-On Boosters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Customize Your Drip
            </h2>
            <p className="text-foreground-muted mt-4 max-w-2xl mx-auto">
              Enhance any IV therapy with additional vitamins, minerals, and
              medications tailored to your needs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {ADDONS.map((addon) => (
              <div
                key={addon}
                className="flex items-center gap-2 bg-background-alt rounded-lg px-4 py-3 border border-border"
              >
                <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-foreground">{addon}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-foreground-muted mt-8">
            Not sure what you need? Our wellness team will help you build the
            perfect treatment during your consultation.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
