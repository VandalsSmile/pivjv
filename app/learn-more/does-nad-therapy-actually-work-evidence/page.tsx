import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, SITE_CONFIG, PRICING } from "@/lib/constants";
import { PREMIUM_INFUSIONS, NAD_INJECTIONS } from "@/lib/menu-data";
import { JsonLd } from "@/components/json-ld";
import { faqSchema } from "@/lib/structured-data";

const slug = "does-nad-therapy-actually-work-evidence";
const article = ARTICLES.find((a) => a.slug === slug)!;

const nadInfusion = PREMIUM_INFUSIONS.find((i) => i.name === "NAD+ Infusions")!;

export const metadata: Metadata = {
  title: `${article.title} | Resource Center`,
  description: article.excerpt,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "does NAD+ therapy work",
    "NAD+ research evidence",
    "NAD+ clinical trials",
    "nicotinamide riboside studies",
    "NMN randomized controlled trial",
    "IV NAD+ infusion study",
    "NAD+ decline with age",
    "NAD+ IV therapy Huntsville AL",
  ],
};

/* ------------------------------------------------------------------ */
/* Evidence tiers — the spine of the article                           */
/* ------------------------------------------------------------------ */

type EvidenceTier = {
  verdict: string;
  claim: string;
  strength: "Established" | "Promising" | "Unproven";
  detail: string;
};

const EVIDENCE: EvidenceTier[] = [
  {
    verdict: "Yes",
    claim: "NAD+ declines as you age",
    strength: "Established",
    detail:
      "Measured directly in human tissue. Skin biopsy work found NAD+ falls by roughly half across adult life; liver tissue from surgical patients showed about a 30% drop from under-45 to over-60 donors.",
  },
  {
    verdict: "Yes",
    claim: "Supplementing raises measurable NAD+",
    strength: "Established",
    detail:
      "This is the most reproducible finding in the field. 1 g/day of nicotinamide riboside for 14 days roughly doubled whole-blood NAD+ versus placebo; 1,000 mg/day for 6 weeks raised NAD+ inside immune cells about 60%. In heart-failure patients, doses up to 2,000 mg/day also doubled blood NAD+.",
  },
  {
    verdict: "Yes",
    claim: "It's well tolerated at studied doses",
    strength: "Established",
    detail:
      "Safety is the strongest clinical signal we have. Trials in Parkinson's disease used 1,000–3,000 mg/day and heart-failure trials up to 2,000 mg/day without serious drug-related events.",
  },
  {
    verdict: "Maybe",
    claim: "It shifts biology in the right direction",
    strength: "Promising",
    detail:
      "In Parkinson's trials, NAD+ rose in the brain itself and genes governing mitochondrial, lysosomal, and proteasomal function were upregulated, with inflammatory cytokines falling. In heart failure, higher NAD+ tracked with better mitochondrial respiration and lower inflammatory markers.",
  },
  {
    verdict: "Maybe",
    claim: "It improves performance and metabolic markers",
    strength: "Promising",
    detail:
      "A six-week randomized trial in amateur runners found NMN plus training raised ventilatory thresholds dose-dependently. Another found improved muscle insulin sensitivity in prediabetic women. Older-adult studies have reported better walking speed and sleep quality.",
  },
  {
    verdict: "Not yet",
    claim: "It reliably beats placebo on hard clinical outcomes",
    strength: "Unproven",
    detail:
      "A 2026 systematic review pooled 15 placebo-controlled RCTs (740 participants) and rated the overall certainty Very Low, with no significant difference between NMN and NR across 14 comparable metabolic outcomes. Heart-failure trials showed no significant change in cardiac endpoints. Some trials in frail, diabetic older adults found no gain in walking speed or grip strength.",
  },
  {
    verdict: "No",
    claim: "It extends human lifespan or 'reverses aging'",
    strength: "Unproven",
    detail:
      "There is no human trial that shows this, and there almost certainly won't be one for decades. The lifespan data lives in mice, yeast, and worms. Anyone selling you longevity as a settled fact is selling, not citing.",
  },
];

