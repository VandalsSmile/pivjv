import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const SPECIALS = [
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
        price: "$40",
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
        price: "$40",
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

export function SpecialsSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            Limited Time Offers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            July Specials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SPECIALS.map((special) => (
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
  );
}
