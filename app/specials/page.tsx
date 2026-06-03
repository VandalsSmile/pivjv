import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Check, ArrowRight } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";
import { SpecialsForm } from "./specials-form";

const IMAGES = {
  myersMigraine: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/myers%20migraine-a6w3PKSJ45owEpJ2wUfmM9ovDxTSLv.png",
  nurseHelping: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIVJV%2BIV%2Bhelp-AgKswevjak3keZJB9dMGC1pedKRs0d.png",
  ivPens: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIVJV%2BIV%2Bpens-rdp9UNRT3Dj1HJuEZD5NHa9Tq3JcWu.png",
};

export const metadata: Metadata = {
  title: "IV Therapy Specials & Promotions | Monthly Deals",
  description:
    "Take advantage of our exclusive IV therapy offers and experience premium treatments at special rates. New client specials and monthly promotions available now in Huntsville, AL.",
  keywords: [
    "IV therapy specials",
    "IV drip deals",
    "new client offer",
    "IV therapy promotion",
    "Huntsville AL",
    "discount IV therapy",
  ],
};

export default function SpecialsPage() {
  return (
    <>
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

      {/* New Client Offer */}
      <section className="section-padding bg-background">
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
                <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                      <Link href="#claim-form" className="btn-primary">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Specials */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              June 2026
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Monthly Specials
            </h2>
            <p className="text-foreground-muted mt-4">
              Exclusive limited-time offers designed to support your specific
              wellness and beauty goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Summer Slim Special */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
              <div className="bg-primary p-4">
                <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Beauty & Aging - 40% OFF
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  The Summer Slim
                </h3>
                <p className="text-foreground-muted text-sm mb-4">
                  The Skinny Drip
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">$105</span>
                  <span className="text-foreground-muted line-through">
                    $175
                  </span>
                  <span className="text-secondary font-semibold">Save 40%</span>
                </div>
                <p className="text-foreground-muted mb-4">
                  Feel lighter, brighter, and more energized this June. Warmer
                  weather means more events, vacations, pool days, and time
                  outdoors.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">
                    {"What's Included:"}
                  </p>
                  <p className="text-sm text-foreground-muted">
                    The Skinny Drip ($175) — now $105 this month. A metabolism-
                    and energy-focused IV designed to help you feel lighter and
                    more confident.
                  </p>
                </div>
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="btn-secondary w-full justify-center mb-4"
                >
                  <Phone className="w-4 h-4" />
                  Claim Promo
                </Link>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Metabolism support",
                    "Energy + vitality",
                    "Confidence",
                    "Beauty + wellness",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Travel Defense Special */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
              <div className="bg-primary p-4">
                <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Health & Wellness - $50 OFF
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  The Travel Defense
                </h3>
                <p className="text-foreground-muted text-sm mb-4">
                  Immunity Armor Drip + FREE Taurine Injection
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">$200</span>
                  <span className="text-foreground-muted line-through">
                    $250
                  </span>
                  <span className="text-secondary font-semibold">Save $50</span>
                </div>
                <p className="text-foreground-muted mb-4">
                  Hydrate. Recharge. Stay ready for wherever summer takes you.
                  Long flights, busy schedules, and crowded environments can
                  leave you run down.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-foreground text-sm mb-2">
                    {"What's Included:"}
                  </p>
                  <ul className="text-sm text-foreground-muted space-y-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-secondary" />
                      Immunity Armor Drip
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-secondary" />
                      FREE Taurine Injection
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-secondary" />
                      High-dose Vitamin C
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-secondary" />
                      Zinc immune defense
                    </li>
                  </ul>
                </div>
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="btn-secondary w-full justify-center mb-4"
                >
                  <Phone className="w-4 h-4" />
                  Claim Promo
                </Link>
                <p className="text-xs text-foreground-muted text-center">
                  Book 2-3 days before departure for best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myers Migraine Special */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.myersMigraine}
                alt="Myers Migraine IV Treatment - Weather triggering migraines"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                Featured Treatment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Myers Migraine IV
              </h2>
              <p className="text-foreground-muted mb-6">
                Weather triggering migraines? Our Myers Migraine IV is specially formulated 
                to help combat weather-related headaches and migraines. Get relief fast with 
                our targeted IV therapy.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Magnesium for muscle relaxation",
                  "B vitamins for nerve support",
                  "High-dose hydration",
                  "Fast-acting relief",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-primary"
              >
                <Phone className="w-4 h-4" />
                Book Now: {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Form */}
      <section id="claim-form" className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
    </>
  );
}
