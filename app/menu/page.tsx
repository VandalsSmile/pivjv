import type { Metadata } from "next";
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
} from "lucide-react";
import { SERVICES, CONTACT, PRICING } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Full IV Therapy Menu | All Drips & Injections",
  description:
    "Browse the complete Prime IV Hydration & Wellness menu in Huntsville, AL — every IV drip and injection across energy, recovery, immunity, beauty, lifestyle, and advanced cellular therapies.",
  keywords: [
    "IV therapy menu",
    "IV drip list",
    "vitamin injections",
    "Huntsville AL IV menu",
  ],
};

const iconMap = {
  Zap,
  Dumbbell,
  Shield,
  Sparkles,
  Plane,
  Dna,
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              The Full Menu
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Every IV Drip &amp; Injection We Offer
            </h1>
            <p className="text-white/80 text-lg mb-8">
              From quick vitamin boosts to advanced cellular therapies, explore
              our complete menu in {CONTACT.address.city}, AL and find the
              perfect treatment for your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/specials" className="btn-primary">
                Book ${PRICING.introOffer.price} VIP IV
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/iv-matcher" className="btn-outline">
                Take the IV Matcher Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap];
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
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
              <div className="grid sm:grid-cols-2 gap-4">
                {service.drips.map((drip) => (
                  <div
                    key={drip}
                    className="flex items-center justify-between gap-4 bg-white rounded-xl shadow-sm border border-border p-4"
                  >
                    <span className="font-medium text-foreground">{drip}</span>
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="text-secondary hover:text-secondary-dark text-sm font-semibold flex-shrink-0"
                    >
                      Book
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            Not sure which drip is right for you?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our wellness team will help you choose the perfect treatment based on
            your goals. Call us or take our quick IV Matcher quiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iv-matcher" className="btn-primary">
              Find Your Perfect IV
              <ArrowRight className="w-4 h-4" />
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
