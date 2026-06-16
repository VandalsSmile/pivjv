import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const SPECIALS = [
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
    theme: {
      header: "bg-accent",
      badge: "bg-white text-accent",
      savings: "text-accent-light",
      check: "text-accent",
      button:
        "bg-accent text-white hover:bg-accent-dark inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors duration-200",
      border: "border border-border",
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
    theme: {
      header: "bg-pink",
      badge: "bg-white text-pink",
      savings: "text-pink-light",
      check: "text-pink",
      button:
        "bg-pink text-white hover:bg-pink-dark inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors duration-200",
      border: "border border-border",
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
            Current Specials
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {SPECIALS.map((special) => (
            <div
              key={special.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${special.theme.border}`}
            >
              <div className={`${special.theme.header} p-6 text-white`}>
                <span
                  className={`inline-block ${special.theme.badge} text-xs font-bold px-3 py-1 rounded-full mb-3`}
                >
                  {special.discount} · {special.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{special.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">${special.price}</span>
                  <span className="text-white/60 line-through">
                    ${special.regularPrice}
                  </span>
                  <span className={`${special.theme.savings} font-semibold`}>
                    {special.savingsLabel}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground-muted mb-4">
                  {special.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {special.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${special.theme.check}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/specials" className={`flex-1 ${special.theme.button}`}>
                    Claim Promo
                  </Link>
                  <Link
                    href={`tel:${CONTACT.phoneClean}`}
                    className="btn-secondary flex-1 justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    Call to Book
                  </Link>
                </div>
                <p className="text-xs text-foreground-muted text-center mt-3">
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
