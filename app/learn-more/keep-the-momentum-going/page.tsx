import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/article-layout";
import { MomentumCard } from "@/components/momentum-card";
import { MomentumProgramSection } from "@/components/momentum-program-section";
import { JsonLd } from "@/components/json-ld";
import { faqSchema } from "@/lib/structured-data";
import { ARTICLES } from "@/lib/articles";
import { CONTACT, PRICING } from "@/lib/constants";
import { MOMENTUM_FAQS, MOMENTUM_PROGRAM } from "@/lib/momentum-program";

const slug = "keep-the-momentum-going";
const article = ARTICLES.find((a) => a.slug === slug)!;

export const metadata: Metadata = {
  title: `${article.title} | Prime IV Huntsville`,
  description: article.excerpt,
  alternates: { canonical: `/learn-more/${slug}` },
  keywords: [
    "Keep the Momentum Going",
    "Prime IV new client discount",
    "IV therapy discount Huntsville",
    "new guest IV offer",
    "Huntsville AL IV therapy",
  ],
  openGraph: {
    url: `/learn-more/${slug}`,
    title: article.title,
    description: article.excerpt,
    images: [
      {
        url: "/images/momentum-card.png",
        width: 1536,
        height: 1024,
        alt: "Prime IV Jones Valley Keep the Momentum Going card: $85 first visit, 20% off the second, 10% off the third.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.excerpt,
    images: ["/images/momentum-card.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(MOMENTUM_FAQS)} />
      <ArticleLayout slug={slug}>
        <p>
          We hear the same thing almost every week. Someone comes in for their
          first IV, walks out feeling genuinely better, tells us they&apos;ll
          &ldquo;definitely be back&rdquo; — and then life happens. Work gets
          busy. The kids have something every weekend. Three months go by, and
          that great feeling is a distant memory.
        </p>

        <p>
          That&apos;s the problem we built{" "}
          <strong>{MOMENTUM_PROGRAM.name}</strong> to solve. Starting now, every
          new guest at Prime IV Hydration &amp; Wellness Jones Valley leaves
          their first visit with a card in hand that discounts the next two
          visits — no promo code, no subscription, no strings.
        </p>

        <h2>Here&apos;s the card</h2>

        <p>
          This is what you&apos;ll be handed on your way out. Before you leave,
          we write your use-by dates directly on it so you never have to guess
          when your discount expires.
        </p>

        <div className="not-prose my-8">
          <MomentumCard showUseByLines />
        </div>

        <h2>How it works</h2>

        <p>Three visits, three prices, in order:</p>

        <ul>
          <li>
            <strong>Visit one — ${PRICING.introOffer.price}.</strong> Our new
            client special. A wellness consult, a full-size primary drip of your
            choice, and time in a VIP massage chair. This is the same{" "}
            <Link href="/intro-offer">
              ${PRICING.introOffer.price} intro offer
            </Link>{" "}
            we&apos;ve always run — you&apos;re now just automatically enrolled
            in the program when you book it.
          </li>
          <li>
            <strong>Visit two — 20% off, within 60 days.</strong> Come back
            within two months and take 20% off any eligible regular-price IV.
          </li>
          <li>
            <strong>Visit three — 10% off, within 45 days of visit two.</strong>{" "}
            One more discounted visit to lock the habit in.
          </li>
        </ul>

        <p>
          After that, you choose what fits: a{" "}
          <Link href="/memberships">membership</Link>, a{" "}
          <Link href="/iv-packs">prepaid IV pack</Link>, or simply booking
          individual visits whenever you need one. There&apos;s no
          auto-enrollment into anything, and nobody is going to pressure you at
          the front desk.
        </p>

        <h2>Why there are deadlines on it</h2>

        <p>
          The 60-day and 45-day windows are the part people ask about most, so
          let&apos;s be straight about them: they exist because consistency is
          what actually makes IV therapy work.
        </p>

        <p>
          A single infusion tops you off. It rehydrates you, delivers a full
          dose of vitamins and minerals straight into your bloodstream, and most
          people feel that within a day. But your body spends those nutrients.
          If your next IV is six months out, you&apos;re not building on
          anything — you&apos;re starting over at the same baseline you started
          at the first time.
        </p>

        <blockquote>
          The deadlines aren&apos;t a pressure tactic. They&apos;re the
          difference between three IVs that compound and three unrelated visits
          that happen to be at the same studio.
        </blockquote>

        <p>
          Guests who come in on a rhythm — roughly monthly — are the ones who
          tell us their energy stopped crashing at 3 p.m., that they stopped
          getting knocked out for a week every time something went around the
          office, that they recover from a hard training block in days instead
          of weeks. That pattern is what the card is designed to create.
        </p>

        <h2>Why we show percentages instead of dollar amounts</h2>

        <p>
          You&apos;ll notice visits two and three are listed as{" "}
          <em>20% off</em> and <em>10% off</em> rather than a set price.
          That&apos;s deliberate. Our drips have different base prices, and we
          didn&apos;t want to quote you a number that only applies if you pick
          one specific IV.
        </p>

        <p>
          The discount comes off whatever eligible regular-price IV you choose,
          which means you decide where the savings go. Use it to try a bigger,
          more advanced drip for close to the price of a standard one, or use it
          to get a familiar favorite for less. Both are good answers.
        </p>

        <h2>No code to remember</h2>

        <p>
          There is no promo code for visits two and three. The card is the
          mechanism. Bring it with you, hand it to whoever checks you in, and
          we&apos;ll take care of it. If you lose it, call us at{" "}
          <Link href={`tel:${CONTACT.phoneClean}`}>{CONTACT.phone}</Link> — your
          visit history is in your guest profile, so we can confirm where you
          are in the program and replace the card.
        </p>

        <h2>The fine print, in plain English</h2>

        <ul>
          {MOMENTUM_PROGRAM.finePrint.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          The one worth expanding on: the discounts apply to eligible
          regular-price IVs and can&apos;t be stacked on top of our{" "}
          <Link href="/specials">monthly specials</Link> or membership pricing.
          If a current special happens to save you more than your card would on
          a given visit, our team will tell you and apply whichever is better
          for you. Your card step stays available for next time.
        </p>

        <h2>Ready to start?</h2>

        <p>
          Book the ${PRICING.introOffer.price} intro visit and you&apos;re in.
          First-time guests also complete a one-time, state-mandated $
          {PRICING.medicalClearance} telehealth screening at that first
          appointment — that&apos;s an Alabama requirement, not a Prime IV fee,
          and it&apos;s a one-time thing.
        </p>

        <p>
          <Link href="/intro-offer">
            Claim your ${PRICING.introOffer.price} first visit
          </Link>{" "}
          and we&apos;ll have your card ready.
        </p>
      </ArticleLayout>

      <MomentumProgramSection
        className="section-padding bg-background"
        eyebrow="The Program at a Glance"
        heading="Keep the Momentum Going"
        showNextSteps
        showCta
        showLearnMore={false}
      />
    </>
  );
}
