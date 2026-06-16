import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";

const slug = "iv-therapy-vs-oral-supplements";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "IV therapy vs supplements",
    "IV vs pills absorption",
    "bioavailability IV therapy",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        Oral supplements are convenient and affordable, but they share one big
        limitation: your digestive system. IV therapy takes a different route
        entirely. Here&apos;s how the two compare so you can decide what fits your
        goals.
      </p>

      <h2>The Absorption Problem</h2>
      <p>
        When you take a pill, it has to survive stomach acid, then be broken
        down and absorbed through the intestinal wall. Depending on the nutrient
        and your gut health, you may only absorb 20–50% of what&apos;s on the
        label. IV therapy delivers nutrients directly into the bloodstream,
        achieving close to 100% bioavailability.
      </p>

      <h2>Speed and Consistency</h2>
      <p>
        Oral supplements can take days or weeks of consistent use to build up.
        An IV drip works in a single session, with effects many people notice
        the same day. That makes IV therapy especially useful when you need to
        bounce back quickly — after travel, illness, or a tough week.
      </p>

      <h2>When Oral Supplements Still Win</h2>
      <p>
        Pills aren&apos;t going anywhere, and for good reason:
      </p>
      <ul>
        <li>They&apos;re inexpensive and easy to take daily</li>
        <li>They&apos;re ideal for long-term, baseline nutrition</li>
        <li>No appointment required</li>
      </ul>
      <p>
        The smartest approach is often a combination: a solid daily supplement
        routine, with IV therapy as a periodic boost when your body needs more.
      </p>

      <blockquote>
        Think of oral supplements as your everyday maintenance and IV therapy as
        a targeted tune-up.
      </blockquote>

      <h2>The Bottom Line</h2>
      <p>
        Neither option is universally &quot;better&quot; — they solve different
        problems. If absorption, speed, and a noticeable boost matter to you, IV
        therapy is hard to beat.{" "}
        <Link href="/menu">Explore our full menu</Link> or{" "}
        <Link href="/contact">reach out with questions</Link> and we&apos;ll help
        you build the right plan.
      </p>
    </ArticleLayout>
  );
}
