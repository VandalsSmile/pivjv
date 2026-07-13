import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Check,
  ArrowRight,
  Star,
  Battery,
  Droplets,
  Brain,
  Shield,
  Activity,
  Sparkles,
  CalendarCheck,
  Stethoscope,
  Clock,
  Heart,
  Users,
  CreditCard,
  BadgeCheck,
  Zap,
  Armchair,
} from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";
import { IntroOfferForm } from "./intro-offer-form";
import { TextToBookLink } from "@/components/text-to-book-link";

const savings = Math.round(
  ((PRICING.introOffer.regularPrice - PRICING.introOffer.price) /
    PRICING.introOffer.regularPrice) *
    100,
);

export const metadata: Metadata = {
  title: `$${PRICING.introOffer.price} Intro IV Therapy Offer | Prime IV Hydration Huntsville AL`,
  description: `First-time clients get a full IV therapy session for just $${PRICING.introOffer.price} in Huntsville, AL. Includes wellness consult, premium drip, and VIP massage chair. Same-day available.`,
  keywords: [
    "IV therapy intro offer",
    "new client IV special",
    "first IV therapy discount",
    "Huntsville AL IV deal",
  ],
  alternates: { canonical: "/intro-offer" },
  openGraph: { url: "/intro-offer" },
};

const benefits = [
  {
    icon: Battery,
    title: "Sustained Energy",
    description:
      "Beat the afternoon crash with B-vitamins and amino acids that fuel you at the cellular level.",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    description:
      "Rehydrate faster than water ever could—100% absorption straight into your bloodstream.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description:
      "Cut through the brain fog and feel sharp, focused, and clear-headed within minutes.",
  },
  {
    icon: Shield,
    title: "Stronger Immunity",
    description:
      "High-dose Vitamin C, zinc, and key nutrients give your defenses a powerful reset.",
  },
  {
    icon: Activity,
    title: "Faster Recovery",
    description:
      "Bounce back from travel, workouts, stress, or a long week feeling restored.",
  },
  {
    icon: Sparkles,
    title: "A Healthy Glow",
    description:
      "Hydrated skin and replenished nutrients leave you looking as good as you feel.",
  },
];

const topReasons = [
  {
    icon: Brain,
    title: "Sharper Mental Clarity",
    description:
      "Your brain is about 75% water. Even mild dehydration can dull focus and slow thinking — IV hydration replenishes fluids fast so you feel clear-headed again.",
  },
  {
    icon: Zap,
    title: "Energy That Actually Lasts",
    description:
      "B-vitamins and nutrients go straight into your bloodstream, helping you beat the afternoon crash without the jittery spike of caffeine.",
  },
  {
    icon: Droplets,
    title: "Deep Hydration, 100% Absorption",
    description:
      "Pills lose a lot in digestion. IV therapy delivers fluids and vitamins directly to your cells for near-instant, full absorption.",
  },
  {
    icon: Activity,
    title: "Faster Bounce-Back",
    description:
      "Travel, workouts, late nights, and stressful weeks drain you. An IV helps your body recover sooner so you can keep up.",
  },
  {
    icon: Armchair,
    title: "Relax While You Recharge",
    description:
      "Settle into a premium massage chair in our VIP lounge while your drip works. It feels like a spa break with real wellness results.",
  },
];

const included = [
  "Comprehensive wellness consultation",
  "Full-size primary IV drip (your choice)",
  "State-of-the-art massage chair session",
  "VIP one-hour vacation amenities",
  "Same-day treatment available (if ready)",
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Claim With the Code",
    description: `Submit the form with promo code ${PRICING.introOffer.promoCode} — or call and mention the code — to lock in your $${PRICING.introOffer.price} intro pricing.`,
  },
  {
    icon: Stethoscope,
    title: "Quick Consultation",
    description:
      "Relax in our lounge while a licensed medical pro learns your goals and recommends the perfect drip.",
  },
  {
    icon: Heart,
    title: "Drip & Recharge",
    description:
      "Kick back in a heated massage chair as your customized IV goes to work. Walk out feeling brand new.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Medical Staff (RN on site)" },
  { icon: CreditCard, label: "HSA / FSA Accepted" },
  { icon: Users, label: "Couples & Group Bookings Welcome" },
  { icon: Sparkles, label: "Premium, Spa-Like Experience" },
];

