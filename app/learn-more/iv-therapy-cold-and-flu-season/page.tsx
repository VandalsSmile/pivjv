import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "iv-therapy-cold-and-flu-season";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "IV therapy cold and flu season",
    "immune support IV drip",
    "flu season wellness",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        When cold and flu season rolls around, most of us wait until we&apos;re
        already sick to take action. But a little preparation ahead of time may
        help your immune system respond more effectively — and IV therapy is one
        way to support that readiness.
      </p>

      <h2>Preparing Your Immune System</h2>
      <p>
        Your immune system relies on adequate hydration and a steady supply of
        nutrients to function at its best. Heading into the season well-hydrated
        and topped up on immune-supporting vitamins gives your body a stronger
        foundation to work from.
      </p>

      <h2>How IV Therapy Supports Immune Readiness</h2>
      <p>
        Immune-focused drips combine a hydrating base with nutrients your body
        uses to support its defenses, delivered directly into your bloodstream
        for maximum absorption:
      </p>
      <ul>
        <li>Vitamin C for antioxidant and immune support</li>
        <li>Zinc, which plays a role in immune function</li>
        <li>B vitamins to support energy during busy, stressful months</li>
        <li>Hydration to help your body operate at its best</li>
      </ul>

      <blockquote>
        Supporting your immune system before peak season may help reduce both
        the severity and recovery time if you do get sick.
      </blockquote>

      <h2>Make It a Seasonal Habit</h2>
      <p>
        Many people schedule immune-focused drips throughout the fall and winter
        to stay consistent. Whether you&apos;re a teacher, healthcare worker,
        parent, or frequent traveler, regular sessions can help you stay ahead of
        the season.
      </p>

      <p>
        Want to prepare for cold and flu season? Visit {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} and{" "}
        <Link href="/book">book an immunity drip</Link> today.
      </p>
    </ArticleLayout>
  );
}
