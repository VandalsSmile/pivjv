import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Check,
  X,
  ArrowRight,
  Star,
  Infinity as InfinityIcon,
  CalendarX,
  Wallet,
  PiggyBank,
  Repeat,
  ShieldCheck,
  Users,
  CreditCard,
  BadgeCheck,
  Sparkles,
  CalendarCheck,
  Stethoscope,
  Heart,
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { CONTACT, IV_PACKS, PRICING, getPackMath } from "@/lib/constants";
import { TextToBookLink } from "@/components/text-to-book-link";
import { IvPacksForm } from "./iv-packs-form";
import { PackCards } from "./pack-cards";

const sixPack = IV_PACKS[0];
const twelvePack = IV_PACKS[1];
const sixMath = getPackMath(sixPack);
const twelveMath = getPackMath(twelvePack);

export const metadata: Metadata = {
  title: `Pre-Purchase IV Packs — 6 IVs $${sixPack.price} or 12 IVs $${twelvePack.price.toLocaleString()} | Prime IV Huntsville`,
  description: `Save a bundle without a membership. Pre-purchase 6 IV drips for $${sixPack.price} ($${sixMath.perIv}/IV) or 12 for $${twelvePack.price.toLocaleString()} ($${twelveMath.perIv}/IV) in Huntsville, AL. No monthly commitment, no expiration.`,
  keywords: [
    "IV therapy packages Huntsville",
    "pre-purchase IV drips",
    "IV therapy bundle discount",
    "IV pack no membership",
    "6 pack IV therapy",
    "12 pack IV therapy",
    "Huntsville AL IV savings",
  ],
  alternates: { canonical: "/iv-packs" },
  openGraph: { url: "/iv-packs" },
};

const gapPoints = [
  {
    icon: CalendarX,
    title: "You don't want a monthly bill",
    description:
      "Memberships are a recurring commitment with a use-it-or-lose-it rhythm. If your schedule is unpredictable, that pressure is the whole reason you never signed up.",
  },
  {
    icon: Wallet,
    title: "But you're tired of full price",
    description: `You come in regularly anyway — and paying $${PRICING.nonMemberDrip} every single visit adds up fast when you are a genuine regular.`,
  },
  {
    icon: PiggyBank,
    title: "So we built the middle option",
    description:
      "Buy your IVs up front at a bulk rate, then use them whenever you want. Membership-level savings, zero monthly obligation.",
  },
];

const whyPacks = [
  {
    icon: InfinityIcon,
    title: "Your IVs Never Expire",
    description:
      "Use one this week and the next one in four months. Nothing disappears at the end of the month, so nothing goes to waste.",
  },
  {
    icon: Repeat,
    title: "Zero Monthly Commitment",
    description:
      "One payment up front and you are done. No recurring charge, no cancellation call, no renewal you forgot about.",
  },
  {
    icon: Sparkles,
    title: "Any Primary Drip You Want",
    description:
      "Myers' Cocktail, Immunity Armor, The Glow, Athletic Recovery, Hydration Hero — pick a different drip every single visit.",
  },
  {
    icon: ShieldCheck,
    title: "Locked-In Pricing",
    description:
      "Your rate is set the day you pre-purchase. If our menu prices go up, the IVs in your pack are already paid for.",
  },
];

