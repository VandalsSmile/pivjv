import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, ArrowRight, Activity } from "lucide-react";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Medical Weight Loss | Physician-Guided Programs",
  description:
    "Medically supervised weight loss programs at Prime IV Hydration & Wellness in Huntsville, AL. Personalized plans combining modern medications, IV support, and expert guidance.",
  keywords: [
    "medical weight loss",
    "physician weight loss",
    "semaglutide",
    "weight management",
    "Huntsville AL weight loss",
  ],
};

const features = [
  "Personalized, physician-guided treatment plans",
  "Modern, FDA-approved weight management medications",
  "Metabolism-supporting IV drips and injections",
  "Ongoing support and progress check-ins",
];

const steps = [
  {
    title: "Consultation",
    description:
      "Meet with our medical team to review your health history and goals.",
  },
  {
    title: "Personalized Plan",
    description:
      "Receive a custom program tailored to your body and lifestyle.",
  },
  {
    title: "Ongoing Support",
    description:
      "Stay on track with regular check-ins, IV support, and guidance.",
  },
];

export default function MedicalWeightLossPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Medical Weight Loss
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Reach Your Goals With Physician-Guided Weight Loss
            </h1>
            <p className="text-white/80 text-lg mb-8">
              {SITE_CONFIG.name} in {CONTACT.address.city}, AL offers medically
              supervised weight loss programs designed around you — combining
              modern medications, IV support, and expert care.
            </p>
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call to Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                A Smarter Approach to Weight Loss
              </h2>
              <p className="text-foreground-muted mb-6">
                Our programs go beyond fad diets. With medical supervision and
                proven tools, we help you lose weight safely and keep it off —
                supported by nutrient therapy that keeps your energy up.
              </p>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-white rounded-xl shadow-sm border border-border p-6 flex gap-4"
                >
                  <span className="w-10 h-10 flex-shrink-0 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-foreground-muted text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-secondary">
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
