import Link from "next/link";
import { ArrowRight, Phone, CalendarClock, BookOpen } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";
import { MOMENTUM_PROGRAM } from "@/lib/momentum-program";
import { MomentumCard } from "@/components/momentum-card";

/**
 * Reusable "Keep the Momentum Going" section. Drops onto the homepage,
 * /specials, /intro-offer, and the announcement article. All copy comes from
 * lib/momentum-program.ts.
 */
export function MomentumProgramSection({
  className = "section-padding bg-background",
  eyebrow = "New for New Guests",
  heading = MOMENTUM_PROGRAM.name,
  description = MOMENTUM_PROGRAM.description,
  showNextSteps = true,
  showCta = true,
  showLearnMore = true,
  showUseByLines = false,
}: {
  className?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  showNextSteps?: boolean;
  showCta?: boolean;
  showLearnMore?: boolean;
  showUseByLines?: boolean;
}) {
  return (
    <section className={className}>
      <div className="container-custom mx-auto">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 font-semibold uppercase tracking-wide text-secondary">
            {eyebrow}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
            {heading}
          </h2>
          <p className="text-lg text-foreground-muted text-pretty">
            {description}
          </p>
        </div>

        {/* The card itself */}
        <div className="mx-auto max-w-4xl">
          <MomentumCard showUseByLines={showUseByLines} />
          <p className="mt-4 text-center text-sm text-foreground-muted">
            You&apos;ll receive this card at the end of your first visit — we
            write your use-by dates on it before you leave, so there&apos;s no
            code to remember.
          </p>
        </div>

        {/* Step-by-step explainer */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {MOMENTUM_PROGRAM.steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-white ${
                    step.accent === "orange" ? "bg-accent" : "bg-primary"
                  }`}
                >
                  {step.number}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                    {step.label}
                  </p>
                  <p className="text-2xl font-bold leading-none text-accent">
                    {step.value}
                  </p>
                </div>
              </div>
              <p className="flex-1 leading-relaxed text-foreground-muted">
                {step.description}
              </p>
              {step.window && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <CalendarClock
                    className="h-4 w-4 flex-shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  {step.window}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Then choose what fits */}
        {showNextSteps && (
          <div className="mx-auto mt-14 max-w-5xl">
            <h3 className="mb-2 text-center text-2xl font-bold text-balance">
              After Visit Three, You Choose What Fits
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-center text-foreground-muted text-pretty">
              No auto-enrollment, no pressure. By your third visit you&apos;ll
              know exactly how often your body wants an IV — and we&apos;ll help
              you pick the option that costs the least for that rhythm.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {MOMENTUM_PROGRAM.nextSteps.map((option) => (
                <div
                  key={option.title}
                  className="flex flex-col rounded-xl border border-border bg-background-alt p-6"
                >
                  <h4 className="mb-2 text-lg font-bold">{option.title}</h4>
                  <p className="mb-4 flex-1 leading-relaxed text-foreground-muted">
                    {option.description}
                  </p>
                  <Link
                    href={option.href}
                    className="inline-flex items-center gap-1 font-semibold text-secondary transition-all hover:gap-2 hover:text-secondary-dark"
                  >
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        {showCta && (
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-primary p-8 text-center text-white shadow-lg md:p-10">
            <h3 className="mb-3 text-2xl font-bold text-balance md:text-3xl">
              Start With Visit One — ${PRICING.introOffer.price}
            </h3>
            <p className="mx-auto mb-6 max-w-xl text-white/80 text-pretty">
              Book your ${PRICING.introOffer.price} new client special and
              you&apos;re automatically in the program. We&apos;ll hand you your
              card on the way out.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/intro-offer" className="btn-accent">
                Book My First Visit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </Link>
            </div>
            {showLearnMore && (
              <Link
                href="/learn-more/keep-the-momentum-going"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <BookOpen className="h-4 w-4" />
                Read how the program works
              </Link>
            )}
            <p className="mt-6 text-xs text-white/60">
              *First-time guests only. One-time state-mandated $
              {PRICING.medicalClearance} telehealth screening required at your
              first visit. {MOMENTUM_PROGRAM.finePrint.join(" ")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
