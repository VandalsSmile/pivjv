import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Gift,
  Droplets,
  Stethoscope,
  UtensilsCrossed,
  Armchair,
  CalendarDays,
  BadgeCheck,
  CreditCard,
  Ticket,
  AlertCircle,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  eventSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/constants";
import { TextToBookLink } from "@/components/text-to-book-link";
import {
  MAHJONG_EVENT,
  EVENT_DATE_LABEL,
  EVENT_WHEN_LABEL,
  HAS_EVENT_DATE,
  WHATS_INCLUDED,
  HOW_IT_WORKS,
  EVENT_FAQS,
} from "@/lib/mahjong-event";
import { MahjongRsvpForm } from "./mahjong-rsvp-form";

const HERO_IMAGE = "/images/mahjong-night-hero.png";

export const metadata: Metadata = {
  title: `Mahjong Night + IV Drip — $${MAHJONG_EVENT.ticketPrice}, Only ${MAHJONG_EVENT.seats} Seats | Prime IV Jones Valley`,
  description: `Mahjong Night at Prime IV Jones Valley in Huntsville, AL. ${MAHJONG_EVENT.timeLabel}. $${MAHJONG_EVENT.ticketPrice} includes an ${MAHJONG_EVENT.drip.name} therapy drip, charcuterie, drinks, and a raffle entry to win a brand-new Mahjong set. Only ${MAHJONG_EVENT.seats} seats — RSVP required.`,
  keywords: [
    "Mahjong night Huntsville",
    "IV therapy event Huntsville",
    "Prime IV Jones Valley event",
    "mahjong and IV drip",
    "Huntsville AL wellness event",
    "girls night out Huntsville",
    "mahjong set giveaway",
  ],
  alternates: { canonical: "/mahjong-night" },
  openGraph: {
    url: "/mahjong-night",
    images: [{ url: HERO_IMAGE }],
  },
};

const includedIcons = {
  Droplets,
  Stethoscope,
  UtensilsCrossed,
  Gift,
  Users,
  Armchair,
} as const;

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Nurses On Site" },
  { icon: CreditCard, label: "HSA / FSA Accepted" },
  { icon: Users, label: "Beginners Genuinely Welcome" },
  { icon: Ticket, label: "One Flat Price, No Upsells" },
];

const eventFacts = [
  {
    icon: CalendarDays,
    label: "When",
    value: EVENT_DATE_LABEL,
    detail: MAHJONG_EVENT.timeLabel,
  },
  {
    icon: Users,
    label: "Seats",
    value: `${MAHJONG_EVENT.seats} only`,
    detail: "First to RSVP, first served",
  },
  {
    icon: Ticket,
    label: "Price",
    value: `$${MAHJONG_EVENT.ticketPrice}`,
    detail: "Drip, food & raffle included",
  },
  {
    icon: MapPin,
    label: "Where",
    value: "Prime IV Jones Valley",
    detail: `${CONTACT.address.street}, ${CONTACT.address.suite}`,
  },
];

