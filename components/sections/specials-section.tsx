import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const SPECIALS = [
  {
    name: "Fall Defense Reset",
    category: "Health & Wellness Special",
    discount: "$50 OFF",
    price: 130,
    regularPrice: 180,
    savingsLabel: "Save $50",
    tagline: "",
    description:
      "September brings packed schedules, school routines, more time around crowds, and the beginning of seasonal changes. The Immunity IV helps support hydration, immune wellness, energy, and overall replenishment as you settle into the busy fall season.",
    features: [
      "Immunity IV — reg. $180",
      "Glutathione, Vitamin C & Zinc blend",
      "Hydration & immune wellness support",
      "Energy & overall replenishment",
    ],
    addOns: [
      {
        name: "Vitamin C",
        detail: "Extra antioxidant support to reinforce your immune system.",
        price: "$30",
      },
      {
        name: "Zinc",
        detail:
          "Supports immune function and helps shorten the duration of colds.",
        price: "$30",
      },
      {
        name: "B-12 Injection",
        detail: "Boosts energy metabolism and helps combat fatigue.",
        price: "$30",
      },
    ],
    bestFor:
      "Busy professionals, parents, and students heading into packed fall schedules and more time around crowds who want to support their immune system, hydration, and energy.",
    theme: {
      card: "bg-accent",
      badge: "bg-white text-accent",
      button: "text-accent",
    },
  },
  {
    name: "The Calm Drip + Biotin Bundle",
    category: "Beauty & Aging Special",
    discount: "$50 OFF",
    price: 160,
    regularPrice: 210,
    savingsLabel: "Save $50",
    tagline: "Rested Looks Good on You",
    description:
      "Stress, busy schedules, and poor-quality rest can leave you feeling drained and looking less refreshed. September is a chance to slow things down and make recovery part of your beauty and healthy-aging routine.",
    features: [
      "The Calm Drip — reg. $180",
      "Biotin Injection — reg. $30",
      "Stress recovery & relaxation support",
      "Healthy hair, skin & nails",
    ],
    addOns: [
      {
        name: "Glutathione",
        detail:
          "Master antioxidant that brightens skin and supports detoxification.",
        price: "$45",
      },
      {
        name: "NAD+ or Niagen® Upgrade",
        detail:
          "Premium upgrade to support cellular energy, recovery, mental focus, and healthy aging from the inside out.",
        price: "$75",
      },
      {
        name: "B-12 Injection",
        detail: "Boosts energy metabolism and helps combat fatigue.",
        price: "$30",
      },
    ],
    bestFor:
      "Anyone feeling drained and looking less refreshed from stress, busy schedules, and poor rest who wants to make recovery part of their beauty and healthy-aging routine.",
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
            September Specials
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
                {special.tagline ? (
                  <p className="text-white/90 italic mb-3">
                    {special.tagline}
                  </p>
                ) : null}
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
