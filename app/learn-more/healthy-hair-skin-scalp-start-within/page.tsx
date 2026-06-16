import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "healthy-hair-skin-scalp-start-within";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "healthy hair skin scalp",
    "glutathione IV therapy",
    "beauty from within",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        Serums, masks, and scalp treatments all have their place — but topicals
        can only reach the surface. Truly healthy hair, skin, and scalp start
        from within, where hydration and key nutrients fuel the cells
        responsible for that glow.
      </p>

      <h2>Why Beauty Starts Beneath the Surface</h2>
      <p>
        Your skin, hair follicles, and scalp are living tissues that depend on
        steady hydration and a supply of vitamins, minerals, and antioxidants.
        When you&apos;re dehydrated or running low on key nutrients, it shows —
        dull skin, brittle hair, and a dry scalp are often signs of what&apos;s
        happening internally.
      </p>

      <h2>The Role of Hydration and Glutathione</h2>
      <p>
        Two of the biggest players in beauty-focused IV therapy are hydration and
        glutathione, a powerful antioxidant. Together they support your body in
        ways topical products simply can&apos;t reach:
      </p>
      <ul>
        <li>Deep hydration to support skin elasticity and a healthy scalp</li>
        <li>Glutathione to combat oxidative stress and support radiance</li>
        <li>Biotin and B vitamins to support hair and nail health</li>
        <li>Vitamin C to support collagen production</li>
      </ul>

      <blockquote>
        The best skincare routine works hand in hand with what you&apos;re
        feeding your body from the inside.
      </blockquote>

      <h2>Supporting Real, Lasting Results</h2>
      <p>
        Beauty-focused IV therapy isn&apos;t a quick fix — it&apos;s a way to
        consistently support the systems behind healthy hair, skin, and scalp.
        Paired with good skincare, sleep, and nutrition, regular sessions help
        you look and feel your best.
      </p>

      <p>
        Ready to nourish your glow from within? Visit {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} and{" "}
        <Link href="/book">book a beauty drip</Link> today.
      </p>
    </ArticleLayout>
  );
}
