import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import Link from "next/link";
import {
  Phone,
  Check,
  Clock,
  UserCheck,
  Award,
  Star,
  BadgeCheck,
  CreditCard,
  Users,
  Sparkles,
  CalendarCheck,
  Stethoscope,
  Heart,
  Droplets,
} from "lucide-react";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";


export const metadata: Metadata = {
  title: "America's Favorite IV | The Myers' Cocktail",
  description:
    "Book the Myers' Cocktail — the original, time-tested IV drip that started it all — at Prime IV Hydration & Wellness in Huntsville, AL. Energy, immunity, recovery, and clarity in one nurse-administered session.",
  keywords: [
    "Myers Cocktail",
    "America's favorite IV",
    "classic IV therapy",
    "vitamin drip Huntsville",
    "Huntsville AL Myers Cocktail",
    "book Myers Cocktail Huntsville",
  ],
  alternates: { canonical: "/myers-iv-therapy" },
};

const heroBenefits = [
  "Nurse-administered in a relaxing VIP setting",
  "Pharmaceutical-grade vitamins & minerals",
  "Personalized to your wellness goals",
  "Same-day appointments often available",
];

const quickBenefits = [
  {
    icon: Sparkles,
    title: "All-Day Energy",
    description:
      "B-complex and B12 fuel your cells so you beat fatigue and power through your day.",
  },
  {
    icon: Droplets,
    title: "Deep Hydration",
    description:
      "A full liter of fluids delivers nutrients straight to your bloodstream for 100% absorption.",
  },
  {
    icon: Heart,
    title: "Immune Support",
    description:
      "High-dose Vitamin C helps fortify your defenses during demanding, high-stress stretches.",
  },
  {
    icon: Award,
    title: "Faster Recovery",
    description:
      "Magnesium and hydration help your body bounce back from workouts, travel, and long weeks.",
  },
];

const ingredients = [
  { name: "Vitamin C", benefit: "Immune support & antioxidant" },
  { name: "B-Complex", benefit: "Energy & metabolism" },
  { name: "B12", benefit: "Energy & nerve function" },
  { name: "Magnesium", benefit: "Muscle relaxation & recovery" },
  { name: "Calcium", benefit: "Bone & muscle health" },
  { name: "Saline Solution", benefit: "Hydration & nutrient delivery" },
];

const womensBenefits = [
  {
    title: "Monthly Cycle Support",
    description:
      "Magnesium can help soften cramping and discomfort, while B vitamins help keep energy steady through hormonal shifts.",
  },
  {
    title: "Pregnancy & Postpartum",
    description:
      "The heightened nutritional demands of pregnancy and nursing can drain key vitamins and minerals that IV therapy helps replenish.",
  },
  {
    title: "Perimenopause & Menopause",
    description:
      "B vitamins and magnesium may help support a more stable mood and reliable energy during hormonal transitions.",
  },
  {
    title: "Skin, Hair & Nails",
    description:
      "Vitamin C paired with B vitamins supports collagen and cellular health for a naturally radiant glow.",
  },
  {
    title: "Stress & Adrenal Support",
    description:
      "Busy schedules and chronic stress quietly deplete B vitamins and magnesium — this blend helps top them back up.",
  },
];

const mensBenefits = [
  {
    title: "Performance & Recovery",
    description:
      "Magnesium supports muscle function and bounce-back, while B vitamins help turn fuel into usable energy.",
  },
  {
    title: "Heart Health",
    description:
      "Magnesium plays a central role in regulating heart rhythm and supporting healthy blood pressure.",
  },
  {
    title: "Energy & Mental Clarity",
    description:
      "B vitamins are building blocks for neurotransmitters that sharpen focus, concentration, and mental stamina.",
  },
  {
    title: "Immune Resilience",
    description:
      "Vitamin C — and zinc when added — helps fortify your defenses during demanding, high-stress stretches.",
  },
  {
    title: "Bounce Back Faster",
    description:
      "Hydration, B vitamins, and magnesium team up to help your body recover after a long night out.",
  },
];

const chronicConditions = [
  {
    title: "Ongoing Fatigue",
    description:
      "B vitamins and magnesium support cellular energy production, which may help take the edge off persistent tiredness.",
  },
  {
    title: "Fibromyalgia",
    description:
      "Magnesium may help ease muscle tenderness, while B vitamins support overall nervous system health.",
  },
  {
    title: "Migraines",
    description:
      "Magnesium deficiency is common among migraine sufferers, and IV magnesium may help reduce how often and how hard they hit.",
  },
  {
    title: "Respiratory Wellness",
    description:
      "Vitamin C and magnesium have both been studied for their role in supporting respiratory health and calming inflammation.",
  },
];

