import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import {
  GoogleRatingLink,
  GoogleReviewSection,
} from "@/components/google-reviews";
import { TextToBookLink } from "@/components/text-to-book-link";
import { GOOGLE_REVIEW_BLOCK, GOOGLE_REVIEWS } from "@/lib/google-reviews";
import { CONTACT, NIAGEN_50MG_SPECIAL, OG_IMAGE, SITE_CONFIG } from "@/lib/constants";
import {
  NIAGEN_INJECTION_BOOKING_PATH,
  isNiagen50SpecialActive,
  niagen50OfferSchema,
  niagen50mgStandard,
  niagenSpecialEndLabel,
} from "@/lib/niagen-special";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";

const path = "/nad-niagen-special";
const standard50 = niagen50mgStandard();
const specialActive = isNiagen50SpecialActive();
const endLabel = niagenSpecialEndLabel();
const specialPrice = NIAGEN_50MG_SPECIAL.price;

const pageDescription = specialActive
  ? `November 2026 special: a 50mg Niagen injection is $${specialPrice} through ${endLabel} at ${SITE_CONFIG.name} in Huntsville, AL. Regular price ${standard50.single}. Call ${CONTACT.phone}. No promo code.`
  : `50mg Niagen injections at ${SITE_CONFIG.name} in Huntsville, AL. A single injection is ${standard50.single}. Call ${CONTACT.phone}.`;

export const metadata: Metadata = {
  title: specialActive ? `$${specialPrice} Niagen Injection` : "Niagen Injection",
  description: pageDescription,
  keywords: [
    "Niagen injection Huntsville",
    "50mg Niagen",
    "NAD+ injection Huntsville",
    "nicotinamide riboside",
    "November 2026 Niagen special",
    "Prime IV Jones Valley",
  ],
  alternates: { canonical: path },
  openGraph: {
    url: path,
    title: specialActive
      ? `$${specialPrice} Niagen injection — November 2026 special`
      : "Niagen injection in Huntsville",
    description: pageDescription,
    images: [OG_IMAGE],
  },
};

const benefits = [
  {
    title: "Skips the stomach",
    text: "An injection does not pass through digestion. That is a different route than a capsule, not proof of a higher NAD+ level.",
  },
  {
    title: "A precursor, not an NAD+ IV",
    text: "Niagen is nicotinamide riboside, a building block cells use to make NAD+. An NAD+ infusion is a separate visit.",
  },
  {
    title: "A short appointment",
    text: "Injection visits are listed at about 20 minutes, not a full lounge drip.",
  },
  {
    title: "A nurse consults first",
    text: "Licensed staff review your history before the injection. It does not treat disease or reverse aging.",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book",
    text: specialActive
      ? `Request the ${NIAGEN_50MG_SPECIAL.label} online, by text, or call ${CONTACT.phone}. There is no promo code.`
      : `Book an injection visit online, by text, or call ${CONTACT.phone}.`,
  },
  {
    icon: Stethoscope,
    title: "Consult",
    text: "A nurse reviews your history, medications, and goals, and confirms an injection is appropriate.",
  },
  {
    icon: Syringe,
    title: "Inject",
    text: "You receive the 50mg Niagen injection. Most injection visits are about 20 minutes.",
  },
];

