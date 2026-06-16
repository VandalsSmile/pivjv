import Link from "next/link";
import { Check } from "lucide-react";
import { MEMBERSHIPS, CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MembershipsSection() {
  return (
    <section id="membership" className="section-padding bg-background-alt scroll-mt-24">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIPS.map((membership) => (
            <div
              key={membership.name}
              className={cn(
                "rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
                membership.highlight
                  ? "bg-primary text-white scale-105 shadow-2xl"
                  : "bg-white"
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
                <h3
                  className={cn(
                    "text-xl font-bold mb-2",
                    membership.highlight ? "text-white" : "text-foreground"
                  )}
                >
                  {membership.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={cn(
                      "text-3xl font-bold",
                      membership.highlight ? "text-white" : "text-primary"
                    )}
                  >
                    ${membership.price}
                  </span>
                  <span
                    className={cn(
                      membership.highlight
                        ? "text-white/70"
                        : "text-foreground-muted"
                    )}
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={cn(
                    "text-sm mb-4",
                    membership.highlight
                      ? "text-white/70"
                      : "text-foreground-muted"
                  )}
                >
                  {membership.value
                    ? `$${membership.value} value`
                    : membership.valueText}
                </p>

                <ul className="space-y-3 mb-6">
                  {membership.features.map((feature, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex items-start gap-2 text-sm",
                        membership.highlight ? "text-white/90" : "text-foreground"
                      )}
                    >
                      <Check
                        className={cn(
                          "w-4 h-4 flex-shrink-0 mt-0.5",
                          membership.highlight
                            ? "text-secondary-light"
                            : "text-secondary"
                        )}
                      />
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