const goodToKnow = [
  {
    icon: Clock,
    title: "Plan Your Visit",
    description:
      "While the booking calendar may display a shorter time slot, please plan for your visit to take approximately 60-90 minutes. This ensures a relaxed, unhurried experience.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day Treatment",
    description:
      "If you're ready, same-day treatment is available right after your consultation. Start feeling better today—no second trip required.",
  },
  {
    icon: Users,
    title: "Couples & Groups",
    description: `Booking for a couple or group? Please call the spa directly at ${CONTACT.phone} so we can accommodate you.`,
  },
  {
    icon: Heart,
    title: "Customized for You",
    description:
      "Your drip is tailored to your goals during your wellness consultation, so you get exactly what your body needs.",
  },
];

const reviews = [
  {
    initials: "E",
    name: "Emily R.",
    text: "I felt amazing afterwards—energized and clear-headed. The spa-like atmosphere made me so relaxed. Already booked my next visit!",
  },
  {
    initials: "M",
    name: "Marcus T.",
    text: "First time trying IV therapy and it exceeded my expectations. The massage chairs are a game changer. Highly recommend the intro offer.",
  },
  {
    initials: "R",
    name: "Rachel S.",
    text: "Came in run down after a tough week and left feeling like a new person. Beautiful facility, kind staff, real results.",
  },
];

