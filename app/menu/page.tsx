import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Shield, Sparkles, Dna, ArrowRight, Phone, Star } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";
import {
  DRIP_CATEGORIES,
  INJECTIONS,
  NAD_INJECTIONS,
  AMPLIFIERS,
  PREMIUM_INFUSIONS,
} from "@/lib/menu-data";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Full Menu | IV Therapy, Injections & Premium Infusions",
  description:
    "Explore the complete Prime IV Hydration & Wellness menu in Huntsville, AL — premium IV drips, vitamin injections, IV amplifiers, and advanced high-dose infusions. 100% absorption, immediate results.",
  keywords: [
    "IV therapy menu",
    "IV drip list",
    "vitamin injections",
    "NAD+ infusion",
    "Niagen IV",
    "Huntsville AL IV menu",
  ],
};

const iconMap = { Zap, Shield, Sparkles, Dna };

function Badge({ label }: { label: "Top Seller" | "NEW" }) {
  const isNew = label === "NEW";
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0 ${
        isNew ? "bg-accent text-white" : "bg-secondary/15 text-secondary-dark"
      }`}
    >
      {label}
    </span>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Full Treatment Menu
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              IV Drips, Injections &amp; Premium Infusions
            </h1>
            <p className="text-white/80 text-lg mb-8 text-pretty">
              Explore our complete range of IV therapies designed to help you
              feel energized, stronger, restored, and renewed in{" "}
              {CONTACT.address.city}, AL. 100% absorption, immediate results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/intro-offer" className="btn-primary">
                ${PRICING.introOffer.price} Intro Offer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/iv-matcher" className="btn-outline">
                Take the IV Matcher Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium IV Infusions */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              IV Drip Therapies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Premium IV Infusions
            </h2>
            <p className="text-foreground-muted text-lg">
              Each drip is administered by licensed medical professionals and
              takes approximately 30-45 minutes.
            </p>
          </div>

          <div className="space-y-12">
            {DRIP_CATEGORIES.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              return (
                <div key={category.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {category.heading}
                      </h3>
                      <p className="text-foreground-muted">
                        {category.subheading}
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.drips.map((drip) => (
                      <div
                        key={drip.name}
                        className="bg-white rounded-xl shadow-sm border border-border p-5 flex flex-col"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-foreground text-lg">
                              {drip.name}
                            </h4>
                            {drip.badge && <Badge label={drip.badge} />}
                          </div>
                          <span className="text-xl font-bold text-secondary flex-shrink-0">
                            {drip.price}
                          </span>
                        </div>
                        <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                          {drip.description}
                        </p>
                        <Link
                          href={`tel:${CONTACT.phoneClean}`}
                          className="mt-auto text-secondary hover:text-secondary-dark text-sm font-semibold"
                        >
                          Book this drip
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Injection Therapies */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Injection Therapies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Quick Vitamin Boosts
            </h2>
            <p className="text-foreground-muted text-lg mb-3">
              Fast 5-minute appointments. Add to your IV drip or get as a
              standalone treatment.
            </p>
            <p className="text-sm font-semibold text-primary">
              Members receive 50% off all additive injections.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
            {INJECTIONS.map((injection, i) => (
              <div
                key={injection.name}
                className={`flex items-start justify-between gap-4 p-5 ${
                  i !== INJECTIONS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {injection.name}
                  </h4>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {injection.description}
                  </p>
                </div>
                <span className="text-lg font-bold text-secondary flex-shrink-0">
                  {injection.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground-muted italic mb-12">
            *Subject to availability.
          </p>

          {/* NAD+ Injections */}
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              NAD+ Injections
            </h3>
            <p className="text-foreground-muted mb-6">
              Enhance cellular health and energy levels, slow aging, improve
              mental clarity and cognitive function, and boost overall vitality.
            </p>
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-primary text-white text-sm font-semibold">
                <span>Dose</span>
                <span className="text-center">Single Injection</span>
                <span className="text-right">4-Pack</span>
              </div>
              {NAD_INJECTIONS.map((row) => (
                <div
                  key={row.dose}
                  className="grid grid-cols-3 gap-4 p-4 border-t border-border items-center"
                >
                  <span className="font-bold text-foreground">{row.dose}</span>
                  <span className="text-center font-semibold text-secondary">
                    {row.single}
                  </span>
                  <span className="text-right font-semibold text-secondary">
                    {row.pack}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground-muted mt-4">
              Members receive a discount on additional injections outside of
              their membership.
            </p>
          </div>
        </div>
      </section>

      {/* IV Amplifiers */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              IV Amplifiers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Enhance Your IV Drip
            </h2>
            <p className="text-foreground-muted text-lg">
              Add additional fluids and micronutrients to maximize your
              treatment benefits.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AMPLIFIERS.map((amp) => (
              <div
                key={amp.name}
                className="bg-white rounded-xl shadow-sm border border-border p-5"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h4 className="font-bold text-foreground">{amp.name}</h4>
                  <span className="text-lg font-bold text-secondary flex-shrink-0">
                    {amp.price}
                  </span>
                </div>
                <p className="text-foreground-muted text-sm">
                  {amp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced / Premium & High-Dose */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Premium &amp; High-Dose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Advanced IV Infusions
            </h2>
            <p className="text-foreground-muted text-lg">
              Longevity, cellular repair, and high-dose rejuvenation therapies
              for optimal wellness.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PREMIUM_INFUSIONS.map((infusion) => (
              <div
                key={infusion.name}
                className="bg-white rounded-2xl shadow-sm border border-border p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {infusion.name}
                  </h3>
                  {infusion.badge && <Badge label={infusion.badge} />}
                </div>
                <p className="text-sm font-semibold text-primary mb-2">
                  {infusion.dose}
                </p>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                  {infusion.description}
                </p>
                <div className="mt-auto grid grid-cols-2 gap-2">
                  {infusion.tiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="flex items-center justify-between gap-2 bg-background rounded-lg px-3 py-2 border border-border"
                    >
                      <span className="text-xs text-foreground-muted">
                        {tier.label}
                      </span>
                      <span className="text-sm font-bold text-secondary">
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-secondary text-secondary"
              />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Feel Your Best?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-pretty">
            Not sure which treatment is right for you? Take our quick IV Matcher
            quiz or book a free consultation with our licensed medical staff.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/intro-offer" className="btn-primary">
              Get ${PRICING.introOffer.price} Intro Offer
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/iv-matcher" className="btn-outline">
              Take the Quiz
            </Link>
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
              <Phone className="w-4 h-4" />
              Call {CONTACT.phone}
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
