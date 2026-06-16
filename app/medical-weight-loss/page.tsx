import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Check,
  ArrowRight,
  Activity,
  Brain,
  Soup,
  Droplets,
  Star,
  BadgeCheck,
  Microscope,
  Sparkles,
  Stethoscope,
  ClipboardCheck,
  UserCheck,
  TrendingDown,
  Target,
  HeartPulse,
  Scale,
  CalendarClock,
  X,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";


export const metadata: Metadata = {
  title: "GLP-1 & Medical Weight Loss in Huntsville, AL | Prime IV",
  description:
    "Provider-guided medical weight management in Huntsville, AL. GLP-1 therapy, peptides, and personalized plans paired with IV hydration support at Prime IV Hydration & Wellness. Consultation required.",
  keywords: [
    "GLP-1 Huntsville",
    "medical weight loss Huntsville AL",
    "semaglutide Huntsville",
    "peptide therapy Huntsville",
    "weight management clinic Huntsville",
  ],
};

const heroHighlights = [
  "GLP-1 therapy when clinically appropriate",
  "Peptides & metabolic support options",
  "Hydration & wellness add-ons",
  "Ongoing provider follow-up",
];

const howItWorks = [
  {
    step: "01",
    icon: Soup,
    title: "Mimics a Natural Hormone",
    description:
      "GLP-1 therapy is designed to act like a hormone your gut naturally releases after you eat, helping kick off your body's normal fullness signals.",
  },
  {
    step: "02",
    icon: Brain,
    title: "Signals the Brain",
    description:
      "It communicates with appetite centers in the brain, which may help reduce hunger and curb cravings between meals.",
  },
  {
    step: "03",
    icon: Activity,
    title: "Slows Digestion",
    description:
      "By slowing how quickly the stomach empties, it can help you feel full sooner and stay satisfied longer after eating.",
  },
  {
    step: "04",
    icon: HeartPulse,
    title: "Supports Blood Sugar",
    description:
      "It may help support a steadier blood sugar and insulin response, which can reduce the energy swings that drive overeating.",
  },
];

const goodFit = [
  "Adults working toward meaningful, sustained weight loss who haven't reached their goals with diet and exercise alone",
  "Individuals who struggle with persistent appetite, cravings, or portion control",
  "Patients who want a medically supervised plan with ongoing provider follow-up",
  "Those ready to pair treatment with nutrition, hydration, and activity changes",
];

const notIdeal = [
  "Patients seeking an overnight or effortless fix without lifestyle changes",
  "Individuals with certain medical histories that a provider determines make treatment inappropriate",
  "Anyone who has not completed a consultation and medical evaluation",
];

const timeline = [
  {
    icon: CalendarClock,
    phase: "Weeks 1–4",
    title: "Gentle Start",
    description:
      "Providers typically begin at a low dose and increase gradually (titration) to help your body adjust and limit side effects.",
  },
  {
    icon: TrendingDown,
    phase: "Months 1–3",
    title: "Appetite Shifts",
    description:
      "Many patients notice reduced appetite and earlier fullness during this window as the dose is adjusted to a comfortable level.",
  },
  {
    icon: Target,
    phase: "Months 3–6",
    title: "Gradual Progress",
    description:
      "Weight changes are usually steady and gradual rather than sudden. Consistency with the plan matters more than speed.",
  },
  {
    icon: Scale,
    phase: "Ongoing",
    title: "Maintenance",
    description:
      "Long-term results are best supported by continued nutrition, hydration, activity, and regular provider check-ins.",
  },
];

const options = [
  {
    icon: Microscope,
    title: "GLP-1 Therapy",
    description:
      "Provider-prescribed GLP-1 medication to help support appetite management and steady, sustainable progress.",
  },
  {
    icon: Sparkles,
    title: "Peptides",
    description:
      "Targeted peptide support that may complement your plan for recovery, metabolism, and overall wellness.",
  },
  {
    icon: Stethoscope,
    title: "Provider-Guided Plans",
    description:
      "Every plan is overseen by a licensed medical provider and built around your health history and goals.",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    description:
      "Ongoing guidance, hydration support, and follow-up so you're never navigating the journey alone.",
  },
];

const benefits = [
  "May help support healthy weight loss when combined with a provider-guided plan",
  "May help reduce appetite or support portion control for some patients",
  "May help some individuals stay more consistent with long-term weight management goals",
  "May support improved confidence and motivation during a medically supervised program",
  "May complement nutrition, hydration, and lifestyle changes as part of a broader wellness strategy",
  "May help some patients feel more supported through structured clinical follow-up",
];

