import type { Metadata } from "next";

import { IvMatcherQuiz } from "./iv-matcher-quiz";

export const metadata: Metadata = {
  title: "Which IV Drip Is Right for Me? | IV Therapy Matcher | Prime IV Huntsville",
  description:
    "Not sure which IV is right for you? Use our IV Therapy Matcher to choose a concern, type your symptoms, or pick a wellness category and see which Prime IV drips may be the best fit in Huntsville, AL.",
  keywords: [
    "IV matcher",
    "IV therapy matcher",
    "which IV is right for me",
    "find my IV",
    "IV therapy recommendation",
    "Huntsville AL IV quiz",
  ],
};

export default function IvMatcherPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto">
          <IvMatcherQuiz />
        </div>
      </div>
    </section>
  );
}
