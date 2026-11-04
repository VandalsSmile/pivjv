import type { Metadata } from "next";
import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";
import { faqSchema } from "@/lib/structured-data";

const slug = "holiday-wellness-huntsville-iv-nad-niagen";
const article = ARTICLES.find((a) => a.slug === slug)!;

const metaTitle =
  "Holiday Wellness, NAD+ & Niagen® | Prime IV Huntsville";
const metaDescription =
  "Stay ahead of the Huntsville holidays with seasonal IV drips, quick injections, and 50% off NAD+ and Niagen® at Prime IV Huntsville through Dec. 31.";

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "holiday wellness Huntsville",
    "IV therapy Huntsville",
    "NAD+ Huntsville",
    "Niagen Huntsville",
    "NAD+ Niagen special Huntsville",
  ],
  openGraph: {
    url: `/learn-more/${slug}`,
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: article.image,
        width: 1280,
        height: 720,
        alt: article.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [article.image],
  },
};

const faqs = [
  {
    question: "Can IV therapy help me stay ahead of the holidays?",
    answer:
      "It's one of the most popular ways Huntsville guests prepare. The Immunity Armor, the Myers' Cocktail, and a quick Tri-Immune injection replenish fluids and key vitamins, including vitamin C, which plays a role in normal immune function [3], to help you feel your best through every event. Talk with our nurses about what fits you.",
  },
  {
    question: "What's included in the NAD+ and Niagen® holiday special?",
    answer:
      "Every NAD+ and Niagen® injection and infusion IV is 50% off from November 1 through December 31, 2026. Prices are per single injection or infusion, and NAD+ infusions must be pre-ordered.",
  },
  {
    question: "Should I choose NAD+ or Niagen®?",
    answer:
      "Niagen is nicotinamide riboside, a precursor your body uses to make NAD+; NAD+ therapy delivers NAD+ directly. A nurse will consult with you first and help you choose.",
  },
];

const references = [
  {
    id: "1",
    text: "Centers for Disease Control and Prevention.",
    title: "About Sleep.",
    journal: "CDC.gov.",
    pmid: "",
    href: "https://www.cdc.gov/sleep/about/index.html",
  },
  {
    id: "2",
    text: "National Institute on Alcohol Abuse and Alcoholism.",
    title: "Hangovers.",
    journal: "NIAAA.nih.gov.",
    pmid: "",
    href: "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/hangovers",
  },
  {
    id: "3",
    text: "NIH Office of Dietary Supplements.",
    title: "Vitamin C – Consumer Fact Sheet.",
    journal: "ods.od.nih.gov.",
    pmid: "",
    href: "https://ods.od.nih.gov/factsheets/VitaminC-Consumer/",
  },
  {
    id: "4",
    text: "Massudi H, Grant R, Braidy N, Guest J, Farnsworth B, Guillemin GJ.",
    title:
      "Age-associated changes in oxidative stress and NAD+ metabolism in human tissue.",
    journal: "PLoS One. 2012;7(7):e42357.",
    pmid: "22848760",
    href: "https://pubmed.ncbi.nlm.nih.gov/22848760/",
  },
  {
    id: "5",
    text: "Trammell SAJ, Schmidt MS, Weidemann BJ, et al.",
    title:
      "Nicotinamide riboside is uniquely and orally bioavailable in mice and humans.",
    journal: "Nature Communications. 2016;7:12948.",
    pmid: "27721479",
    href: "https://pubmed.ncbi.nlm.nih.gov/27721479/",
  },
  {
    id: "6",
    text: "Martens CR, Denman BA, Mazzo MR, et al.",
    title:
      "Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults.",
    journal: "Nature Communications. 2018;9:1286.",
    pmid: "29599478",
    href: "https://pubmed.ncbi.nlm.nih.gov/29599478/",
  },
];

