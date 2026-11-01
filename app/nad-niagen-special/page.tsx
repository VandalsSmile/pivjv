import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Check,
  Droplets,
  Gift,
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
import {
  CONTACT,
  NAD_HOLIDAY_SPECIAL,
  OG_IMAGE,
  SITE_CONFIG,
} from "@/lib/constants";
import {
  NIAGEN_INJECTION_BOOKING_PATH,
  holidaySpecialItems,
  holidaySpecialOfferSchema,
  holidaySpecialRangeLabel,
  isHolidaySpecialActive,
  type HolidaySpecialItem,
} from "@/lib/niagen-special";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";

const path = "/nad-niagen-special";
const specialActive = isHolidaySpecialActive();
const rangeLabel = holidaySpecialRangeLabel();
const percentOff = NAD_HOLIDAY_SPECIAL.percentOff;
const items = holidaySpecialItems();

const pageDescription = specialActive
  ? `Holiday special: ${percentOff}% off NAD+ and Niagen injections and NAD+ and Niagen infusion IVs, ${rangeLabel}, at ${SITE_CONFIG.name} in Huntsville, AL. Call ${CONTACT.phone}. No promo code.`
  : `NAD+ and Niagen injections and infusion IVs at ${SITE_CONFIG.name} in Huntsville, AL. Call ${CONTACT.phone}.`;

export const metadata: Metadata = {
  title: specialActive
    ? `${percentOff}% Off NAD+ & Niagen — Holiday Special`
    : "NAD+ & Niagen Injections and IVs",
  description: pageDescription,
  keywords: [
    "NAD+ IV Huntsville",
    "NAD+ injection Huntsville",
    "Niagen injection Huntsville",
    "Niagen IV",
    "NAD+ holiday special",
    "50% off NAD+",
    "Prime IV Jones Valley",
  ],
  alternates: { canonical: path },
  openGraph: {
    url: path,
    title: specialActive
      ? `${percentOff}% off NAD+ & Niagen — holiday special`
      : "NAD+ & Niagen in Huntsville",
    description: pageDescription,
    images: [OG_IMAGE],
  },
};

const benefits = [
  {
    title: "Two routes, two timelines",
    text: "An injection is a short visit, about 20 minutes. An infusion IV is a longer, seated lounge visit. Both skip the stomach.",
  },
  {
    title: "NAD+ and Niagen are different",
    text: "An NAD+ IV or injection delivers the finished molecule. Niagen is nicotinamide riboside, a precursor cells use to make their own NAD+.",
  },
  {
    title: "NAD+ infusions are pre-ordered",
    text: "We prepare NAD+ infusions ahead of your visit, so book early during the holiday rush.",
  },
  {
    title: "A nurse consults first",
    text: "Licensed staff review your history before any injection or infusion. It does not treat disease or reverse aging.",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book",
    text: specialActive
      ? `Request your visit online, by text, or call ${CONTACT.phone}. No promo code — the ${percentOff}% off is automatic through the holidays.`
      : `Book online, by text, or call ${CONTACT.phone}.`,
  },
  {
    icon: Stethoscope,
    title: "Consult",
    text: "A nurse reviews your history, medications, and goals, and helps you choose an injection or an infusion.",
  },
  {
    icon: Syringe,
    title: "Relax",
    text: "Injection visits are about 20 minutes. Infusions take longer in a zero-gravity lounge chair.",
  },
];