const faqs = [
  {
    question: "What is Niagen?",
    answer:
      "Niagen is a branded form of nicotinamide riboside (NR), a precursor your cells can use to make NAD+. It is not the same thing as an NAD+ IV, which delivers the finished molecule. An injection skips the stomach. That is a difference in route, not proof it raises NAD+ more than a capsule.",
  },
  {
    question: "How long does it take?",
    answer:
      "An injection visit is shorter than a lounge IV. Injection appointments are listed at about 20 minutes, plus a quick consult with our nurse before the injection.",
  },
  {
    question: "Who is it for?",
    answer:
      "Adults who want to ask about NAD+ support and prefer an injection to swallowing a capsule. Our nurse reviews your history and decides whether it is appropriate. It is not a treatment for disease, fatigue, or aging.",
  },
  {
    question: "Can I buy a multi-injection pack?",
    answer: `Yes. Ask us for an even better deal on a multi-injection pack. Call ${CONTACT.phone}. We do not publish a special pack price. The standard 50mg 4-pack on the menu is ${standard50.pack}.`,
  },
  {
    question: "Is it safe?",
    answer:
      "A licensed nurse consults with you before any injection and reviews your health history. Tell the team about medications and conditions. This page is education, not medical advice, and the injection does not diagnose, treat, cure, or prevent any disease.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: specialActive
    ? `$${specialPrice} Niagen injection — November 2026 special`
    : "Niagen injection",
  description: pageDescription,
  url: absoluteUrl(path),
  dateModified: "2026-10-28",
  inLanguage: "en-US",
};

function OfferActions({
  tone,
  buttonLabel,
}: {
  tone: "dark" | "light";
  buttonLabel: string;
}) {
  const onDark = tone === "dark";
  return (
    <div className="w-full">
      <Link
        href={NIAGEN_INJECTION_BOOKING_PATH}
        className="btn-primary w-full justify-center"
      >
        {buttonLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={`tel:${CONTACT.phoneClean}`}
        className={`mt-3 block text-center text-sm font-medium underline underline-offset-4 ${
          onDark
            ? "text-white decoration-white/50"
            : "text-primary decoration-primary/40"
        }`}
      >
        or call {CONTACT.phone}
      </a>
      <p
        className={`mt-2 text-center text-sm ${
          onDark ? "text-white/90" : "text-foreground-muted"
        }`}
      >
        <TextToBookLink
          showIcon={false}
          className={`underline underline-offset-4 ${
            onDark ? "text-white" : "text-primary"
          }`}
        >
          Text to book
        </TextToBookLink>
        <span aria-hidden="true"> / </span>
        <Link
          href={NIAGEN_INJECTION_BOOKING_PATH}
          className={`underline underline-offset-4 ${
            onDark ? "text-white" : "text-primary"
          }`}
        >
          book online
        </Link>
      </p>
    </div>
  );
}

export default function NadNiagenPage() {
  const buttonLabel = specialActive
    ? `Book the $${specialPrice} injection`
    : "Book a Niagen injection";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          serviceSchema({
            name: "Niagen injection",
            description: pageDescription,
            path,
            serviceType: "Niagen Injection",
          }),
          niagen50OfferSchema(path),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "NAD+ & Niagen", path },
          ]),
          faqSchema(faqs),
        ]}
      />

      <section className="relative overflow-hidden px-4 pb-6 pt-5 text-white md:px-8 md:py-16">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/niagen-background.png')",
            backgroundPosition: "center 30%",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        <div className="container-custom relative mx-auto">
          <div className="max-w-xl">
            <h1 className="text-[1.65rem] font-bold leading-[1.15] text-balance sm:text-4xl lg:text-5xl">
              {specialActive
                ? `50mg Niagen injection, $${specialPrice}.`
                : "50mg Niagen injection."}
              <span className="mt-1 block">
                {specialActive ? "November 2026 special." : "Book it in Jones Valley."}
              </span>
            </h1>
            <p className="mt-3 text-base text-pretty text-white/90 sm:text-lg">
              {specialActive
                ? "One injection at our Huntsville lounge. No promo code — the November price is the price."
                : "One injection at our Huntsville lounge. Our nurse consults with you before the visit."}
            </p>

            <div className="mt-4">
              {specialActive ? (
                <p className="text-xs font-semibold tracking-wide text-secondary-light">
                  {NIAGEN_50MG_SPECIAL.label} · through {endLabel}
                </p>
              ) : null}
              <div className="mt-1 flex flex-wrap items-center gap-3">
                {specialActive ? (
                  <span className="text-2xl text-white/70 line-through">
                    {standard50.single}
                  </span>
                ) : null}
                <span className="text-5xl font-bold text-white">
                  {specialActive ? `$${specialPrice}` : standard50.single}
                </span>
              </div>
              <div className="mt-2 leading-5">
                <GoogleRatingLink tone="dark" />
              </div>
            </div>

            <div className="mt-4 max-w-md">
              <OfferActions tone="dark" buttonLabel={buttonLabel} />
            </div>
          </div>
        </div>
      </section>

      <GoogleReviewSection
        className="bg-background"
        reviews={GOOGLE_REVIEW_BLOCK}
        pullQuote={GOOGLE_REVIEWS.jenna}
      />

      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-balance md:text-4xl">
            How a Niagen injection visit works
          </h2>
          <ol className="mt-8 space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <step.icon
                      className="h-4 w-4 flex-shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-balance md:text-4xl">
            What this visit is
          </h2>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
                  aria-hidden="true"
                />
                <p className="text-foreground-muted">
                  <span className="font-semibold text-foreground">
                    {benefit.title}.
                  </span>{" "}
                  {benefit.text}
                </p>
              </li>
            ))}
          </ul>

          <Link
            href="/learn-more/niagen-nad-injections"
            className="group mt-10 flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                <BookOpen className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-balance">
                  Why Niagen injections instead of oral NAD+
                </h3>
                <p className="mt-1 text-foreground-muted">
                  Oral NAD+ is broken down before your cells can use it. Read
                  the plain-English comparison.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-secondary transition-all group-hover:gap-2">
              Read the science
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-balance md:text-4xl">
            Common questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-foreground-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary-light">
            {specialActive ? NIAGEN_50MG_SPECIAL.label : "Niagen injection"}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-balance md:text-4xl">
            {specialActive
              ? `$${specialPrice} for a 50mg Niagen injection`
              : `${standard50.single} for a 50mg Niagen injection`}
          </h2>
          <p className="mt-3 text-pretty text-white/90">
            {specialActive
              ? `This price runs through ${endLabel}. Regular single injection is ${standard50.single}. `
              : "The November 2026 special has ended. "}
            {NIAGEN_50MG_SPECIAL.packNote} Call {CONTACT.phone}.
          </p>
          <div className="mx-auto mt-6 max-w-md text-left">
            <OfferActions tone="dark" buttonLabel={buttonLabel} />
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-8">
        <p className="container-custom mx-auto max-w-3xl text-xs leading-relaxed text-foreground-muted">
          These statements have not been evaluated by the FDA. This page is for
          education, not medical advice. Niagen&reg; is a registered trademark
          of Niagen Bioscience. Injections at {SITE_CONFIG.name} are not
          intended to diagnose, treat, cure, or prevent any disease, and they
          do not reverse aging. Results vary.
        </p>
      </section>

    </>
  );
}
