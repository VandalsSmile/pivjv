import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/structured-data";
import Link from "next/link";
import {
  Phone,
  Check,
  ArrowRight,
  Sparkles,
  Heart,
  Droplets,
  Wind,
  BatteryCharging,
  Brain,
  Star,
  BadgeCheck,
  Microscope,
  ShieldCheck,
  Camera,
  Users,
  CalendarHeart,
  FlaskConical,
} from "lucide-react";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";
import { BridalForm } from "./bridal-form";

export const metadata: Metadata = {
  title: "Bridal Glow Starts With Hydration | Wedding IV Therapy in Huntsville",
  description:
    "Get wedding-ready with The Glow IV at Prime IV Hydration & Wellness in Huntsville, AL. Beauty-focused IV hydration to support glowing skin, energy, and recovery for brides and bridal parties. Claim your exclusive bridal discount.",
  keywords: [
    "bridal IV therapy Huntsville",
    "wedding IV hydration",
    "The Glow IV",
    "bridal party IV drip",
    "glowing skin IV therapy Huntsville AL",
  ],
  alternates: { canonical: "/bridal-glow-starts-with-hydration" },
};

const benefits = [
  {
    icon: Sparkles,
    title: "Glowing Skin Support",
    description:
      "Hydration plays a major role in that healthy, lit-from-within glow. Many brides include wellness-focused IV hydration and beauty add-ons like glutathione to help support refreshed-looking skin before wedding events and photos.",
  },
  {
    icon: Droplets,
    title: "Hair Hydration & Wellness",
    description:
      "Stressful planning periods can leave hair feeling dry and dull. Beauty-focused add-ons like biotin help support hydrated hair, stronger-looking nails, and that overall bridal glow before the big day.",
  },
  {
    icon: BatteryCharging,
    title: "Stress & Recovery Support",
    description:
      "Get ahead of feeling run down before the big day. IV hydration delivers fluids, vitamins, and nutrients directly into the bloodstream to help support recovery, refreshed energy, and mood during stressful planning.",
  },
  {
    icon: Brain,
    title: "Headache & Migraine Support",
    description:
      "For brides prone to headaches, wedding season can make symptoms worse. IV hydration with magnesium and wellness-focused nutrients helps support comfort and recovery so you feel ready for every event.",
  },
];

const addOns = [
  {
    icon: ShieldCheck,
    title: "Glutathione",
    description:
      "A popular antioxidant add-on many wellness-focused clients include in their bridal self-care routine to support overall wellness, recovery, and a refreshed appearance before major events.",
  },
  {
    icon: Sparkles,
    title: "Biotin",
    description:
      "Commonly included in beauty-focused routines to help support healthy hair, skin, and nails before weddings, vacations, photoshoots, and special occasions.",
  },
  {
    icon: ShieldCheck,
    title: "Immune Support Boosts",
    description:
      "Wedding season often means travel, crowded events, and disrupted sleep. Vitamin add-ons may help support overall wellness and immune health before the big day.",
  },
];

const whoItHelps = [
  {
    icon: Heart,
    title: "Brides-to-Be",
    description:
      "Feel refreshed, hydrated, and confident in the weeks and days leading up to your wedding.",
  },
  {
    icon: Users,
    title: "Bridal Parties",
    description:
      "Treat your bridesmaids to a glow-up together—ask about booking multiple appointments.",
  },
  {
    icon: Camera,
    title: "Before the Photos",
    description:
      "Perfect ahead of engagement shoots, bridal showers, and wedding-weekend photography.",
  },
  {
    icon: CalendarHeart,
    title: "Bachelorette & Travel",
    description:
      "Recover and rehydrate after bachelorette trips, travel, and back-to-back celebrations.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Medical Staff On Site" },
  { icon: Microscope, label: "Pharmaceutical-Grade Ingredients" },
  { icon: Sparkles, label: "Premium, Spa-Like Experience" },
  { icon: FlaskConical, label: "Customizable Beauty Add-Ons" },
];