const faqs = [
  {
    question: specialActive
      ? "What is included in the holiday special?"
      : "What NAD+ and Niagen options do you offer?",
    answer: specialActive
      ? `${percentOff}% off ${NAD_HOLIDAY_SPECIAL.appliesTo}, ${rangeLabel}. ${NAD_HOLIDAY_SPECIAL.priceNote} No promo code needed. Call ${CONTACT.phone} to book.`
      : `NAD+ injections, Niagen injections, NAD+ infusions, and Niagen infusions. Prices are on our menu. Call ${CONTACT.phone} to book.`,
  },
  {
    question: "What is the difference between NAD+ and Niagen?",
    answer:
      "NAD+ is a coenzyme found in every cell. An NAD+ IV or injection delivers that finished molecule. Niagen is a branded form of nicotinamide riboside (NR), a precursor your cells can use to make NAD+. Our nurse can help you decide which fits your goals.",
  },
  {
    question: "Injection or infusion IV?",
    answer:
      "An injection is a quick visit, listed at about 20 minutes. An infusion IV is a longer lounge visit with a higher dose. NAD+ infusions require a pre-order, so call ahead.",
  },
  {
    question: "Is it safe?",
    answer:
      "A licensed nurse consults with you before any injection or infusion and reviews your health history. Tell the team about medications and conditions. This page is education, not medical advice, and these services do not diagnose, treat, cure, or prevent any disease.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: specialActive
    ? `${percentOff}% off NAD+ & Niagen — holiday special`
    : "NAD+ & Niagen injections and IVs",
  description: pageDescription,
  url: absoluteUrl(path),
  dateModified: "2026-11-01",
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

const PRICE_GROUPS: {
  title: string;
  icon: typeof Syringe;
  note: string;
  group?: HolidaySpecialItem["group"];
}[] = [
  {
    title: "NAD+ Injections",
    icon: Syringe,
    note: "About a 20-minute visit",
    group: "NAD+ injection",
  },
  {
    title: "Niagen® Injections",
    icon: Syringe,
    note: "About a 20-minute visit",
    group: "Niagen injection",
  },
  {
    title: "NAD+ Infusion IVs",
    icon: Droplets,
    note: "Pre-order required",
    group: "NAD+ infusion",
  },
  {
    title: "Niagen® Infusion IVs",
    icon: Droplets,
    note: "Call for dose and pricing",
  },
];

function PriceCard({ group }: { group: (typeof PRICE_GROUPS)[number] }) {
  const rows = group.group
    ? items.filter((item) => item.group === group.group)
    : [];
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/10">
          <group.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{group.title}</h3>
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
            {group.note}
          </p>
        </div>
      </div>

      {rows.length > 0 ? (
        <ul className="mt-5 divide-y divide-border">
          {rows.map((row) => (
            <li
              key={row.dose}
              className="flex items-center justify-between gap-4 py-3"
            >
              <span className="font-semibold text-foreground">{row.dose}</span>
              <span className="flex items-baseline gap-2">
                {specialActive ? (
                  <>
                    <span className="text-sm text-foreground-muted line-through">
                      {row.regular}
                    </span>
                    <span className="text-xl font-bold text-secondary">
                      {row.sale}
                    </span>
                  </>
                ) : (
                  <span className="text-xl font-bold text-secondary">
                    {row.regular}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 flex flex-1 flex-col justify-center rounded-xl bg-background-alt p-4">
          <p className="text-xl font-bold text-secondary">
            {specialActive ? `${percentOff}% off` : "Ask the team"}
          </p>
          <p className="mt-1 text-sm text-foreground-muted">
            Call {CONTACT.phone} for dose options and your holiday price.
          </p>
        </div>
      )}
    </div>
  );
}

export default function NadNiagenPage() {
  const buttonLabel = specialActive
    ? `Book ${percentOff}% off NAD+ or Niagen`
    : "Book NAD+ or Niagen";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema,
          serviceSchema({
            name: "NAD+ and Niagen injections and infusions",
            description: pageDescription,
            path,
            serviceType: "NAD+ Therapy",
          }),
          holidaySpecialOfferSchema(path),
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
            {specialActive ? (
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-light">
                <Gift className="h-3.5 w-3.5" aria-hidden="true" />
                {NAD_HOLIDAY_SPECIAL.label} · {rangeLabel}
              </p>
            ) : null}
            <h1 className="mt-3 text-[1.65rem] font-bold leading-[1.15] text-balance sm:text-4xl lg:text-5xl">
              {specialActive
                ? `${percentOff}% off NAD+ & Niagen for the holidays.`
                : "NAD+ & Niagen in Jones Valley."}
            </h1>
            <p className="mt-3 text-base text-pretty text-white/90 sm:text-lg">
              {specialActive
                ? "Injections and infusion IVs, half price through December 31 at our Huntsville lounge. No promo code needed."
                : "Injections and infusion IVs at our Huntsville lounge. Our nurse consults with you before every visit."}
            </p>

            <div className="mt-4">
              {specialActive ? (
                <p className="text-5xl font-bold text-white sm:text-6xl">
                  {percentOff}% off
                </p>
              ) : null}
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

      <section className="section-padding bg-background" aria-labelledby="holiday-prices">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              {specialActive ? `Holiday pricing · ${rangeLabel}` : "Pricing"}
            </p>
            <h2
              id="holiday-prices"
              className="mt-2 text-3xl font-bold text-balance md:text-4xl"
            >
              {specialActive
                ? "Every NAD+ and Niagen injection and IV, half off"
                : "NAD+ and Niagen pricing"}
            </h2>
            <p className="mt-3 text-pretty text-foreground-muted">
              {specialActive
                ? `${NAD_HOLIDAY_SPECIAL.priceNote} Great for a holiday reset — or a gift for someone who needs one.`
                : "Prices per single injection or infusion. Ask the team about packs."}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {PRICE_GROUPS.map((group) => (
              <PriceCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewSection
        className="bg-background-alt"
        reviews={GOOGLE_REVIEW_BLOCK}
        pullQuote={GOOGLE_REVIEWS.jenna}
      />

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-balance md:text-4xl">
            How an NAD+ or Niagen visit works
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

      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-balance md:text-4xl">
            What to know before you book
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

      <section className="section-padding bg-background">
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
            {specialActive ? NAD_HOLIDAY_SPECIAL.label : "NAD+ & Niagen"}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-balance md:text-4xl">
            {specialActive
              ? `${percentOff}% off NAD+ and Niagen through December 31`
              : "Book NAD+ or Niagen in Jones Valley"}
          </h2>
          <p className="mt-3 text-pretty text-white/90">
            {specialActive
              ? `Injections and infusion IVs, ${rangeLabel}. NAD+ infusions require a pre-order. `
              : "Our holiday special has ended. "}
            Call {CONTACT.phone}.
          </p>
          <div className="mx-auto mt-6 max-w-md text-left">
            <OfferActions tone="dark" buttonLabel={buttonLabel} />
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-8">
        <p className="container-custom mx-auto max-w-3xl text-xs leading-relaxed text-foreground-muted">
          {specialActive
            ? `Holiday special valid ${rangeLabel}. ${NAD_HOLIDAY_SPECIAL.priceNote} `
            : null}
          These statements have not been evaluated by the FDA. This page is for
          education, not medical advice. Niagen&reg; is a registered trademark
          of Niagen Bioscience. Services at {SITE_CONFIG.name} are not
          intended to diagnose, treat, cure, or prevent any disease, and they
          do not reverse aging. Results vary.
        </p>
      </section>
    </>
  );
}
