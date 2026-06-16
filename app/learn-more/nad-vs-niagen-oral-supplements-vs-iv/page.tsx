import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "nad-vs-niagen-oral-supplements-vs-iv";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "NAD+ vs Niagen",
    "NAD IV therapy",
    "NAD oral supplements",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        NAD+ has become one of the most talked-about molecules in wellness, and
        with that attention comes a common question: should you take an oral
        supplement like Niagen, or invest in NAD+ IV therapy? Both aim to support
        your body&apos;s NAD+ levels, but they work very differently.
      </p>

      <h2>NAD+ and Niagen: What&apos;s the Difference?</h2>
      <p>
        NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every
        cell that helps convert food into energy and supports cellular repair.
        Niagen is a branded form of nicotinamide riboside — a precursor your body
        converts into NAD+. In other words, Niagen gives your body a building
        block, while IV NAD+ delivers the molecule itself.
      </p>

      <h2>The Absorption Question</h2>
      <p>
        Oral supplements have to survive digestion before they reach your
        bloodstream, which limits how much your body actually absorbs. IV
        infusions bypass the digestive system entirely, delivering NAD+ directly
        into circulation for far higher bioavailability.
      </p>
      <ul>
        <li>Oral Niagen: convenient and affordable, but lower absorption</li>
        <li>IV NAD+: higher bioavailability and a more direct delivery route</li>
        <li>IV sessions take longer but deliver a larger, more usable dose</li>
      </ul>

      <blockquote>
        For people focused on energy, recovery, and longevity support, IV NAD+
        often delivers more noticeable results than a daily capsule.
      </blockquote>

      <h2>Which Is Right for You?</h2>
      <p>
        Cost, convenience, and your goals all play a role. Some people use oral
        supplements for daily maintenance and add periodic IV sessions for a
        bigger boost. The best approach depends on what you&apos;re trying to
        achieve.
      </p>

      <p>
        Want a personalized recommendation? The team at {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} can help.{" "}
        <Link href="/book">Book a consultation</Link> or{" "}
        <Link href="/learn-more/what-is-nad-energy-molecule">
          learn more about NAD+
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
