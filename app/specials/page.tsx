import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, ArrowRight, Loader2 } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";
import { SpecialsForm } from "./specials-form";

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

const MONTHLY_SPECIALS = [
  {
    name: "The Travel Defense",
    category: "Health & Wellness Special",
    discount: "$50 OFF",
    price: 160,
    regularPrice: 210,
    savingsLabel: "Save $50",
    description:
      "Stay ready for wherever summer takes you. Built for travel, busy schedules, hydration support, immune wellness, energy, and recovery.",
    features: [
      "Immunity Armor IV — reg. $180",
      "Taurine IV Additive — reg. $30",
      "Energy, immunity & hydration support",
      "Best for travel, long flights & heat",
    ],
    addOns: [
      {
        name: "Amino Acid Blend Injection",
        detail: "Supports mental clarity and energy production.",
        price: "$30",
      },
      {
        name: "NAD+ 100mg",
        detail:
          "Supports energy production, cellular repair, metabolism, and overall wellness.",
        price: "$75",
      },
      {
        name: "The Liver Cleanse Amplifier IV Bag",
        detail:
          "Includes Glutathione and Acetylcysteine for extra daily detoxification support.",
        price: "$40 non-members / $35 members",
      },
    ],
    bestFor:
      "Summer travel, busy schedules, long flights, heat, dehydration, disrupted sleep, and anyone wanting to stay ready for wherever summer takes them.",
    theme: {
      card: "bg-accent",
      badge: "bg-white text-accent",
      button: "text-accent",
    },
  },
  {
    name: "The Summer Slim",
    category: "Beauty & Aging Special",
    discount: "20% OFF",
    price: 120,
    regularPrice: 150,
    savingsLabel: "Save 20%",
    description:
      "Save 20% on The Skinny Drip IV this summer. Designed for energy, confidence, metabolism support, and overall wellness.",
    features: [
      "The Skinny Drip IV — reg. $150",
      "Metabolism & energy support",
      "Feel lighter, brighter & energized",
      "Best for vacations, pool days & events",
    ],
    addOns: [
      {
        name: "Biotin",
        detail:
          "Supports energy metabolism, healthy hair, skin, nails, and overall cellular function.",
        price: "$30",
      },
      {
        name: "NAD+ 100mg",
        detail:
          "Supports energy production, cellular repair, metabolism, and overall wellness.",
        price: "$75",
      },
      {
        name: "The Alpha Amplifier IV Bag",
        detail: "For clients wanting additional metabolic wellness support.",
        price: "$40 non-members / $35 members",
      },
    ],
    bestFor:
      "Warmer weather, vacations, pool days, events, and anyone focused on feeling lighter, brighter, and more energized this June.",
    theme: {
      card: "bg-pink",
      badge: "bg-white text-pink",
      button: "text-pink",
    },
  },
];

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
            {MONTHLY_SPECIALS.map((special) => (
              <div
                key={special.name}
                className={`relative overflow-hidden rounded-2xl shadow-lg text-white ${special.theme.card}`}
              >
                {/* Decorative bubbles */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                >
                  <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                  <span className="absolute top-24 -left-12 w-32 h-32 rounded-full bg-white/10" />
                  <span className="absolute bottom-8 right-10 w-20 h-20 rounded-full bg-white/10" />
                  <span className="absolute -bottom-12 left-16 w-36 h-36 rounded-full bg-white/5" />
                  <span className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-white/10" />
                </div>

                <div className="relative p-8">
                  <span
                    className={`inline-block ${special.theme.badge} text-xs font-bold px-3 py-1 rounded-full mb-3`}
                  >
                    {special.discount} · {special.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{special.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold">${special.price}</span>
                    <span className="text-white/60 line-through">
                      ${special.regularPrice}
                    </span>
                    <span className="font-semibold text-white/90">
                      {special.savingsLabel}
                    </span>
                  </div>

                  <p className="text-white/90 mb-4">{special.description}</p>
                  <ul className="space-y-2 mb-6">
                    {special.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-white/90"
                      >
                        <Check className="w-4 h-4 flex-shrink-0 text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl bg-white/15 p-5 mb-6">
                    <h4 className="text-sm font-bold uppercase tracking-wide mb-3">
                      Recommended Add-Ons
                    </h4>
                    <ul className="space-y-3">
                      {special.addOns.map((addOn) => (
                        <li key={addOn.name} className="text-sm">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="font-semibold">{addOn.name}</span>
                            <span className="flex-shrink-0 font-semibold text-white/90">
                              {addOn.price}
                            </span>
                          </div>
                          <p className="text-white/80">{addOn.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-white/90 mb-6">
                    <span className="font-bold">Best For: </span>
                    {special.bestFor}
                  </p>

                  <Link
                    href={`tel:${CONTACT.phoneClean}`}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold transition-colors duration-200 hover:bg-white/90 ${special.theme.button}`}
                  >
                    <Phone className="w-4 h-4" />
                    Call to Book
                  </Link>
                  <p className="text-xs text-white/70 text-center mt-3">
                    Telehealth medical clearance may be required and is not
                    included in this special.
                  </p>
                </div>
              </div>
            ))}
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
