import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Check,
  Users,
  Coffee,
  Armchair,
  Droplets,
  BatteryCharging,
  CalendarCheck,
  ClipboardList,
  PartyPopper,
  BadgeCheck,
  Microscope,
  Sparkles,
  ExternalLink,
  Building2,
  Trophy,
  HeartHandshake,
  Briefcase,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/structured-data";
import { CONTACT, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { TeamSessionForm } from "./team-session-form";

const REEL_URL = "https://www.facebook.com/share/r/1BdYxx2CuG";

export const metadata: Metadata = {
  title:
    "Corporate & Team Wellness Sessions | Prime IV Hydration Huntsville, AL",
  description:
    "Treat your team to a Monday morning that doesn't feel like a Monday morning. Prime IV Huntsville hosts private corporate team wellness mornings with IV therapy, breakfast, drinks, and massage chairs. Request your team session.",
  keywords: [
    "corporate wellness Huntsville",
    "team wellness event Huntsville AL",
    "corporate IV therapy",
    "employee appreciation Huntsville",
    "team building wellness morning",
    "group IV therapy Huntsville",
  ],
  alternates: { canonical: "/corporate-team-wellness" },
  openGraph: {
    title: "Corporate & Team Wellness Sessions | Prime IV Huntsville",
    description:
      "Private team wellness mornings with IV therapy, breakfast, drinks, and massage chairs. We'd love to host your team next.",
    url: `${SITE_CONFIG.url}/corporate-team-wellness`,
    type: "website",
  },
};

const included = [
  {
    icon: Droplets,
    title: "IVs Built For Each Person",
    description:
      "Our licensed medical team consults with every team member and matches them to a drip — energy and focus, immune support, recovery, or hydration. Nobody gets a one-size-fits-all treatment.",
  },
  {
    icon: Coffee,
    title: "Breakfast & Drinks",
    description:
      "Coffee, wellness water, and a breakfast spread while everyone gets settled. It turns a wellness appointment into something that actually feels like a team event.",
  },
  {
    icon: Armchair,
    title: "Massage Chair Time",
    description:
      "Our VIP zero-gravity massage chairs run the whole session. For most teams this ends up being the part everyone talks about afterward.",
  },
  {
    icon: Users,
    title: "The Space To Yourselves",
    description:
      "We block off our lounge for your group so your team can talk, laugh, and unplug without sharing the room with walk-in appointments.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell us about your team",
    description:
      "Send us your headcount, the vibe you're going for, and a rough timeframe. We'll come back with availability and a custom quote — pricing depends on team size and which IVs your group chooses.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "We plan the morning",
    description:
      "We lock in your date, plan the breakfast and drinks, and pre-brief our nurses so the check-in line moves fast. You just tell your team where to show up.",
  },
  {
    icon: PartyPopper,
    step: "03",
    title: "Your team shows up and relaxes",
    description:
      "Everyone gets a consult, an IV, a massage chair, and breakfast. Most groups are in and out inside about an hour and a half, feeling noticeably better than when they walked in.",
  },
];

const audiences = [
  {
    icon: Trophy,
    title: "Employee Appreciation",
    description:
      "A reward that people actually feel in their body, instead of another gift card nobody remembers.",
  },
  {
    icon: Briefcase,
    title: "Sales Kickoffs & Quarter Starts",
    description:
      "Start the quarter with your team energized and in a good mood rather than dragging into a conference room.",
  },
  {
    icon: HeartHandshake,
    title: "Client & Partner Hosting",
    description:
      "Host clients or referral partners somewhere memorable. It beats another lunch meeting.",
  },
  {
    icon: Building2,
    title: "Post-Crunch Recovery",
    description:
      "Coming off a launch, an audit, tax season, or a brutal travel stretch? This is how you help your people reset.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed medical staff on site" },
  { icon: Microscope, label: "Pharmaceutical-grade ingredients" },
  { icon: Sparkles, label: "Private, spa-like VIP lounge" },
  { icon: Users, label: "Groups large and small welcome" },
];

const faqs = [
  {
    question: "How many people do we need for a team wellness session?",
    answer:
      "We host groups of all sizes — from a handful of teammates up to large departments. Smaller groups are easy to schedule around our regular hours, and larger groups may get a dedicated block of time. Tell us your headcount and we'll build the morning around it.",
  },
  {
    question: "How much does a corporate team session cost?",
    answer:
      "Pricing depends on your team size and which IVs your group selects, so we quote every session individually. Send us your details through the form and we'll come back with a custom quote and available dates — no obligation.",
  },
  {
    question: "How long does a team session take?",
    answer:
      "Plan for roughly 90 minutes from arrival to walking out. That covers check-in and consults, the IV itself (typically 30-45 minutes), massage chair time, and breakfast. We can compress or extend it based on your schedule.",
  },
  {
    question: "Does everyone on the team have to get an IV?",
    answer:
      "No. Every team member is consulted individually by our medical staff, and anyone who prefers not to receive an IV can still join for breakfast, drinks, and the massage chairs. We also offer vitamin injections as a quicker alternative.",
  },
  {
    question: "Can we do this on a Monday morning?",
    answer:
      "Monday mornings are exactly what these sessions were built for — that's when the AE Wealth Management team joined us. Our regular Monday hours are limited, so Monday groups are scheduled as a private block. Just flag Monday in your inquiry and we'll make it work.",
  },
  {
    question: "Who handles the breakfast and drinks?",
    answer:
      "We do. Coffee, wellness water, and a breakfast spread are part of the morning. If your team has dietary needs or you want to bring something specific, tell us in your inquiry and we'll plan around it.",
  },
  {
    question: "Can the company pay for the whole team at once?",
    answer:
      "Yes. Most companies cover the session as a single invoice so employees don't pay anything on the day. We can also split it, or set some team members up with gift cards or memberships if you'd rather they choose their own add-ons.",
  },
];

export default function CorporateTeamWellnessPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Corporate & Team Wellness Sessions",
            description:
              "Private corporate team wellness mornings in Huntsville, AL featuring IV hydration therapy, breakfast, drinks, and VIP massage chairs for company teams, employee appreciation events, and client hosting.",
            path: "/corporate-team-wellness",
            serviceType: "Corporate Wellness IV Therapy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Corporate & Team Wellness",
              path: "/corporate-team-wellness",
            },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-light font-semibold uppercase tracking-wide text-sm px-3 py-1.5 rounded-full mb-5">
                <Users className="w-4 h-4" aria-hidden="true" />
                Now Booking Team Wellness Mornings
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                A Monday Morning That Doesn&apos;t Feel Like A Monday Morning
              </h1>
              <p className="text-white/80 text-lg mb-6 text-pretty leading-relaxed">
                We&apos;re now offering team wellness mornings at{" "}
                {SITE_CONFIG.name} in {CONTACT.address.city}. IVs matched to
                each person, breakfast and drinks, and some much-needed time in
                the massage chairs — all in our private VIP lounge.
              </p>
              <p className="text-white/80 text-lg mb-8 text-pretty leading-relaxed">
                The AE Wealth Management team already did it. Want to treat your
                employees to the same? We&apos;d love to host your team next.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#team-inquiry" className="btn-primary">
                  Request Your Team Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="btn-outline"
                >
                  <Phone className="w-4 h-4" />
                  {CONTACT.phone}
                </Link>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "IVs tailored per team member",
                  "Breakfast, coffee & wellness water",
                  "VIP massage chair access",
                  "Custom quote for your group size",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className="w-5 h-5 text-secondary-light flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <TeamSessionForm />
          </div>
        </div>
      </section>

      {/* Social proof — AE Wealth Management */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-xl bg-primary">
                <video
                  className="w-full h-auto block"
                  src="/videos/team-wellness-morning.mp4"
                  poster="/images/vip-spa-lounge.jpg"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Video of the AE Wealth Management team's wellness morning at Prime IV Hydration & Wellness in Huntsville"
                />
              </div>
            </div>

            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide text-sm mb-3">
                It Already Happened Here
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 text-balance">
                The AE Wealth Management Team Started Their Week With Us
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed mb-5">
                They came in as a group for IVs, breakfast, drinks, and some
                much-needed time in the massage chairs. No conference room, no
                slide deck — just their whole team unplugging together before
                the week got going.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-8">
                That&apos;s the whole idea. Your people spend the week running
                on empty for the company. This is a morning where the company
                gives something back that they can actually feel.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={REEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Watch The Full Reel On Facebook
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link href="#team-inquiry" className="btn-secondary">
                  Book Your Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              What A Team Wellness Morning Includes
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed">
              Every session is built around your group. Here&apos;s what your
              team can expect from the moment they walk in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item) => (
              <div key={item.title} className="card card-hover">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon
                    className="w-6 h-6 text-secondary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              How We Set It Up
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Three steps, and we handle the logistics on our end so you
              aren&apos;t planning an event on top of your actual job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-4xl font-bold text-white/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Good Reasons To Get Your Team In Here
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed">
              Teams book these mornings for all kinds of occasions. A few of the
              most common:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div key={audience.title} className="card card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <audience.icon
                    className="w-6 h-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why teams feel it */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <BatteryCharging
                  className="w-7 h-7 text-secondary"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 text-balance">
                Why It Lands Better Than A Catered Lunch
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed mb-5">
                IV hydration delivers fluids, vitamins, and nutrients directly
                into the bloodstream, which is why so many people notice a
                difference the same day. Pair that with 45 minutes in a massage
                chair and a real breakfast, and your team leaves in a genuinely
                different state than they arrived.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-8">
                Every treatment is administered by licensed medical
                professionals using pharmaceutical-grade ingredients, and each
                team member is consulted individually before anything starts.
              </p>

              <ul className="space-y-3">
                {trustSignals.map((signal) => (
                  <li key={signal.label} className="flex items-center gap-3">
                    <signal.icon
                      className="w-5 h-5 text-secondary flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-foreground font-medium">
                      {signal.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/small-business-team-meeting.jpg"
                alt="A small business team meeting around a conference table, the kind of team that books a wellness morning at Prime IV Hydration & Wellness in Huntsville"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center text-balance">
            Team Session Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-border px-6 py-5"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold text-foreground list-none">
                  {faq.question}
                  <ArrowRight
                    className="w-5 h-5 text-secondary flex-shrink-0 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>
                <p className="text-foreground-muted leading-relaxed mt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
            We&apos;d Love To Host Your Team Next
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Send us your team size and a rough timeframe. We&apos;ll come back
            with dates and a custom quote — or just call and we&apos;ll talk it
            through.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="#team-inquiry" className="btn-primary">
              Request Your Team Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
              <Phone className="w-4 h-4" />
              Call {CONTACT.phone}
            </Link>
          </div>

          <p className="text-white/70 text-sm">
            {CONTACT.address.full} &middot;{" "}
            <Link
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-secondary-light"
            >
              Follow us on Facebook
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
