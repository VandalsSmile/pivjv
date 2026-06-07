import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles, Droplets, Heart, Brain } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { FaqAccordion } from "@/app/faq/faq-accordion";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Bridal Glow Starts With Hydration | Prime IV Huntsville",
  description:
    "Feel refreshed, hydrated, and confident before your big day with wellness-focused bridal IV therapy at Prime IV Hydration & Wellness in Huntsville, AL. Claim your exclusive bridal discount on The Glow IV.",
  keywords: [
    "bridal IV therapy Huntsville",
    "wedding IV drip",
    "bridal glow",
    "The Glow IV",
    "glutathione bridal",
    "bridal wellness Huntsville",
  ],
};

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Glowing Skin Support",
    description:
      "Hydration plays a major role in that healthy, lit-from-within glow. Stress, lost sleep, and packed schedules can lead to dryness, dullness, and stress breakouts. Many brides add beauty-supporting ingredients like glutathione to help support refreshed-looking skin before photos and events.",
  },
  {
    icon: Droplets,
    title: "Hair Hydration & Wellness",
    description:
      "Stressful planning periods can leave hair feeling dry and lacking moisture. Many brides include IV hydration and beauty-focused add-ons like biotin to help support hydrated hair, stronger-looking nails, and overall wellness before the big day.",
  },
  {
    icon: Heart,
    title: "Stress & Recovery Support",
    description:
      "Get ahead of feeling run down and exhausted. IV hydration delivers fluids, vitamins, and nutrients directly into the bloodstream to help support recovery, refreshed energy, mood, and that bridal glow during stressful wedding planning periods.",
  },
  {
    icon: Brain,
    title: "Headache & Migraine Support",
    description:
      "For brides prone to headaches or migraines, wedding season can make symptoms more frustrating. IV hydration delivers fluids, magnesium, and wellness-focused nutrients to help support comfort and recovery so you feel ready for every celebration.",
  },
];

const ADD_ONS = [
  {
    title: "Glutathione",
    description:
      "A popular antioxidant add-on many wellness-focused clients include in their bridal self-care routine to help support overall wellness, recovery, and a refreshed appearance before major events.",
  },
  {
    title: "Biotin",
    description:
      "Commonly included in beauty-focused wellness routines to help support healthy hair, skin, and nails before weddings, vacations, photoshoots, and special occasions.",
  },
  {
    title: "Immune Support Boosts",
    description:
      "Wedding season often means travel, crowded events, stress, and disrupted sleep. Vitamin add-ons may help support overall wellness and immune health before the big day.",
  },
];

const BRIDAL_FAQS = [
  {
    question: "Can IV hydration help support glowing skin?",
    answer:
      "Hydration plays a key role in supporting that healthy, refreshed look. Many brides pair wellness-focused IV hydration with beauty-supporting add-ons like glutathione to help support refreshed-looking skin before wedding events and photos.",
  },
  {
    question: "How long before my wedding should I schedule IV therapy?",
    answer:
      "Every bride is different, but many like to schedule a session in the days leading up to the wedding so they feel refreshed and hydrated for the big day. Some build IV hydration into their routine over the weeks of planning. Our team can help you find timing that fits your goals.",
  },
  {
    question: "How quickly can you feel the effects?",
    answer:
      "Many clients report feeling refreshed during or shortly after their session, with hydration and nutrients delivered directly into the bloodstream. The overall benefits can continue to develop over the following 24-48 hours.",
  },
  {
    question: "Can IV therapy help support hydration during stressful times?",
    answer:
      "Yes. Wedding planning can be exhausting, and IV hydration delivers fluids, vitamins, and nutrients directly into the body to help support hydration, recovery, energy, and overall wellness during busy, stressful periods.",
  },
];

export default function BridalGlowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                Limited Bridal Promotion
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Bridal Glow Starts With Hydration
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Be sure to claim your exclusive bridal discount below for{" "}
                <strong className="text-white">The Glow IV</strong> — one of
                Prime IV Huntsville&apos;s most popular beauty-focused hydration
                experiences for brides and bridal parties.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/specials" className="btn-secondary">
                  Claim Your Bridal Discount
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/book"
                  className="btn-outline text-white border-white hover:bg-white hover:text-primary"
                >
                  Book Your Bridal IV
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call {CONTACT.phone}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/bridal-iv-therapy.png"
                  alt="Bridal Wellness IV Therapy in Huntsville, Alabama"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              We here at Prime IV Huntsville are here to support you through this
              exciting yet overwhelming season of life. Our goal is to help
              brides throughout Huntsville and surrounding areas feel refreshed,
              hydrated, energized, and confident before the big day with
              wellness-focused IV hydration therapy designed to support glowing
              skin, healthy hydration, recovery, and overall wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn-primary">
                Book Your Bridal IV
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                Call Prime IV Huntsville
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Secret Section */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-center">
              The Secret Behind Refreshed, Glowing Brides Before The Big Day
            </h2>
            <div className="space-y-5 text-foreground-muted leading-relaxed">
              <p>
                Planning a wedding is supposed to be magical… but let&apos;s be
                honest — no bride has ever said planning a wedding was easy and
                completely stress-free. Between late nights, emotional
                exhaustion, packed schedules, outdoor events, travel, seating
                arrangements, caterers, hair appointments, makeup trials, and
                investing in premium skincare products, brides often spend
                months making sure every detail is perfect for everyone else.
                Then right before the big day arrives, the fatigue, dehydration,
                headaches, stress, and overall rundown feeling can start to set
                in.
              </p>
              <p>
                That&apos;s where we come in. IV hydration therapy delivers
                fluids and nutrients directly into the body to help support
                hydration, recovery, energy, and overall wellness more
                efficiently than drinking water alone.
              </p>
              <p>
                Many women in Huntsville are adding wellness-focused IV
                hydration to their bridal preparation routine to help support
                glowing skin, healthy-looking hair, refreshed energy, and
                recovery before the big day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Wellness Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Bridal Wellness Benefits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Bridal Wellness Benefits Of IV Therapy
            </h2>
            <p className="text-foreground-muted">
              Prime IV Huntsville helps support wellness, hydration, recovery,
              and beauty-focused self-care for brides preparing for wedding
              events throughout North Alabama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl shadow-lg p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Add-Ons */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Customize Your IV
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Popular Bridal IV Add-Ons
            </h2>
            <p className="text-foreground-muted">
              Many brides customize their IV experience with wellness-focused
              vitamin and antioxidant add-ons designed to support hydration,
              recovery, beauty, and immune support before the wedding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ADD_ONS.map((addon) => (
              <div
                key={addon.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {addon.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Two Brides */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              No Two Brides Are Exactly Alike
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              Every bride has different wellness goals, timelines, stress
              levels, hydration needs, and beauty priorities leading up to the
              big day. Whether you are focused on glowing skin, energy, headache
              support, immune wellness, hair hydration, or recovery, our team
              can help you discuss which IV therapy option or add-on may be the
              best fit for your bridal wellness routine.
            </p>
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call To Discuss Your Best Option
            </Link>
          </div>
        </div>
      </section>

      {/* Bridal FAQs */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Bridal Wellness FAQs
              </h2>
            </div>
            <FaqAccordion faqs={BRIDAL_FAQS} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