export default function IntroOfferPage() {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: "$85 First-Time IV Therapy Offer", description: "New client special: first VIP IV therapy for $85 including a wellness consultation and full-size primary drip in Huntsville, AL.", path: "/intro-offer", serviceType: "IV Therapy" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Intro Offer", path: "/intro-offer" }])]} />
      {/* Hero */}
      <section className="relative text-white section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/intro-offer-background.png')",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-custom mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                First-Time Client Exclusive
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Feel Your Best for Just ${PRICING.introOffer.price} —
                Huntsville&apos;s Premier IV Therapy Intro Offer
              </h1>
              <p className="text-white/80 text-lg mb-6 text-pretty">
                A full IV therapy experience—wellness consultation, premium
                drip, and VIP massage-chair relaxation—designed to leave you
                re-energized, rehydrated, and recharged.
              </p>

              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8">
                <p className="text-secondary font-semibold text-sm uppercase tracking-wide mb-1">
                  How to claim ${PRICING.introOffer.price} pricing
                </p>
                <p className="text-white/90 text-sm leading-relaxed">
                  You must use promo code{" "}
                  <span className="font-mono font-bold text-secondary-light">
                    {PRICING.introOffer.promoCode}
                  </span>{" "}
                  — submit it with the form below, or mention it when you call to
                  book.
                </p>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl text-white/60 line-through">
                  ${PRICING.introOffer.regularPrice}
                </span>
                <span className="text-5xl font-bold text-secondary-light">
                  ${PRICING.introOffer.price}
                </span>
                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                  Save {savings}%
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link href="#claim-offer" className="btn-primary">
                  Claim With Code
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Link>
              </div>

              <div className="flex items-center gap-2 mb-6">
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

              <p className="text-white/60 text-xs">
                *First-time clients only. Mention code{" "}
                {PRICING.introOffer.promoCode} when calling. One-time
                state-mandated ${PRICING.medicalClearance} telehealth screening
                required at first visit.
              </p>
            </div>

            {/* Price Card */}
            <div className="bg-white text-foreground rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-secondary p-4 text-center text-white">
                <span className="inline-block bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  Code required · {PRICING.introOffer.promoCode}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-center gap-3 mb-1">
                  <span className="text-6xl font-bold text-secondary">
                    ${PRICING.introOffer.price}
                  </span>
                  <span className="text-2xl text-foreground-muted line-through">
                    ${PRICING.introOffer.regularPrice}
                  </span>
                </div>
                <p className="text-center text-foreground-muted mb-6">
                  Your complete first-visit experience · ~1 hour
                </p>
                <ul className="space-y-3 mb-6">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#claim-offer"
                  className="btn-secondary w-full justify-center"
                >
                  Claim Offer With Code
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 reasons + VIP lounge image */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/4] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/intro-offer-vip-chairs.jpg"
                  alt="Premium zero-gravity massage chairs with IV stations in the Prime IV Hydration & Wellness VIP lounge in Huntsville, AL"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="mt-3 text-sm text-foreground-muted text-center lg:text-left">
                Your intro visit includes time in our VIP massage chairs while
                your customized drip goes to work.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                Benefits That Matter
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                Top 5 Reasons to Get an IV
              </h2>
              <p className="text-foreground-muted text-lg mb-8 text-pretty">
                When your body is running low on fluids and nutrients, you feel
                it everywhere — especially in your mind and energy.
              </p>

              <ol className="space-y-5">
                {topReasons.map((reason, index) => (
                  <li key={reason.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-11 h-11 rounded-full bg-secondary text-white font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <reason.icon
                          className="w-4 h-4 text-secondary flex-shrink-0"
                          aria-hidden="true"
                        />
                        <h3 className="text-lg font-bold text-foreground">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-foreground-muted leading-relaxed text-sm sm:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8">
                <Link href="#claim-offer" className="btn-primary">
                  Claim Your ${PRICING.introOffer.price} Intro Offer
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You'll Feel */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              The Prime IV Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Here&apos;s How You&apos;ll Feel
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              Oral supplements lose up to 80% of their value in digestion. Our
              IV therapy delivers nutrients directly into your bloodstream for
              near-instant, 100% absorption—so you feel the difference fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
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
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                  What You Get for ${PRICING.introOffer.price}
                </p>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-bold text-secondary">
                    ${PRICING.introOffer.price}
                  </span>
                  <span className="text-xl text-foreground-muted line-through">
                    ${PRICING.introOffer.regularPrice}
                  </span>
                  <span className="text-foreground-muted">· ~1 Hour</span>
                </div>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Experience the ultimate in customizable wellness with our
                  exclusive First-Time Client Introductory Offer. Your visit
                  begins with a comprehensive wellness consultation and includes
                  a full-size primary drip, time in our massage chair, and VIP
                  one-hour vacation amenities designed to help you unwind and
                  recharge.
                </p>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Choose from our full menu of IV drips — Myers Cocktail,
                  Vitamin C, Glutathione, NAD+, hangover recovery, and more —
                  all customized to your goals at our Huntsville IV bar.
                </p>
                <p className="text-sm text-foreground mb-6 bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-3">
                  To get the ${PRICING.introOffer.price} rate, claim with code{" "}
                  <span className="font-mono font-bold text-secondary">
                    {PRICING.introOffer.promoCode}
                  </span>{" "}
                  on the form below or mention it when you call.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#claim-offer" className="btn-primary">
                    Claim With Code
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`tel:${CONTACT.phoneClean}`}
                    className="btn-secondary"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Link>
                </div>
                <p className="text-sm text-foreground-muted mt-4">
                  Prime IV Hydration &amp; Wellness — Jones Valley, Huntsville,
                  AL 35802
                </p>
              </div>

              <div className="bg-background-alt rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Everything Included:</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim offer — form + call */}
      <section
        id="claim-offer"
        className="section-padding bg-background scroll-mt-24"
      >
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Required to get ${PRICING.introOffer.price}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Claim Your Intro Offer Pricing
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              The ${PRICING.introOffer.price} first-time rate is only available
              when you claim it with promo code{" "}
              <span className="font-mono font-semibold text-foreground">
                {PRICING.introOffer.promoCode}
              </span>
              . Choose one of the two options below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-xl font-bold">Submit the form with the code</h3>
              </div>
              <IntroOfferForm />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-xl font-bold">Call and mention the code</h3>
              </div>
              <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
                <p className="text-white/80 mb-6 leading-relaxed">
                  Prefer to book by phone? Call our Huntsville team and mention
                  promo code{" "}
                  <span className="font-mono font-bold text-secondary-light">
                    {PRICING.introOffer.promoCode}
                  </span>{" "}
                  to lock in your ${PRICING.introOffer.price} intro offer.
                </p>
                <div className="bg-white/10 rounded-xl p-4 mb-6 text-center">
                  <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                    Mention this code
                  </p>
                  <p className="text-2xl font-mono font-bold text-secondary-light tracking-wide">
                    {PRICING.introOffer.promoCode}
                  </p>
                </div>
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="btn-primary w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Now — {CONTACT.phone}
                </Link>
                <p className="text-white/60 text-xs mt-4 text-center">
                  Same-day appointments often available.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <TextToBookLink
                    showNumber
                    className="w-full justify-center text-white hover:text-secondary transition-colors font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Easy Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Simple &amp; Relaxing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Your Visit in 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex mb-5">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {step.description}
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
              Loved by Our {CONTACT.address.city} Community
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

      {/* Good to Know */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Premium, Spa-Like Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Good to Know Before You Book
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {goodToKnow.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border flex gap-4"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
              First-time spots are limited
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Feel the Difference?
            </h2>
            <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto text-pretty">
              Claim your ${PRICING.introOffer.price} intro session with promo
              code{" "}
              <span className="font-mono font-bold text-secondary-light">
                {PRICING.introOffer.promoCode}
              </span>{" "}
              — submit the form or call and mention the code.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="#claim-offer" className="btn-primary">
                Claim With Code
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
            </div>
            <p className="text-white/60 text-xs mt-6">
              *First-time clients only. Code {PRICING.introOffer.promoCode}{" "}
              required. One-time state-mandated $
              {PRICING.medicalClearance} telehealth screening required at first
              visit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
