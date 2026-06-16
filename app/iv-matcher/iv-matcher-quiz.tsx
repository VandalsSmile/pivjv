"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Search } from "lucide-react";
import { CONTACT } from "@/lib/constants";

type Concern = {
  key: string;
  label: string;
  whyTitle: string;
  whyParagraph: string;
  summary: string;
  topPick: {
    name: string;
    description: string;
    ingredients: string;
  };
};

const CONCERNS: Concern[] = [
  {
    key: "energy",
    label: "Low Energy / Fatigue",
    whyTitle: "Why IV therapy may help with low energy and fatigue",
    whyParagraph:
      "IV therapy delivers hydration and nutrients directly into the bloodstream instead of relying on digestion. Many guests choose energy-focused IVs for hydration, B vitamins, amino acids, and recovery support when feeling run down, depleted, stressed, or exhausted.",
    summary:
      "These options focus on hydration, B vitamins, amino acids, and nutrients commonly used for energy support.",
    topPick: {
      name: "The Revitalizer",
      description:
        "A strong choice for fatigue, burnout, low energy, and mental fog.",
      ingredients: "B-Complex, Double B-12, Double Taurine, Amino Acid Blend",
    },
  },
  {
    key: "hydration",
    label: "Dehydration / Headache",
    whyTitle: "Why IV therapy may help with dehydration and headaches",
    whyParagraph:
      "Hydration-focused IV therapy is designed to replenish fluids and electrolytes efficiently. Unlike oral hydration that must go through digestion first, IV hydration delivers fluids directly into circulation for more direct hydration support.",
    summary:
      "These options prioritize fluid replenishment, electrolytes, and hydration support.",
    topPick: {
      name: "The Pure Hydration",
      description:
        "The most direct option for dehydration, travel fatigue, headache, or feeling run down.",
      ingredients: "1000cc IV fluids/electrolytes plus choice of booster",
    },
  },
  {
    key: "recovery",
    label: "Workout Recovery",
    whyTitle: "Why IV therapy may help with workout recovery",
    whyParagraph:
      "Recovery-focused IVs commonly include fluids, electrolytes, amino acids, magnesium, and vitamins used to support muscle recovery and replenishment after physical activity. Many guests choose IV therapy because nutrients are delivered directly rather than relying entirely on digestive absorption.",
    summary:
      "These options are built around hydration, amino acids, magnesium, and recovery support.",
    topPick: {
      name: "The Weekend Warrior",
      description:
        "A go-to for post-workout recovery, soreness, and endurance support.",
      ingredients: "B-Complex, B-12, Amino Acid Blend, Magnesium Chloride",
    },
  },
  {
    key: "immune",
    label: "Immune Support",
    whyTitle: "Why IV therapy may help support immune wellness",
    whyParagraph:
      "Immune-support IVs commonly include hydration, vitamin C, zinc, and B vitamins. Compared with oral supplements, IV therapy bypasses the digestive tract and delivers fluids and selected nutrients directly into circulation under provider guidance.",
    summary:
      "These options emphasize nutrients commonly associated with immune wellness and replenishment.",
    topPick: {
      name: "Immunity Armor",
      description: "Designed for immune support and seasonal wellness.",
      ingredients: "Vitamin C, Zinc, B vitamins, hydration fluids",
    },
  },
  {
    key: "hangover",
    label: "Hangover / Nausea",
    whyTitle: "Why IV therapy may help after a hangover or nausea",
    whyParagraph:
      "Hangover-style symptoms often involve dehydration, sluggishness, headache, and nausea. IV therapy may support hydration and replenishment more directly than oral hydration or supplements, especially when stomach upset makes drinking fluids difficult.",
    summary:
      "These options focus on hydration, replenishment, and recovery support.",
    topPick: {
      name: "The After Party",
      description:
        "Built for dehydration, sluggishness, and recovery after a long night.",
      ingredients: "IV fluids/electrolytes, Glutathione, B vitamins",
    },
  },
  {
    key: "beauty",
    label: "Skin / Hair / Glow",
    whyTitle: "Why IV therapy may help support skin, hair, and glow goals",
    whyParagraph:
      "Beauty-focused IVs commonly include hydration, antioxidants, vitamin C, biotin, and glutathione. IV therapy delivers fluids and nutrients directly into circulation instead of relying only on digestive absorption, which many guests choose as part of a skin and wellness routine.",
    summary:
      "These options focus on hydration, antioxidants, and nutrients commonly used for beauty support.",
    topPick: {
      name: "The Glow",
      description:
        "Designed for radiance, hydration, antioxidant support, and beauty wellness.",
      ingredients: "Biotin, Vitamin C, Glutathione, Magnesium",
    },
  },
  {
    key: "metabolism",
    label: "Metabolism Support",
    whyTitle: "Why IV therapy may help support metabolism goals",
    whyParagraph:
      "Metabolism-focused IV therapy often includes hydration, B vitamins, amino acids, taurine, and lipotropic support. Many guests choose IV therapy to complement a wellness or weight-management plan while supporting energy and nutrient replenishment.",
    summary:
      "These options focus on metabolism, energy, hydration, and wellness support.",
    topPick: {
      name: "The Skinny Drip",
      description: "Designed for metabolism support and wellness-focused energy.",
      ingredients: "B-Complex, Taurine, Lipolean Injection",
    },
  },
  {
    key: "longevity",
    label: "Focus / Longevity",
    whyTitle: "Why IV therapy may help support focus and longevity goals",
    whyParagraph:
      "Longevity-focused IV options like NAD+ or Niagen® are commonly selected for cellular energy, focus, recovery, and healthy aging support. IV therapy allows hydration and selected nutrients to be delivered directly into circulation under provider guidance.",
    summary:
      "These options are commonly selected for cellular energy, focus, recovery, and healthy aging support.",
    topPick: {
      name: "NAD+ IV Infusion",
      description: "A premium option for cellular energy and recovery support.",
      ingredients: "NAD+",
    },
  },
];

