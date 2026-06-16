import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "iv-therapy-vs-oral-supplements-cost";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "IV therapy cost vs supplements",
    "IV therapy value",
    "supplement absorption",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        At first glance, a bottle of vitamins from the store looks far cheaper
        than an IV therapy session. But once you account for how much your body
        actually absorbs, the math gets more interesting. Let&apos;s break down
        the real value behind each option.
      </p>

      <h2>It&apos;s Not About Price — It&apos;s About Absorption</h2>
      <p>
        When you swallow a supplement, your digestive system only absorbs a
        fraction of the active ingredients. Much of what you pay for is processed
        and eliminated before it ever reaches your cells. IV therapy delivers
        nutrients directly into your bloodstream for close to 100%
        bioavailability.
      </p>

      <h2>Comparing the True Cost</h2>
      <ul>
        <li>Oral supplements: low upfront cost, but low absorption rates</li>
        <li>IV therapy: higher per-session cost, dramatically higher absorption</li>
        <li>Wasted nutrients from pills add up over months and years</li>
        <li>Memberships can make regular IV therapy surprisingly affordable</li>
      </ul>

      <blockquote>
        Paying less for a supplement your body can&apos;t fully use isn&apos;t
        really a savings — it&apos;s a hidden cost.
      </blockquote>

      <h2>Getting the Most Value</h2>
      <p>
        For everyday maintenance, quality supplements still have their place. But
        when you want reliable, high-absorption delivery of key nutrients, IV
        therapy often provides better value per dose — especially with a
        membership at {SITE_CONFIG.name} in {CONTACT.address.city}.
      </p>

      <p>
        Curious how the numbers work for your goals?{" "}
        <Link href="/memberships">Explore our memberships</Link> or{" "}
        <Link href="/book">book a visit</Link> to talk it through.
      </p>
    </ArticleLayout>
  );
}
