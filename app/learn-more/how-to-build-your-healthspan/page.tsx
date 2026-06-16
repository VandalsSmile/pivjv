import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "how-to-build-your-healthspan";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "healthspan",
    "longevity IV therapy",
    "NAD healthspan",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        For years, the conversation around aging focused on lifespan — how many
        years we live. But there&apos;s a more meaningful goal: healthspan, the
        number of years you live in good health, with energy, mobility, and
        clarity. Living longer only matters if you feel good doing it.
      </p>

      <h2>What Is Healthspan?</h2>
      <p>
        Healthspan is the portion of your life spent free from chronic disease
        and decline. Two people can live to the same age with completely
        different experiences — one active and engaged, the other limited by
        fatigue and illness. Building your healthspan means investing in the
        habits and support that keep you thriving, not just surviving.
      </p>

      <h2>The Cellular Side of Aging</h2>
      <p>
        Much of how we age happens at the cellular level. Molecules like NAD+
        play a central role in energy production and cellular repair, and levels
        naturally decline as we get older. Supporting these systems is a key part
        of any longevity-focused routine.
      </p>
      <ul>
        <li>NAD+ to support cellular energy and repair</li>
        <li>Antioxidants like glutathione to combat oxidative stress</li>
        <li>Consistent hydration and key vitamins and minerals</li>
        <li>Sleep, movement, and nutrition as the foundation</li>
      </ul>

      <blockquote>
        The goal isn&apos;t just more years — it&apos;s more good years.
      </blockquote>

      <h2>How IV Therapy Fits In</h2>
      <p>
        IV therapy can be one tool in a broader healthspan strategy, delivering
        NAD+, antioxidants, and hydration directly into your bloodstream. Paired
        with healthy lifestyle habits, regular sessions can help support the
        energy and resilience you want as you age.
      </p>

      <p>
        Ready to invest in your healthspan? Visit {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} and{" "}
        <Link href="/book">book your NAD+ session</Link> today.
      </p>
    </ArticleLayout>
  );
}
