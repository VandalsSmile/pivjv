import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "what-is-nad-energy-molecule";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "what is NAD+",
    "NAD energy molecule",
    "NAD IV therapy",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        You&apos;ve probably seen NAD+ mentioned alongside energy, focus, and
        anti-aging — but what actually is it? NAD+ is often called the
        &quot;energy molecule&quot; because it plays a starring role in how every
        cell in your body produces and uses energy.
      </p>

      <h2>What Is NAD+?</h2>
      <p>
        NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in all
        living cells. It helps convert the food you eat into usable energy and
        supports critical processes like DNA repair and cellular communication.
        Without enough NAD+, your cells simply can&apos;t function at their best.
      </p>

      <h2>Why NAD+ Matters More as We Age</h2>
      <p>
        NAD+ levels naturally decline as we get older, and that decline is linked
        to many of the changes we associate with aging — lower energy, slower
        recovery, and reduced mental sharpness. Supporting your NAD+ levels is a
        cornerstone of longevity-focused wellness.
      </p>
      <ul>
        <li>Supports cellular energy production</li>
        <li>Plays a role in DNA repair and cellular health</li>
        <li>Linked to focus, clarity, and recovery</li>
        <li>Declines naturally with age</li>
      </ul>

      <blockquote>
        Think of NAD+ as the spark plug for your cells — essential for turning
        fuel into the energy that powers everything you do.
      </blockquote>

      <h2>Oral Supplements vs. IV NAD+</h2>
      <p>
        While oral precursors can help, IV NAD+ therapy delivers the molecule
        directly into your bloodstream for higher bioavailability. For people
        focused on energy, focus, and healthy aging, IV delivery often offers a
        more noticeable advantage over a daily capsule.
      </p>

      <p>
        Curious about NAD+ therapy? Visit {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} and{" "}
        <Link href="/book">book a NAD+ session</Link>, or compare{" "}
        <Link href="/learn-more/nad-vs-niagen-oral-supplements-vs-iv">
          NAD+ vs. Niagen
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
