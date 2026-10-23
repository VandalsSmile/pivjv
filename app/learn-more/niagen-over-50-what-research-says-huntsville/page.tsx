import type { Metadata } from "next";
import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";
import { faqSchema } from "@/lib/structured-data";

const slug = "niagen-over-50-what-research-says-huntsville";
const article = ARTICLES.find((a) => a.slug === slug)!;

const metaTitle =
  "Niagen® After 50: What Research Says | Prime IV Huntsville";
const metaDescription =
  "Niagen® (nicotinamide riboside) is popular with adults over 50. A plain-English look at NAD+, the human studies, and Niagen IV at Prime IV Huntsville.";

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "Niagen Huntsville",
    "Niagen after 50",
    "nicotinamide riboside",
    "Niagen IV therapy Huntsville",
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
    question: "Is Niagen the same as NAD+?",
    answer:
      "No. Niagen is nicotinamide riboside, a precursor your body uses to make NAD+. We also offer NAD+ therapy; our team can explain the differences.",
  },
  {
    question: "Will Niagen reverse aging?",
    answer:
      "No. Niagen may support cellular energy and healthy aging as part of a healthy lifestyle. It does not reverse aging or treat disease.",
  },
  {
    question: "Is it safe?",
    answer:
      "NR has been well tolerated in published clinical trials at studied doses [3,4]. Individual suitability varies, which is why every guest is screened first.",
  },
];

const studies = [
  {
    study: "Trammell 2016 [2]",
    who: "12 healthy adults (plus a one-person pilot)",
    dose: "Single doses of 100, 300, 1,000 mg",
    finding: "Dose-dependent rise in the blood NAD+ metabolome",
  },
  {
    study: "Martens 2018 [3]",
    who: "30 healthy adults aged 55–79 (crossover)",
    dose: "1,000 mg/day for 6 weeks",
    finding: "Well tolerated; blood-cell NAD+ about 60% higher than placebo",
  },
  {
    study: "Conze 2019 [4]",
    who: "140 healthy overweight adults",
    dose: "100–1,000 mg/day for 8 weeks",
    finding:
      "Whole-blood NAD+ up 22%–142% by dose; no difference in adverse events vs. placebo",
  },
  {
    study: "Elhassan 2019 [5]",
    who: "12 men aged 70–80 (crossover)",
    dose: "1,000 mg/day for 21 days",
    finding:
      "Raised muscle NAD+ metabolome; lowered some circulating inflammatory cytokines; no change in mitochondrial bioenergetics",
  },
  {
    study: "Dollerup 2018 [6]",
    who: "40 men with obesity, aged 40–70",
    dose: "2,000 mg/day for 12 weeks",
    finding: "Safe, but no improvement in insulin sensitivity",
  },
];

