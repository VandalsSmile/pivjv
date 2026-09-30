import Link from "next/link";
import { Phone, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { MONTHLY_SPECIALS as SPECIALS, SPECIALS_MONTH } from "@/lib/monthly-specials";


export function SpecialsSection() {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            Limited Time Offers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            {SPECIALS_MONTH} Specials
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