const experienceFeatures = [
  {
    icon: Clock,
    title: "45–60 Minutes",
    description: "A relaxing, unhurried session",
  },
  {
    icon: UserCheck,
    title: "Nurse-Administered",
    description: "Delivered by trained medical staff",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Pharmaceutical-grade ingredients",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Your Spot",
    description:
      "Reserve your Myers' Cocktail online in under 60 seconds—or call us and we'll handle it for you.",
  },
  {
    icon: Stethoscope,
    title: "Quick Consultation",
    description:
      "Relax in our lounge while a licensed medical pro reviews your goals and tailors your drip.",
  },
  {
    icon: Heart,
    title: "Drip & Recharge",
    description:
      "Kick back in a heated massage chair as the original vitamin blend goes to work. Walk out feeling brand new.",
  },
];

const reviews = [
  {
    initials: "KM",
    name: "Kayla M.",
    text: "The Myers' Cocktail is my go-to whenever I feel run down. I always leave with more energy and a clear head. The staff and the massage chairs make it feel like a mini vacation.",
  },
  {
    initials: "TR",
    name: "Tom R.",
    text: "I get the Myers' before every big work week. It's the most requested drip for a reason—I feel sharper and more recovered within a day. Highly recommend.",
  },
  {
    initials: "SB",
    name: "Sandra B.",
    text: "Booked it on a whim after a brutal cold and was amazed. Professional, clean, relaxing, and I actually felt human again. This is now part of my routine.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Medical Staff (RN on site)" },
  { icon: CreditCard, label: "HSA / FSA Accepted" },
  { icon: Users, label: "Couples & Group Bookings Welcome" },
  { icon: Sparkles, label: "Premium, Spa-Like Experience" },
];

