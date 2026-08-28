import Link from "next/link";
import { Check, MapPin, Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { MOMENTUM_PROGRAM } from "@/lib/momentum-program";

/**
 * A live HTML/CSS recreation of the printed "Keep the Momentum Going" card that
 * guests receive at the end of their first visit. Rendered as real markup (not
 * an image) so it stays crisp at any size, reads to screen readers, and updates
 * automatically when MOMENTUM_PROGRAM changes.
 *
 * `showUseByLines` mirrors the blank "USE BY: ____" fields on the physical card
 * — useful when the card is being shown as an artifact. Leave it off when the
 * card is doing marketing duty on a landing page.
 */
export function MomentumCard({
  showUseByLines = false,
  className = "",
}: {
  showUseByLines?: boolean;
  className?: string;
}) {
  const { steps } = MOMENTUM_PROGRAM;

  return (
    <div
      className={`overflow-hidden rounded-2xl border-4 border-primary bg-white shadow-2xl ${className}`}
    >
      {/* Card face */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-background-alt to-background-alt px-5 py-7 sm:px-8">
        {/* Decorative water/hex texture, matching the printed card */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
          <span className="absolute -right-6 top-2 h-32 w-32 rounded-full bg-secondary/10 blur-xl" />
          <span className="absolute bottom-10 right-1/3 h-24 w-24 rounded-full bg-accent/5 blur-xl" />
        </div>

        <div className="relative">
          {/* Brand lockup */}
          <div className="text-center">
            <p className="text-2xl font-bold uppercase leading-none tracking-[0.15em] text-primary sm:text-3xl">
              Prime IV
            </p>
            <p className="mx-auto mt-2 max-w-xs border-y border-primary/25 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-foreground-muted sm:text-xs">
              Hydration &amp; Wellness
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Jones Valley
            </p>
          </div>

          {/* Headline */}
          <h3 className="mt-5 text-center text-3xl font-extrabold uppercase leading-none tracking-tight text-primary text-balance sm:text-4xl lg:text-5xl">
            Keep the Momentum Going
          </h3>

          {/* Three steps */}
          <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.number} className="relative">
                <div className="flex h-full flex-col rounded-xl border-2 border-secondary/25 bg-white/80 px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                        step.accent === "orange" ? "bg-accent" : "bg-primary"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wide text-primary">
                      {step.label}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="my-3 block border-t-2 border-dashed border-secondary/30"
                  />

                  <p className="text-4xl font-extrabold leading-none text-accent lg:text-5xl">
                    {step.value}
                  </p>

                  {step.valueNote && (
                    <p className="mt-2 text-xs font-bold uppercase tracking-wide text-primary">
                      {step.valueNote}
                    </p>
                  )}

                  {step.window && (
                    <p className="mx-auto mt-3 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-primary">
                      {step.window}
                    </p>
                  )}

                  {showUseByLines && step.window && (
                    <p className="mt-3 flex items-baseline gap-2 text-left text-xs font-bold uppercase tracking-wide text-primary">
                      Use by:
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b-2 border-primary/50"
                      />
                    </p>
                  )}
                </div>

                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary sm:block"
                  />
                )}
              </li>
            ))}
          </ol>

          {/* Then choose what fits */}
          <div className="mt-4 rounded-xl bg-secondary/10 px-4 py-4">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <Check className="h-5 w-5 text-white" strokeWidth={3} />
              </span>
              <div className="text-center sm:text-left">
                <p className="text-base font-bold uppercase tracking-wide text-primary">
                  Then choose what fits:
                </p>
                <p className="text-base font-bold text-primary sm:text-lg">
                  Membership
                  <span className="mx-2 text-accent">&bull;</span>
                  Prepaid IV Pack
                  <span className="mx-2 text-accent">&bull;</span>
                  Individual Visits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navy footer bar */}
      <div className="bg-primary px-5 py-5 text-white sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-start gap-3">
            <MapPin
              className="mt-0.5 h-6 w-6 flex-shrink-0 text-white"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wide sm:text-base">
                Prime IV Jones Valley
              </p>
              <p className="text-sm text-white/80">
                {CONTACT.address.street}, {CONTACT.address.suite}
                <br />
                {CONTACT.address.city}, {CONTACT.address.state}{" "}
                {CONTACT.address.zip}
              </p>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-16 w-px bg-white/25 sm:block"
          />

          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                Call to book
              </p>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="text-2xl font-extrabold text-accent-light transition-colors hover:text-white sm:text-3xl"
              >
                {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-5 border-t border-white/15 pt-4 text-center text-xs leading-relaxed text-white/70">
          {MOMENTUM_PROGRAM.finePrint.join(" ")}
        </p>
      </div>
    </div>
  );
}
