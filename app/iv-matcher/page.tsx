import type { Metadata } from "next";
import { IVMatcher } from "./iv-matcher";

export const metadata: Metadata = {
  title: "IV Matcher | Find Your Perfect IV Therapy",
  description:
    "Take our quick IV Matcher quiz to discover the perfect IV therapy for your wellness goals. Personalized recommendations from Prime IV Hydration & Wellness in Huntsville, AL.",
  keywords: [
    "IV matcher",
    "find my IV",
    "IV therapy quiz",
    "personalized IV",
    "Huntsville AL",
    "Prime IV recommendation",
  ],
};

export default function IVMatcherPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              IV Matcher
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Find Your Perfect IV in 30 Seconds
            </h1>
            <p className="text-white/80 text-lg">
              Answer a few quick questions and we&apos;ll recommend the ideal IV
              therapy to match your wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <IVMatcher />
        </div>
      </section>
    </>
  );
}