export default function MyersIVPage() {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: "Myers Cocktail IV Therapy", description: "The original, time-tested Myers Cocktail vitamin drip at Prime IV Hydration & Wellness in Huntsville, AL.", path: "/myers-iv-therapy", serviceType: "IV Therapy" }), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Myers Cocktail", path: "/myers-iv-therapy" }])]} />
      {/* Hero */}
      <section className="relative bg-primary text-white section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/dr-john-myers-hero.png')",
            backgroundPosition: "center 35%",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        <div className="relative container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                America&apos;s Favorite IV
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                The Myers&apos; Cocktail
              </h1>
              <p className="text-white/80 text-lg mb-8 text-pretty">
                The IV that started it all. This carefully balanced blend of
                vitamins and minerals has been trusted for decades — and
                it&apos;s still the most requested drip at {SITE_CONFIG.name} in{" "}
                {CONTACT.address.city}, AL.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="btn-primary"
                >
                  <Phone className="w-4 h-4" />
                  Book Your Myers&apos; Cocktail
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
                  #1 Most Requested IV in America
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-bold text-secondary">
                    The Original Vitamin Drip
                  </span>
                </div>
                <p className="text-foreground-muted mb-6">
                  Energy, immunity, recovery &amp; clarity — in one session.
                </p>
                <ul className="space-y-3">
                  {heroBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-primary text-white py-10 border-t border-white/10">
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

      {/* How you'll feel */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Why Clients Keep Coming Back
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              One Drip. Four Ways You&apos;ll Feel the Difference.
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              The Myers&apos; Cocktail earned its &ldquo;America&apos;s
              Favorite&rdquo; reputation by doing a lot in a single session —
              delivered straight to your bloodstream for near-instant, 100%
              absorption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`tel:${CONTACT.phoneClean}`}
              className="btn-primary"
            >
              <Phone className="w-4 h-4" />
              Book Your Myers&apos; Cocktail Today
            </Link>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
              Where It All Began: Dr. John Myers and the Birth of IV Vitamin
              Therapy
            </h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                The Myers&apos; Cocktail goes back to the groundbreaking work of
                Dr. John Myers, a Baltimore physician who practiced from the
                1960s into the early 1980s. He was decades ahead of his peers,
                convinced that many common health complaints traced back to
                cellular nutrient deficiencies that pills alone couldn&apos;t
                fully resolve.
              </p>
              <p>
                After years of careful clinical observation, Dr. Myers crafted a
                specific intravenous formula to deliver essential vitamins and
                minerals straight into the bloodstream. His patients reported
                more energy, less fatigue, and a better overall sense of
                wellness. Word traveled fast through the Baltimore medical
                community, and people began seeking him out from across the
                region.
              </p>
              <p>
                When Dr. Myers passed away in 1984, his formula could have
                disappeared entirely. Instead, Dr. Alan Gaby — a respected
                integrative medicine physician — picked up where he left off. By
                interviewing Dr. Myers&apos; former patients, Dr. Gaby
                reconstructed the original blend, used it with thousands of his
                own patients, and published research that introduced the
                Myers&apos; Cocktail to mainstream medicine.
              </p>
            </div>
          </div>

          {/* Legacy stats */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              A Legacy of Healing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "40+", label: "Years of Clinical Use" },
                { stat: "15,000+", label: "Patients Treated by Dr. Gaby" },
                { stat: "#1", label: "Most Requested IV in the US" },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <p className="text-4xl font-bold text-secondary mb-2">
                    {item.stat}
                  </p>
                  <p className="text-foreground-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              What&apos;s Inside
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Premium, medical-grade ingredients for maximum effectiveness.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card overflow-hidden p-0">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">
                  Myers&apos; Cocktail ingredients and benefits
                </caption>
                <thead>
                  <tr className="bg-primary text-white">
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Ingredient
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Benefit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((item, index) => (
                    <tr
                      key={item.name}
                      className={
                        index % 2 === 1 ? "bg-background-alt" : "bg-background"
                      }
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 font-semibold text-foreground"
                      >
                        {item.name}
                      </th>
                      <td className="px-4 py-4 text-foreground-muted">
                        {item.benefit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-primary"
              >
                <Phone className="w-4 h-4" />
                Get This Blend Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why IV delivery */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
              Why Going Straight to the Vein Makes Such a Difference
            </h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                One of Dr. Myers&apos; sharpest insights was recognizing the
                limits of oral supplements. When you swallow a vitamin, it has
                to survive stomach acid, get absorbed through the intestinal
                wall, pass through the liver, and only then make its way to where
                it&apos;s needed. A little is lost at every step.
              </p>
              <p>
                IV delivery skips the digestive system entirely, letting
                nutrients reach therapeutic levels in your blood that simply
                aren&apos;t possible with pills. Vitamin C, for instance, tops
                out at roughly 200mg of gut absorption at a time — no matter how
                much you swallow. Delivered intravenously, far higher doses can
                reach the cells that need them.
              </p>
              <p>
                That matters most for anyone with absorption issues, compromised
                gut function, or a body under heavy stress with elevated
                nutritional demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Women */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              Benefits for Women
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Women navigate unique nutritional demands at every stage of life,
              and the Myers&apos; Cocktail has shown real promise in helping
              address many of them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {womensBenefits.map((item) => (
              <div key={item.title} className="card card-hover">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Men */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              Benefits for Men
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Men feel the difference too — especially those with active
              lifestyles, demanding careers, or age-related wellness goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mensBenefits.map((item) => (
              <div key={item.title} className="card card-hover">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chronic conditions */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              Support for Chronic Concerns
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              A major part of Dr. Gaby&apos;s research documented how the
              Myers&apos; Cocktail could support people living with chronic
              health challenges. IV therapy isn&apos;t a cure for any condition,
              but many patients have reported meaningful improvements in
              symptoms and quality of life when it&apos;s used as part of a
              broader wellness plan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {chronicConditions.map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto mt-8 text-sm text-foreground-muted leading-relaxed">
            Patients have also explored the Myers&apos; Cocktail for seasonal
            allergies, acute infections, low mood and anxiety, muscle spasms, and
            general run-down feelings. As always, IV therapy is meant to
            complement — never replace — appropriate care from your healthcare
            provider.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-background px-4 pb-4">
        <div className="container-custom mx-auto">
          <p className="max-w-3xl mx-auto text-xs text-foreground-muted leading-relaxed border-l-2 border-border pl-4">
            This content is for informational purposes only and is not medical
            advice. The Myers&apos; Cocktail is not intended to diagnose, treat,
            cure, or prevent any disease. Anyone considering IV therapy should
            consult a licensed healthcare provider to determine whether it is
            appropriate for their individual needs and health conditions.
          </p>
        </div>
      </section>

      {/* 3 Easy Steps */}
      <section className="section-padding bg-background-alt">
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
              Why It&apos;s the Favorite in {CONTACT.address.city}
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

      {/* Experience at our location */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
              Experience the Myers&apos; Cocktail at {SITE_CONFIG.name}
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              We honor Dr. Myers&apos; legacy by delivering this time-tested
              formula in a comfortable, spa-like setting with trained medical
              professionals. Our take stays true to the original principles
              while layering in modern quality standards and personalization.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {experienceFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <p className="text-secondary-light font-semibold uppercase tracking-wide mb-3">
              America&apos;s Favorite IV
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Feel Why It&apos;s #1?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Book the original Myers&apos; Cocktail today and discover why
              it&apos;s still the most requested drip at {SITE_CONFIG.name} in{" "}
              {CONTACT.address.city}, AL.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
