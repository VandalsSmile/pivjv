import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";

const slug = "chronic-stress-iv-therapy-recovery";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "IV therapy for stress",
    "burnout recovery",
    "stress nutrient depletion",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        Chronic stress does more than wear you down mentally — it quietly drains
        your body of the nutrients it needs to function at its best. If
        you&apos;ve been running on empty, understanding that connection is the
        first step to feeling like yourself again.
      </p>

      <h2>How Stress Depletes Your Body</h2>
      <p>
        When you&apos;re under constant pressure, your body burns through certain
        nutrients faster than usual. Prolonged stress is associated with lower
        levels of:
      </p>
      <ul>
        <li>Magnesium, which supports relaxation and sleep</li>
        <li>B vitamins, which fuel energy and mood</li>
        <li>Vitamin C, which your adrenal glands rely on heavily</li>
        <li>Antioxidants that combat stress-related oxidative damage</li>
      </ul>

      <h2>The Burnout Cycle</h2>
      <p>
        Low nutrient levels can lead to fatigue, brain fog, and poor sleep —
        which make it even harder to cope with stress, deepening the cycle.
        Breaking out of it often requires replenishing what&apos;s been depleted,
        not just &quot;pushing through.&quot;
      </p>

      <blockquote>
        You can&apos;t pour from an empty cup. Replenishing key nutrients is a
        practical part of any recovery routine.
      </blockquote>

      <h2>Where IV Therapy Fits In</h2>
      <p>
        Targeted IV drips can rapidly restore magnesium, B vitamins, vitamin C,
        and antioxidants like glutathione — the exact nutrients stress burns
        through. Many people use IV therapy alongside good sleep, movement, and
        nutrition to support their recovery and feel more resilient.
      </p>

      <h2>A Reset for Mind and Body</h2>
      <p>
        The session itself is restorative too: 30 to 60 minutes in a
        zero-gravity massage chair, away from your inbox. It&apos;s a chance to
        slow down while your body gets what it needs.
      </p>
      <p>
        Feeling burnt out?{" "}
        <Link href="/iv-matcher">Take our IV Matcher quiz</Link> to find a
        stress-support drip, or{" "}
        <Link href="/contact">book a consultation</Link> with our team.
      </p>
    </ArticleLayout>
  );
}
