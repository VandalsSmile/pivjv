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
    "IV drip beginners",
    "Huntsville AL IV therapy",
  ],
};

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <p>
        IV therapy has become one of the most talked-about wellness services in
        the country, and more people in {CONTACT.address.city} are exploring it
        for hydration, energy, recovery, immune support, beauty, and proactive
        wellness. If you have ever wondered what it actually is, whether it is
        safe, or what happens during a visit, this guide makes it simple.
      </p>

      <h2>What IV Therapy Actually Is</h2>
      <p>
        IV therapy delivers fluids, vitamins, minerals, amino acids, and
        antioxidants directly into your bloodstream instead of sending them
        through the digestive system first. Because digestion is bypassed,
        nutrients are available to the body right away — one reason people often
        choose IV therapy when they want faster hydration and more direct
        support.
      </p>

      <h2>What IV Therapy Helps With</h2>
      <ul>
        <li>Hydration and fatigue support</li>
        <li>Immune support</li>
        <li>Energy and metabolism support</li>
        <li>Beauty and anti-aging support</li>
        <li>Athletic recovery and performance</li>
        <li>Travel, jet lag, and hangover recovery</li>
        <li>Stress support and overall wellness</li>
      </ul>

      <h2>What to Expect at Your First Appointment</h2>
      <p>
        Your visit starts with a warm check-in and a short wellness consultation
        where you share your goals. You then choose a drip — on your own or with
        guidance from the team. A licensed professional starts your IV, usually
        with only a quick pinch, and you relax in a comfortable chair to scroll,
        work, read, or simply unwind. Many guests report noticing hydration or
        energy support before they leave.
      </p>

      <h2>Safety Standards</h2>
      <p>
        IV therapy is performed by licensed nurses and trained medical
        professionals, with medical oversight and an initial evaluation to help
        ensure the service is appropriate for each guest. That includes
        medical-grade sanitation, new sterile materials for every guest, and a
        clean, comfortable setting.
      </p>

      <h2>Common Ingredients You May See on a Menu</h2>
      <ul>
        <li>Vitamin B12 and B-complex — energy and metabolism support</li>
        <li>Vitamin C — antioxidant support for immunity and skin</li>
        <li>Magnesium — relaxation and muscle comfort</li>
        <li>Zinc — immune support</li>
        <li>Amino acids and taurine — recovery, focus, and stamina</li>
        <li>Glutathione — antioxidant and radiance support</li>
        <li>Biotin — hair, skin, and nail support</li>
        <li>Lipolean — metabolism and energy support</li>
      </ul>

      <blockquote>
        Many guests feel hydration or energy support within 15 to 30 minutes,
        while recovery and immune support may be noticed over the next 24 hours.
        Benefits may last several days to a week or longer depending on the drip.
      </blockquote>

      <h2>IV Therapy vs. Oral Supplements</h2>
      <p>
        Choose IV therapy when you want fast results, higher absorption,
        immediate hydration, or support before and after an event. Choose oral
        supplements when you want daily maintenance and long-term consistency.
        Many people use a mix of both depending on their goals.
      </p>

      <h2>Why {SITE_CONFIG.name}</h2>
      <p>
        A spa-like atmosphere, heated zero-gravity massage chairs, premium
        ingredients, experienced nurses, and personalized recommendations make
        the experience different. Single drips, add-on injections, and monthly
        memberships are available, and many services are HSA and FSA eligible.
      </p>

      <p>
        Ready to feel your best?{" "}
        <Link href="/iv-matcher">Take our IV Matcher quiz</Link> or{" "}
        <Link href="/book">book your visit</Link> at {SITE_CONFIG.name} today.
      </p>
    </ArticleLayout>
  );
}
