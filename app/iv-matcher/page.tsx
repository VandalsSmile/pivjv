import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";
import { IvMatcherQuiz } from "./iv-matcher-quiz";

export const metadata: Metadata = {
  title: "IV Matcher Quiz | Find Your Perfect IV Therapy",
  description:
    "Not sure which IV is right for you? Take our quick IV Matcher quiz to get a personalized treatment recommendation at Prime IV Hydration & Wellness in Huntsville, AL.",
  keywords: [
    "IV matcher quiz",
    "find my IV",
    "IV therapy recommendation",
    "Huntsville AL IV quiz",
  ],
};

export default function IvMatcherPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              IV Matcher Quiz
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Find Your Perfect IV in Under a Minute
            </h1>
            <p className="text-white/80 text-lg">
              Answer a few quick questions and we&apos;ll recommend the ideal IV
              therapy for your goals in {CONTACT.address.city}, AL.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto">
            <IvMatcherQuiz />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
