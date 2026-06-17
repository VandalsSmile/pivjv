import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Check,
  ArrowRight,
  Dna,
  Battery,
  Brain,
  Clock,
  HeartPulse,
  Dumbbell,
  Sparkles,
  Briefcase,
  Plane,
  Microscope,
  TrendingUp,
  ShieldCheck,
  Star,
  BadgeCheck,
  Zap,
} from "lucide-react";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";


export const metadata: Metadata = {
  title: "NAD+ & Niagen Therapy | Cellular Energy & Longevity",
  description:
    "Experience NAD+ and Niagen therapies at Prime IV Hydration & Wellness in Huntsville, AL. Restore cellular energy, sharpen mental clarity, and support healthy aging from the inside out.",
  keywords: [
    "NAD+ IV therapy",
    "Niagen therapy",
    "cellular energy IV",
    "longevity therapy Huntsville",
    "Huntsville AL NAD+",
  ],
  alternates: { canonical: "/nad-niagen-special" },
};

const whatItHelps = [
  {
    icon: Battery,
    title: "Restore Cellular Energy",
    description:
      "NAD+ powers the mitochondria—your cells' energy factories. Replenishing it helps reverse the sluggish, drained feeling that comes with age and stress.",
  },
  {
    icon: Brain,
    title: "Sharpen Mental Clarity",
    description:
      "Cut through brain fog and recover focus, memory, and processing speed by supporting the neurons that keep your mind sharp.",
  },
  {
    icon: Clock,
    title: "Support Healthy Aging",
    description:
      "NAD+ activates sirtuins and PARPs—the proteins responsible for DNA repair and cellular longevity—so you age on your terms.",
  },
  {
    icon: HeartPulse,
    title: "Speed Up Recovery",
    description:
      "Whether it's a hard workout, a long week, or a late night, NAD+ helps your body repair and bounce back faster.",
  },
  {
    icon: TrendingUp,
    title: "Boost Metabolism",
    description:
      "NAD+ is essential for converting food into usable energy, supporting a healthy metabolism and steady stamina throughout the day.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Resilience",
    description:
      "By protecting cells from oxidative stress, NAD+ helps your body stay resilient against the daily wear and tear of modern life.",
  },
];

const whoItHelps = [
  {
    icon: Briefcase,
    title: "Driven Professionals",
    description:
      "Demanding schedules drain you. Reclaim the focus and stamina to perform at the top of your game.",
  },
  {
    icon: Dumbbell,
    title: "Athletes & Active People",
    description:
      "Train harder and recover faster with cellular fuel that supports endurance and repair.",
  },
  {
    icon: Sparkles,
    title: "Anyone Feeling the Years",
    description:
      "If energy, recovery, and clarity aren't what they used to be, NAD+ helps turn back the clock at the cellular level.",
  },
  {
    icon: Plane,
    title: "Burnout & Travel Recovery",
    description:
      "Reset after jet lag, chronic stress, or a season of running on empty—and feel like yourself again.",
  },
];

const compare = [
  {
    label: "NAD+ IV Infusion",
    points: [
      "Delivers NAD+ directly into your bloodstream",
      "100% absorption—nothing lost to digestion",
      "Fast, powerful cellular recharge",
      "Ideal for a deep reset or intensive boost",
    ],
  },
  {
    label: "Niagen® (NAD+ Precursor)",
    points: [
      "Patented, clinically studied NR formula",
      "Helps your body raise its own NAD+ levels",
      "Gentle, sustained daily support",
      "Perfect for long-term longevity goals",
    ],
  },
];

const reviews = [
  {
    initials: "JW",
    name: "Jennifer W.",
    text: "I've been coming in for the NAD+ treatments and the difference in my energy and mental clarity is remarkable. This is what premium wellness should feel like.",
  },
  {
    initials: "DC",
    name: "David C.",
    text: "As someone who travels constantly for work, NAD+ has become my secret weapon. Quick, professional, and I'm back to 100% in no time.",
  },
  {
    initials: "RS",
    name: "Rachel S.",
    text: "I felt sharper and more energized within a day. The team is incredible and the spa-like setting makes every visit something to look forward to.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Medical Staff On Site" },
  { icon: Microscope, label: "Pharmaceutical-Grade NAD+ & Niagen®" },
  { icon: Sparkles, label: "Premium, Spa-Like Experience" },
  { icon: Zap, label: "Personalized to Your Goals" },
];

const faqs = [
  {
    question: "What does NAD+ actually do?",
    answer:
      "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell. It's essential for producing energy, repairing DNA, and keeping your cells functioning at their best. Levels naturally decline with age, which is why replenishing it can help you feel more energized, focused, and resilient.",
  },
  {
    question: "How is NAD+ different from Niagen®?",
    answer:
      "An NAD+ IV delivers the molecule directly into your bloodstream for an immediate, powerful boost. Niagen® is a patented NAD+ precursor (nicotinamide riboside) that helps your body raise its own NAD+ levels more gradually. Many clients use them together—NAD+ for a reset and Niagen® for sustained, long-term support.",
  },
  {
    question: "How soon will I feel the effects?",
    answer:
      "Many clients notice improved energy and mental clarity within 24-48 hours, with benefits building over a series of sessions. Our team will recommend a personalized schedule based on your goals.",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes. Every treatment is administered by licensed medical professionals using pharmaceutical-grade ingredients in a clean, comfortable, spa-like setting. We review your health and goals before every session.",
  },
];

