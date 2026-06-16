import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "how-do-i-know-if-im-dehydrated";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "dehydration signs",
    "IV hydration therapy",
    "electrolyte replenishment",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        Whether it is from workouts, travel, alcohol, heat, illness, or simply
        not drinking enough fluids, dehydration can sneak up quickly and leave
        you feeling tired, foggy, achy, and off balance. The tricky part is that
        many dehydration symptoms do not immediately feel obvious — a lot of
        people walk around mildly dehydrated without knowing it.
      </p>

      <h2>It Is Not Just About Water</h2>
      <p>
        Dehydration happens when your body loses more fluid than it takes in.
        But it is not only water that is lost — you also lose electrolytes like
        sodium, potassium, and magnesium that help support energy, muscle
        function, brain clarity, and mood. When fluid and electrolyte balance
        drops, your cells cannot function as efficiently, and that is when
        symptoms begin to show up.
      </p>

      <h2>The Early Signs Most People Miss</h2>
      <p>You do not have to feel extremely thirsty to be dehydrated:</p>
      <ul>
        <li>Fatigue or brain fog — feeling sluggish, unfocused, low on motivation</li>
        <li>Headaches or pressure behind the eyes</li>
        <li>Dry mouth — a sticky or dry feeling</li>
        <li>Dark yellow urine</li>
        <li>Muscle cramps or aches from low electrolytes</li>
        <li>Dizziness or feeling generally &quot;off&quot;</li>
      </ul>

      <h2>Signs to Take Seriously</h2>
      <p>
        Symptoms like rapid heartbeat, rapid breathing, very dark or minimal
        urine, sunken eyes, extreme fatigue, confusion, irritability, or
        persistent nausea may indicate more serious dehydration. If symptoms
        feel severe or concerning, seek medical care immediately. IV hydration
        studios support general wellness and recovery, but they do not replace
        emergency medical treatment.
      </p>

      <h2>Why Drinking Water Isn&apos;t Always Enough</h2>
      <p>
        The body can only absorb so much water at once, and drinking too quickly
        may flush fluids out fast. Water alone does not replace electrolytes lost
        through sweat, illness, alcohol, or exertion — and digestive issues can
        make oral hydration feel slow or ineffective.
      </p>

      <h2>How IV Therapy Helps Faster</h2>
      <p>
        IV hydration therapy bypasses digestion completely, delivering fluids and
        electrolytes directly into circulation. This can help support faster
        recovery after workouts, heat exposure, travel, alcohol, illness, or
        chronic low hydration.
      </p>
      <ul>
        <li>Direct, fast absorption</li>
        <li>Electrolyte replenishment</li>
        <li>Support for headache, fatigue, or nausea</li>
        <li>Customized hydration options</li>
      </ul>

      <blockquote>
        Quick self-check: Am I tired for no obvious reason? Is my urine darker
        than light yellow? Do I have a headache or brain fog? Have I been
        sweating, drinking alcohol, traveling, or feeling sick recently?
      </blockquote>

      <p>
        Feeling dehydrated, foggy, or run down? {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} offers hydration-focused drips designed to restore
        fluids and replenish electrolytes.{" "}
        <Link href="/iv-matcher">Take our IV Matcher quiz</Link> or{" "}
        <Link href="/book">book your visit</Link> today.
      </p>
    </ArticleLayout>
  );
}
