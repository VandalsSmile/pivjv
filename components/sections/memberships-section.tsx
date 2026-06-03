import Link from "next/link";
import { Check } from "lucide-react";
import { MEMBERSHIPS, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MembershipsSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            Memberships
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Simplify and Save With a Membership
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            A Prime IV Membership makes it easy to stay at optimal levels of
            hydration and nutrient input month after month.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIPS.map((membership) => (
            <div
              key={membership.name}
              className={cn(
                "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
                membership.highlight && "ring-2 ring-secondary scale-105"
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

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {membership.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-primary">
                    ${membership.price}
                  </span>
                  <span className="text-foreground-muted">/mo</span>
                </div>
                <p className="text-sm text-foreground-muted mb-4">
                  {membership.value
                    ? `$${membership.value} value`
                    : membership.valueText}
                </p>

                <ul className="space-y-3 mb-6">
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
                  href={
                    membership.name === "Enlightenment"
                      ? `tel:${CONTACT.phoneClean}`
                      : "/memberships"
                  }
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
          Terms apply. Valid only at Prime IV {CONTACT.address.city}.
        </p>
      </div>
    </section>
  );
}
