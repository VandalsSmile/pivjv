"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, RotateCcw } from "lucide-react";
import { CONTACT } from "@/lib/constants";

type Result = {
  name: string;
  description: string;
  drips: string[];
};

const QUESTIONS: { question: string; answers: { label: string; key: string }[] }[] = [
  {
    question: "What's your main goal today?",
    answers: [
      { label: "More energy & focus", key: "energy" },
      { label: "Faster recovery & hydration", key: "recovery" },
      { label: "Stronger immunity", key: "immunity" },
      { label: "Beauty & anti-aging", key: "beauty" },
    ],
  },
  {
    question: "How has your week been?",
    answers: [
      { label: "Long hours, mentally drained", key: "energy" },
      { label: "Tough workouts or travel", key: "recovery" },
      { label: "Run down or fighting something", key: "immunity" },
      { label: "Feeling good, want to glow", key: "beauty" },
    ],
  },
  {
    question: "Which sounds most appealing?",
    answers: [
      { label: "Sharper focus & drive", key: "energy" },
      { label: "Replenished & rehydrated", key: "recovery" },
      { label: "Resilient & protected", key: "immunity" },
      { label: "Radiant skin & vitality", key: "beauty" },
    ],
  },
];

const RESULTS: Record<string, Result> = {
  energy: {
    name: "Energy & Performance",
    description:
      "You need a recharge. Our energy drips sharpen focus and fight fatigue.",
    drips: ["NAD+ IV Infusion", "Brainstorm Drip", "Executive Recovery Drip"],
  },
  recovery: {
    name: "Recovery & Hydration",
    description:
      "Bounce back faster. These drips replenish electrolytes and reduce soreness.",
    drips: ["Myers' Cocktail", "The Champion", "Hydration Hero Drip"],
  },
  immunity: {
    name: "Immunity & Wellness",
    description:
      "Fortify your defenses with high-dose vitamins and antioxidants.",
    drips: ["Immunity Armor", "Cellular Defense Drip", "The Revitalizer"],
  },
  beauty: {
    name: "Beauty & Anti-Aging",
    description:
      "Glow from within with beauty-boosting nutrients and hydration.",
    drips: ["The Glow", "Beauty & Radiance Drip", "Longevity Drip"],
  },
};

export function IvMatcherQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleAnswer = (key: string) => {
    setScores((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
    setStep((prev) => prev + 1);
  };

  const reset = () => {
    setStep(0);
    setScores({});
  };

  const isComplete = step >= QUESTIONS.length;
  const topKey =
    Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "energy";
  const result = RESULTS[topKey];

  if (isComplete) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-border p-8 lg:p-12 text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
          Your Perfect Match
        </p>
        <h2 className="text-3xl font-bold text-foreground mb-3">
          {result.name}
        </h2>
        <p className="text-foreground-muted mb-6 max-w-xl mx-auto">
          {result.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {result.drips.map((drip) => (
            <span
              key={drip}
              className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
            >
              {drip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`tel:${CONTACT.phoneClean}`} className="btn-secondary">
            <Phone className="w-4 h-4" />
            Call to Book
          </Link>
          <Link href="/menu" className="btn-outline border-primary text-primary hover:bg-primary hover:text-white">
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary font-medium px-4"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const current = QUESTIONS[step];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border p-8 lg:p-12">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-secondary">
          Question {step + 1} of {QUESTIONS.length}
        </span>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-8 rounded-full ${
                i <= step ? "bg-secondary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-6">
        {current.question}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {current.answers.map((answer) => (
          <button
            key={answer.label}
            onClick={() => handleAnswer(answer.key)}
            className="text-left bg-background-alt hover:bg-secondary hover:text-white rounded-xl p-5 font-medium text-foreground transition-colors border border-border"
          >
            {answer.label}
          </button>
        ))}
      </div>
    </div>
  );
}