const CATEGORY_GROUPS: {
  group: string;
  options: { label: string; key: string }[];
}[] = [
  {
    group: "Energy, Mood & Brain Fog",
    options: [
      { label: "Chronic Fatigue / Low Energy", key: "energy" },
      { label: "Stress / Burnout", key: "energy" },
      { label: "Brain Fog / Trouble Focusing", key: "longevity" },
      { label: "Poor Sleep / Feeling Depleted", key: "energy" },
      { label: "Anxious / Wired & Tired", key: "energy" },
    ],
  },
  {
    group: "Hydration, Headaches & Travel",
    options: [
      { label: "Dehydration / Dry Mouth", key: "hydration" },
      { label: "Migraines / Headaches", key: "hydration" },
      { label: "Frequent Travel / Jet Lag", key: "hydration" },
      { label: "Altitude / Outdoor Exhaustion", key: "hydration" },
      { label: "Heat Exhaustion / Outdoor Recovery", key: "hydration" },
    ],
  },
  {
    group: "Immune & Recovery Support",
    options: [
      { label: "Immune Support / Feeling Run Down", key: "immune" },
      { label: "Cold / Flu Season Support", key: "immune" },
      { label: "Sinus / Seasonal Wellness Support", key: "immune" },
      { label: "Seasonal Allergies Support", key: "immune" },
      { label: "Post-Viral Fatigue Support", key: "immune" },
    ],
  },
  {
    group: "Chronic Wellness Concerns",
    options: [
      { label: "Lupus / Autoimmune Wellness Support", key: "immune" },
      { label: "Long-Term Lyme / Recovery Support", key: "immune" },
      { label: "Fibromyalgia / Chronic Aches & Fatigue", key: "energy" },
      { label: "Thyroid-Related Fatigue Support", key: "energy" },
      { label: "POTS / Lightheadedness Hydration Support", key: "hydration" },
      { label: "General Autoimmune Wellness Support", key: "immune" },
      { label: "Inflammation / Aches Support", key: "recovery" },
    ],
  },
  {
    group: "Hormones, Metabolism & Weight",
    options: [
      { label: "Perimenopause / Menopause Support", key: "energy" },
      { label: "PMS / Monthly Wellness Support", key: "hydration" },
      { label: "Weight Loss / Metabolism Support", key: "metabolism" },
      { label: "Bloating / Sluggish Metabolism", key: "metabolism" },
      { label: "GLP-1 / Weight Loss Program Support", key: "metabolism" },
    ],
  },
  {
    group: "Fitness, Beauty & Longevity",
    options: [
      { label: "Athletic Performance / Recovery", key: "recovery" },
      { label: "Muscle Soreness / Cramps", key: "recovery" },
      { label: "Skin / Hair / Glow", key: "beauty" },
      { label: "Healthy Aging / Longevity", key: "longevity" },
      { label: "NAD+ / Cellular Energy Support", key: "longevity" },
    ],
  },
  {
    group: "Digestive & Lifestyle",
    options: [
      { label: "Gut Issues / Poor Nutrient Absorption", key: "immune" },
      { label: "Hangover / Nausea", key: "hangover" },
      { label: "Nausea / Queasy Feeling", key: "hangover" },
      { label: "Busy Parent / Life Depletion", key: "energy" },
      { label: "Work Stress / Screen Fatigue", key: "energy" },
    ],
  },
];

const KEYWORD_MAP: { terms: string[]; key: string }[] = [
  { terms: ["fatigue", "tired", "energy", "burnout", "exhaust", "drained", "depleted", "stress"], key: "energy" },
  { terms: ["dehydrat", "headache", "migraine", "jet lag", "travel", "dry mouth", "thirst"], key: "hydration" },
  { terms: ["workout", "muscle", "sore", "recovery", "athletic", "cramp", "gym", "training"], key: "recovery" },
  { terms: ["immune", "sick", "cold", "flu", "run down", "allergy", "sinus", "seasonal"], key: "immune" },
  { terms: ["hangover", "nausea", "queasy", "party", "drinking", "stomach"], key: "hangover" },
  { terms: ["skin", "hair", "glow", "beauty", "radian", "biotin", "aging skin"], key: "beauty" },
  { terms: ["weight", "metabolism", "slim", "bloat", "glp", "fat"], key: "metabolism" },
  { terms: ["focus", "longevity", "nad", "brain fog", "concentrat", "memory", "aging"], key: "longevity" },
];

