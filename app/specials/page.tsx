import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import Link from "next/link";
import {
  Phone,
  Check,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { CONTACT, OG_IMAGE, PRICING } from "@/lib/constants";
import { SpecialsForm } from "./specials-form";
import { MomentumProgramSection } from "@/components/momentum-program-section";
import { VeteransDaySpecial } from "@/components/veterans-day-special";
import { HolidayNadSpecial } from "@/components/holiday-nad-special";
import { MOMENTUM_FAQS } from "@/lib/momentum-program";

export const metadata: Metadata = {
  title: "Monthly Specials",
  description:
    "Exclusive IV therapy offers and monthly promotions at Prime IV in Huntsville, AL. New-client specials are available now.",
  keywords: [
    "IV therapy specials",
    "IV drip deals",
    "new client offer",
    "IV therapy promotion",
    "Huntsville AL",
    "discount IV therapy",
  ],
  alternates: { canonical: "/specials" },
  openGraph: { url: "/specials", images: [OG_IMAGE] },
};


export default function SpecialsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Specials", path: "/specials" },
          ]),
          faqSchema(MOMENTUM_FAQS),
        ]}
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Limited Time Offers
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Prime IV {CONTACT.address.city} Specials
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Take advantage of our exclusive offers and experience premium IV
              therapy at special rates. New client specials and monthly
              promotions available now.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Special */}
      <HolidayNadSpecial />

      {/* Veterans Day Special */}
      <VeteransDaySpecial />

      {/* Claim Form */}
      <section id="claim-form" className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Claim Your Special
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Fill out the form below and our team will contact you to
                schedule your appointment and apply your special offer.
              </p>
              <p className="text-white/60">
                Or call us directly at{" "}
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="text-secondary hover:text-secondary-light font-semibold"
                >
                  {CONTACT.phone}
                </Link>
              </p>
            </div>
            <SpecialsForm />
          </div>
        </div>
      </section>

      {/* New Client Offer */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-secondary">
              <div className="bg-secondary p-6 text-white text-center">
                <span className="inline-block bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3">
                  New Client Introductory Offer
                </span>
                <span className="block text-sm text-white/80 mb-2">
                  Limited Availability
                </span>
              </div>
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Claim Your{" "}
                      <span className="text-secondary">
                        ${PRICING.introOffer.price}
                      </span>
                      <span className="text-foreground-muted line-through text-xl ml-2">
                        ${PRICING.introOffer.regularPrice + 56}
                      </span>{" "}
                      Offer!
                    </h2>
                    <p className="text-foreground-muted mb-6">
                      Experience the Prime IV difference with our exclusive
                      first-time client offer. Everything you need for your
                      wellness journey at an unbeatable price.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Choice of 1 of 4 primary IV infusions",
                        "FREE wellness consultation",
                        "State-of-the-art massage chair",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/book-intro-offer"
                        className="btn-primary"
                      >
                        Book Online Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`tel:${CONTACT.phoneClean}`}
                        className="btn-secondary"
                      >
                        <Phone className="w-4 h-4" />
                        {CONTACT.phone}
                      </Link>
                    </div>
                    <p className="text-xs text-foreground-muted mt-4">
                      *One-time state-mandated ${PRICING.medicalClearance}{" "}
                      telehealth screening required at first visit.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-secondary/10 rounded-2xl p-8">
                      <span className="text-6xl font-bold text-secondary">
                        ${PRICING.introOffer.price}
                      </span>
                      <p className="text-foreground-muted mt-2">
                        First visit special
                      </p>
                    </div>
                    <p className="text-sm text-foreground-muted mt-4 max-w-xs mx-auto text-pretty">
                      Your first visit is also step one of our new{" "}
                      <span className="font-semibold text-foreground">
                        Keep the Momentum Going
                      </span>{" "}
                      card — see below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep the Momentum Going program */}
      <MomentumProgramSection className="section-padding bg-background" />
    </>
  );
}
