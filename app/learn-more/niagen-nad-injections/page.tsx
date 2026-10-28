import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { CONTACT, PRICING, SITE_CONFIG } from "@/lib/constants";
import { absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/structured-data";

const path = "/learn-more/niagen-nad-injections";
const pageTitle = "Why a Niagen Injection Is a Smart Way to Support NAD+";
const metaTitle = "Niagen Injection vs Oral NAD+ | Prime IV";
const metaDescription =
  "Oral NAD+ breaks down before cells can use it. Why a Niagen injection skips digestion, what research suggests, and our November 2026 special.";
const image = "/images/niagen-background.png";

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  alternates: { canonical: path },
  keywords: [
    "Niagen injection",
    "NAD+ injection Huntsville",
    "nicotinamide riboside",
    "oral NAD+ supplements",
    "Niagen vs NAD+",
    "Prime IV Jones Valley",
  ],
  openGraph: {
    url: path,
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: image,
        width: 1920,
        height: 1080,
        alt: "Niagen IV therapy bag at Prime IV Hydration & Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [image],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: metaDescription,
  url: absoluteUrl(path),
  inLanguage: "en-US",
  primaryImageOfPage: absoluteUrl(image),
};

const faqs = [
  {
    question: "Is Niagen the same thing as NAD+?",
    answer:
      "No. Niagen is nicotinamide riboside (NR), a precursor cells use to make NAD+. An NAD+ infusion is the finished molecule.",
  },
  {
    question: "Is a Niagen injection proven better than a capsule?",
    answer:
      "No. An injection bypasses digestion. We did not find a head-to-head human trial showing it raises NAD+ more than oral NR or an oral NAD+ supplement.",
  },
  {
    question: "Will this reverse aging, sharpen focus, or fix sleep?",
    answer:
      "No. NR may support healthy NAD+ levels. It is not a treatment for aging, memory loss, or sleep. A small trial in older adults with mild cognitive impairment raised NAD+ and did not change cognitive scores.",
  },
  {
    question: "What is the November 2026 special?",
    answer: `For November 2026, a 50 mg Niagen injection is $85. Call ${CONTACT.phone} or book online. New clients complete a one-time, state-required $${PRICING.medicalClearance} telehealth screening at the first visit, not included in the special price. Ask us about a multi-injection pack.`,
  },
];

const comparisons = [
  {
    topic: "What you take",
    oral: "The finished NAD+ molecule",
    injection: "Niagen, a branded form of NR, which is a precursor",
  },
  {
    topic: "Digestion",
    oral: "Broken into smaller pieces before absorption",
    injection: "Skips the stomach and intestinal wall",
  },
  {
    topic: "Getting into cells",
    oral: "Intact NAD+ does not easily cross cell membranes",
    injection: "NR is a smaller precursor cells can take up and rebuild",
  },
  {
    topic: "What people studies show",
    oral: "Little evidence that intact oral NAD+ arrives as NAD+",
    injection: "Oral NR can raise blood NAD+. Injected NR has not been compared head-to-head",
  },
];

type Source = {
  id: string;
  text: string;
  title: string;
  journal: string;
  pmid: string;
  href: string;
};

const references: Source[] = [
  {
    id: "1",
    text: "Migaud ME, Ziegler M, Baur JA.",
    title: "Regulation of and challenges in targeting NAD+ metabolism.",
    journal: "Nature Reviews Molecular Cell Biology. 2024;25(10):822–840.",
    pmid: "39026037",
    href: "https://pubmed.ncbi.nlm.nih.gov/39026037/",
  },
  {
    id: "2",
    text: "Kimura N, Fukuwatari T, Sasaki R, Shibata K.",
    title:
      "Comparison of metabolic fates of nicotinamide, NAD+ and NADH administered orally and intraperitoneally; characterization of oral NADH.",
    journal: "Journal of Nutritional Science and Vitaminology. 2006;52(2):142–148.",
    pmid: "16802695",
    href: "https://pubmed.ncbi.nlm.nih.gov/16802695/",
  },
  {
    id: "3",
    text: "Baum CL, Selhub J, Rosenberg IH.",
    title:
      "The hydrolysis of nicotinamide adenine nucleotide by brush border membranes of rat intestine.",
    journal: "Biochemical Journal. 1982;204(1):203–207.",
    pmid: "7115322",
    href: "https://pubmed.ncbi.nlm.nih.gov/7115322/",
  },
  {
    id: "4",
    text: "Yaku K, Palikhe S, Iqbal T, et al.",
    title:
      "Nicotinamide riboside and nicotinamide mononucleotide facilitate NAD+ synthesis via enterohepatic circulation.",
    journal: "Science Advances. 2025;11(12):eadr1538.",
    pmid: "40117359",
    href: "https://pubmed.ncbi.nlm.nih.gov/40117359/",
  },
  {
    id: "5",
    text: "Covarrubias AJ, Perrone R, Grozio A, Verdin E.",
    title:
      "NAD+ metabolism and its roles in cellular processes during ageing.",
    journal: "Nature Reviews Molecular Cell Biology. 2021;22(2):119–141.",
    pmid: "33353981",
    href: "https://pubmed.ncbi.nlm.nih.gov/33353981/",
  },
  {
    id: "6",
    text: "Rajman L, Chwalek K, Sinclair DA.",
    title:
      "Therapeutic potential of NAD-boosting molecules: the in vivo evidence.",
    journal: "Cell Metabolism. 2018;27(3):529–547.",
    pmid: "29514064",
    href: "https://pubmed.ncbi.nlm.nih.gov/29514064/",
  },
  {
    id: "7",
    text: "Yoshino J, Baur JA, Imai SI.",
    title:
      "NAD+ intermediates: the biology and therapeutic potential of NMN and NR.",
    journal: "Cell Metabolism. 2018;27(3):513–528.",
    pmid: "29249689",
    href: "https://pubmed.ncbi.nlm.nih.gov/29249689/",
  },
  {
    id: "8",
    text: "Trammell SAJ, Schmidt MS, Weidemann BJ, et al.",
    title:
      "Nicotinamide riboside is uniquely and orally bioavailable in mice and humans.",
    journal: "Nature Communications. 2016;7:12948.",
    pmid: "27721479",
    href: "https://pubmed.ncbi.nlm.nih.gov/27721479/",
  },
  {
    id: "9",
    text: "Martens CR, Denman BA, Mazzo MR, et al.",
    title:
      "Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults.",
    journal: "Nature Communications. 2018;9:1286.",
    pmid: "29599478",
    href: "https://pubmed.ncbi.nlm.nih.gov/29599478/",
  },
  {
    id: "10",
    text: "Airhart SE, Shireman LM, Risler LJ, et al.",
    title:
      "An open-label, non-randomized study of the pharmacokinetics of the nutritional supplement nicotinamide riboside (NR) and its effects on blood NAD+ levels in healthy volunteers.",
    journal: "PLoS One. 2017;12(12):e0186459.",
    pmid: "29211728",
    href: "https://pubmed.ncbi.nlm.nih.gov/29211728/",
  },
  {
    id: "11",
    text: "Katsyuba E, Romani M, Hofer D, Auwerx J.",
    title: "NAD+ homeostasis in health and disease.",
    journal: "Nature Metabolism. 2020;2(1):9–31.",
    pmid: "32694684",
    href: "https://pubmed.ncbi.nlm.nih.gov/32694684/",
  },
  {
    id: "12",
    text: "Verdin E.",
    title: "NAD+ in aging, metabolism, and neurodegeneration.",
    journal: "Science. 2015;350(6265):1208–1213.",
    pmid: "26785480",
    href: "https://pubmed.ncbi.nlm.nih.gov/26785480/",
  },
  {
    id: "13",
    text: "Massudi H, Grant R, Braidy N, et al.",
    title:
      "Age-associated changes in oxidative stress and NAD+ metabolism in human tissue.",
    journal: "PLoS One. 2012;7(7):e42357.",
    pmid: "22848760",
    href: "https://pubmed.ncbi.nlm.nih.gov/22848760/",
  },
  {
    id: "14",
    text: "Elhassan YS, Kluckova K, Fletcher RS, et al.",
    title:
      "Nicotinamide riboside augments the aged human skeletal muscle NAD+ metabolome and induces transcriptomic and anti-inflammatory signatures.",
    journal: "Cell Reports. 2019;28(7):1717–1728.e6.",
    pmid: "31412242",
    href: "https://pubmed.ncbi.nlm.nih.gov/31412242/",
  },
  {
    id: "15",
    text: "Orr ME, Kotkowski E, Ramirez P, et al.",
    title:
      "A randomized placebo-controlled trial of nicotinamide riboside in older adults with mild cognitive impairment.",
    journal: "GeroScience. 2024;46(1):665–682.",
    pmid: "37994989",
    href: "https://pubmed.ncbi.nlm.nih.gov/37994989/",
  },
];

function Cites({ ids }: { ids: string[] }) {
  return (
    <>
      [
      {ids.map((id, index) => {
        const source = references.find((item) => item.id === id);
        return (
          <span key={id}>
            {index > 0 ? ", " : null}
            <a href={source?.href} target="_blank" rel="noopener noreferrer">
              {id}
            </a>
          </span>
        );
      })}
      ]
    </>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Learn More", path: "/learn-more" },
            { name: pageTitle, path },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/learn-more"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Learn More
            </Link>
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Education
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              {pageTitle}
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-primary">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <img
              src={image}
              alt="Niagen IV therapy bag at Prime IV Hydration & Wellness"
              className="w-full aspect-[16/9] object-cover rounded-2xl -mb-16 shadow-lg"
            />
          </div>
        </div>
      </div>

      <article className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto prose-article">

      <p>
        Capsules labeled NAD+ are easy to find. The pitch is tidy: swallow the
        molecule your cells use for energy, and you have topped off the tank.
        The chemistry is less tidy. NAD+ is large and charged, and the gut is
        built to take molecules like that apart.
      </p>
      <p>
        Niagen&reg; is a different starting point. It is nicotinamide riboside,
        or NR, a smaller precursor. Cells can take NR in and build NAD+ on the
        inside. An injection is one way to offer that precursor without sending
        it through the stomach and intestine first. This is the plain version
        of why that route makes sense, and where the research stops.
      </p>

      <h2>Quick take</h2>
      <ul>
        <li>
          Oral NAD+ is mostly broken into smaller pieces. Most of what is
          absorbed is not intact NAD+.
        </li>
        <li>
          Intestinal enzymes clip NAD+ into NMN, NR, and nicotinamide. Stomach
          acid is a clearer problem for NADH, the reduced form, than for NAD+
          itself.
        </li>
        <li>
          What does get absorbed still meets the liver. For oral NR, only a
          small share is absorbed directly. Gut microbes rework a lot of it.
        </li>
        <li>
          Intact NAD+ does not easily cross the fatty membrane of a cell, and
          most cells have no dedicated importer for it.
        </li>
        <li>
          Niagen is a precursor cells can use. An injection skips the digestive
          hurdles. It has not been proven better than a capsule in a
          head-to-head human trial.
        </li>
      </ul>

      <h2>NAD+ in one minute</h2>
      <p>
        NAD+ (nicotinamide adenine dinucleotide) is a coenzyme in every cell. It
        carries electrons in the reactions that let cells turn food into usable
        energy, including the work mitochondria do. It is also used by enzymes
        involved in cellular maintenance. Reviews from several labs describe
        NAD+ levels as tending to fall with age in animals and in people{" "}
        <Cites ids={["5", "11", "12"]} />. If you want the longer intro, start
        with{" "}
        <Link href="/learn-more/what-is-nad-energy-molecule">
          what NAD+ is
        </Link>
        . Supporting a level that falls with age is a reasonable idea. It is
        not the same as turning the clock back.
      </p>

      <h2>Why an oral NAD+ capsule falls short</h2>
      <h3>1. Digestion starts before the intestine</h3>
      <p>
        A 2024 review describes the NAD-related dinucleotides in food as being
        broken down by the body, beginning in the acid environment of the
        stomach. Most of what is absorbed arrives as smaller pieces, especially
        nicotinamide or nicotinic acid, not as intact NAD+ <Cites ids={["1"]} />.
      </p>
      <p>
        You will sometimes read that stomach acid shreds NAD+ into nicotinamide.
        A mouse study found a narrower fact. NADH, the reduced form, fell apart
        within minutes in acid meant to mimic the stomach. NAD+ itself held up
        in that test. Swallowed NAD+ still showed up in urine as the same
        nicotinamide-related metabolites as swallowed nicotinamide, so the dose
        was processed into smaller pieces. Acid alone was not the scissors{" "}
        <Cites ids={["2"]} />.
      </p>

      <h3>2. Intestinal enzymes finish the cut</h3>
      <p>
        Classic experiments on rat intestine found two enzyme paths at the
        brush border, the surface that faces the food. One clips the
        pyrophosphate bond in NAD+ and releases NMN. That NMN is then
        dephosphorylated into NR. A second path releases nicotinamide directly.
        At a mildly acidic pH, nicotinamide was the main product{" "}
        <Cites ids={["3"]} />. That is rat intestine, not a human capsule trial,
        and it is still the clearest map we have.
      </p>

      <h3>3. The liver sees it before the rest of you</h3>
      <p>
        Anything absorbed from the gut goes to the liver first. That first pass
        matters. In mice, only a small portion of an oral dose of NR or the
        related precursor NMN was absorbed directly from the small intestine.
        Most of it was converted by gut microbes into nicotinic acid, which the
        liver then used to make NAD+ <Cites ids={["4"]} />. A 2024 review
        reaches a similar conclusion for an oral bolus of nicotinamide, NR, or
        NMN <Cites ids={["1"]} />. Those microbe studies are mostly in mice, so
        this is a direction, not a percentage to print on a capsule label.
      </p>

      <h3>4. Intact NAD+ does not slip into cells</h3>
      <p>
        NAD+ that reaches the blood still has to enter a cell. It is large and
        charged, and charged nucleotides do not drift across a fatty membrane.
        NAD+ is not considered cell-permeable <Cites ids={["1", "5"]} />.
        Bloodstream is not the inside of the cell.
      </p>

      <h3>5. Most cells have no door for intact NAD+</h3>
      <p>
        With the exception of neurons, mammalian cells cannot import NAD+, so
        they build it inside <Cites ids={["6"]} />. Connexin 43 can move NAD+,
        but the gradient is thought to favor export, not a delivery route in.
        A proposed NMN transporter in the intestine is still debated, and it is
        not a door for intact NAD+ <Cites ids={["1"]} />. Cells generally take
        up smaller precursors instead. NR can enter through nucleoside
        transporters and be rebuilt into NAD+ on the inside{" "}
        <Cites ids={["1", "7"]} />.
      </p>

      <h2>Why Niagen, and why an injection</h2>
      <p>
        Niagen is the NR used in several human trials, and oral NR raises blood
        NAD+. Single doses from 100 to 1,000 mg raised the blood NAD+
        metabolome in a dose-dependent way <Cites ids={["8"]} />. Six weeks at
        1,000 mg a day in adults 55 to 79 was well tolerated and lifted NAD+ in
        one blood-cell type by about 60% versus placebo <Cites ids={["9"]} />.
        A smaller open-label study, eight people and no placebo group, saw
        whole-blood NAD+ roughly double at 1,000 mg twice a day{" "}
        <Cites ids={["10"]} />.
      </p>
      <p>
        An injection skips the stomach and the intestinal enzymes. It does not
        enlarge those oral results. NR is still a precursor cells can use{" "}
        <Cites ids={["1", "6", "7"]} />, and we found no head-to-head human
        trial of injected Niagen versus a capsule. In mice, intravenous NR was
        quickly broken down to nicotinamide <Cites ids={["4"]} />. Skipping the
        gut is a real difference in route. It is not proof of a higher NAD+
        level, and it is not a promise about how you will feel. Those oral
        trials used about 1,000 mg a day. A 50 mg injection is a different dose,
        and no published study converts one into the other.
      </p>

      <h2>Oral NAD+ and a Niagen injection, side by side</h2>
      <div className="my-6 overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="sr-only">
            Comparison of an oral NAD+ supplement and a Niagen injection
          </caption>
          <thead>
            <tr className="bg-primary text-white">
              <th scope="col" className="px-4 py-3 font-semibold">
                Question
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Oral NAD+
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Niagen injection
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, index) => (
              <tr
                key={row.topic}
                className={index % 2 === 1 ? "bg-background-alt" : "bg-white"}
              >
                <th
                  scope="row"
                  className="px-4 py-3 align-top font-semibold text-foreground"
                >
                  {row.topic}
                </th>
                <td className="px-4 py-3 align-top text-foreground-muted">
                  {row.oral}
                </td>
                <td className="px-4 py-3 align-top text-foreground-muted">
                  {row.injection}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What the research suggests, carefully</h2>
      <p>
        People ask about NAD+ for a handful of reasons. Each note below is a
        &ldquo;may,&rdquo; tied to a paper. For the longer trial review, see{" "}
        <Link href="/learn-more/does-nad-therapy-actually-work-evidence">
          does NAD+ actually work
        </Link>{" "}
        and{" "}
        <Link href="/learn-more/niagen-over-50-what-research-says-huntsville">
          Niagen after 50
        </Link>
        .
      </p>

      <h3>Healthy NAD+ levels that decline with age</h3>
      <p>
        This is the strongest finding. Reviews report that tissue NAD+ tends to
        fall with age, and older human skin has shown lower NAD+ than younger
        skin <Cites ids={["5", "11", "13"]} />. Oral NR can raise the lab
        number, as the trials above did <Cites ids={["9"]} />. That is not
        proof you will feel younger.
      </p>

      <h3>Cellular energy and mitochondria</h3>
      <p>
        NAD+ is required for glycolysis, the citric-acid cycle, and
        mitochondrial electron transport. A cell has no lasting way to make ATP
        that skips the NAD+/NADH handoff <Cites ids={["1", "12"]} />. Raising
        NAD+ may support that chemistry. Mitochondrial function did not change
        in a three-week trial in aged muscle <Cites ids={["14"]} />.
      </p>

      <h3>Healthy aging and metabolic support</h3>
      <p>
        NAD+ sits in the middle of fuel metabolism, and animal studies of
        NAD-boosting molecules have reported metabolic effects{" "}
        <Cites ids={["5", "6"]} />. Human translation is unfinished.
        &ldquo;May support&rdquo; is as far as the evidence goes.
      </p>

      <h3>Muscle, training, and recovery</h3>
      <p>
        In 12 men ages 70 to 80, 1,000 mg of oral NR a day for 21 days raised
        NAD-related metabolites in muscle and was linked with lower levels of
        some inflammatory signals in the blood. Muscle NAD+ itself did not rise
        significantly, and grip strength and mitochondrial function did not
        change <Cites ids={["14"]} />. In healthy adults 55 to 79, NR also did
        not improve aerobic capacity or motor function in any obvious way{" "}
        <Cites ids={["9"]} />. Reaching muscle is not the same as a faster
        recovery.
      </p>

      <h3>Focus and clarity</h3>
      <p>
        Neurons depend on NAD+ for energy metabolism, which is why brain-aging
        research pays attention <Cites ids={["12"]} />. A 10-week pilot in
        older adults with mild cognitive impairment found NR was tolerated and
        raised blood NAD+, and cognitive scores stayed stable{" "}
        <Cites ids={["15"]} />. We do not describe Niagen as a treatment for
        brain fog or memory loss.
      </p>

      <h3>Sleep</h3>
      <p>
        We did not find a placebo-controlled trial in healthy adults showing
        that NR improves sleep, so this page does not claim it. If sleep is the
        main goal, say so. Schedule and caffeine come before an injection.
      </p>

      <h2>What a visit at our clinic actually is</h2>
      <p>
        At {SITE_CONFIG.name} in Jones Valley, a Niagen injection is a short
        visit, not a lounge infusion. Licensed staff screen your history,
        medications, and goals first. Doses are on our{" "}
        <Link href="/nad-niagen-special">NAD+ and Niagen page</Link> and the{" "}
        <Link href="/menu">menu</Link>. A series is optional. Niagen may
        support cellular energy and healthy aging alongside sleep, food, and
        strength work. It does not replace them, and it does not treat disease.
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <div className="my-10 flex flex-col items-center gap-4 rounded-2xl bg-primary px-6 py-10 text-center">
        <div className="text-sm font-semibold uppercase tracking-wide text-secondary">
          November 2026 special
        </div>
        <div className="text-2xl font-bold text-balance text-foreground-light sm:text-3xl">
          $85 for a 50 mg Niagen injection
        </div>
        <div className="max-w-xl text-pretty text-foreground-light/90">
          This price is for November 2026. Call us or book a visit and ask for
          the Niagen injection special. It is a precursor appointment, screened
          like every other visit.
        </div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${CONTACT.phoneClean}`}
            className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-foreground-light no-underline transition-colors hover:bg-secondary-dark"
          >
            Call {CONTACT.phone}
          </a>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-foreground-light no-underline transition-colors hover:bg-white/10"
          >
            Book a visit
          </Link>
        </div>
        <div className="max-w-xl text-pretty font-semibold text-foreground-light">
          Want a multi-injection pack? Ask us and get an even better deal.
        </div>
        <div className="max-w-xl text-sm text-pretty text-foreground-light/80">
          New clients: a one-time, state-required ${PRICING.medicalClearance}{" "}
          telehealth screening is required at your first visit and is not
          included in the November special price.
        </div>
      </div>

      <h2>Sources</h2>
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
          These statements have not been evaluated by the FDA. This content is
          for education, not medical advice. Talk with our team or your
          provider about what&apos;s right for you. Niagen&reg; is a registered
          trademark of Niagen Bioscience. Injections at {SITE_CONFIG.name} are
          not intended to diagnose, treat, cure, or prevent any disease, and
          they do not reverse aging. Results vary.
        </em>
      </p>
          </div>
        </div>
      </article>
    </>
  );
}
