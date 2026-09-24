import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Clock,
  Check,
  Phone,
  Mail,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { MomentumProgramSection } from "@/components/momentum-program-section";
import {
  CONTACT,
  HOURS,
  PRICING,
  BOOKING_LINKS,
} from "@/lib/constants";
import { BookIntroForm } from "./book-intro-form";

export const metadata: Metadata = {
  title: `Book Your $${PRICING.introOffer.price} Intro Offer Online | Prime IV Huntsville`,
  description: `Pick the date and time that works for you and we'll confirm it — no phone tag required. Your first IV drip at Prime IV Hydration & Wellness Jones Valley is just $${PRICING.introOffer.price} with code ${PRICING.introOffer.promoCode}.`,
  keywords: [
    "book IV therapy Huntsville online",
    "$85 intro offer IV Huntsville",
    "schedule IV drip Jones Valley",
    "Prime IV Huntsville appointment",
  ],
  alternates: { canonical: "/book-intro-offer" },
  openGraph: { url: "/book-intro-offer" },
};

const INCLUDED = [
  "A private consultation with a licensed wellness expert",
  "Your choice of one signature IV drip",
  "Relaxation in a zero-gravity massage chair",
  "A personalized vitamin regimen recommendation",
];

const TRUST_BADGES = [
  { icon: Star, label: "5.0 Google Rating" },
  { icon: ShieldCheck, label: "Licensed Medical Team" },
  { icon: Clock, label: "About 60 Minutes" },
];

export default function BookIntroOfferPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book Intro Offer", path: "/book-intro-offer" },
        ])}
      />

      {/* Hero */}
      <section className="bg-background-alt">
        <div className="container-custom mx-auto px-4 py-14 text-center md:px-8 lg:py-16">
          <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            First-Time Visitors Only
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold text-balance text-foreground md:text-5xl">
            Book Your{" "}
            <span className="text-secondary">${PRICING.introOffer.price}</span>{" "}
            Intro Offer Online
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-muted text-pretty">
            Pick the date and time that works for you and we&apos;ll confirm it
            — no phone tag required. Our standard rate is $
            {PRICING.nonMemberDrip} per drip; your first visit is $
            {PRICING.introOffer.price} with code{" "}
            <span className="font-semibold text-primary">
              {PRICING.introOffer.promoCode}
            </span>
            .
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted"
              >
                <Icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking layout */}
      <section id="book" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_20rem]">
            {/* Left — the interactive booking form */}
            <div className="rounded-2xl border border-border bg-background-alt/40 p-6 md:p-8">
              <BookIntroForm />
            </div>

            {/* Right — supporting details */}
            <aside className="space-y-6">
              {/* What's included */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-bold text-foreground">
                  What&apos;s included
                </h2>
                <ul className="space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                  <Clock className="h-5 w-5 text-secondary" />
                  Hours
                </h2>
                <ul className="space-y-1.5 text-sm">
                  {HOURS.days.map(({ day, hours }) => (
                    <li
                      key={day}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-foreground-muted">{day}</span>
                      <span className="font-medium text-foreground">
                        {hours}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                  <Link
                    href={`tel:${CONTACT.phoneClean}`}
                    className="flex items-center gap-2 text-foreground-muted transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
                    {CONTACT.phone}
                  </Link>
                  <Link
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-2 break-all text-foreground-muted transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0 text-secondary" />
                    {CONTACT.email}
                  </Link>
                  <Link
                    href={CONTACT.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-foreground-muted transition-colors hover:text-primary"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    {CONTACT.address.full}
                  </Link>
                </div>
              </div>

              {/* Been here before? */}
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                  <Users className="h-5 w-5 text-secondary" />
                  Been here before?
                </h2>
                <p className="mb-4 text-sm text-foreground-muted">
                  The ${PRICING.introOffer.price} price is for first visits
                  only. Returning guests and members book real-time
                  availability directly in our scheduler.
                </p>
                <div className="space-y-2">
                  <Link
                    href={BOOKING_LINKS.member}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1 rounded-lg border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Member Booking
                  </Link>
                  <Link
                    href={BOOKING_LINKS.nonMember}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1 rounded-lg border border-primary px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Non-Member Booking
                  </Link>
                </div>
                <Link
                  href="/intro-offer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-all hover:gap-2 hover:text-secondary-dark"
                >
                  Read about the intro offer
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Keep the Momentum Going */}
      <MomentumProgramSection
        className="section-padding bg-background-alt"
        eyebrow="After Your First Visit"
        showNextSteps
        showCta={false}
        showLearnMore={false}
      />

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto max-w-3xl text-center">
          <p className="mb-2 font-semibold uppercase tracking-wider text-secondary-light">
            Your Wellness Journey Starts Here
          </p>
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
            Feel better, faster — in as little as 45 minutes
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80 text-pretty">
            Medical-grade IV therapy in a relaxing spa setting. HSA/FSA
            eligible. Same-day appointments in Huntsville.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#book" className="btn-primary">
              Book Your ${PRICING.introOffer.price} Visit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
