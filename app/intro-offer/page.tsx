import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, ArrowRight } from "lucide-react";
import { CONTACT, PRICING, SITE_CONFIG } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: `$${PRICING.introOffer.price} IV Intro Offer | New Client Special`,
  description: `New to Prime IV? Claim your first VIP IV therapy for just $${PRICING.introOffer.price} (reg. $${PRICING.introOffer.regularPrice}) in Huntsville, AL. Includes a primary IV drip, massage chair, and a free vitamin consult.`,
  keywords: [
    "IV therapy intro offer",
    "new client IV special",
    "first IV therapy discount",
    "Huntsville AL IV deal",
  ],
};

const included = [
  "Choice of 1 of 4 primary IV infusions",
  "Use of the zero-gravity massage chair",
  "FREE vitamin & wellness consultation",
  "Administered by licensed medical professionals",
];

export default function IntroOfferPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              New Client Introductory Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Your First VIP IV Therapy for Just ${PRICING.introOffer.price}
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Experience the {SITE_CONFIG.name} difference in {CONTACT.address.city},
              AL. A premium IV drip, the zero-gravity massage chair, and a free
              consult — all at an unbeatable first-visit price.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/specials#claim-form" className="btn-primary">
                Claim Your ${PRICING.introOffer.price} Offer
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
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border-2 border-secondary overflow-hidden">
            <div className="bg-secondary p-6 text-white text-center">
              <span className="inline-block bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full">
                Limited Availability
              </span>
            </div>
            <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3 mb-6">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-foreground-muted">
                  *One-time state-mandated ${PRICING.medicalClearance} telehealth
                  screening required at first visit.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block bg-secondary/10 rounded-2xl p-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-bold text-secondary">
                      ${PRICING.introOffer.price}
                    </span>
                    <span className="text-2xl text-foreground-muted line-through">
                      ${PRICING.introOffer.regularPrice}
                    </span>
                  </div>
                  <p className="text-foreground-muted mt-2">First visit special</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