const sideEffects = [
  "Nausea, upset stomach, bloating, or digestive discomfort",
  "Constipation or diarrhea",
  "Reduced appetite that may feel too strong for some individuals",
  "Fatigue or changes in energy levels during adjustment",
  "Headache or mild dizziness in some cases",
  "Other side effects or risks may apply depending on the medication, dose, and personal medical history",
];

const bundleIncludes = [
  "Medical weight management as part of a complete plan",
  "IV drip included for added wellness value",
  "Injections included",
  "Ongoing support from our medical team",
];

const reviews = [
  {
    initials: "AM",
    name: "Amanda M.",
    text: "The team made me feel comfortable from the first consultation. Having a provider check in on my progress kept me consistent in a way I never managed on my own.",
  },
  {
    initials: "TR",
    name: "Travis R.",
    text: "I appreciated that they didn't just hand me a medication—they built a real plan with nutrition and hydration support. The IV add-on is a game changer on tougher weeks.",
  },
  {
    initials: "LK",
    name: "Lauren K.",
    text: "Professional, judgment-free, and genuinely helpful. The gradual approach made the adjustment period so much easier than I expected.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Medical Providers" },
  { icon: ClipboardCheck, label: "Consultation-First Approach" },
  { icon: Sparkles, label: "Premium, Spa-Like Experience" },
  { icon: UserCheck, label: "Personalized to Your Goals" },
];

const faqs = [
  {
    question: "Do I need a consultation before starting?",
    answer:
      "Yes. A consultation is required before beginning treatment. It allows a licensed provider to review your health history, goals, and eligibility, and to determine whether medical weight management—and any medication-based support—is appropriate for you.",
  },
  {
    question: "How much does the program cost?",
    answer:
      "Programs range from about $45/week to $350/month depending on your plan and level of support. Final pricing is confirmed during your consultation once your provider recommends the right plan for you.",
  },
  {
    question: "Is this a quick fix?",
    answer:
      "No. Medical weight management is typically most effective when paired with sustained nutrition, hydration, activity, and provider-guided follow-up. The goal is steady, lasting progress—not an overnight result.",
  },
  {
    question: "Are the medications FDA-approved?",
    answer:
      "Some treatment plans may involve prescription medications. If compounded medications are used, patients should understand that compounded medications are not FDA-approved. Your provider can discuss whether any recommended treatment is FDA-approved, compounded, or otherwise appropriate for your case.",
  },
];