const nadPricing = [
  {
    item: "NAD+ Injection, 100mg",
    regular: "$75",
    holiday: "$37.50",
  },
  {
    item: "NAD+ Injection, 250mg",
    regular: "$149",
    holiday: "$74.50",
  },
  {
    item: "NAD+ Infusion IV, 500mg",
    regular: "$499",
    holiday: "$249.50",
  },
  {
    item: "NAD+ Infusion IV, 1,000mg",
    regular: "$720",
    holiday: "$360",
  },
  {
    item: "Niagen® Injections and Infusion IVs",
    regular: "Regular menu price",
    holiday: "50% off (call for dose options)",
  },
];

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <JsonLd data={faqSchema(faqs)} />

      <p>
        Between Galaxy of Lights at the Huntsville Botanical Garden, office
        parties around Research Park, and relatives landing at HSV, the holiday
        season in the Rocket City moves fast. Year-end deadlines land right on
        top of school concerts, shopping trips, and late nights. So when guests
        ask us how to get through December without feeling wiped out, the
        answer is simple:{" "}
        <em>stay ahead of the season and put your drips on the calendar early.</em>
      </p>
      <p>
        This guide covers simple habits that pair with your visits, the drips Huntsville
        guests book most this time of year, and our biggest offer of the year:
        50% off every NAD+ and Niagen® injection and infusion IV through
        December 31.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>
          Booking your drips before the rush is the easiest way to stay ahead
          of a busy holiday season.
        </li>
        <li>
          Prime IV Huntsville is offering <strong>50% off all NAD+ and
          Niagen® injections and infusion IVs</strong> from November 1 through
          December 31, 2026.
        </li>
        <li>
          Veterans and active-duty service members get <strong>30% off every IV
          drip, booster, and add-on</strong> from November 11 to 15.
        </li>
        <li>
          IV therapy, NAD+, and Niagen may help you rehydrate, replenish, and
          support cellular energy all season long.
        </li>
      </ul>

      <h2>Why the Holidays Hit Huntsville Professionals So Hard</h2>
      <p>
        Huntsville runs on engineers, defense and aerospace contractors,
        healthcare workers, and small business owners. For a lot of those jobs,
        December means closing out contracts, finishing year-end reviews, and
        covering for coworkers on vacation, all while the personal calendar
        fills up. A few simple rules help:
      </p>
      <ul>
        <li>
          <strong>Pick your top three events.</strong> You don&apos;t have to
          attend every party.
        </li>
        <li>
          <strong>Protect one evening a week.</strong> No errands, no plans,
          just rest.
        </li>
        <li>
          <strong>Take lunch away from your desk.</strong> Even better, spend
          it in one of our chairs: a Myers&apos; Cocktail or a quick injection
          fits between meetings.
        </li>
      </ul>

      <h2>Stay Ahead of the Season: Sleep, Hydration, and a Head Start</h2>
      <p>
        The CDC recommends seven or more hours of sleep a night for most adults
        [1]. Holiday travel and year-end deadlines make that tough, and that is
        when Huntsville guests book The Revitalizer or a Myers&apos; Cocktail to
        replenish and recharge.
      </p>
      <p>
        Then drink water on purpose. Morning coffee, holiday drinks at night,
        and salty party food in between can leave you behind on fluids without
        noticing. North Alabama can also swing from 70 degrees to freezing in a
        week, and running the heat dries the air indoors. An IV drip delivers
        fluids, electrolytes, and vitamins directly, so it&apos;s a convenient
        way to catch up.
      </p>

      <h2>Drips on Our Menu That Fit the Season</h2>
      <p>
        Every visit starts with a health screening, and a licensed clinician
        places your IV. These are the drips from our{" "}
        <a href="/menu">full treatment menu</a> that guests book most from
        Thanksgiving through New Year&apos;s:
      </p>
      <ul>
        <li>
          <strong>The Immunity Armor:</strong> a popular pick before travel or
          a big family gathering. The NIH notes vitamin C plays a role in
          normal immune function [3].
        </li>
        <li>
          <strong>The Jetsetter:</strong> made with travel in mind, before or
          after a flight out of HSV.
        </li>
        <li>
          <strong>The After-Party:</strong> for the morning after a late night.
          The NIAAA notes alcohol can lead to dehydration [2], and this drip
          replenishes fluids and vitamins to help you feel like yourself again.
        </li>
        <li>
          <strong>
            <a href="/myers-iv-therapy">The Myers&apos; Cocktail</a>:
          </strong>{" "}
          the most time-tested IV in history and a classic seasonal reset.
        </li>
        <li>
          <strong>The Revitalizer:</strong> for when a long stretch of work and
          holiday plans has you feeling run-down.
        </li>
      </ul>
      <p>
        Short on time? Injections like <strong>Tri-Immune</strong>,{" "}
        <strong>Vitamin D</strong>, and <strong>Lipolean</strong> take just a
        few minutes, and injection packages (Any 4, Any 8, or Any 12) let you
        stock up. NAD+ and Niagen® injections aren&apos;t included in those
        packages.
      </p>

      <h2>NAD+ and Niagen®: 50% Off Through December 31</h2>
      <p>
        NAD+ is a coenzyme your cells use for energy metabolism and normal
        repair, and a study of human tissue found levels tend to be lower with
        age [4]. Niagen® is nicotinamide riboside (NR), a form of vitamin B3
        your body converts into NAD+. NR is orally bioavailable in humans [5],
        and in healthy adults aged 55–79, six weeks of daily NR was well
        tolerated and raised NAD+ levels [6]. NAD+ and Niagen may support
        cellular energy during a demanding season, and a nurse consults with
        you first to find the right option for you.
      </p>
      <p>
        Our <a href="/nad-niagen-special">NAD+ and Niagen® holiday special</a>{" "}
        runs November 1 through December 31, 2026. No promo code is needed:
      </p>
      <div className="mb-5 overflow-x-auto">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead>
            <tr>
              <th className="py-2 pr-4">Treatment</th>
              <th className="py-2 pr-4">Regular</th>
              <th className="py-2">Holiday price</th>
            </tr>
          </thead>
          <tbody>
            {nadPricing.map((row) => (
              <tr key={row.item} className="border-t border-border">
                <td className="py-2 pr-4">{row.item}</td>
                <td className="py-2 pr-4">{row.regular}</td>
                <td className="py-2">{row.holiday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Sale prices are per single injection or infusion. NAD+ injections take
        about 20 minutes, and NAD+ infusions must be pre-ordered, so book early
        during the holiday rush.
      </p>

      <h2>Veterans Day: 30% Off for Those Who Served</h2>
      <p>
        From Redstone Arsenal to the thousands of veterans who call North
        Alabama home, Huntsville has deep military roots. From November 11 to
        15, veterans and active-duty service members get 30% off every IV drip,
        booster, and add-on. Bring a military ID, VA card, or DD-214. Details
        are on our <a href="/specials">specials page</a>.
      </p>

      <h2>A Simple Huntsville Holiday Game Plan</h2>
      <ol className="mb-5 list-decimal space-y-2 pl-5 text-foreground-muted marker:text-secondary">
        <li>
          <strong>Early November:</strong> start an NAD+ or Niagen® series while the 50% special is on.
        </li>
        <li>
          <strong>Veterans Day week:</strong> veterans and active-duty guests
          save 30% on any drip.
        </li>
        <li>
          <strong>Before Thanksgiving travel:</strong> book The Jetsetter or
          The Immunity Armor.
        </li>
        <li>
          <strong>New Year&apos;s week:</strong> schedule a Myers&apos; Cocktail or The
          Revitalizer to start January strong.
        </li>
      </ol>
      <p>
        Want to keep it going in 2027? Our month-to-month{" "}
        <a href="/memberships">memberships</a> start at $110/month, or pre-pay
        with <a href="/iv-packs">IV packs</a>. New guests can start with our
        $85 intro offer (a one-time, state-required $25 telehealth screening
        applies at your first visit).
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <h2>Ask About Our NAD+ and Niagen® Holiday Special</h2>
      <p>
        Want to plan your holiday visits?{" "}
        <strong>
          Call {SITE_CONFIG.name} {SITE_CONFIG.location} at{" "}
          <a href={`tel:${CONTACT.phoneClean}`}>{CONTACT.phone}</a>
        </strong>{" "}
        to book at 50% off NAD+ and Niagen®, or stop by{" "}
        <strong>
          {CONTACT.address.street}, {CONTACT.address.suite}
        </strong>
        .
      </p>

      <h2>References</h2>
      <ol className="mb-5 list-decimal space-y-3 pl-5 text-foreground-muted marker:text-secondary">
        {references.map((ref) => (
          <li key={ref.id} id={`ref-${ref.id}`}>
            {ref.text} &ldquo;{ref.title}&rdquo; <em>{ref.journal}</em>{" "}
            <a href={ref.href} target="_blank" rel="noopener noreferrer">
              {ref.pmid ? `PubMed ${ref.pmid}` : ref.href}
            </a>
          </li>
        ))}
      </ol>

      <p>
        <em>
          This article is for informational purposes only and is not medical
          advice. Niagen® is a registered trademark of Niagen Bioscience. IV and
          injection products are custom formulations prepared by{" "}
          {SITE_CONFIG.name} and are not intended to diagnose, treat, cure, or
          prevent any disease, and they do not reverse aging. Results vary by
          person. Please consult your healthcare provider before starting any
          new supplement or wellness program, especially if you have a medical
          condition, are pregnant, or take prescription medications.
        </em>
      </p>
    </ArticleLayout>
  );
}
