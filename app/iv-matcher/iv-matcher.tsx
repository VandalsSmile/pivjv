"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Phone, RotateCcw } from "lucide-react";
import { CONTACT } from "@/lib/constants";

type Goal = "energy" | "recovery" | "immunity" | "beauty";

interface Question {
  id: number;
  question: string;
  options: { label: string; goal: Goal }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What's your main wellness goal right now?",
    options: [
      { label: "Boost my energy & focus", goal: "energy" },
      { label: "Recover faster from workouts or fatigue", goal: "recovery" },
      { label: "Strengthen my immune system", goal: "immunity" },
      { label: "Improve my skin, hair & glow", goal: "beauty" },
    ],
  },
  {
    id: 2,
    question: "How have you been feeling lately?",
    options: [
      { label: "Tired and foggy", goal: "energy" },
      { label: "Sore, dehydrated, or burnt out", goal: "recovery" },
      { label: "Run down or fighting something off", goal: "immunity" },
      { label: "Dull skin and low confidence", goal: "beauty" },
    ],
  },
  {
    id: 3,
    question: "What would make the biggest difference for you?",
    options: [
      { label: "Sharper focus all day", goal: "energy" },
      { label: "Bouncing back quickly", goal: "recovery" },
      { label: "Staying healthy year-round", goal: "immunity" },
      { label: "Looking and feeling radiant", goal: "beauty" },
    ],
  },
];

const RESULTS: Record<
  Goal,
  { title: string; drip: string; description: string; href: string }
> = {
  energy: {
    title: "Energy & Performance",
    drip: "NAD+ IV Infusion or Brainstorm Drip",
    description:
      "You need a recharge. Our energy drips are packed with B-vitamins and cellular fuel to clear brain fog and power you through demanding days.",
    href: "/iv-therapy#energy",
  },
  recovery: {
    title: "Recovery & Hydration",
    drip: "Myers' Cocktail or The Champion",
    description:
      "Time to bounce back. Our recovery drips replenish electrolytes, reduce soreness, and rehydrate you fast so you feel restored.",
    href: "/iv-therapy#recovery",
  },
  immunity: {
    title: "Immunity & Wellness",
    drip: "Immunity Armor Drip",
    description:
      "Defend and thrive. Our immunity drips deliver high-dose vitamin C, zinc, and antioxidants to support your body when it needs it most.",
    href: "/iv-therapy#immunity",
  },
  beauty: {
    title: "Beauty & Anti-Aging",
    drip: "The Glow or Beauty & Radiance Drip",
    description:
      "Glow from within. Our beauty drips support healthy skin, hair, and nails with glutathione, biotin, and skin-loving nutrients.",
    href: "/iv-therapy#beauty",
  },
};

export function IVMatcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Goal[]>([]);

  const handleAnswer = (goal: Goal) => {
    const newAnswers = [...answers, goal];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) {
      setAnswers(answers.slice(0, -1));
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setAnswers([]);
    setStep(0);
  };

  const isComplete = step >= QUESTIONS.length;

  const getResult = (): Goal => {
    const counts: Record<Goal, number> = {
      energy: 0,
      recovery: 0,
      immunity: 0,
      beauty: 0,
    };
    answers.forEach((a) => counts[a]++);
    return (Object.keys(counts) as Goal[]).reduce((a, b) =>
      counts[a] >= counts[b] ? a : b
    );
  };

  const progress = Math.min((step / QUESTIONS.length) * 100, 100);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-background-alt rounded-full overflow-hidden border border-border">
          <div
            className="h-full bg-secondary transition-all duration-300"
            style={{ width: `${isComplete ? 100 : progress}%` }}
          />
        </div>
        <p className="text-sm text-foreground-muted mt-2 text-center">
          {isComplete
            ? "Your match is ready!"
            : `Question ${step + 1} of ${QUESTIONS.length}`}
        </p>
      </div>

      {!isComplete ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">
            {QUESTIONS[step].question}
          </h2>
          <div className="space-y-3">
            {QUESTIONS[step].options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(option.goal)}
                className="w-full text-left px-5 py-4 rounded-xl border border-border bg-background hover:border-secondary hover:bg-secondary/5 transition-colors flex items-center justify-between group"
              >
                <span className="text-foreground font-medium">
                  {option.label}
                </span>
                <ArrowRight className="w-5 h-5 text-foreground-muted group-hover:text-secondary transition-colors" />
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={handleBack}
              className="mt-6 inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-secondary text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
            Your Perfect Match
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {RESULTS[getResult()].title}
          </h2>
          <p className="text-lg font-semibold text-primary mb-4">
            {RESULTS[getResult()].drip}
          </p>
          <p className="text-foreground-muted mb-8">
            {RESULTS[getResult()].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={RESULTS[getResult()].href} className="btn-primary">
              View This Treatment
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-secondary">
              <Phone className="w-4 h-4" />
              Book Now
            </Link>
          </div>
          <button
            onClick={handleReset}
            className="mt-6 inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