export default function MedicalWeightLossPage() {
  return (
    <>
        {/* Hero */}
        <section className="relative bg-primary text-white section-padding overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/medical-weight-loss-hero-bg.png')",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-primary/85"
            aria-hidden="true"
          />
          <div className="relative container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                GLP-1, Peptides &amp; Metabolic Support
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Medical Weight Loss, Guided Every Step of the Way
              </h1>
              <p className="text-white/80 text-lg mb-6 text-pretty">
                Medical weight management is about more than the number on the
                scale. Our provider-guided plans may include GLP-1 therapy and
                peptides to help support appetite management, steady energy, and
                metabolic wellness—personalized to your body at{" "}
                {SITE_CONFIG.name} in {CONTACT.address.city}, AL.
              </p>
              <p className="text-white/60 text-sm mb-8 text-pretty">
                Prescription-based treatment may not be appropriate for all
                patients and may involve side effects and risks discussed during
                your consultation.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
                  <Phone className="w-4 h-4" />
                  Call to Book a Consultation
                </Link>
                <Link href="/specials" className="btn-outline">
                  View Specials
                  <ArrowRight className="w-4 h-4" />
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

            {/* Pricing / Highlights Card */}
            <div className="bg-white text-foreground rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-secondary p-4 text-center text-white">
                <span className="inline-block bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  Provider-guided &amp; personalized
                </span>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                  <Scale className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-foreground-muted mb-1">Programs from</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-secondary">$45</span>
                  <span className="text-foreground-muted">/week</span>
                  <span className="text-foreground-muted text-sm">
                    to $350/month
                  </span>
                </div>
                <p className="text-foreground-muted text-sm mb-6">
                  Structured around your plan and level of support. Final pricing
                  is confirmed during your consultation.
                </p>
                <ul className="space-y-3 mb-6">
                  {heroHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="btn-secondary w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call to Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it is / Options */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              What It Is
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              GLP-1 &amp; Weight Management Options
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              Every plan starts with a conversation. Our providers tailor support
              to your goals and health history, which may include GLP-1 therapy
              and peptides when clinically appropriate—going beyond a
              one-size-fits-all approach with hydration, added wellness support,
              and ongoing guidance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border text-center card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <option.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call to Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* How GLP-1s work */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              How It Helps
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              How GLP-1s Work in the Body
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              A clear, provider-informed look at GLP-1 therapy so you can decide
              whether it fits your goals. Individual results vary and a
              consultation is required before treatment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl shadow-lg p-6 border border-border card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-3xl font-bold text-border">
                    {item.step}
                  </span>
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

      {/* Who it's for */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Is Medical Weight Management Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Often a Good Fit</h3>
              </div>
              <ul className="space-y-3">
                {goodFit.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed text-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <X className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">May Not Be Ideal For</h3>
              </div>
              <ul className="space-y-3">
                {notIdeal.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed text-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect timeline */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              What to Expect
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Your Journey, on Average
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              Timelines and outcomes are general averages for educational
              purposes only and are not a promise of results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item) => (
              <div
                key={item.phase}
                className="bg-white rounded-xl shadow-lg p-6 border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-secondary font-semibold text-sm uppercase tracking-wide mb-1">
                  {item.phase}
                </p>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-foreground-muted text-sm max-w-3xl mx-auto text-center mt-8 text-pretty">
            GLP-1 therapy is not appropriate for every patient. A licensed
            provider will review your eligibility, dosing, and possible side
            effects during your consultation.
          </p>
        </div>
      </section>

      {/* IV + Weight Management Bundle */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4">
                Best Value
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                IV + Weight Management Bundle
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Focus on whole-body wellness instead of medication alone. This
                bundle pairs your provider-guided weight management plan with
                added hydration and support—so you feel your best while you make
                progress.
              </p>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
                <Phone className="w-4 h-4" />
                Ask About the Bundle
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <ul className="space-y-4">
                {bundleIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Side Effects */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Honest &amp; Transparent
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Possible Benefits &amp; Possible Side Effects
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              Every patient responds differently. A provider can help determine
              what is appropriate based on your health history, goals, and
              treatment plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Possible Benefits</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed text-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Possible Side Effects</h3>
              </div>
              <ul className="space-y-3">
                {sideEffects.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed text-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-foreground-muted text-xs max-w-3xl mx-auto text-center mt-8 text-pretty">
            This section is for general educational purposes only and is not a
            guarantee of results or a full list of risks. Not all patients are
            candidates for medication-based treatment. A licensed medical
            provider should review potential benefits, side effects, and
            treatment options during your consultation.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-background">
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
              Real Support from Our {CONTACT.address.city} Community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              What to Keep in Mind
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

      {/* Medical disclosure */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Medical Weight Management Disclosure
              </h2>
            </div>
            <div className="space-y-5 text-sm text-foreground-muted leading-relaxed">
              <p>
                Our medical weight management program is overseen by licensed
                medical providers and begins with an evaluation of your health
                history, current needs, and goals before any care plan is
                recommended. A consultation is required before beginning
                treatment.
              </p>
              <p>
                Recommendations are made on an individual basis and depend on
                medical history, current health status, treatment goals, and
                provider judgment. Not all patients are candidates. Individual
                results vary and may depend on consistency, nutrition, hydration,
                activity level, metabolism, and adherence to the recommended
                plan.
              </p>
              <p>
                Plans may include lifestyle guidance, nutrition support,
                hydration strategies, provider follow-up, and—when clinically
                appropriate��GLP-1 therapy, peptides, or other prescription
                medications. Medication is not appropriate for every patient and
                is not the only component of a comprehensive plan.
              </p>
              <p>
                <strong className="text-foreground">
                  FDA Status &amp; Compounding Notice:
                </strong>{" "}
                Some treatment plans may involve prescription medications. If
                compounded medications are used, patients should understand that
                compounded medications are not FDA-approved and are not reviewed
                by the U.S. Food and Drug Administration for safety,
                effectiveness, or quality in the same manner as FDA-approved
                drugs. Your provider can discuss whether any recommended
                treatment is FDA-approved, compounded, or otherwise appropriate
                based on your case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <p className="text-secondary-light font-semibold uppercase tracking-wide mb-3">
              Got questions? Let&apos;s talk.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Your Consultation Is the First Step
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Speak with our medical team to review eligibility, treatment
              options, and whether medical weight management is right for you. No
              pressure—just clear, honest guidance built around your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
              <Link href="/specials" className="btn-outline">
                View Specials
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
