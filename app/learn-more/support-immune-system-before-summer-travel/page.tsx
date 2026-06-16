import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "support-immune-system-before-summer-travel";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "immune support summer travel",
    "Immunity Armor IV therapy",
    "travel hydration",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        Summer travel is exciting, but airports, long drives, and packed
        itineraries take a real toll on your body. Dry cabin air, disrupted
        sleep, restaurant food, and close contact with crowds can leave you
        dehydrated, exhausted, and more vulnerable to whatever bug is going
        around. A little preparation goes a long way toward keeping you feeling
        your best.
      </p>

      <h2>Why Travel Wears You Down</h2>
      <p>
        Even a short trip can disrupt the routines that keep your body running
        smoothly. The most common culprits include:
      </p>
      <ul>
        <li>Dehydration from dry airplane cabins and skipped water breaks</li>
        <li>Poor sleep and time-zone changes that stress your system</li>
        <li>Increased germ exposure in crowded terminals and attractions</li>
        <li>Irregular meals that leave you short on key nutrients</li>
      </ul>

      <h2>How IV Therapy Supports Immune Wellness</h2>
      <p>
        Our Immunity Armor drip pairs a hydrating base with immune-supporting
        nutrients like vitamin C, zinc, and B vitamins, delivered directly into
        your bloodstream for near-complete absorption. Because it skips the
        digestive system, your body can put those nutrients to work right away —
        which is why many travelers book a session a day or two before they
        leave.
      </p>

      <blockquote>
        A pre-trip drip helps you start your vacation hydrated and topped up,
        instead of playing catch-up once you arrive.
      </blockquote>

      <h2>Before and After Your Trip</h2>
      <p>
        Schedule a session 24 to 48 hours before departure to support hydration
        and immune readiness, then consider a recovery drip when you return to
        help bounce back from jet lag and fatigue. Either way, you&apos;ll spend
        the trip feeling more like yourself.
      </p>

      <p>
        Planning a getaway from {CONTACT.address.city}? Visit{" "}
        {SITE_CONFIG.name} and{" "}
        <Link href="/book">book your Immunity Armor drip</Link> or{" "}
        <Link href="/iv-matcher">take our IV Matcher quiz</Link> to find the
        right blend for your trip.
      </p>
    </ArticleLayout>
  );
}
