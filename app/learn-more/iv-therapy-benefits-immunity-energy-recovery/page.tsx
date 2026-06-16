import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const slug = "iv-therapy-benefits-immunity-energy-recovery";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  keywords: [
    "IV therapy benefits",
    "IV drip immunity energy recovery",
    "best IV drip for goals",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        IV therapy has become one of the fastest-growing wellness services in
        the country because it offers a simple, efficient way to support
        hydration, energy, recovery, beauty, metabolism, and everyday wellness.
        Whether you are active, busy, stressed, traveling often, or just trying
        to feel better day to day, different IV blends can be tailored to support
        different goals.
      </p>

      <h2>Immune Support</h2>
      <p>
        Immune-focused IVs are especially popular during cold and flu season,
        allergy season, before travel, and during high-stress periods. Key
        ingredients include vitamin C for antioxidant and immune support, zinc
        for resilience, B-complex for energy production, and optional glutathione
        for overall cellular wellness.
      </p>

      <h2>Energy &amp; Metabolism Support</h2>
      <p>
        Many people choose energy IVs when dealing with afternoon crashes, poor
        sleep, mental fatigue, or demanding schedules — without relying on
        stimulants. Popular ingredients include vitamin B12, B-complex, taurine,
        and magnesium with amino acids to support energy balance and endurance.
      </p>

      <h2>Athletic Performance &amp; Recovery</h2>
      <p>
        Athletes and active adults often use IV therapy for pre-event hydration,
        post-event recovery, hot-weather support, and intense training cycles.
        Benefits people look for include rapid hydration, less muscle soreness,
        better endurance support, and faster post-workout recovery — especially
        helpful in hot Alabama summers.
      </p>

      <h2>Beauty, Glow &amp; Anti-Aging Support</h2>
      <p>
        Beauty-focused IVs are popular before weddings, vacations, photos, and
        special events. Glow-focused ingredients include vitamin C for collagen
        formation and skin brightness, biotin for healthy hair, skin, and nails,
        glutathione for antioxidant and radiance support, and hydration fluids
        for a refreshed appearance.
      </p>

      <h2>Recovery, Stress &amp; General Wellness</h2>
      <p>
        Recovery-focused IVs are popular after long nights, flights,
        celebrations, and busy weekends — pairing hydration fluids and
        electrolytes with B-complex and B12, plus optional nausea or comfort
        support. Wellness IVs combine magnesium, B vitamins, vitamin C, and
        glutathione to support a restorative reset for busy life.
      </p>

      <h2>Which IV Drip Should You Choose?</h2>
      <ul>
        <li>For immunity — vitamin C, zinc, and B-complex</li>
        <li>For energy — B12, B-complex, taurine, and magnesium</li>
        <li>For recovery — hydration, electrolytes, and amino acids</li>
        <li>For beauty — vitamin C, glutathione, and biotin</li>
        <li>For performance — amino acids, B vitamins, and electrolytes</li>
        <li>For metabolism — Lipolean, B12, and hydration support</li>
      </ul>

      <blockquote>
        Benefits usually last 3 to 7 days, sometimes longer. Some effects are
        felt quickly, while others continue to develop over the next 24 hours.
        Most people visit weekly or monthly depending on their goals.
      </blockquote>

      <p>
        Ready to feel the benefits of IV therapy? {SITE_CONFIG.name} in{" "}
        {CONTACT.address.city} can help you choose the right drip for your goals.{" "}
        <Link href="/iv-matcher">Take our IV Matcher quiz</Link> or{" "}
        <Link href="/book">book your visit</Link> today.
      </p>
    </ArticleLayout>
  );
}