const comparison = [
  {
    feature: "Price per primary drip",
    payGo: `$${PRICING.nonMemberDrip}`,
    pack: `$${twelveMath.perIv} – $${sixMath.perIv}`,
    membership: "From $110/mo",
  },
  {
    feature: "Savings vs. paying per visit",
    payGo: null,
    pack: `$${sixMath.savings} – $${twelveMath.savings} (${sixMath.percentOff}–${twelveMath.percentOff}% off)`,
    membership: "Varies by tier",
  },
  {
    feature: "Monthly commitment",
    payGo: false,
    pack: false,
    membership: true,
  },
  {
    feature: "Bulk savings",
    payGo: false,
    pack: true,
    membership: true,
  },
  {
    feature: "Unused visits roll over",
    payGo: null,
    pack: true,
    membership: false,
  },
  {
    feature: "Choose any primary drip",
    payGo: true,
    pack: true,
    membership: true,
  },
  {
    feature: "VIP massage chair access",
    payGo: true,
    pack: true,
    membership: true,
  },
  {
    feature: "Nothing expires",
    payGo: null,
    pack: true,
    membership: false,
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Pick Your Pack",
    description: `Choose 6 IVs for $${sixPack.price} or 12 IVs for $${twelvePack.price.toLocaleString()} and send us the form. We will call to confirm and take payment securely.`,
  },
  {
    icon: Stethoscope,
    title: "Book Whenever You Want",
    description:
      "Call, text, or book online any time. Just mention your pack at check-in and we will draw down one visit.",
  },
  {
    icon: Heart,
    title: "Drip, Relax, Repeat",
    description:
      "Settle into a heated massage chair while your drip works. Come back on your own timeline until your pack is used up.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Medical Staff (RN on site)" },
  { icon: CreditCard, label: "HSA / FSA Accepted" },
  { icon: Users, label: "Couples & Group Bookings Welcome" },
  { icon: Sparkles, label: "Premium, Spa-Like Experience" },
];

const reviews = [
  {
    initials: "DL",
    name: "Danielle L.",
    text: "I come in about once a month but a membership never fit my travel schedule. Buying a pack up front was exactly what I wanted — I just walk in and go.",
  },
  {
    initials: "JR",
    name: "Jordan R.",
    text: "Did the math and the 12-pack was a no-brainer for me. Same drips I was already getting, noticeably less per visit, and nothing hanging over my head.",
  },
  {
    initials: "SP",
    name: "Sara P.",
    text: "The staff is wonderful and the lounge is beautiful. Knowing my IVs are already paid for makes me actually take care of myself instead of putting it off.",
  },
];

const faqs = [
  {
    question: "How much do the IV packs cost?",
    answer: `Our 6-IV pack is $${sixPack.price}, which works out to $${sixMath.perIv} per IV and saves you $${sixMath.savings} — about ${sixMath.percentOff}% off the standard $${PRICING.nonMemberDrip} non-member rate. Our 12-IV pack is $${twelvePack.price.toLocaleString()}, which works out to $${twelveMath.perIv} per IV and saves you $${twelveMath.savings}, roughly ${twelveMath.percentOff}% off — our best price per IV without a membership.`,
  },
  {
    question: "Do the pre-purchased IVs expire?",
    answer:
      "No. Your pre-purchased IVs never expire. Use them as quickly or as slowly as you like — there is no monthly deadline and nothing is forfeited if you go a while between visits.",
  },
  {
    question: "Can I share my pack with family or friends?",
    answer:
      "Packs are for one person and are not transferable. If someone else in your household wants pack pricing, they can pre-purchase their own — and if you would like to give IV therapy as a gift, our gift cards are the perfect fit.",
  },
  {
    question: "Which IV drips can I use my pack on?",
    answer:
      "Your pack covers any primary drip on our menu, and you can choose a different one every visit — Myers' Cocktail, Immunity Armor, The Glow, Athletic Recovery, Hydration Hero, and more. Premium add-ons and specialty infusions like NAD+ can be added at your visit for the difference in price.",
  },
  {
    question: "How is this different from a membership?",
    answer:
      "A membership is a recurring monthly charge with benefits that reset each month, so unused visits generally do not carry over. An IV pack is a one-time pre-purchase with no monthly bill and no expiration. Packs are built for people who come in regularly but want their savings without a recurring commitment.",
  },
  {
    question: "How do I use my pack once I have purchased it?",
    answer: `Just book like normal ��� call ${CONTACT.phone}, text us, or book online — and mention your pack when you arrive. We track your remaining visits in your client profile, so you can always ask how many you have left.`,
  },
  {
    question: "Can I use my HSA or FSA card to buy a pack?",
    answer:
      "HSA and FSA cards may be accepted for eligible services. Coverage and reimbursement requirements vary by plan and individual circumstances, so we recommend confirming eligibility with your plan administrator before purchasing.",
  },
  {
    question: "Do I still need the telehealth screening?",
    answer: `Yes, if you are a new client. Alabama requires a one-time $${PRICING.medicalClearance} telehealth medical screening before your first infusion. Returning clients who have already completed it do not need to repeat it.`,
  },
];