const STRENGTH_STYLES: Record<EvidenceTier["strength"], string> = {
  Established: "bg-secondary text-white",
  Promising: "bg-accent text-white",
  Unproven: "bg-foreground-muted/15 text-foreground",
};

const faqs = [
  {
    question: "Is there real scientific evidence that NAD+ therapy works?",
    answer:
      "It depends on which claim you mean. Three things are well established in human research: NAD+ levels decline with age, supplementing with NAD+ precursors reliably raises measurable NAD+ in blood and tissue, and the doses used in trials are well tolerated. What is not established is that raising NAD+ reliably improves hard clinical outcomes. A 2026 systematic review of 15 randomized placebo-controlled trials covering 740 participants rated the overall certainty of evidence as Very Low. So the biology is real and the mechanism is real; the outcome data is still early.",
  },
  {
    question: "How much does NAD+ actually drop as you get older?",
    answer:
      "Human tissue studies suggest a substantial decline. Analysis of skin samples found NAD+ concentrations decrease by at least 50% over the course of adult aging, and liver tissue collected during surgery showed roughly a 30% decline when comparing donors under 45 to donors over 60. The exact number varies by tissue and measurement method, but the direction is consistent across studies.",
  },
  {
    question: "Does IV NAD+ work better than pills or injections?",
    answer:
      "There is no published head-to-head randomized trial comparing IV NAD+ to oral precursors, so any confident claim in either direction goes beyond the evidence. What we do know comes from a 2019 pharmacokinetic study in healthy men: a 750 mg IV NAD+ infusion delivered slowly over 6 hours produced no measurable rise in plasma NAD+ for about the first 2 hours, then plasma NAD+ climbed roughly 400% by the end of the infusion, with NAD+ and its metabolites appearing in urine. IV delivery bypasses digestion and allows a much larger single dose than a capsule, and the slow drip rate exists for a reason — infusing faster is what causes the chest pressure and cramping people describe.",
  },
  {
    question: "Why does an NAD+ infusion take so long?",
    answer:
      "Because your body can only process NAD+ so fast. The published infusion study used a rate of about 2 mg per minute, and the timing data shows a real metabolic lag before blood levels move at all. Pushing NAD+ in quickly is what triggers the flushing, chest tightness, and abdominal cramping associated with the therapy. Slowing the drip is the single most effective way to stay comfortable, which is why a full NAD+ session is scheduled as a long appointment rather than a quick drip.",
  },
  {
    question: "How can I tell if a NAD+ claim is legitimate?",
    answer:
      "Ask four questions. Was the study done in humans or in mice? Did it measure an outcome you would actually notice, or only a biomarker? Was there a placebo group? And how many people were enrolled — twelve or two hundred? Most viral NAD+ claims fail on the first question. Mouse longevity results are genuinely interesting, but a mouse is not a person, and dose scaling between the two is not straightforward.",
  },
  {
    question: "Who is NAD+ therapy actually a reasonable fit for?",
    answer:
      "People dealing with persistent fatigue and mental fog who have already covered the basics — sleep, hydration, thyroid and iron labs, B-12 status — and want to try a mechanistically plausible option. Also high-output adults over 40 in demanding training or work cycles, and people in recovery programs where NAD+ has the longest clinical track record. It is a poor fit for anyone expecting a cure, and it should never replace treatment for a diagnosed condition.",
  },
  {
    question: "Is NAD+ therapy safe?",
    answer:
      "In published trials, NAD+ precursors have been well tolerated at 1,000–3,000 mg/day with no serious drug-related adverse events reported. IV NAD+ commonly causes transient, rate-dependent side effects — flushing, chest pressure, nausea, or cramping — that resolve when the infusion is slowed. As with any IV therapy, it should be administered by licensed medical professionals who screen you first, which is why Alabama requires a one-time telehealth screening for new clients.",
  },
];

