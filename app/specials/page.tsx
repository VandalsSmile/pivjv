import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import Link from "next/link";
import { Phone, Check, ArrowRight, Loader2 } from "lucide-react";
import { CONTACT, PRICING, BOOKING_LINKS } from "@/lib/constants";
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
  alternates: { canonical: "/specials" },
};

const MONTHLY_SPECIALS = [
  {
    name: "The Revitalizer",
    category: "Health & Wellness Special",
    discount: "$30 OFF",
    price: 150,
    regularPrice: 180,
    savingsLabel: "Save $30",
    description:
      "July is when people start feeling the effects of longer days, packed schedules, kids being out of school, outdoor activities, and mild dehydration. Many people blame stress or aging when they're actually running on empty. The Revitalizer is designed for busy professionals, parents, and active adults who feel tired, mentally drained, and unable to keep up with everything summer throws at them.",
    features: [
      "The Revitalizer IV — reg. $180",
      "Hydration, energy & mental clarity support",
      "Replenishes essential vitamins & minerals",
      "Best for busy summer schedules",
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
      "Busy professionals, parents, and active adults who feel tired, mentally drained, and unable to keep up with everything summer throws at them.",
    theme: {
      card: "bg-accent",
      badge: "bg-white text-accent",
      button: "text-accent",
    },
  },
  {
    name: "The Glow Drip Bundle",
    category: "Beauty & Aging Special",
    discount: "$60 OFF",
    price: 170,
    regularPrice: 230,
    savingsLabel: "Save $60",
    description:
      "July brings more sunshine, outdoor events, pool days, and vacations—but increased UV exposure and heat can leave skin looking dry, dull, and tired. Sun exposure also contributes to oxidative stress, which can accelerate visible signs of aging and affect overall skin appearance. This bundle pairs The Glow Drip with The Restoration Amplifier to keep your skin hydrated and radiant all summer.",
    features: [
      "The Glow Drip — reg. $180",
      "The Restoration Amplifier — reg. $50",
      "Skin hydration & antioxidant support",
      "Combats summer sun & oxidative stress",
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
      "Anyone facing more sun exposure, outdoor events, pool days, and vacations who wants to combat dry, dull, tired-looking skin and support a healthy summer glow.",
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
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Specials", path: "/specials" }])]} />
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

      {/* July 4th Specials */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                Available to Book 6/27 – 7/5
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Book Now Before (or After) Your 4th Fun!
              </h2>
              <p className="text-foreground-muted mt-4 max-w-3xl mx-auto">
                Our special 4th of July offers are available to book now for
                6/27&ndash;7/5. Get a B12 injection for just $17.76 (reg. $30) or
                choose our Freedom Fuel Drip for $76 (reg. $99) to help support
                your body before the holiday activities begin. Availability fills
                quickly, so now is the best time to plan ahead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "B12 Injection",
                  price: "17.76",
                  regularPrice: "30",
                  description:
                    "A quick energy and metabolism boost to keep you going through all your holiday celebrations.",
                },
                {
                  name: "Freedom Fuel Drip",
                  price: "76",
                  regularPrice: "99",
                  description:
                    "A festive IV drip designed to hydrate, energize, and support your body before the holiday activities begin.",
                },
              ].map((offer) => (
                <div
                  key={offer.name}
                  className="relative overflow-hidden rounded-2xl shadow-lg bg-primary text-white"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                  >
                    <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                    <span className="absolute bottom-8 right-10 w-20 h-20 rounded-full bg-white/10" />
                    <span className="absolute -bottom-12 left-16 w-36 h-36 rounded-full bg-white/5" />
                  </div>
                  <div className="relative p-8 flex flex-col h-full">
                    <span className="inline-block self-start bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      4th of July Special
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold">${offer.price}</span>
                      <span className="text-white/60 line-through">
                        reg. ${offer.regularPrice}
                      </span>
                    </div>
                    <p className="text-white/90 mb-6 flex-grow">
                      {offer.description}
                    </p>
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors duration-200 hover:bg-white/90"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground-muted text-center mt-6">
              One-time required telehealth fee of ${PRICING.medicalClearance} for
              first-timers.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Specials */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              July 2026
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              July Specials
            </h2>
            <p className="text-foreground-muted mt-4">
              Exclusive limited-time offers designed to support your specific
              wellness and beauty goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        href={BOOKING_LINKS.introOffer}
                        target="_blank"
                        rel="noopener noreferrer"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
