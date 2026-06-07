import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Medical Weight Loss | Semaglutide & Lipo Injections",
  description:
    "Reach your weight goals with medically supervised weight loss support at Prime IV Hydration & Wellness in Huntsville, AL. Semaglutide, Lipo-Lean injections, and metabolism-boosting IV therapy.",
  keywords: [
    "weight loss Huntsville",
    "semaglutide",
    "lipo injections",
    "medical weight loss",
    "metabolism IV",
    "Prime IV weight loss",
  ],
};

const PROGRAM_FEATURES = [
  "Personalized medical evaluation & plan",
  "Physician-supervised weight loss medications",
  "Lipo-Lean (MIC + B-12) fat-burning injections",
  "Metabolism-boosting IV therapy",
  "Ongoing support & progress tracking",
  "Nutrition & lifestyle guidance",
];

const OPTIONS = [
  {
    title: "Semaglutide Program",
    description:
      "A physician-supervised GLP-1 program that helps control appetite, regulate blood sugar, and support sustainable weight loss.",
    benefits: ["Appetite control", "Steady results", "Medical supervision", "Weekly support"],
  },
  {
    title: "Lipo-Lean Injections",
    description:
      "A powerful blend of MIC (Methionine, Inositol, Choline) and B-12 designed to boost metabolism and help your body burn fat more efficiently.",
    benefits: ["Fat metabolism", "Energy boost", "B-12 included", "Quick visits"],
  },
  {
    title: "The Skinny Drip",
    description:
      "A metabolism- and energy-focused IV infusion that helps you feel lighter, more energized, and more confident on your wellness journey.",
    benefits: ["Metabolism support", "Hydration", "Energy", "Wellness"],
  },
];

export default function WeightLossPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Medical Weight Loss
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Reach Your Goals With Medical Weight Loss Support
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Achieve sustainable results with a physician-supervised weight
              loss program tailored to your body and your goals—right here in
              {" "}
              {CONTACT.address.city}, AL.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Journey
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

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                A Smarter, Supervised Path to Weight Loss
              </h2>
              <p className="text-foreground-muted mb-6">
                Crash diets and quick fixes rarely last. Our medical weight loss
                program combines proven medications, targeted injections, and
                metabolism support with ongoing guidance from licensed
                professionals—so you can lose weight safely and keep it off.
              </p>
              <ul className="space-y-3">
                {PROGRAM_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/80 mb-6">
                Schedule a consultation with our team to find out which weight
                loss option is right for you. We&apos;ll create a personalized
                plan based on your health and goals.
              </p>
              <Link
                href="/contact"
                className="btn-secondary w-full justify-center"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Loss Options */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Your Options
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Weight Loss Treatments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {OPTIONS.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border flex flex-col"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-foreground-muted mb-4 flex-grow">
                  {option.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {option.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      <Check className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-foreground-muted mt-8 max-w-2xl mx-auto">
            All weight loss medications require a medical evaluation. Treatment
            plans are personalized and prescribed only when medically
            appropriate.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
