import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "collagen-supplements-explained";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "collagen supplements",
    "collagen for skin",
    "IV therapy collagen support",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        Collagen is everywhere — in powders, capsules, coffee creamers, and
        skincare. But what does it actually do, how should you take it, and do
        supplements really deliver visible results? Here&apos;s an honest look at
        collagen and how IV therapy supports your body&apos;s own production.
      </p>

      <h2>What Collagen Does for Your Body</h2>
      <p>
        Collagen is the most abundant protein in your body and a key building
        block for skin, joints, hair, and connective tissue. As we age, natural
        collagen production declines, which contributes to fine lines, joint
        stiffness, and thinning hair.
      </p>

      <h2>Do Collagen Supplements Work?</h2>
      <p>
        Collagen supplements can support your body&apos;s collagen levels, but
        results depend on consistency and quality. A few tips for getting the
        most from them:
      </p>
      <ul>
        <li>Take collagen consistently — results build over weeks, not days</li>
        <li>Pair it with vitamin C, which your body needs to make collagen</li>
        <li>Choose hydrolyzed collagen peptides for easier absorption</li>
        <li>Remember that diet and hydration matter just as much</li>
      </ul>

      <blockquote>
        Supplements give your body raw materials — but it still needs the right
        nutrients and hydration to turn them into real results.
      </blockquote>

      <h2>How IV Therapy Supports Collagen Production</h2>
      <p>
        IV therapy can deliver vitamin C, biotin, and antioxidants like
        glutathione directly into your bloodstream — supporting the processes
        your body relies on to build collagen and maintain healthy skin from
        within. Combined with a quality collagen routine, it&apos;s a powerful
        pairing.
      </p>

      <p>
        Want healthier-looking skin, hair, and joints? Visit {SITE_CONFIG.name}{" "}
        in {CONTACT.address.city} and{" "}
        <Link href="/book">book a beauty-focused drip</Link> today.
      </p>
    </ArticleLayout>
  );
}
