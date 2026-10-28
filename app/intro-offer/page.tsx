import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Check,
  ArrowRight,
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
import {
  GoogleRatingLink,
  GoogleReviewPullQuote,
  GoogleReviewSection,
} from "@/components/google-reviews";
import { GOOGLE_REVIEW_BLOCK, GOOGLE_REVIEWS } from "@/lib/google-reviews";
import { CONTACT, OG_IMAGE, PRICING } from "@/lib/constants";
import { IntroOfferForm } from "./intro-offer-form";
import { TextToBookLink } from "@/components/text-to-book-link";
import { MomentumProgramSection } from "@/components/momentum-program-section";
import { MOMENTUM_FAQS } from "@/lib/momentum-program";

const savings = Math.round(
  ((PRICING.introOffer.regularPrice - PRICING.introOffer.price) /
    PRICING.introOffer.regularPrice) *
    100,
);

export const metadata: Metadata = {
  title: `$${PRICING.introOffer.price} Intro Offer`,
  description: `First-time clients get a full IV session for $${PRICING.introOffer.price} in Huntsville, AL, with a consult, primary drip, and VIP chair. A one-time $${PRICING.medicalClearance} telehealth screening applies.`,
  keywords: [
    "IV therapy intro offer",
    "new client IV special",
    "first IV therapy discount",
    "Huntsville AL IV deal",
  ],
  alternates: { canonical: "/intro-offer" },
  openGraph: { url: "/intro-offer", images: [OG_IMAGE] },
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
  "Same-day treatment available (if ready)",
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Claim Your Visit",
    description: `Request your $${PRICING.introOffer.price} intro online, or call ${CONTACT.phone}. The intro price is applied automatically.`,
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

export default function IntroOfferPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "$85 First-Time IV Therapy Offer",
            description:
              "New client special: first VIP IV therapy for $85 including a wellness consultation and full-size primary drip in Huntsville, AL. Includes the Keep the Momentum Going card for 20% off visit two and 10% off visit three.",
            path: "/intro-offer",
            serviceType: "IV Therapy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Intro Offer", path: "/intro-offer" },
          ]),
          faqSchema(MOMENTUM_FAQS),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-8 text-white md:px-8 md:py-16 lg:py-24">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/intro-offer-background.png')",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-custom mx-auto relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="mb-3 text-[1.65rem] font-bold leading-[1.15] text-balance sm:text-4xl lg:text-5xl">
                Your first IV, ${PRICING.introOffer.price}. Consult, full-size
                drip and massage chair included.
              </h1>
              <p className="mb-4 text-base text-white/90 text-pretty sm:text-lg">
                Tell us how to reach you and we&apos;ll confirm your first visit
                at our Jones Valley lounge.
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl text-white/70 line-through">
                    ${PRICING.introOffer.regularPrice}
                  </span>
                  <span className="text-5xl font-bold text-white">
                    ${PRICING.introOffer.price}
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-sm font-bold text-white">
                    Save {savings}%
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-white">
                  ${PRICING.introOffer.price} + one-time $
                  {PRICING.medicalClearance} state-required telehealth screening
                </p>
                <div className="mt-2 leading-5">
                  <GoogleRatingLink tone="dark" />
                </div>
              </div>

              <a href="#claim-offer" className="btn-primary w-full justify-center">
                Claim my ${PRICING.introOffer.price} visit
              </a>
              <a
                href={`tel:${CONTACT.phoneClean}`}
                className="mt-3 block text-center text-sm font-medium text-white underline decoration-white/50 underline-offset-4"
              >
                or call {CONTACT.phone}
              </a>
              <GoogleReviewPullQuote
                review={GOOGLE_REVIEWS.jenna}
                tone="dark"
                className="mt-4 text-left"
              />
            </div>

            {/* Hero claim form */}
            <IntroOfferForm variant="hero" />
          </div>
        </div>
      </section>

      <GoogleReviewSection
        className="bg-background"
        reviews={GOOGLE_REVIEW_BLOCK}
      />

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

      {/* Keep the Momentum Going — the intro visit is step one */}
      <MomentumProgramSection
        className="section-padding bg-background-alt"
        eyebrow="Your First Visit Is Step One"
        heading="Keep the Momentum Going"
        description={`Your $${PRICING.introOffer.price} intro visit isn't a one-and-done. On your way out we hand you a card that takes 20% off your second visit and 10% off your third — then you choose whatever fits your life.`}
        showNextSteps
        showCta={false}
        showTelehealthNote={false}
      />

      {/* What You Get */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                  What You Get for ${PRICING.introOffer.price}
                </p>
                <div className="mb-4 flex flex-wrap items-baseline gap-3">
                  <span className="text-5xl font-bold text-secondary">
                    ${PRICING.introOffer.price}
                  </span>
                  <span className="text-xl text-foreground-muted line-through">
                    ${PRICING.introOffer.regularPrice}
                  </span>
                  <span className="text-sm font-bold text-accent">
                    Save {savings}%
                  </span>
                  <span className="text-foreground-muted">· ~1 Hour</span>
                </div>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Your visit begins with a wellness consultation and includes a
                  full-size primary drip and time in our massage chair.
                </p>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Choose from our full menu of IV drips — Myers Cocktail,
                  Vitamin C, Glutathione, NAD+, hangover recovery, and more —
                  all customized to your goals at our Huntsville IV bar.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/book-intro-offer" className="btn-primary">
                    Book Online Now
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

      {/* Prefer to call */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto bg-primary text-white rounded-2xl p-8 md:p-10 shadow-lg text-center">
            <p className="mb-2 font-semibold uppercase tracking-wide text-white/80">
              Prefer to call?
            </p>
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
              Call to book your visit
            </h2>
            <p className="mb-6 text-lg text-white/90 text-pretty">
              Call {CONTACT.phone} and we&apos;ll find a time. The $
              {PRICING.introOffer.price} intro price is applied automatically,
              or use the claim form at the top of this page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-primary justify-center"
              >
                <Phone className="w-4 h-4" />
                Call Now — {CONTACT.phone}
              </Link>
              <Link href="#claim-offer" className="btn-outline justify-center">
                Use Claim Form
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-white/60 text-xs mt-4">
              Same-day appointments often available.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
              <TextToBookLink
                showNumber
                className="justify-center text-white hover:text-secondary transition-colors font-medium"
              />
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
            <p className="mb-3 font-semibold uppercase tracking-wide text-white/80">
              First-time spots are limited
            </p>
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
              Ready to Feel the Difference?
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-white/90 text-pretty">
              Request your ${PRICING.introOffer.price} intro session online or
              call us. First-time clients only.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link href="/book-intro-offer" className="btn-primary">
                Book Online Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
