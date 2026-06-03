import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import { MEMBERSHIPS, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "IV Therapy Memberships | Monthly Wellness Plans",
  description:
    "Simplify and save with a Prime IV membership. Get monthly IV drips, injections, VIP status, and exclusive discounts on additional treatments in Huntsville, AL.",
  keywords: [
    "IV therapy membership",
    "monthly IV drip",
    "wellness membership",
    "IV subscription",
    "Huntsville AL",
    "Prime IV membership",
  ],
};

export default function MembershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Memberships
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Simplify and Save With a Membership
            </h1>
            <p className="text-white/80 text-lg mb-8">
              A Prime IV Membership makes it easy to stay at optimal levels of
              hydration and nutrient input month after month. Choose the plan
              that fits your wellness goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-primary"
              >
                <Phone className="w-4 h-4" />
                Call to Join: {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIPS.map((membership) => (
              <div
                key={membership.name}
                className={cn(
                  "bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col",
                  membership.highlight && "ring-2 ring-secondary lg:scale-105 z-10"
                )}
              >
                {membership.badge && (
                  <div
                    className={cn(
                      "text-center py-2 text-xs font-bold text-white",
                      membership.highlight ? "bg-secondary" : "bg-primary"
                    )}
                  >
                    {membership.badge}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {membership.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-primary">
                      ${membership.price}
                    </span>
                    <span className="text-foreground-muted">/mo</span>
                  </div>
                  <p className="text-sm text-foreground-muted mb-6">
                    {membership.value
                      ? `$${membership.value} value`
                      : membership.valueText}
                  </p>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {membership.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`tel:${CONTACT.phoneClean}`}
                    className={cn(
                      "w-full justify-center",
                      membership.highlight ? "btn-primary" : "btn-secondary"
                    )}
                  >
                    {membership.name === "Enlightenment"
                      ? "Call to Join"
                      : "Become A Member"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-foreground-muted mt-8">
            Terms apply. Valid only at Prime IV {CONTACT.address.city}. All
            memberships are month-to-month with no long-term contracts.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Become a Member?
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Members enjoy exclusive benefits and significant savings on their
              wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Consistent Wellness",
                description:
                  "Regular IV therapy helps maintain optimal hydration and nutrient levels for sustained health benefits.",
              },
              {
                title: "Significant Savings",
                description:
                  "Members save up to 40% compared to single-session pricing, plus exclusive discounts on additional services.",
              },
              {
                title: "VIP Experience",
                description:
                  "Enjoy priority booking, zero-gravity massage chairs, and personalized wellness consultations.",
              },
              {
                title: "Flexibility",
                description:
                  "Month-to-month plans with no long-term contracts. Upgrade, downgrade, or cancel anytime.",
              },
              {
                title: "Expert Guidance",
                description:
                  "Our wellness team will help you choose the right drips and create a personalized treatment plan.",
              },
              {
                title: "Family-Friendly",
                description:
                  "Add family members to your membership for additional savings and shared wellness goals.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-border"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Compare Membership Plans
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  {MEMBERSHIPS.map((m) => (
                    <th key={m.name} className="px-6 py-4 text-center">
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 font-medium">Monthly Price</td>
                  {MEMBERSHIPS.map((m) => (
                    <td key={m.name} className="px-6 py-4 text-center">
                      ${m.price}
                    </td>
                  ))}
                </tr>
                <tr className="bg-background-alt">
                  <td className="px-6 py-4 font-medium">IV Drips Included</td>
                  <td className="px-6 py-4 text-center">1 Primary</td>
                  <td className="px-6 py-4 text-center">1 Any</td>
                  <td className="px-6 py-4 text-center">2 Any</td>
                  <td className="px-6 py-4 text-center">4 Any</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Injections Included</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-center">2</td>
                  <td className="px-6 py-4 text-center">3 Any</td>
                  <td className="px-6 py-4 text-center">5 Any</td>
                </tr>
                <tr className="bg-background-alt">
                  <td className="px-6 py-4 font-medium">Additional Drip Discount</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">15%</td>
                  <td className="px-6 py-4 text-center">20%</td>
                  <td className="px-6 py-4 text-center">25%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Additive Discount</td>
                  <td className="px-6 py-4 text-center">50%</td>
                  <td className="px-6 py-4 text-center">50%</td>
                  <td className="px-6 py-4 text-center">50%</td>
                  <td className="px-6 py-4 text-center">50%</td>
                </tr>
                <tr className="bg-background-alt">
                  <td className="px-6 py-4 font-medium">VIP Status & Massage Chair</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
