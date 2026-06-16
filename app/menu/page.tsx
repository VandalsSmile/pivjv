import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import Link from "next/link";
import {
  Zap,
  Dumbbell,
  HeartPulse,
  Flame,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";
import {
  PRIMARY_TREATMENT_PRICE,
  PRIMARY_TREATMENTS,
  SPECIALTY_TIERS,
  ADDITIVES,
  INJECTIONS,
  NAD_INJECTIONS,
  NIAGEN_INJECTIONS,
  INJECTION_PACKAGES,
  INJECTION_GUIDE,
  PREMIUM_INFUSIONS,
} from "@/lib/menu-data";


export const metadata: Metadata = {
  title: "Full Menu | IV Therapy, Injections & Premium Infusions",
  description:
    "Explore the complete Prime IV Hydration & Wellness menu in Huntsville, AL — primary and specialty IV treatments, vitamin injections, treatment additives, injection packages, and advanced high-dose infusions.",
  keywords: [
    "IV therapy menu",
    "IV drip list",
    "vitamin injections",
    "NAD+ infusion",
    "Niagen IV",
    "Huntsville AL IV menu",
  ],
  alternates: { canonical: "/menu" },
};

const iconMap = { Zap, Dumbbell, HeartPulse, Flame };

function DoseTable({
  rows,
}: {
  rows: { dose: string; single: string; pack: string }[];
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
      <div className="grid grid-cols-3 gap-4 p-4 bg-primary text-white text-sm font-semibold">
        <span>Dose</span>
        <span className="text-center">Single Injection</span>
        <span className="text-right">4-Pack</span>
      </div>
      {rows.map((row) => (
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
  );
}

export default function MenuPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Full Menu", path: "/menu" }])} />
      {/* Hero */}
      <section className="relative bg-primary text-white py-16 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/menu-hero-compounding.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-primary/85"
          aria-hidden="true"
        />
        <div className="relative container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Full Treatment Menu
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              IV Treatments, Injections &amp; Premium Infusions
            </h1>
            <p className="text-white/80 text-lg mb-8 text-pretty">
              Explore our complete range of IV therapies, vitamin injections,
              and high-dose infusions in {CONTACT.address.city}, AL. 100%
              absorption, immediate results.
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

      {/* Primary IV Treatments */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Primary IV Treatments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Targeted Hydration —{" "}
              <span className="text-secondary">{PRIMARY_TREATMENT_PRICE}</span>
            </h2>
            <p className="text-foreground-muted text-lg">
              Four essential IV treatments designed to address your most common
              wellness needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRIMARY_TREATMENTS.map((treatment) => {
              const Icon = iconMap[treatment.icon as keyof typeof iconMap];
              return (
                <div
                  key={treatment.name}
                  className="bg-white rounded-xl shadow-sm border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">
                    {treatment.name}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {treatment.nutrient}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty IV Treatments */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Specialty IV Treatments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Premium IV Infusions
            </h2>
            <p className="text-foreground-muted text-lg">
              Each drip is administered by licensed medical professionals.{" "}
              <span className="font-semibold text-primary">
                Prime Select member pricing shown in parentheses.
              </span>
            </p>
          </div>

          <div className="space-y-12">
            {SPECIALTY_TIERS.map((tier) => (
              <div key={tier.id}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-secondary">
                    {tier.price}
                  </span>
                  <span className="text-foreground-muted">
                    Prime Select member {tier.memberPrice}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tier.drips.map((drip) => (
                    <div
                      key={drip.name}
                      className="bg-white rounded-xl shadow-sm border border-border p-5"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-bold text-foreground text-lg">
                          {drip.name}
                        </h4>
                        <div className="text-right flex-shrink-0">
                          <span className="block text-xl font-bold text-secondary">
                            {drip.price}
                          </span>
                          <span className="block text-xs text-foreground-muted">
                            member {drip.memberPrice}
                          </span>
                        </div>
                      </div>
                      <p className="text-foreground-muted text-sm leading-relaxed">
                        {drip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Additives */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Amplify Your Treatment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Treatment Additives
            </h2>
            <p className="text-foreground-muted text-lg">
              Boost any IV drip with targeted micronutrients. Members enjoy
              reduced pricing on every additive.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="hidden md:grid grid-cols-[1fr_auto_auto] gap-6 px-5 py-3 bg-primary text-white text-sm font-semibold">
              <span>Additive</span>
              <span className="text-right w-20">Member</span>
              <span className="text-right w-28">Non-Member</span>
            </div>
            {ADDITIVES.map((additive, i) => (
              <div
                key={additive.name}
                className={`p-5 ${
                  i !== ADDITIVES.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-bold text-foreground">
                    {additive.name}
                  </h4>
                  <div className="flex gap-6 flex-shrink-0">
                    <span className="text-right w-20 font-semibold text-secondary">
                      {additive.member}
                      <span className="md:hidden block text-[10px] font-normal text-foreground-muted">
                        member
                      </span>
                    </span>
                    <span className="text-right w-28 font-semibold text-foreground">
                      {additive.nonMember}
                      <span className="md:hidden block text-[10px] font-normal text-foreground-muted">
                        non-member
                      </span>
                    </span>
                  </div>
                </div>
                <p className="text-foreground-muted text-sm leading-relaxed mt-1 max-w-3xl">
                  {additive.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground-muted italic mt-4">
            *Subject to availability.
          </p>
        </div>
      </section>

      {/* High-Dose & NAD+ Infusions */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Premium &amp; High-Dose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              High-Dose &amp; NAD+ Infusions
            </h2>
            <p className="text-foreground-muted text-lg">
              Longevity, cellular repair, and high-dose rejuvenation therapies
              for optimal wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PREMIUM_INFUSIONS.map((infusion) => (
              <div
                key={infusion.name}
                className="bg-white rounded-2xl shadow-sm border border-border p-6 flex flex-col"
              >
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {infusion.name}
                </h3>
                {infusion.note && (
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                    {infusion.note}
                  </p>
                )}
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

      {/* Injections */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Injection Therapies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Quick Vitamin Boosts
            </h2>
            <p className="text-foreground-muted text-lg">
              Fast appointments. Add to your IV drip or get as a standalone
              treatment.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden mb-4">
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
            *All micronutrient injections are subject to availability.
          </p>

          {/* Injection Packages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Injection Packages
            </h3>
            <p className="text-foreground-muted mb-6">
              Stock up and save. Excludes NAD+ and Niagen® injections.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {INJECTION_PACKAGES.map((pkg) => (
                <div
                  key={pkg.count}
                  className="bg-primary text-white rounded-2xl p-6 text-center"
                >
                  <p className="font-semibold mb-2 text-balance">{pkg.count}</p>
                  <p className="text-3xl font-bold text-secondary-light">
                    {pkg.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NAD+ & Niagen Injections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                NAD+ Injections
              </h3>
              <p className="text-foreground-muted mb-6">
                Enhance cellular energy, slow aging, and boost focus.
              </p>
              <DoseTable rows={NAD_INJECTIONS} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Niagen® Injections
              </h3>
              <p className="text-foreground-muted mb-6">
                Advanced NAD+ support — boost cellular energy, clarity, and
                resilience.
              </p>
              <DoseTable rows={NIAGEN_INJECTIONS} />
            </div>
          </div>
        </div>
      </section>

      {/* Find the Right Injection */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Personalized Guidance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Find the Right Injection for Your Needs
            </h2>
            <p className="text-foreground-muted text-lg">
              Match your wellness goals to the injections that support them
              best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INJECTION_GUIDE.map((guide) => (
              <div
                key={guide.goal}
                className="bg-white rounded-xl shadow-sm border border-border p-5"
              >
                <h4 className="font-bold text-primary mb-1">{guide.goal}</h4>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {guide.options}
                </p>
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
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
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
    </>
  );
}
