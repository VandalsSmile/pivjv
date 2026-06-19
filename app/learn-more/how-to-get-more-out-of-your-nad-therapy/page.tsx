import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "how-to-get-more-out-of-your-nad-therapy";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "NAD+ therapy",
    "NAD+ amplifier",
    "how to prepare for NAD+ IV",
    "NAD+ side effects",
    "glutathione NAD+",
    "Huntsville AL NAD+ therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        NAD+ is one of the most talked-about molecules in longevity and energy
        medicine — but a great NAD+ infusion isn&apos;t just about the NAD+
        itself. It&apos;s about how well your body is prepared to absorb and use
        it. At {SITE_CONFIG.name}, we give an exclusive{" "}
        <strong>NAD+ Amplifier</strong> drip <em>before</em> your NAD+ infusion
        to prime your cells, smooth out the experience, and help you feel the
        difference. Here&apos;s how it works and why it matters.
      </p>

      <h2>Why Prep Before NAD+ Even Matters</h2>
      <p>
        NAD+ pushes your cells to work harder — ramping up energy production, DNA
        repair, and detoxification all at once. That&apos;s exactly why it&apos;s
        so powerful, but it also means your cells need the right support
        materials on hand to keep up. When your body is depleted of the
        antioxidants and cofactors that NAD+ relies on, you absorb less, feel
        more side effects, and leave benefit on the table.
      </p>
      <p>
        Think of it like prepping an engine before flooring the accelerator.
        Prime the system first, and everything that follows runs cleaner,
        smoother, and more efficiently.
      </p>

      <blockquote>
        Prepare. Amplify. Absorb. Transform. The right prep turns a good NAD+
        session into a great one.
      </blockquote>

      <h2>Inside the NAD+ Amplifier</h2>
      <p>
        The Amplifier is a carefully chosen blend of antioxidants and cofactors,
        each playing a specific role in getting your body ready for NAD+.
      </p>

      <h3>Glutathione — The Master Antioxidant</h3>
      <p>
        Glutathione neutralizes free radicals and reduces oxidative stress, so
        your cells can safely handle high doses of NAD+ while protecting your
        mitochondria — the tiny powerhouses where NAD+ does much of its work.
        Starting with strong antioxidant defenses means your cells spend less
        energy on cleanup and more on repair and renewal.
      </p>

      <h3>Vitamin B-12 — Energy &amp; Cellular Maintenance</h3>
      <p>
        B-12 is essential for energy production and DNA repair, and it works
        synergistically with NAD+ to support methylation — a core process behind
        cellular maintenance at the deepest level. Pairing the two helps your
        body put NAD+ to work where it counts.
      </p>

      <h3>Alpha Lipoic Acid (ALA) — The Antioxidant Recycler</h3>
      <p>
        ALA is a powerful antioxidant that actually recycles glutathione, helping
        it keep working longer. It also reduces inflammation and stimulates
        mitochondrial function, giving your cells the capacity to meet the
        increased energy demands that NAD+ creates.
      </p>

      <h3>Magnesium Sulfate — A Smoother Experience</h3>
      <p>
        Some people experience chest tightness, cramping, or nausea during a fast
        NAD+ push. Magnesium sulfate helps prevent these common side effects by
        relaxing muscles and supporting healthy vascular function — keeping your
        infusion comfortable from start to finish.
      </p>

      <h2>Why It Matters for You</h2>
      <ul>
        <li>Prepares your body to better absorb and utilize NAD+</li>
        <li>Enhances the overall effectiveness of your infusion</li>
        <li>Reduces oxidative stress and inflammation</li>
        <li>Minimizes side effects for a smoother, more comfortable session</li>
        <li>Helps you get the maximum benefit from every infusion</li>
      </ul>

      <h2>The Payoff: What You May Feel</h2>
      <p>
        When you prime your body first, the goal isn&apos;t just a more
        comfortable drip — it&apos;s better results from the NAD+ itself. Clients
        pursue the Amplifier-plus-NAD+ approach for:
      </p>
      <ul>
        <li>
          <strong>More energy</strong> — feel energized from within, not just
          caffeinated.
        </li>
        <li>
          <strong>Sharper focus</strong> — think clearer and perform better.
        </li>
        <li>
          <strong>Cellular repair</strong> — support recovery, repair, and
          resilience.
        </li>
        <li>
          <strong>Longevity &amp; vitality</strong> — look great, feel great,
          and live fully.
        </li>
      </ul>

      <h2>Getting the Most Out of Every Session</h2>
      <p>
        Beyond the Amplifier, a few simple habits help you make the most of your
        NAD+ therapy: arrive well-hydrated, eat something light beforehand, plan
        for the infusion to run at a comfortable pace, and stay consistent with a
        schedule that matches your goals. Our team will tailor the right cadence
        for you.
      </p>

      <p>
        Ready to get more out of your NAD+ therapy? Visit {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} and{" "}
        <Link href="/book">book your NAD+ session with the Amplifier</Link>, or
        learn more about{" "}
        <Link href="/learn-more/what-is-nad-energy-molecule">
          what NAD+ actually is
        </Link>{" "}
        and how it{" "}
        <Link href="/learn-more/nad-vs-niagen-oral-supplements-vs-iv">
          compares to oral Niagen supplements
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