export default function Page() {
  return (
    <ArticleLayout slug={slug}>
      <JsonLd data={faqSchema(faqs)} />

      <p>
        <strong>
          Here is the honest answer, up front: raising your NAD+ definitely
          works. Whether raising it changes how you feel is where the science
          gets interesting — and where most of the internet stops telling the
          truth.
        </strong>{" "}
        NAD+ has become the most hyped molecule in wellness, which means it now
        attracts both breathless overclaiming and reflexive dismissal. Neither
        is accurate. Below is what the actual human research says, organized by
        how confident we can be about it, with the weak spots left in.
      </p>

      <h2>First, Why This Molecule Gets So Much Attention</h2>
      <p>
        Nicotinamide adenine dinucleotide — NAD+ — isn&apos;t a vitamin or a
        stimulant. It&apos;s a <strong>coenzyme found in every living cell you
        have</strong>, and it does two jobs that happen to sit at the center of
        aging biology.
      </p>
      <p>
        The first job is energy. NAD+ is the electron shuttle your mitochondria
        use to convert food into ATP. No NAD+, no cellular energy — this
        isn&apos;t a marketing claim, it&apos;s textbook biochemistry.
      </p>
      <p>
        The second job is why longevity researchers care. NAD+ is the required
        fuel for two families of repair enzymes:{" "}
        <strong>sirtuins</strong>, which regulate gene expression and
        mitochondrial health, and <strong>PARPs</strong>, which repair damaged
        DNA. Both consume NAD+ to function. So when NAD+ runs low, your cells
        don&apos;t just make less energy — they also repair themselves less
        aggressively.
      </p>
      <p>
        Add a third factor and the picture sharpens: an enzyme called{" "}
        <strong>CD38</strong>, which degrades NAD+, becomes more active with
        age and inflammation. You&apos;re producing less and burning through
        more at the same time.
      </p>

      <blockquote>
        This is the crux of the entire NAD+ story: it is simultaneously the
        currency your cells spend on energy and the currency they spend on
        repair. When it gets scarce, the cell has to choose.
      </blockquote>

      <h2>The Evidence Scorecard</h2>
      <p>
        Most NAD+ content treats every claim as equally supported. It
        isn&apos;t. Here is the same body of research sorted by how much weight
        it can actually carry — from findings measured directly in human tissue
        to claims that exist only in mice.
      </p>

      <div className="my-8 flex flex-col gap-4">
        {EVIDENCE.map((row) => (
          <div
            key={row.claim}
            className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${STRENGTH_STYLES[row.strength]}`}
              >
                {row.strength}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                {row.verdict}
              </span>
            </div>
            <div className="mt-3 text-lg font-bold text-foreground text-balance">
              {row.claim}
            </div>
            <div className="mt-2 leading-relaxed text-foreground-muted">
              {row.detail}
            </div>
          </div>
        ))}
      </div>

      <h2>The Part Nobody Disputes: NAD+ Falls, and You Can Raise It</h2>
      <p>
        Two findings in this field are about as solid as clinical nutrition
        research gets.
      </p>
      <p>
        <strong>The decline is measurable in human tissue.</strong> Not
        inferred from mice — measured. Skin biopsy analysis found NAD+
        concentrations drop by <strong>at least 50%</strong> across adult
        aging, with adults sitting far below newborn levels. Liver tissue
        collected during surgery showed roughly a <strong>30% decline</strong>{" "}
        between donors under 45 and donors over 60. Different tissues, different
        methods, same direction.
      </p>
      <p>
        <strong>Repletion works, and it&apos;s repeatable.</strong> This is the
        single most consistently replicated result in NAD+ research. Randomized
        trials show 1 g/day of nicotinamide riboside for 14 days roughly{" "}
        <strong>doubles whole-blood NAD+</strong> versus placebo. Six weeks at
        1,000 mg/day raised NAD+ inside immune cells about{" "}
        <strong>60%</strong>. Heart-failure patients on up to 2,000 mg/day also
        doubled their blood NAD+. In Parkinson&apos;s trials, researchers went
        further and confirmed NAD+ rising{" "}
        <strong>in the brain itself</strong> using imaging.
      </p>
      <p>
        So the pharmacology is settled. You can move this number, on purpose,
        in humans. That is not a small thing — it is the necessary first step
        for everything else.
      </p>

      <h2>The Middle Ground: Real Biological Shifts, Modest Human Effects</h2>
      <p>
        Between &ldquo;NAD+ went up&rdquo; and &ldquo;my life improved&rdquo;
        sits a growing pile of intriguing, imperfect studies.
      </p>

      <h3>Mitochondria and inflammation</h3>
      <p>
        The Parkinson&apos;s disease trials are the most informative work in
        the entire field, because researchers biopsied and sequenced rather
        than just asking people how they felt. NAD+ repletion{" "}
        <strong>upregulated genes governing mitochondrial, lysosomal, and
        proteasomal function</strong> — the cell&apos;s power plants, recycling
        centers, and protein-disposal systems — while{" "}
        <strong>reducing inflammatory cytokines</strong>. Some patients showed
        mild clinical improvement, but the authors were explicit that this
        needs larger trials. Heart-failure work found a similar pattern: higher
        NAD+ correlated with better mitochondrial respiration and lower
        inflammatory markers.
      </p>

      <h3>Performance and metabolism</h3>
      <p>
        A six-week randomized trial in amateur runners found that NMN combined
        with training raised <strong>ventilatory thresholds in a
        dose-dependent way</strong> — meaning higher doses produced bigger
        gains, which is exactly the pattern you want to see if an effect is
        real rather than noise. The proposed mechanism was improved oxygen
        utilization in skeletal muscle. Separate research found NMN{" "}
        <strong>increased muscle insulin sensitivity</strong> in overweight,
        prediabetic women. Studies in older adults have reported better
        maintained walking speed and improved sleep quality.
      </p>

      <h3>And the trials that found nothing</h3>
      <p>
        Honesty requires this paragraph. Other trials in older patients with
        existing diabetes and physical impairment found{" "}
        <strong>no significant improvement in walking speed or grip
        strength</strong>. Heart-failure trials doubled blood NAD+ and still
        showed <strong>no significant difference in cardiac outcomes</strong>.
        The most sober assessment came in 2026, when a systematic review pooled{" "}
        <strong>15 placebo-controlled RCTs across 740 participants</strong> and
        concluded that dosing, populations, and lab assays were too
        inconsistent to combine cleanly. It graded the certainty of evidence{" "}
        <strong>Very Low</strong> and found no statistically significant
        difference between NMN and NR across 14 comparable metabolic outcomes.
      </p>
      <p>
        The correct read on that isn&apos;t &ldquo;NAD+ doesn&apos;t
        work.&rdquo; It&apos;s that the field is where vitamin D research was
        fifteen years ago: mechanism understood, biomarker movable, optimal
        dose and best-responder population still unknown.
      </p>

      <h2>What About IV NAD+ Specifically?</h2>
      <p>
        This is the question we get most, and it deserves a careful answer
        rather than a confident one.
      </p>
      <p>
        <strong>There is no published head-to-head randomized trial</strong>{" "}
        comparing IV NAD+ to oral precursors. Anyone claiming a specific
        multiple — &ldquo;IV is 10x more effective&rdquo; — is extrapolating,
        not citing.
      </p>
      <p>
        What we do have is a genuinely useful 2019 pharmacokinetic study in
        healthy men. Researchers infused <strong>750 mg of NAD+ over six
        hours</strong> — about 2 mg per minute — and tracked plasma and urine.
        The findings were more interesting than expected:
      </p>
      <ul>
        <li>
          <strong>Nothing happened for roughly two hours.</strong> Plasma NAD+
          and its metabolites showed no measurable rise for the first stretch
          of the infusion — evidence of a real metabolic buffer absorbing the
          dose before blood levels move.
        </li>
        <li>
          <strong>Then levels climbed sharply</strong>, with plasma NAD+ up
          roughly 400% by the six-hour mark, alongside comparable rises in
          nicotinamide and other metabolites.
        </li>
        <li>
          <strong>NMN spiked after the drip ended</strong>, elevated at the
          eight-hour mark — the body was still actively processing the dose two
          hours later.
        </li>
        <li>
          <strong>NAD+ appeared intact in urine</strong>, showing that some of
          any infused dose is simply excreted. More is not automatically
          better.
        </li>
      </ul>
      <p>
        Two practical conclusions fall out of that data. First, the honest case
        for IV is mechanical, not magical:{" "}
        <strong>it bypasses digestion entirely and allows a single dose far
        larger than any capsule</strong>. Second — and this is the part worth
        knowing before you book —{" "}
        <strong>the slow drip rate is the whole point</strong>. The flushing,
        chest pressure, nausea, and cramping people associate with NAD+ are
        rate-dependent. Slowing the infusion is the single most effective
        comfort lever there is, which is why a real NAD+ session is a long
        appointment and not a quick drip.
      </p>

      <h2>A BS Detector for NAD+ Claims</h2>
      <p>
        You&apos;re going to keep seeing NAD+ headlines. Four questions will
        sort almost all of them:
      </p>
      <ul>
        <li>
          <strong>Human or mouse?</strong> Most spectacular NAD+ results —
          including every lifespan claim — come from mice, yeast, or worms.
          Interesting, but a mouse is not a person and the dose scaling
          doesn&apos;t translate cleanly.
        </li>
        <li>
          <strong>Biomarker or outcome?</strong> &ldquo;NAD+ increased
          2-fold&rdquo; is a biomarker. &ldquo;Participants walked
          farther&rdquo; is an outcome. Both matter; only the second is
          something you&apos;d notice.
        </li>
        <li>
          <strong>Was there a placebo group?</strong> Fatigue and brain fog are
          exquisitely placebo-sensitive. Uncontrolled studies of &ldquo;energy
          and focus&rdquo; tell you almost nothing.
        </li>
        <li>
          <strong>How many people?</strong> Much of this literature runs on
          8–30 participants. That&apos;s hypothesis-generating, not
          conclusive — and it&apos;s exactly why that 2026 review landed on
          Very Low certainty.
        </li>
      </ul>

      <h2>So What&apos;s the Reasonable Way to Use It?</h2>
      <p>
        The evidence supports a specific posture: treat NAD+ as a{" "}
        <strong>mechanistically well-grounded, well-tolerated intervention
        with promising but immature outcome data</strong>. That means going in
        with a defined goal, a defined trial period, and a way to judge whether
        it worked for you.
      </p>
      <p>
        At {SITE_CONFIG.name} in Jones Valley, NAD+ shows up in three formats,
        and the right one depends on how deep you want to go:
      </p>
      <ul>
        <li>
          <strong>Full NAD+ infusions</strong> ({nadInfusion.tiers[0].label
            .split(" · ")[0]}{" "}
          and{" "}
          {nadInfusion.tiers[2].label.split(" · ")[0]}, from{" "}
          {nadInfusion.tiers[0].price}) — the highest-dose option, and the one
          the pharmacokinetic data above actually describes.{" "}
          {nadInfusion.note} so we can schedule the longer chair time
          comfortably.
        </li>
        <li>
          <strong>NAD+ injections</strong> ({NAD_INJECTIONS[0].dose} and{" "}
          {NAD_INJECTIONS[1].dose}, from {NAD_INJECTIONS[0].single}) — a lower
          commitment way to try it consistently over weeks rather than in one
          large session.
        </li>
        <li>
          <strong>Niagen&reg; (nicotinamide riboside)</strong> — notably, this
          is the exact precursor used in most of the human trials cited above.
          If you want the molecule with the deepest clinical literature behind
          it, this is it. We break down the tradeoffs in{" "}
          <Link href="/learn-more/nad-vs-niagen-oral-supplements-vs-iv">
            NAD+ vs. Niagen
          </Link>
          .
        </li>
      </ul>
      <p>
        One practical note that matters more than most people realize: how you
        prepare changes the experience. Support nutrients like glutathione,
        B-12, alpha lipoic acid, and magnesium are the reasoning behind the
        NAD+ Amplifier —{" "}
        <Link href="/learn-more/how-to-get-more-out-of-your-nad-therapy">
          here&apos;s how to get more out of a NAD+ session
        </Link>
        . And if you&apos;re still deciding whether the molecule makes sense
        for you at all, start with{" "}
        <Link href="/learn-more/what-is-nad-energy-molecule">
          what NAD+ actually is
        </Link>{" "}
        or the bigger picture in{" "}
        <Link href="/learn-more/how-to-build-your-healthspan">
          how to build your healthspan
        </Link>
        .
      </p>

      <h3>Who tends to be a good fit</h3>
      <ul>
        <li>
          Adults with persistent fatigue or mental fog who have{" "}
          <strong>already covered the basics</strong> — sleep, hydration,
          thyroid and iron labs, B-12 status. NAD+ is a poor substitute for an
          undiagnosed deficiency.
        </li>
        <li>
          High-output people over 40 in a demanding training or work cycle,
          where the performance and recovery signals are most encouraging.
        </li>
        <li>
          People in recovery programs, where NAD+ has its longest real-world
          clinical track record.
        </li>
      </ul>

      <h3>Who should skip it</h3>
      <ul>
        <li>
          Anyone expecting a cure, a reversal of aging, or a replacement for
          medical treatment of a diagnosed condition.
        </li>
        <li>
          Anyone unwilling to sit for a long, slow infusion — rushing it is
          what makes NAD+ uncomfortable.
        </li>
        <li>
          Anyone who hasn&apos;t been screened. New clients in Alabama complete
          a one-time ${PRICING.medicalClearance} telehealth screening, and that
          conversation is genuinely where the &ldquo;is this right for
          you&rdquo; question gets answered.
        </li>
      </ul>

      <p>
        The most defensible summary we can give you: the mechanism is real, the
        age-related decline is real, the ability to raise NAD+ in humans is
        proven, the safety record at studied doses is good, and the
        clinical-outcome evidence is early and mixed. That&apos;s a reasonable
        thing to try with clear expectations. It is not a miracle, and anyone
        who tells you otherwise hasn&apos;t read the trials.
      </p>
      <p>
        IV therapy and NAD+ services at {SITE_CONFIG.name} are administered by
        licensed medical professionals and support wellness as part of a healthy
        lifestyle. These statements have not been evaluated by the FDA, and
        this article is educational information — not medical advice, and not
        intended to diagnose, treat, cure, or prevent any disease. Talk with
        our medical team or your own physician about your situation.
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <div className="my-10 flex flex-col items-center gap-4 rounded-2xl bg-primary px-6 py-10 text-center">
        <div className="text-2xl font-bold text-balance text-foreground-light sm:text-3xl">
          Want to Talk Through Whether NAD+ Makes Sense for You?
        </div>
        <div className="max-w-xl text-pretty text-foreground-light/90">
          Our medical team at {SITE_CONFIG.name} in {CONTACT.address.city} will
          give you a straight answer — including when the answer is
          &ldquo;start somewhere else.&rdquo; New to IV therapy? Your first VIP
          IV experience is ${PRICING.introOffer.price} (regularly $
          {PRICING.introOffer.regularPrice}).
        </div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/nad-niagen-special"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-foreground-light no-underline transition-colors hover:bg-secondary-dark"
          >
            See NAD+ &amp; Niagen Options
          </Link>
          <a
            href={`tel:${CONTACT.phoneClean}`}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-foreground-light no-underline transition-colors hover:bg-white/10"
          >
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </ArticleLayout>
  );
}
