import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "what-is-iv-therapy-complete-guide";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "what is IV therapy",
    "IV therapy guide",
    "IV drip explained",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        IV (intravenous) therapy delivers fluids, vitamins, minerals, and
        antioxidants directly into your bloodstream through a small catheter.
        Because it skips the digestive system, your body can use those nutrients
        almost immediately — which is why so many people leave a session feeling
        refreshed and re-energized.
      </p>

      <h2>How Does IV Therapy Work?</h2>
      <p>
        When you swallow a vitamin, your stomach and intestines only absorb a
        fraction of it. IV therapy bypasses that process entirely, placing
        nutrients straight into circulation for close to 100% bioavailability.
        A licensed nurse inserts a thin catheter, usually in your arm, and a
        custom blend drips in over 30 to 60 minutes while you relax.
      </p>

      <h2>What&apos;s Actually in an IV Drip?</h2>
      <p>
        Every drip starts with a sterile hydration base, then adds a tailored
        mix of ingredients based on your goals:
      </p>
      <ul>
        <li>B vitamins for energy and metabolism</li>
        <li>Vitamin C and zinc for immune support</li>
        <li>Magnesium and calcium for muscle and nerve function</li>
        <li>Amino acids and antioxidants like glutathione</li>
        <li>Advanced add-ons such as NAD+ for cellular energy</li>
      </ul>

      <h2>Who Is IV Therapy For?</h2>
      <p>
        IV therapy is popular with busy professionals, athletes, frequent
        travelers, and anyone looking to support their immune system, energy, or
        recovery. It is not a replacement for medical care, but it&apos;s a
        convenient way to stay hydrated and topped up on key nutrients.
      </p>

      <blockquote>
        New to IV therapy? Our team will walk you through every option and help
        you pick the right drip during a free consultation.
      </blockquote>

      <h2>What to Expect on Your First Visit</h2>
      <p>
        At {SITE_CONFIG.name} in {CONTACT.address.city}, your
        first visit includes a quick wellness consult and a one-time telehealth
        screening. Then you&apos;ll settle into a zero-gravity massage chair while
        your drip does the work. Most people are in and out within an hour.
      </p>
      <p>
        Ready to feel the difference?{" "}
        <Link href="/specials">Check out our new client intro offer</Link> or{" "}
        <Link href="/iv-matcher">take our IV Matcher quiz</Link> to find your
        perfect drip.
      </p>
    </ArticleLayout>
  );
}