/** Renders a check, an X, or a dash for the comparison table. */
function ComparisonCell({
  value,
  emphasis = false,
}: {
  value: boolean | string | null;
  emphasis?: boolean;
}) {
  if (typeof value === "string") {
    return (
      <span
        className={`font-semibold ${emphasis ? "text-accent-dark" : "text-foreground"}`}
      >
        {value}
      </span>
    );
  }
  if (value === true) {
    return (
      <>
        <Check
          className={`w-5 h-5 mx-auto ${emphasis ? "text-accent" : "text-secondary"}`}
          aria-hidden="true"
        />
        <span className="sr-only">Yes</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <X className="w-5 h-5 mx-auto text-foreground-muted/50" aria-hidden="true" />
        <span className="sr-only">No</span>
      </>
    );
  }
  return (
    <>
      <span className="text-foreground-muted/50" aria-hidden="true">
        —
      </span>
      <span className="sr-only">Not applicable</span>
    </>
  );
}

export default function IvPacksPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Pre-Purchase IV Therapy Packs (6-Pack & 12-Pack)",
            description: `Pre-purchase IV therapy packs in Huntsville, AL: 6 primary drips for $${sixPack.price} or 12 primary drips for $${twelvePack.price.toLocaleString()}. Bulk savings with no membership, no monthly commitment, and no expiration.`,
            path: "/iv-packs",
            serviceType: "IV Therapy",
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "IV Packs", path: "/iv-packs" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative text-white section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/iv-packs-background.png')",
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container-custom mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent-light font-semibold uppercase tracking-wide mb-3">
                For Regulars Who Skip the Membership
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Love Your IVs, Hate Monthly Commitments? Pre-Purchase and Save a
                Bundle.
              </h1>
              <p className="text-white/80 text-lg mb-8 text-pretty">
                You come in regularly. You just do not want another subscription.
                Buy your IVs up front, use them whenever you want, and never pay
                full price again — no membership required.
              </p>

              {/* Price anchor */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {IV_PACKS.map((pack) => {
                  const math = getPackMath(pack);
                  return (
                    <div
                      key={pack.id}
                      className={`rounded-xl p-4 border ${
                        pack.highlight
                          ? "bg-accent/20 border-accent-light"
                          : "bg-white/10 border-white/20"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-wide text-white/70 mb-1">
                        {pack.quantity} IVs
                      </p>
                      <p className="text-3xl font-bold text-white leading-none tabular-nums">
                        ${pack.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-accent-light font-semibold mt-2">
                        ${math.perIv} per IV
                      </p>
                      <p className="text-xs text-white/70 mt-1">
                        Save ${math.savings.toLocaleString()} ·{" "}
                        {math.percentOff}% off
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#reserve-pack" className="btn-accent">
                  Reserve My Pack
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                  <Phone className="w-4 h-4" />
                  Call to Pre-Purchase
                </Link>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white/80 text-sm">
                  Rated 5.0 by happy clients in {CONTACT.address.city}
                </span>
              </div>

              <p className="text-white/60 text-xs text-pretty">
                *Savings compared to the standard ${PRICING.nonMemberDrip}{" "}
                non-member primary drip rate. IVs never expire. Packs are for one
                person and are not transferable.
              </p>
            </div>

            {/* Hero reservation form */}
            <IvPacksForm variant="hero" />
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
              The Missing Middle
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Built for the Loyal Client Who Never Wanted a Membership
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              For years there were only two options: pay full price every visit,
              or sign up for a monthly plan. Neither one fit a whole lot of our
              best clients — so here is the third option.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {gapPoints.map((point, index) => (
              <div
                key={point.title}
                className={`rounded-xl p-6 border card-hover ${
                  index === 2
                    ? "bg-primary text-white border-primary shadow-xl"
                    : "bg-white border-border shadow-lg"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    index === 2 ? "bg-accent" : "bg-accent/10"
                  }`}
                >
                  <point.icon
                    className={`w-6 h-6 ${index === 2 ? "text-white" : "text-accent-dark"}`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p
                  className={`leading-relaxed ${
                    index === 2 ? "text-white/80" : "text-foreground-muted"
                  }`}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The offer — pack cards */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
              Now Offering
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Pre-Purchase 6 or 12 IVs and Save a Bundle
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              One payment. Your choice of any primary drip on the menu. Nothing
              expires, and there is never a monthly charge.
            </p>
          </div>

          <PackCards />

          <p className="text-center text-sm text-foreground-muted mt-8 max-w-2xl mx-auto text-pretty">
            Both packs are compared against our standard $
            {PRICING.nonMemberDrip} non-member primary drip rate. Premium
            infusions and add-ons can be applied to any visit for the difference
            in price.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
              Side by Side
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Pay Per Visit vs. IV Pack vs. Membership
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              Packs sit right in the middle: real savings, none of the monthly
              strings.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border shadow-lg bg-white">
            <table className="w-full min-w-[36rem] text-sm">
              <caption className="sr-only">
                Comparison of paying per visit, pre-purchasing an IV pack, and a
                monthly membership
              </caption>
              <thead>
                <tr className="bg-background-alt">
                  <th
                    scope="col"
                    className="text-left font-semibold text-foreground p-4"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="text-center font-semibold text-foreground p-4"
                  >
                    Pay Per Visit
                  </th>
                  <th
                    scope="col"
                    className="text-center font-bold text-white p-4 bg-accent"
                  >
                    IV Pack
                  </th>
                  <th
                    scope="col"
                    className="text-center font-semibold text-foreground p-4"
                  >
                    Membership
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <th
                      scope="row"
                      className="text-left font-medium text-foreground p-4"
                    >
                      {row.feature}
                    </th>
                    <td className="text-center p-4">
                      <ComparisonCell value={row.payGo} />
                    </td>
                    <td className="text-center p-4 bg-accent/5">
                      <ComparisonCell value={row.pack} emphasis />
                    </td>
                    <td className="text-center p-4">
                      <ComparisonCell value={row.membership} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <Link href="#reserve-pack" className="btn-accent">
              Reserve My Pack
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-foreground-muted mt-4">
              Still think a monthly plan fits you better?{" "}
              <Link
                href="/memberships"
                className="text-secondary font-semibold hover:underline"
              >
                Compare our memberships
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why packs work + lounge image */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/intro-offer-vip-chairs.jpg"
                  alt="Premium zero-gravity massage chairs with IV stations in the Prime IV Hydration & Wellness VIP lounge in Huntsville, AL"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-3 text-sm text-foreground-muted text-center lg:text-left">
                Every pack visit includes VIP massage chair time while your drip
                goes to work.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
                Why Regulars Choose Packs
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                All the Savings, None of the Strings
              </h2>
              <p className="text-foreground-muted text-lg mb-8 text-pretty">
                A pack rewards you for being loyal without asking you to schedule
                your health around a billing cycle.
              </p>

              <ul className="space-y-6">
                {whyPacks.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon
                        className="w-5 h-5 text-accent-dark"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="#reserve-pack" className="btn-accent">
                  Pre-Purchase My IVs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
              Simple &amp; Flexible
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              How Your Pack Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex mb-5">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The savings moment at the front desk */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
                Pay Once, Then Relax
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                One Stop at the Front Desk. Savings Every Visit After.
              </h2>
              <p className="text-foreground-muted text-lg mb-8 text-pretty">
                Pre-purchase your pack once and you are done paying. Every visit
                after that you check in, get your drip, and walk out — no card,
                no monthly bill, and no expiration date hanging over you.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-background rounded-xl border border-border p-4">
                  <p className="text-2xl font-bold text-accent-dark tabular-nums">
                    ${twelveMath.savings}
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">
                    Saved on the 12-pack
                  </p>
                </div>
                <div className="bg-background rounded-xl border border-border p-4">
                  <p className="text-2xl font-bold text-accent-dark tabular-nums">
                    {twelveMath.percentOff}%
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">
                    Off the regular rate
                  </p>
                </div>
                <div className="bg-background rounded-xl border border-border p-4">
                  <p className="text-2xl font-bold text-accent-dark">$0</p>
                  <p className="text-xs text-foreground-muted mt-1">
                    Monthly commitment
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="#reserve-pack-full" className="btn-accent">
                  Pre-Purchase My IVs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/iv-packs-checkout-savings.png"
                  alt="A smiling client paying at the front desk while a Prime IV Hydration & Wellness team member in blue scrubs helps her check out in Huntsville, AL"
                  fill
                  className="object-cover object-[center_38%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-3 text-sm text-foreground-muted text-center lg:text-left">
                One payment at the front desk covers every visit in your pack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prefer to call */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto bg-primary text-white rounded-2xl p-8 md:p-10 shadow-lg text-center">
            <p className="text-accent-light font-semibold uppercase tracking-wide mb-2">
              Prefer to call?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Talk It Through With Our Team
            </h2>
            <p className="text-white/80 text-lg mb-6 text-pretty">
              Not sure whether the 6-pack or the 12-pack makes more sense for how
              often you come in? Give us a call and we will run the numbers with
              you in about two minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-accent justify-center"
              >
                <Phone className="w-4 h-4" />
                Call Now — {CONTACT.phone}
              </Link>
              <Link href="#reserve-pack" className="btn-outline justify-center">
                Use the Form
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
              <TextToBookLink
                showNumber
                className="justify-center text-white hover:text-accent-light transition-colors font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-border mb-4">
              <span className="font-bold text-2xl">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-foreground-muted">Google Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Loved by Our {CONTACT.address.city} Regulars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl shadow-lg p-6 border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.initials}
                  </div>
                  <span className="font-medium text-foreground">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-primary text-white py-10">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-3 justify-center text-center sm:text-left sm:justify-start"
              >
                <signal.icon className="w-6 h-6 text-accent-light flex-shrink-0" />
                <span className="text-sm text-white/90">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
              Questions, Answered
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              IV Pack FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-border shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-foreground list-none">
                  <span className="text-pretty">{faq.question}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent-dark flex items-center justify-center text-lg font-bold leading-none transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-foreground-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Full reservation form */}
      <section
        id="reserve-pack-full"
        className="section-padding bg-background scroll-mt-24"
      >
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-accent-dark font-semibold uppercase tracking-wide mb-2">
                Lock It In
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Pre-Purchase Your IVs
              </h2>
              <p className="text-foreground-muted text-lg text-pretty">
                Send us your pack choice and we will call to confirm the details
                and take payment securely. It takes about five minutes.
              </p>
            </div>
            <IvPacksForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <p className="text-accent-light font-semibold uppercase tracking-wide mb-3">
              No membership. No monthly bill. No expiration.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Save ${twelveMath.savings.toLocaleString()} on Your Next 12 IVs
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Pre-purchase 6 IVs for ${sixPack.price} or 12 IVs for $
              {twelvePack.price.toLocaleString()} and stop paying full price for
              something you already love.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#reserve-pack" className="btn-accent">
                Reserve My Pack
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
            <p className="text-white/60 text-xs mt-6 text-pretty">
              *Savings compared to the standard ${PRICING.nonMemberDrip}{" "}
              non-member primary drip rate. IVs never expire. Packs are for one
              person and are not transferable. New clients require a one-time
              state-mandated ${PRICING.medicalClearance} telehealth screening.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
