import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "iv-therapy-chronic-illness-symptoms";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "IV therapy chronic illness",
    "chronic fatigue IV therapy",
    "reactivated mono support",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        Living with a chronic illness often means managing symptoms that don&apos;t
        show up on a single lab test — relentless fatigue, brain fog, and the
        sense that your body just can&apos;t keep up. For many people, consistent
        IV therapy becomes one supportive piece of a larger wellness routine.
      </p>

      <h2>The Daily Toll of Chronic Symptoms</h2>
      <p>
        Conditions like chronic fatigue and reactivated mono can leave you
        depleted in ways that are hard to explain to others. Dehydration and
        nutrient gaps can quietly make those symptoms worse, creating a cycle
        that&apos;s tough to break with diet alone.
      </p>

      <h2>How Regular IV Therapy May Help</h2>
      <p>
        IV hydration paired with targeted nutrients delivers support directly
        into your bloodstream, bypassing a digestive system that may not be
        absorbing nutrients efficiently. Many people find that a consistent
        schedule — rather than a one-time visit — makes the biggest difference.
      </p>
      <ul>
        <li>Hydration support to combat ongoing fatigue</li>
        <li>B vitamins and amino acids to support energy production</li>
        <li>Antioxidants like glutathione for cellular support</li>
        <li>A consistent cadence tailored to how you feel</li>
      </ul>

      <blockquote>
        IV therapy is not a cure or a replacement for medical care — it&apos;s a
        complementary tool that may help support your quality of life.
      </blockquote>

      <h2>Building a Routine That Works</h2>
      <p>
        Everyone&apos;s needs are different. Our team at {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} can help you build a schedule and drip selection
        that fits your symptoms and goals, always in partnership with your
        healthcare provider.
      </p>

      <p>
        Want to explore a supportive routine?{" "}
        <Link href="/book">Book a consultation</Link> or{" "}
        <Link href="/memberships">learn about our memberships</Link> for regular
        visits.
      </p>
    </ArticleLayout>
  );
}