const references = [
  {
    id: "1",
    text: "Massudi H, Grant R, Braidy N, Guest J, Farnsworth B, Guillemin GJ.",
    title:
      "Age-associated changes in oxidative stress and NAD+ metabolism in human tissue.",
    journal: "PLoS One. 2012;7(7):e42357.",
    pmid: "22848760",
    href: "https://pubmed.ncbi.nlm.nih.gov/22848760/",
  },
  {
    id: "2",
    text: "Trammell SAJ, Schmidt MS, Weidemann BJ, et al.",
    title:
      "Nicotinamide riboside is uniquely and orally bioavailable in mice and humans.",
    journal: "Nature Communications. 2016;7:12948.",
    pmid: "27721479",
    href: "https://pubmed.ncbi.nlm.nih.gov/27721479/",
  },
  {
    id: "3",
    text: "Martens CR, Denman BA, Mazzo MR, et al.",
    title:
      "Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults.",
    journal: "Nature Communications. 2018;9:1286.",
    pmid: "29599478",
    href: "https://pubmed.ncbi.nlm.nih.gov/29599478/",
  },
  {
    id: "4",
    text: "Conze D, Brenner C, Kruger CL.",
    title:
      "Safety and metabolism of long-term administration of NIAGEN (nicotinamide riboside chloride) in a randomized, double-blind, placebo-controlled clinical trial of healthy overweight adults.",
    journal: "Scientific Reports. 2019;9:9772.",
    pmid: "31278280",
    href: "https://pubmed.ncbi.nlm.nih.gov/31278280/",
  },
  {
    id: "5",
    text: "Elhassan YS, Kluckova K, Fletcher RS, et al.",
    title:
      "Nicotinamide riboside augments the aged human skeletal muscle NAD+ metabolome and induces transcriptomic and anti-inflammatory signatures.",
    journal: "Cell Reports. 2019;28(7):1717–1728.e6.",
    pmid: "31412242",
    href: "https://pubmed.ncbi.nlm.nih.gov/31412242/",
  },
  {
    id: "6",
    text: "Dollerup OL, Christensen B, Svart M, et al.",
    title:
      "A randomized placebo-controlled clinical trial of nicotinamide riboside in obese men: safety, insulin-sensitivity, and lipid-mobilizing effects.",
    journal: "American Journal of Clinical Nutrition. 2018;108(2):343–353.",
    pmid: "29992272",
    href: "https://pubmed.ncbi.nlm.nih.gov/29992272/",
  },
];

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <JsonLd data={faqSchema(faqs)} />

      <p>
        Huntsville is a city of engineers, scientists, and people who like to
        read the data before they buy in. So when friends at Redstone, Cummings
        Research Park, or the Monday tee time start talking about Niagen®, the
        natural next question is:{" "}
        <em>what does the research actually show?</em>
      </p>
      <p>
        This guide is the honest version: what Niagen is, why it&apos;s getting
        so much attention from adults over 50, what human studies have (and
        haven&apos;t) found, and how our Niagen IV infusion and injection series
        work here in Huntsville.
      </p>

      <h2>Key takeaways</h2>
      <ul>
        <li>
          Niagen® is a patented form of{" "}
          <strong>nicotinamide riboside (NR)</strong>, a form of vitamin B3 that
          the body can use to make NAD+.
        </li>
        <li>
          NAD+ is a coenzyme involved in cellular energy metabolism, and studies
          suggest levels decline with age.
        </li>
        <li>
          Human clinical trials show NR can raise NAD+ levels and was well
          tolerated in the studies.
        </li>
        <li>
          Research on broader health outcomes is still early and mixed. Niagen
          may support cellular energy and healthy aging; it isn&apos;t a
          treatment for aging or disease.
        </li>
      </ul>

      <h2>First, What Is NAD+?</h2>
      <p>
        NAD+ (nicotinamide adenine dinucleotide) is found in every cell. It
        helps convert food into usable cellular energy and supports normal
        cellular repair processes. Research on human skin samples has observed
        that NAD+ levels tend to be lower in older adults than in younger ones
        [1]. That observation is a big part of why &ldquo;NAD+ precursors&rdquo;
        became a hot topic in the longevity world.
      </p>

      <h2>What Makes Niagen® Different</h2>
      <p>
        Your body can build NAD+ from several building blocks. Nicotinamide
        riboside is one of them, and Niagen® is the brand of NR that has been
        used in many of the published human clinical trials [2–5]. In short,
        Niagen doesn&apos;t deliver NAD+ itself. It provides a precursor your
        cells can use to make their own.
      </p>

      <h2>The Human Research, Summarized Honestly</h2>
      <p>Here&apos;s what a careful reading of the published studies shows:</p>
      <ul>
        <li>
          <strong>NR raises NAD+ in people.</strong> Early human work showed
          oral NR increased blood NAD+ levels in a dose-dependent way [2].
        </li>
        <li>
          <strong>Well tolerated in middle-aged and older adults.</strong> A
          study of healthy adults aged 55–79 found six weeks of 1,000 mg/day was
          well tolerated and raised NAD+ levels in blood [3].
        </li>
        <li>
          <strong>Safe at studied doses over eight weeks.</strong> A randomized,
          placebo-controlled trial in healthy overweight adults found
          dose-dependent NAD+ increases with no serious adverse effects at doses
          up to 1,000 mg/day [4].
        </li>
        <li>
          <strong>Signals worth watching.</strong> In men in their 70s, three
          weeks of NR increased NAD+-related metabolites in muscle and was
          associated with lower levels of some inflammatory markers [5].
        </li>
        <li>
          <strong>Not every outcome improved.</strong> A trial in men with
          obesity found NR did not improve insulin sensitivity [6].
        </li>
      </ul>
      <p>
        <strong>Bottom line for data-minded readers:</strong> the evidence that
        NR raises NAD+ is solid. Evidence that this translates to specific
        health outcomes is still developing. Most published studies used oral
        NR, and research on IV and injectable formats is more limited.
      </p>

      <h2>Why It&apos;s So Popular After 50</h2>
      <p>
        For many adults in their 50s, 60s, and beyond, the appeal is simple:
        they want to stay active, sharp, and energetic for work, travel,
        grandkids, and the trails at Monte Sano. Niagen fits into a broader
        &ldquo;healthspan&rdquo; mindset: supporting how you feel day to day,
        alongside sleep, exercise, and nutrition.
      </p>

      <h2>How Niagen Series Work at Prime IV Huntsville</h2>
      <p>We offer Niagen® in two formats:</p>
      <ul>
        <li>
          <strong>Niagen® IV infusions:</strong> delivered over a relaxing
          session in our lounge, available as single visits or a series.
        </li>
        <li>
          <strong>Niagen® injections:</strong> a quicker option for guests with
          busy schedules, also available as a series.
        </li>
      </ul>
      <p>
        Many guests choose a <strong>series program</strong> because consistency
        tends to matter more than any one visit. Every visit begins with a
        screening by our licensed medical professionals, who will review your
        health history and help determine whether Niagen is appropriate and
        which format and dose may fit your goals.
      </p>

      <h2>Questions to Ask Before You Start</h2>
      <ul>
        <li>
          Do any of my medications or conditions affect whether Niagen is right
          for me?
        </li>
        <li>IV or injection: which fits my schedule and comfort level?</li>
        <li>How will I know whether it&apos;s working for me?</li>
      </ul>

      <h2>A Closer Look at the Study Designs</h2>
      <p>
        If you like reading the methods section before the conclusion, here&apos;s
        the fine print on the key human trials:
      </p>
      <div className="my-6 overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="sr-only">
            Key human trials of nicotinamide riboside: population, dose, and
            main finding
          </caption>
          <thead>
            <tr className="bg-primary text-white">
              <th scope="col" className="px-4 py-3 font-semibold">
                Study
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Who
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Dose &amp; length
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Main finding
              </th>
            </tr>
          </thead>
          <tbody>
            {studies.map((row, index) => (
              <tr
                key={row.study}
                className={index % 2 === 1 ? "bg-background-alt" : "bg-white"}
              >
                <th
                  scope="row"
                  className="px-4 py-3 align-top font-semibold text-foreground"
                >
                  {row.study}
                </th>
                <td className="px-4 py-3 align-top text-foreground-muted">
                  {row.who}
                </td>
                <td className="px-4 py-3 align-top text-foreground-muted">
                  {row.dose}
                </td>
                <td className="px-4 py-3 align-top text-foreground-muted">
                  {row.finding}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Two things stand out. First, these are relatively{" "}
        <strong>small, short studies</strong>, so they can show that NR is
        absorbed and raises NAD+, but they can&apos;t prove long-term health
        outcomes. Second, the Martens trial authors described their
        physiological findings, such as possible changes in blood pressure and
        arterial stiffness, as{" "}
        <strong>hypotheses for future, larger trials</strong>, not conclusions.
        We think that kind of honesty matters, and it&apos;s
        how we talk about Niagen in our lounge.
      </p>

      <h2>Raising NAD+ Is Not the Same as a Health Outcome</h2>
      <p>
        In engineering terms, NAD+ levels are an intermediate measurement, not
        the final performance spec. A higher blood NAD+ reading tells us NR is
        doing what it&apos;s chemically expected to do. Whether that translates
        into how you feel, perform, or age is a separate question, and research
        on that question is still in progress.
      </p>
      <p>
        That&apos;s why we encourage guests to think of Niagen as one input in a
        broader system that also includes:
      </p>
      <ul>
        <li>
          <strong>Strength training</strong> two or more days per week to
          support muscle as you age.
        </li>
        <li>
          <strong>Consistent sleep</strong>, ideally with a regular wake time.
        </li>
        <li>
          <strong>Protein and produce</strong> at most meals.
        </li>
        <li>
          <strong>Hydration</strong>, especially during Huntsville&apos;s long,
          humid summers.
        </li>
        <li>
          <strong>Regular checkups and labs</strong> with your primary care
          provider.
        </li>
      </ul>

      <h2>What a Niagen® Visit Looks Like in Huntsville</h2>
      <ol className="mb-5 list-decimal space-y-2 pl-5 text-foreground-muted marker:text-secondary">
        <li>
          <strong>Screening.</strong> Our licensed medical professionals review
          your health history, medications, and goals.
        </li>
        <li>
          <strong>Format choice.</strong> You choose an IV infusion or an
          injection, based on your schedule and comfort.
        </li>
        <li>
          <strong>Your session.</strong> IV guests relax in our lounge;
          injection guests are usually in and out quickly.
        </li>
        <li>
          <strong>Series planning.</strong> If a series makes sense, we&apos;ll
          schedule your follow-up visits so consistency is easy.
        </li>
      </ol>
      <p>
        Many guests from Madison, Hampton Cove, and South Huntsville tell us a
        planned series is easier to stick with than booking one visit at a time.
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <h2>Ask About Our Latest Niagen® Specials</h2>
      <p>
        Curious whether a Niagen IV or injection series is right for you?{" "}
        <strong>
          Call {SITE_CONFIG.name} {SITE_CONFIG.location} at{" "}
          <a href={`tel:${CONTACT.phoneClean}`}>{CONTACT.phone}</a>
        </strong>{" "}
        to ask about our latest Niagen specials, or stop by{" "}
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
              PubMed {ref.pmid}
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