export default function MahjongNightPage() {
  return (
    <>
      <JsonLd
        data={[
          ...(HAS_EVENT_DATE
            ? [
                eventSchema({
                  name: MAHJONG_EVENT.name,
                  description: `An evening of mahjong and IV therapy at Prime IV Jones Valley in Huntsville, AL. $${MAHJONG_EVENT.ticketPrice} includes an ${MAHJONG_EVENT.drip.name} therapy drip administered by a licensed nurse, charcuterie, drinks, snacks, and a raffle entry to win a brand-new Mahjong set. Limited to ${MAHJONG_EVENT.seats} guests.`,
                  path: "/mahjong-night",
                  isoDate: MAHJONG_EVENT.isoDate as string,
                  startTime: MAHJONG_EVENT.startTime24,
                  endTime: MAHJONG_EVENT.endTime24,
                  price: MAHJONG_EVENT.ticketPrice,
                  image: HERO_IMAGE,
                  maximumAttendeeCapacity: MAHJONG_EVENT.seats,
                }),
              ]
            : []),
          faqSchema(EVENT_FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Mahjong Night", path: "/mahjong-night" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative text-white section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${HERO_IMAGE}')`,
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container-custom mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-light font-semibold uppercase tracking-wide mb-3">
                One Night · {MAHJONG_EVENT.seats} Seats · RSVP Required
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Mahjong Night at Prime IV — Play a Hand While Your IV Drips.
              </h1>
              <p className="text-white/80 text-lg mb-8 text-pretty">
                We&apos;re closing the lounge for an evening of mahjong,
                charcuterie, and {MAHJONG_EVENT.drip.name} therapy drips — with
                nurses on hand and a brand-new Mahjong set going to one lucky
                winner. Twenty-four seats. That&apos;s it.
              </p>

              {/* Price + scarcity anchor */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl p-4 border bg-accent/20 border-accent-light">
                  <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                    All-In Per Person
                  </p>
                  <p className="text-3xl font-bold text-white leading-none tabular-nums">
                    ${MAHJONG_EVENT.ticketPrice}
                  </p>
                  <p className="text-sm text-accent-light font-semibold mt-2">
                    {MAHJONG_EVENT.drip.name} drip included
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    Plus food, drinks &amp; raffle entry
                  </p>
                </div>
                <div className="rounded-xl p-4 border bg-white/10 border-white/20">
                  <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                    Seats Available
                  </p>
                  <p className="text-3xl font-bold text-white leading-none tabular-nums">
                    {MAHJONG_EVENT.seats}
                  </p>
                  <p className="text-sm text-accent-light font-semibold mt-2">
                    {MAHJONG_EVENT.timeLabel}
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    First to RSVP, first served
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#rsvp-form" className="btn-accent">
                  RSVP for My Seat
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                  <Phone className="w-4 h-4" />
                  {CONTACT.phone}
                </Link>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {trustSignals.map((signal) => (
                  <li
                    key={signal.label}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <signal.icon
                      className="w-4 h-4 text-accent-light shrink-0"
                      aria-hidden="true"
                    />
                    {signal.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pl-4">
              <MahjongRsvpForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Event facts bar */}
      <section className="bg-background-alt border-b border-border">
        <div className="container-custom mx-auto px-4 py-8 md:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {eventFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <fact.icon
                    className="h-5 w-5 text-secondary"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                    {fact.label}
                  </dt>
                  <dd className="font-bold text-foreground leading-tight">
                    {fact.value}
                  </dd>
                  <dd className="text-sm text-foreground-muted leading-snug">
                    {fact.detail}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The pitch */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Two Hours, Zero Wasted
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              You Were Going to Sit Somewhere Tonight Anyway.
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed text-pretty">
              Mahjong takes a table, good company, and about two hours. An IV
              drip takes a comfortable chair and about forty minutes. Put them
              in the same room and you get something better than either one on
              its own — you leave having actually enjoyed your evening{" "}
              <em>and</em> feeling noticeably better than when you walked in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHATS_INCLUDED.map((item) => {
              const Icon = includedIcons[item.icon];
              return (
                <div key={item.title} className="card card-hover">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Icon
                      className="h-6 w-6 text-secondary"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-balance">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Raffle */}
      <section className="section-padding bg-background-dark text-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/mahjong-set-raffle.png"
                alt="A brand-new American mahjong set with engraved tiles, racks, and chips laid out in its case — the raffle prize for Mahjong Night"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-accent-light font-semibold uppercase tracking-wide mb-3">
                One Winner, Drawn Live
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
                Win a Brand-New Mahjong Set.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6 text-pretty">
                Every confirmed RSVP is entered automatically — no extra
                purchase, no extra step, no raffle tickets to buy at the door.
                We draw the winner live before the last hand of the night, and
                someone walks out with a complete set of their own.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Entry included with your seat — nothing more to buy",
                  "Must be present at the drawing to win",
                  "One entry per confirmed guest",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Gift
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-light"
                      aria-hidden="true"
                    />
                    <span className="text-white/85">{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="#rsvp-form" className="btn-accent">
                Enter by Reserving My Seat
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              How the RSVP Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              Three Steps — and One Thing to Know.
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed text-pretty">
              We only have {MAHJONG_EVENT.seats} seats, so we handle RSVPs in
              the order they arrive. Please read step two carefully.
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {HOW_IT_WORKS.map((step, index) => (
              <li key={step.title} className="card">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="max-w-3xl mx-auto rounded-xl border-2 border-accent/30 bg-accent/5 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <AlertCircle
                className="mt-0.5 h-6 w-6 shrink-0 text-accent-dark"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-lg font-bold mb-1.5">
                  An RSVP is not a confirmed seat.
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  Your seat is only held once our team reaches out and confirms
                  it with you. With {MAHJONG_EVENT.seats} seats and a strict
                  first-to-RSVP order, the earlier your form comes in, the
                  better your odds. If we fill up before we get to you,
                  we&apos;ll tell you right away and give you first access to the
                  next one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing detail */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                Straightforward Pricing
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                What You&apos;ll Actually Pay
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed text-pretty">
                One flat fee for the evening. The only possible second line item
                is the state-required screening for first-time IV clients.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-5 sm:p-6 border-b border-border">
                <div>
                  <h3 className="text-lg font-bold">
                    Mahjong Night Seat — Everyone
                  </h3>
                  <p className="text-sm text-foreground-muted mt-1 text-pretty">
                    Your {MAHJONG_EVENT.drip.name} therapy drip, charcuterie,
                    drinks, snacks, mahjong, and your raffle entry.
                  </p>
                </div>
                <p className="text-3xl font-bold text-accent-dark tabular-nums shrink-0">
                  ${MAHJONG_EVENT.ticketPrice}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-5 sm:p-6">
                <div>
                  <h3 className="text-lg font-bold">
                    Telehealth Screening — First-Timers Only
                  </h3>
                  <p className="text-sm text-foreground-muted mt-1 text-pretty">
                    A one-time medical screening required by the state of Alabama
                    before your first infusion. Never charged again. Already a
                    Prime IV client? You&apos;ve done this — skip it.
                  </p>
                </div>
                <p className="text-3xl font-bold text-foreground tabular-nums shrink-0">
                  ${MAHJONG_EVENT.screeningFee}
                </p>
              </div>
            </div>

            <p className="text-sm text-foreground-muted text-center mt-5 text-pretty">
              HSA and FSA cards may be accepted for eligible services. Coverage
              varies by plan — confirm with your plan administrator.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP form */}
      <section id="rsvp-form" className="section-padding scroll-mt-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                {EVENT_WHEN_LABEL}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
                Claim One of the {MAHJONG_EVENT.seats} Seats
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed mb-8 text-pretty">
                Fill out the form and we&apos;ll be in touch to confirm your
                seat. If you&apos;d rather sort it out over the phone, call or
                text us — we&apos;re happy to reserve you that way too.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="text-foreground-muted">
                    <strong className="text-foreground">
                      {EVENT_DATE_LABEL}
                    </strong>{" "}
                    — {MAHJONG_EVENT.timeLabel}. Come at{" "}
                    {MAHJONG_EVENT.startTime} so your drip has time to run.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="text-foreground-muted">
                    <Link
                      href={CONTACT.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-secondary underline"
                    >
                      {CONTACT.address.full}
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="text-foreground-muted">
                    Call{" "}
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="font-semibold text-foreground hover:text-secondary underline"
                    >
                      {CONTACT.phone}
                    </Link>{" "}
                    or{" "}
                    <TextToBookLink
                      showIcon={false}
                      className="font-semibold text-foreground hover:text-secondary underline"
                    >
                      text {CONTACT.textToBook}
                    </TextToBookLink>{" "}
                    to RSVP by phone.
                  </span>
                </li>
              </ul>

              <div className="rounded-xl bg-background-alt border border-border p-5">
                <p className="text-sm text-foreground-muted leading-relaxed text-pretty">
                  <strong className="text-foreground">
                    Never had an IV with us?
                  </strong>{" "}
                  Perfect — this is the most fun possible way to start. Just note
                  it on the form and we&apos;ll walk you through the one-time $
                  {MAHJONG_EVENT.screeningFee} telehealth screening ahead of
                  time so the night itself is nothing but mahjong.
                </p>
              </div>
            </div>

            <MahjongRsvpForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Everything Else You&apos;re Wondering
              </h2>
            </div>

            <div className="space-y-4">
              {EVENT_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-xl border border-border overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-foreground list-none">
                    <span className="text-pretty">{faq.question}</span>
                    <span
                      className="shrink-0 text-secondary transition-transform group-open:rotate-45 text-2xl leading-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-foreground-muted leading-relaxed text-pretty">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
            {MAHJONG_EVENT.seats} Seats. One Night. Don&apos;t Wait On This One.
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 text-pretty">
            ${MAHJONG_EVENT.ticketPrice} gets you an{" "}
            {MAHJONG_EVENT.drip.name} drip, a charcuterie board, a table of good
            company, and a shot at a brand-new Mahjong set. RSVPs are confirmed
            in the order they arrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#rsvp-form" className="btn-accent">
              RSVP for Mahjong Night
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
