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
    includes: [
      { name: "Immunity IV", note: "Glutathione, Vitamin C & Zinc blend", regularPrice: "$180" },
    ],
    benefits: [
      "Hydration & immune wellness support",
      "Energy & overall replenishment",
    ],
    addOns: [
      {
        name: "Lysine IV Additive",
        detail:
          "Increase energy, support healthy tissue and bones, and protect against viruses and cold sores.",
        price: "$30",
      },
      {
        name: "CoQ10 Injection",
        detail: "Energy production, antioxidant defense, and heart health.",
        price: "$35",
      },
      {
        name: "NAD+ 100mg Injection",
        detail:
          "Promote longevity, focus, cellular repair, mood balance, energy, metabolic support, and addiction recovery.",
        price: "$75",
      },
    ],
    bestFor:
      "Busy professionals, parents, and students heading into packed fall schedules and more time around crowds who want to support their immune system, hydration, and energy.",
    theme: {
      bar: "bg-accent",
      badge: "bg-accent/10 text-accent-dark",
      accentText: "text-accent-dark",
      box: "bg-accent/5 border-accent/15",
      button: "bg-accent hover:bg-accent-dark text-white",
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
    includes: [
      { name: "The Calm Drip", note: "Relaxation & stress-recovery blend", regularPrice: "$180" },
      { name: "Biotin Injection", note: "Healthy hair, skin & nails", regularPrice: "$30" },
    ],
    benefits: [
      "Stress recovery & relaxation support",
      "Healthy hair, skin & nails",
    ],
    addOns: [
      {
        name: "NAD+ 100mg Injection",
        detail:
          "Promote longevity, focus, cellular repair, mood balance, energy, metabolic support, and addiction recovery.",
        price: "$75",
      },
      {
        name: "Lipolean Injection",
        detail:
          "Designed to help the body break down and metabolize fat more efficiently.",
        price: "$35",
      },
      {
        name: "Immunity Injection",
        detail:
          "A concentrated immune boost of Vitamin C, Zinc, and Glutathione working synergistically to enhance defense and recovery.",
        price: "$35",
      },
    ],
    bestFor:
      "Anyone feeling drained and looking less refreshed from stress, busy schedules, and poor rest who wants to make recovery part of their beauty and healthy-aging routine.",
    theme: {
      bar: "bg-pink",
      badge: "bg-pink/10 text-pink-dark",
      accentText: "text-pink-dark",
      box: "bg-pink/5 border-pink/15",
      button: "bg-pink hover:bg-pink-dark text-white",
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
              className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
              <div
                aria-hidden="true"
                className={`h-1.5 w-full ${special.theme.bar}`}
              />

              <div className="p-8">
                <span
                  className={`inline-block ${special.theme.badge} text-xs font-bold px-3 py-1 rounded-full mb-3`}
                >
                  {special.discount} · {special.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {special.name}
                </h3>
                {special.tagline ? (
                  <p className="text-foreground-muted italic mb-3">
                    {special.tagline}
                  </p>
                ) : null}
                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className={`text-3xl font-bold ${special.theme.accentText}`}
                  >
                    ${special.price}
                  </span>
                  <span className="text-foreground-muted line-through">
                    ${special.regularPrice}
                  </span>
                  <span className="font-semibold text-foreground-muted">
                    {special.savingsLabel}
                  </span>
                </div>

                <p className="text-foreground-muted mb-4">
                  {special.description}
                </p>

                <div
                  className={`rounded-xl p-5 mb-6 border ${special.theme.box}`}
                >
                  <h4
                    className={`text-sm font-bold uppercase tracking-wide mb-4 ${special.theme.accentText}`}
                  >
                    What You Get
                  </h4>
                  <ul className="space-y-3">
                    {special.includes.map((item) => (
                      <li key={item.name} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${special.theme.accentText}`}
                        />
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-base font-bold text-foreground">
                              {item.name}
                            </span>
                            <span className="flex-shrink-0 text-sm text-foreground-muted line-through">
                              {item.regularPrice}
                            </span>
                          </div>
                          <p className="text-sm text-foreground-muted">
                            {item.note}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="space-y-2 mb-6">
                  {special.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground-muted"
                    >
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${special.theme.accentText}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-background-alt p-5 mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wide mb-3 text-foreground">
                    Recommended Add-Ons
                  </h4>
                  <ul className="space-y-3">
                    {special.addOns.map((addOn) => (
                      <li key={addOn.name} className="text-sm">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-semibold text-foreground">
                            {addOn.name}
                          </span>
                          <span
                            className={`flex-shrink-0 font-semibold ${special.theme.accentText}`}
                          >
                            {addOn.price}
                          </span>
                        </div>
                        <p className="text-foreground-muted">{addOn.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-foreground-muted mb-6">
                  <span className="font-bold text-foreground">Best For: </span>
                  {special.bestFor}
                </p>

                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors duration-200 ${special.theme.button}`}
                >
                  <Phone className="w-4 h-4" />
                  Call to Book
                </Link>
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