const faqs = [
  {
    question: "Can IV hydration help support glowing skin?",
    answer:
      "Hydration plays an important role in overall skin appearance and wellness. Many brides include hydration-focused wellness routines before their wedding to help support refreshed-looking skin.",
  },
  {
    question: "How long before my wedding should I schedule IV therapy?",
    answer:
      "Many brides begin wellness-focused hydration sessions in the weeks leading up to their wedding and may also schedule appointments shortly before wedding events or travel.",
  },
  {
    question: "How quickly can you feel the effects?",
    answer:
      "Many clients report feeling refreshed and hydrated shortly after treatment, while some wellness-focused benefits may continue over the following days. Every experience can vary depending on hydration levels, stress, sleep, travel, nutrition, and overall wellness.",
  },
  {
    question: "Can IV therapy help support hydration during stressful times?",
    answer:
      "Wedding planning often involves stress, long days, travel, and busy schedules. IV hydration may help support hydration and overall wellness during demanding periods.",
  },
  {
    question: "Can I add vitamins or beauty-focused add-ons to my IV?",
    answer:
      "Yes. Prime IV Huntsville offers customizable IV options with wellness-focused add-ons including glutathione, biotin, and immune-supporting vitamin blends.",
  },
  {
    question: "Is IV hydration popular before weddings and events?",
    answer:
      "Many brides, bridal parties, and event attendees use hydration-focused wellness services before weddings, travel, celebrations, and large events to help support recovery and refreshed energy.",
  },
];