export default function NadNiagenPage() {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: "NAD+ & Niagen Therapy", description: "NAD+ and Niagen therapies to restore cellular energy, mental clarity, and support healthy aging in Huntsville, AL.", path: "/nad-niagen-special", serviceType: "NAD+ Therapy" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "NAD+ & Niagen", path: "/nad-niagen-special" }])]} />
      {/* Hero */}
      <section className="relative text-white section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/niagen-background.png')",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-custom mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                Cellular Energy &amp; Longevity Therapy
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Recharge Your Cells. Reclaim Your Energy.
              </h1>
              <p className="text-white/80 text-lg mb-8 text-pretty">
                NAD+ and Niagen® are the most advanced longevity therapies
                available—designed to restore cellular energy, sharpen your
                mind, and help you age on your terms, right here at{" "}
                {SITE_CONFIG.name} in {CONTACT.address.city}, AL.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-secondary-light">
                  Feel the Difference
                </span>
                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                  NAD+ &amp; Niagen® Therapies
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link href="/specials#claim-form" className="btn-primary">
                  Book Your Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                  <Phone className="w-4 h-4" />
                  {CONTACT.phone}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white/80 text-sm">
                  Rated 5.0 by happy clients in {CONTACT.address.city}
                </span>
              </div>
            </div>

            {/* Offer Card */}
            <div className="bg-white text-foreground rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-secondary p-4 text-center text-white">
                <span className="inline-block bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  Limited spots available each week
                </span>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                  <Dna className="w-7 h-7 text-secondary" />
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-bold text-secondary">
                    Cellular Recharge
                  </span>
                </div>
                <p className="text-foreground-muted mb-6">
                  Your NAD+ &amp; Niagen® longevity therapy
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Doctor-supervised cellular therapy",
                    "Personalized dosing for your goals",
                    "Relaxing VIP massage-chair session",
                    "Expert guidance from licensed staff",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/specials#claim-form"
                  className="btn-secondary w-full justify-center"
                >
                  Book Your Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NAD+ */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Microscope className="w-7 h-7 text-primary" />
              </div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                What Is It?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                The Molecule Behind Your Energy
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-5">
                NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in
                every cell of your body. It fuels energy production, repairs
                DNA, and keeps your cells running like new. The problem? Your
                NAD+ levels can fall by up to 50% as you age—leaving you tired,
                foggy, and slower to recover.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Niagen® is a patented, clinically studied NAD+ precursor that
                helps your body rebuild its own NAD+ supply. Together, they
                deliver a powerful one-two punch for energy, clarity, and
                healthy aging—straight to the cellular level.
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 aspect-[4/3]">
                <Image
                  src="/images/nad-intake-room.png"
                  alt="Two clients reviewing their treatment plans on tablets in a Prime IV therapy room beneath NAD+ Anti-Aging and Brain Regeneration posters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <Link href="/specials#claim-form" className="btn-primary">
                Start Feeling the Difference
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compare.map((option) => (
                <div
                  key={option.label}
                  className="bg-white rounded-xl shadow-lg p-6 border border-border"
                >
                  <h3 className="text-lg font-bold mb-4 text-foreground">
                    {option.label}
                  </h3>
                  <ul className="space-y-3">
                    {option.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground-muted leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              How It Helps
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Feel the Benefits—Inside and Out
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              When you replenish NAD+, you&apos;re not masking symptoms—
              you&apos;re fueling the very source of your energy and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatItHelps.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/specials#claim-form" className="btn-primary">
              Book Your Session Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who it helps */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Built for People Who Refuse to Slow Down
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoItHelps.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border text-center card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
              <span className="font-bold text-2xl">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-foreground-muted">Google Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Real Results from Our {CONTACT.address.city} Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl shadow-lg p-6 border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {review.initials}
                  </div>
                  <span className="font-medium text-foreground">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-primary text-white py-10">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-3 justify-center text-center sm:text-left sm:justify-start"
              >
                <signal.icon className="w-6 h-6 text-secondary-light flex-shrink-0" />
                <span className="text-sm text-white/90">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Everything You Need to Know
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl shadow-lg p-6 border border-border"
              >
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final offer CTA banner */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <p className="text-secondary-light font-semibold uppercase tracking-wide mb-3">
              Limited spots each week
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Invest in Your Energy. Invest in Your Future.
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              There&apos;s never been a better time to experience the power of
              NAD+ and Niagen®. Book your session today and discover why{" "}
              {CONTACT.address.city} trusts {SITE_CONFIG.name} for cellular
              wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/specials#claim-form" className="btn-primary">
                Book Your Session
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