const QUICK_PICKS = CONCERNS.map((c) => ({ key: c.key, label: c.label }));

function getConcern(key: string) {
  return CONCERNS.find((c) => c.key === key) ?? null;
}

export function IvMatcherQuiz() {
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState("");

  const handleMatch = () => {
    const text = query.toLowerCase();
    if (!text.trim()) return;
    const found = KEYWORD_MAP.find((entry) =>
      entry.terms.some((term) => text.includes(term)),
    );
    setSelected(found ? found.key : "energy");
    setDropdown("");
  };

  const handleDropdown = (value: string) => {
    setDropdown(value);
    if (value) setSelected(value);
  };

  const result = selected ? getConcern(selected) : null;

  return (
    <div className="bg-background-alt rounded-3xl shadow-xl border border-border p-6 sm:p-10 lg:p-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">
          Find Your Fit
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
          IV Therapy Matcher
        </h2>
        <p className="text-foreground-muted leading-relaxed">
          Choose a common concern, type your own symptoms, or select a wellness
          category to see which Prime IV drips may be the best fit.
        </p>
      </div>

      {/* Search + dropdown card */}
      <div className="bg-white rounded-2xl border border-border p-6 mb-6">
        <label
          htmlFor="symptom-search"
          className="block font-semibold text-foreground mb-2"
        >
          Tell us what you&apos;re feeling
        </label>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            id="symptom-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleMatch()}
            placeholder="Example: fatigue, migraine, jet lag, sore muscles, brain fog..."
            className="flex-1 rounded-xl border border-border bg-background-alt px-4 py-3 text-foreground placeholder:text-foreground-muted/70 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
            onClick={handleMatch}
            className="btn-primary justify-center whitespace-nowrap"
          >
            <Search className="w-4 h-4" />
            Match Me
          </button>
        </div>

        <label
          htmlFor="category-select"
          className="block font-semibold text-foreground mb-2"
        >
          Or choose a wellness support category
        </label>
        <select
          id="category-select"
          value={dropdown}
          onChange={(e) => handleDropdown(e.target.value)}
          className="w-full rounded-xl border border-border bg-background-alt px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <option value="">
            Select a wellness concern / chronic condition category
          </option>
          {CATEGORY_GROUPS.map((group) => (
            <optgroup key={group.group} label={group.group}>
              {group.options.map((option) => (
                <option key={option.label} value={option.key}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Quick picks */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {QUICK_PICKS.map((pick) => (
          <button
            key={pick.key}
            onClick={() => {
              setSelected(pick.key);
              setDropdown("");
            }}
            className={`rounded-2xl border px-4 py-4 text-left font-semibold transition-colors ${
              selected === pick.key
                ? "border-secondary bg-secondary text-white"
                : "border-border bg-white text-foreground hover:border-secondary hover:text-secondary"
            }`}
          >
            {pick.label}
          </button>
        ))}
      </div>

      {/* Results panel */}
      <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-6">
        {!result ? (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Choose a concern above
            </h3>
            <p className="text-foreground-muted">
              Your recommended IV options will appear here.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Best IVs for {result.label}
            </h2>
            <div className="bg-background-alt rounded-xl p-5 sm:p-6 mb-6">
              <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-2">
                Why IV Therapy
              </p>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {result.whyTitle}
              </h3>
              <p className="text-foreground-muted leading-relaxed mb-3">
                {result.whyParagraph}
              </p>
              <p className="text-foreground-muted leading-relaxed">
                {result.summary}
              </p>
            </div>

            <div className="rounded-xl border-2 border-secondary p-5 sm:p-6">
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                Top Pick
              </span>
              <h4 className="text-xl font-bold text-foreground mb-2">
                {result.topPick.name}
              </h4>
              <p className="text-foreground-muted mb-4">
                {result.topPick.description}
              </p>
              <p className="text-sm text-foreground mb-5">
                <span className="font-bold">Key ingredients:</span>
                <br />
                {result.topPick.ingredients}
              </p>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-primary justify-center w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Call Now to Book This IV
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Disclaimer + CTA */}
      <p className="text-xs text-foreground-muted text-center max-w-2xl mx-auto mb-6 leading-relaxed">
        This tool is for general wellness education only and does not diagnose,
        treat, cure, or prevent any disease. IV therapy options are subject to
        medical screening and provider approval.
      </p>
      <div className="text-center">
        <Link
          href={`tel:${CONTACT.phoneClean}`}
          className="btn-primary justify-center"
        >
          <Phone className="w-4 h-4" />
          Call {CONTACT.phone} to Book
        </Link>
        <p className="text-sm text-foreground-muted mt-3">
          Prime IV {CONTACT.address.city}, {CONTACT.address.state} &bull;{" "}
          {CONTACT.address.street}, {CONTACT.address.city},{" "}
          {CONTACT.address.state}
        </p>
      </div>
    </div>
  );
}
