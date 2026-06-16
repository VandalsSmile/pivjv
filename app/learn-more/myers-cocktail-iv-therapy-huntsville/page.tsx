import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "myers-cocktail-iv-therapy-huntsville";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "Myers Cocktail IV therapy",
    "vitamin IV drip Huntsville",
    "Myers cocktail benefits",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        The Myers&apos; Cocktail is one of the most well-known vitamin IV drips
        in the world. Developed decades ago by Dr. John Myers, it&apos;s a
        balanced blend of vitamins and minerals designed to support energy,
        hydration, and overall wellness — and it remains a favorite for first-
        timers and regulars alike.
      </p>

      <h2>What&apos;s in a Myers&apos; Cocktail?</h2>
      <p>
        While formulas vary, the classic blend centers on a core group of
        nutrients delivered in a hydrating base:
      </p>
      <ul>
        <li>B-complex and B12 vitamins for energy and metabolism</li>
        <li>Vitamin C for immune and antioxidant support</li>
        <li>Magnesium to support muscle and nerve function</li>
        <li>Calcium to round out the mineral profile</li>
      </ul>

      <h2>Who Books a Myers&apos; Cocktail?</h2>
      <p>
        Because it&apos;s such a versatile, well-rounded drip, the Myers&apos;
        Cocktail appeals to a wide range of people — from busy professionals and
        parents to athletes and anyone feeling a little run down. It&apos;s a
        great starting point if you&apos;re new to IV therapy and not sure which
        specialized drip is right for you.
      </p>

      <blockquote>
        Think of the Myers&apos; Cocktail as a reliable all-rounder: balanced
        hydration plus the vitamins and minerals your body uses every day.
      </blockquote>

      <h2>What to Expect</h2>
      <p>
        At {SITE_CONFIG.name} in {CONTACT.address.city}, your drip is
        administered by a licensed nurse while you relax in a comfortable
        massage chair. Most sessions take 30 to 60 minutes, and many people
        notice a refreshed, re-energized feeling the same day.
      </p>

      <p>
        Curious whether the Myers&apos; Cocktail is your match?{" "}
        <Link href="/iv-matcher">Take our IV Matcher quiz</Link> or{" "}
        <Link href="/book">book your visit</Link> today.
      </p>
    </ArticleLayout>
  );
}