export default function BridalGlowPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "The Glow IV - Bridal Hydration Therapy",
            description:
              "Beauty-focused IV hydration therapy for brides and bridal parties in Huntsville, AL, designed to support glowing skin, energy, hydration, and recovery before the wedding.",
            path: "/bridal-glow-starts-with-hydration",
            serviceType: "Beauty IV Therapy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Bridal Glow",
              path: "/bridal-glow-starts-with-hydration",
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
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                Limited Bridal Promotion
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Bridal Glow Starts With Hydration
              </h1>
              <p className="text-white/80 text-lg mb-8 text-pretty">
                We&apos;re here to support you through this exciting—yet
                overwhelming—season of life. Feel refreshed, hydrated,
                energized, and confident before the big day with wellness-focused
                IV hydration designed to support glowing skin, healthy
                hydration, recovery, and overall wellness at {SITE_CONFIG.name}{" "}
                in {CONTACT.address.city}, AL.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-secondary-light">
                  The Glow IV
                </span>
                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                  Exclusive Bridal Discount
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link href="#claim-form" className="btn-primary">
                  Claim Your Bridal Discount
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
                  Limited Bridal Glow Offer
                </span>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                  <Heart className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Say Yes To The Glow
                </h2>
                <p className="text-foreground-muted mb-5">
                  Wedding-ready hydration for the bride and bridal party.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between rounded-lg bg-background-alt px-4 py-3">
                    <span className="text-foreground-muted line-through">
                      The Glow IV typically
                    </span>
                    <span className="text-foreground-muted line-through font-semibold">
                      $180
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-secondary/10 px-4 py-3">
                    <span className="font-semibold text-foreground">
                      Bride
                      <span className="block text-xs font-normal text-foreground-muted">
                        Special bridal rate
                      </span>
                    </span>
                    <span className="text-2xl font-bold text-secondary">
                      $125
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-primary/5 px-4 py-3">
                    <span className="font-semibold text-foreground">
                      Bridal Party
                      <span className="block text-xs font-normal text-foreground-muted">
                        Per party member
                      </span>
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      $140
                    </span>
                  </div>
                </div>

                <Link
                  href="#claim-form"
                  className="btn-secondary w-full justify-center"
                >
                  Claim Your Bridal Discount
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The secret behind glowing brides */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-primary" />
              </div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                What It Is
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                The Secret Behind Refreshed, Glowing Brides
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-5">
                Planning a wedding is supposed to be magical… but let&apos;s be
                honest—no bride has ever said it was easy and completely
                stress-free. Between late nights, packed schedules, travel, hair
                appointments, and makeup trials, the fatigue, dehydration, and
                run-down feeling can set in right before the big day.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                That&apos;s where we come in. IV hydration therapy delivers
                fluids and nutrients directly into the body to help support
                hydration, recovery, energy, and overall wellness more
                efficiently than drinking water alone—so you can glow from the
                inside out.
              </p>
              <Link href="#claim-form" className="btn-primary">
                Book Your Bridal IV
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-background-alt rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Why brides across North Alabama choose IV hydration
              </h3>
              <ul className="space-y-3">
                {[
                  "Supports glowing, healthy-looking skin",
                  "Helps support refreshed energy and mood",
                  "Encourages hydration and recovery during busy weeks",
                  "Customizable with beauty-focused add-ons",
                  "Relaxing, spa-like session before the big day",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal wellness benefits */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              How It Helps
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Bridal Wellness Benefits of IV Therapy
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              {SITE_CONFIG.name} helps support wellness, hydration, recovery, and
              beauty-focused self-care for brides preparing for wedding events
              throughout North Alabama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          <div className="text-center mt-10">
            <Link href="#claim-form" className="btn-primary">
              Claim Your Bridal Discount
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular add-ons */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Customize Your Glow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Popular Bridal IV Add-Ons
            </h2>
            <p className="text-foreground-muted text-lg mt-4 text-pretty">
              Many brides customize their IV experience with wellness-focused
              vitamin and antioxidant add-ons designed to support hydration,
              recovery, beauty, and immune support before the wedding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {addOns.map((addOn) => (
              <div
                key={addOn.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <addOn.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{addOn.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {addOn.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it helps */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              No Two Brides Are Exactly Alike
            </h2>
            <p className="text-foreground-muted text-lg mt-4 text-pretty">
              Whether you&apos;re focused on glowing skin, energy, headache
              support, immune wellness, hair hydration, or recovery, our team can
              help you find the IV therapy option or add-on that fits your bridal
              wellness routine.
            </p>
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

          <div className="text-center mt-10">
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call to Discuss Your Best Option
            </Link>
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

      {/* Claim form */}
      <section id="claim-form" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="min-w-0">
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                Limited Bridal Glow Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Say Yes To The Glow
              </h2>
              <p className="text-foreground-muted text-lg mb-6 text-pretty">
                Claim your exclusive bridal discount on The Glow IV—one of our
                most popular beauty-focused hydration experiences for brides and
                bridal parties.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Designed to support hydration, refreshed energy, and a healthy-looking glow.",
                  "Perfect before engagement photos, bridal showers, bachelorette trips, and the wedding weekend.",
                  "Ask about booking multiple appointments for your bridal party.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-lg bg-secondary/10 px-4 py-3">
                  <span className="block text-xs text-foreground-muted">
                    Bride
                  </span>
                  <span className="text-xl font-bold text-secondary">$125</span>
                </div>
                <div className="rounded-lg bg-primary/5 px-4 py-3">
                  <span className="block text-xs text-foreground-muted">
                    Bridal Party (each)
                  </span>
                  <span className="text-xl font-bold text-primary">$140</span>
                </div>
              </div>
              <p className="text-xs text-foreground-muted mt-6 leading-relaxed">
                Offer pricing is for The Glow IV bridal promotion. Availability
                may vary. IV therapy is not intended to diagnose, treat, cure, or
                prevent disease.
              </p>
            </div>

            <BridalForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Bridal Wellness FAQs
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

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <p className="text-secondary-light font-semibold uppercase tracking-wide mb-3">
              Limited Bridal Promotion
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Feel Refreshed, Hydrated &amp; Confident
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Get wedding-ready hydration for the bride and bridal party with one
              of {SITE_CONFIG.name}&apos;s most popular beauty-focused IVs. Claim
              your exclusive bridal discount today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#claim-form" className="btn-primary">
                Claim Your Bridal Discount
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
