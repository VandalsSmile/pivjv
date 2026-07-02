import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/structured-data";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Check,
  ArrowRight,
  Gift,
  Heart,
  Zap,
  Shield,
  Sparkles,
  Droplets,
  Star,
  BadgeCheck,
  Microscope,
  PartyPopper,
  HandHeart,
  Baby,
  Snowflake,
  Dumbbell,
  Smile,
  MessageSquareHeart,
  CreditCard,
  Armchair,
} from "lucide-react";
import { CONTACT, SITE_CONFIG, PRICING } from "@/lib/constants";
import { GiftCardForm } from "./gift-card-form";

const PAGE_TITLE = "IV Therapy Gift Cards | Give the Gift of Wellness";
const PAGE_DESCRIPTION =
  "Give someone the same great feeling you get from IV therapy at Prime IV in Jones Valley, Huntsville, AL. Gift cards in any amount for drips & injections.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "IV therapy gift card Huntsville",
    "wellness gift card Huntsville AL",
    "Prime IV gift card",
    "spa gift card Jones Valley",
    "hydration therapy gift",
  ],
  alternates: { canonical: "/gift-cards" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/gift-cards",
    siteName: SITE_CONFIG.name,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: "/images/vip-spa-lounge.jpg",
        width: 1200,
        height: 630,
        alt: `Gift cards for IV therapy at ${SITE_CONFIG.name} in Jones Valley, Huntsville, AL`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/images/vip-spa-lounge.jpg"],
  },
};

const giftFeelings = [
  {
    icon: Zap,
    title: "Refreshed Energy",
    description:
      "That recharged, ready-for-anything feeling after a session in the massage chair with a customized IV drip. Give it to the person in your life running on empty.",
  },
  {
    icon: Droplets,
    title: "Deep Hydration & Recovery",
    description:
      "Fluids, vitamins, and nutrients delivered directly into the bloodstream to help the body recover from workouts, travel, long weeks, and short nights.",
  },
  {
    icon: Shield,
    title: "Immune & Wellness Support",
    description:
      "Wellness-focused blends with immune-supporting vitamins — a thoughtful way to say \"take care of yourself\" to someone who takes care of everyone else.",
  },
  {
    icon: Sparkles,
    title: "A True Self-Care Hour",
    description:
      "A calm, spa-like escape with warm towels, massage chairs, and a licensed medical team. Not just nutrients — a full hour that's entirely theirs.",
  },
];

const occasions = [
  {
    icon: PartyPopper,
    title: "Birthdays",
    description:
      "Skip the gadgets and gift baskets. Give them an experience that leaves them feeling better than they did before.",
  },
  {
    icon: HandHeart,
    title: "Thank You",
    description:
      "For the friend who showed up, the coworker who covered for you, or the parent who never stops giving.",
  },
  {
    icon: Baby,
    title: "New Parents",
    description:
      "Sleep is scarce and coffee only goes so far. Help a new mom or dad refuel with hydration and replenishing nutrients.",
  },
  {
    icon: Dumbbell,
    title: "Athletes & Go-Getters",
    description:
      "Perfect for runners, gym regulars, and weekend warriors who are always chasing a faster recovery.",
  },
  {
    icon: Snowflake,
    title: "Holidays & Milestones",
    description:
      "Anniversaries, graduations, promotions, or the holiday season — wellness is a gift that never gets returned.",
  },
  {
    icon: Smile,
    title: "Just Because",
    description:
      "Sometimes the best reason is no reason at all. Surprise someone who deserves to feel as good as you do.",
  },
];

const howItWorks = [
  {
    icon: CreditCard,
    step: "1",
    title: "Choose Your Amount",
    description: `Pick an amount that fits your gift — $${PRICING.introOffer.price} covers a first VIP IV experience, $150 covers any Primary Drip, $180 covers any Specialty Drip, or choose a custom amount.`,
  },
  {
    icon: Gift,
    step: "2",
    title: "We Prepare Your Gift",
    description:
      "Request your gift card below, call us, or stop by our Jones Valley spa. Our team will have it ready to give — perfect for last-minute gifting.",
  },
  {
    icon: Armchair,
    step: "3",
    title: "They Relax & Recharge",
    description:
      "Your recipient books a session whenever they're ready, settles into a massage chair, and walks out with that great feeling you already know.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, label: "Licensed Medical Staff On Site" },
  { icon: Microscope, label: "Pharmaceutical-Grade Ingredients" },
  { icon: Sparkles, label: "Premium, Spa-Like Experience" },
  { icon: Heart, label: "Locally Owned in Jones Valley" },
];

const faqs = [
  {
    question: "How do I purchase a Prime IV gift card?",
    answer:
      "It's easy — request one through the form on this page, call us at (256) 692-6347, or stop by our spa on Carl T. Jones Drive in Jones Valley. Our team will have your gift card ready to give.",
  },
  {
    question: "Can I choose any gift card amount?",
    answer:
      "Yes. Popular amounts include $85 (covers the VIP Intro Offer IV for first-time guests), $150 (covers any Primary IV Drip), and $180 (covers any Specialty IV Drip like The Myers' Cocktail or The Glow), but you can choose any amount that fits your gift.",
  },
  {
    question: "What can a gift card be used for?",
    answer:
      "Gift cards can be used toward IV drips, vitamin injections, add-ons, and wellness experiences at Prime IV Hydration & Wellness in Jones Valley, Huntsville. The recipient chooses whatever fits their wellness goals.",
  },
  {
    question: "Does the recipient get to pick their own IV drip?",
    answer:
      "Absolutely. When they arrive, our wellness team consults with them about their goals — energy, recovery, immunity, beauty, or relaxation — and helps them choose the perfect drip. No wellness experience required.",
  },
  {
    question: "Is IV therapy a good gift for someone who has never tried it?",
    answer:
      "Yes! First-timers are some of our favorite guests. Every session is administered by licensed medical professionals in a clean, comfortable, spa-like environment, and our team walks newcomers through everything step by step.",
  },
  {
    question: "How does the recipient redeem their gift card?",
    answer:
      "They simply call, book online, or walk in, then present their gift card at their visit. Same-day appointments and walk-ins are always welcome.",
  },
];

export default function GiftCardsPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${SITE_CONFIG.name} Gift Card`,
            description:
              "Gift cards for IV hydration therapy, vitamin injections, and wellness experiences at Prime IV Hydration & Wellness in Jones Valley, Huntsville, AL. Available in any amount.",
            url: absoluteUrl("/gift-cards"),
            image: absoluteUrl("/images/vip-spa-lounge.jpg"),
            brand: { "@type": "Brand", name: SITE_CONFIG.name },
            category: "Gift Cards",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: String(PRICING.introOffer.price),
              highPrice: "180",
              offerCount: 3,
              availability: "https://schema.org/InStock",
              url: absoluteUrl("/gift-cards"),
              seller: { "@id": `${SITE_CONFIG.url}/#business` },
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gift Cards", path: "/gift-cards" },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
                Prime IV Gift Cards
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Give Someone You Love That &ldquo;I Feel Amazing&rdquo; Feeling
              </h1>
              <p className="text-white/80 text-lg mb-8 text-pretty">
                You know the feeling — you walk out of {SITE_CONFIG.name} in
                Jones Valley hydrated, recharged, and ready for anything. Now
                you can give that exact same feeling to someone close to you. A
                Prime IV gift card is more than a present; it&apos;s an hour of
                true self-care and a boost they&apos;ll feel for days.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-secondary-light">
                  Any Amount
                </span>
                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                  The Gift of Wellness
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link href="#gift-form" className="btn-primary">
                  Get a Gift Card
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                  <Phone className="w-4 h-4" />
                  {CONTACT.phone}
                </Link>
              </div>

              <div className="flex items-center gap-2">
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
            </div>

            {/* Gift Card Offer Card */}
            <div className="bg-white text-foreground rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-accent p-4 text-center text-white">
                <span className="inline-block bg-white text-accent text-xs font-bold px-3 py-1 rounded-full">
                  Special! Buy $100, Get $125 to Spend
                </span>
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                  <Gift className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  The Prime IV Gift Card
                </h2>
                <p className="text-foreground-muted mb-5">
                  One card. Every drip, injection, and wellness experience on
                  our menu.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="rounded-lg border-2 border-accent bg-accent/10 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">
                        Buy $100
                        <span className="block text-xs font-normal text-foreground-muted">
                          Limited time only
                        </span>
                      </span>
                      <span className="text-2xl font-bold text-accent">
                        Get $125
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-background-alt px-4 py-3">
                    <span className="font-semibold text-foreground">
                      First-Timer
                      <span className="block text-xs font-normal text-foreground-muted">
                        Covers the VIP Intro Offer IV
                      </span>
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      ${PRICING.introOffer.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-secondary/10 px-4 py-3">
                    <span className="font-semibold text-foreground">
                      Primary Drips
                      <span className="block text-xs font-normal text-foreground-muted">
                        Covers any Primary IV Drip
                      </span>
                    </span>
                    <span className="text-2xl font-bold text-secondary">
                      $150
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-primary/5 px-4 py-3">
                    <span className="font-semibold text-foreground">
                      Specialty Drips
                      <span className="block text-xs font-normal text-foreground-muted">
                        The Myers&apos; Cocktail, The Glow &amp; more
                      </span>
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      $180
                    </span>
                  </div>
                </div>

                <Link
                  href="#gift-form"
                  className="btn-secondary w-full justify-center"
                >
                  Start Your Gift Card
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You know the feeling */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <MessageSquareHeart className="w-7 h-7 text-primary" />
              </div>
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                Why Gift Wellness
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                You Know the Feeling. Now Share It.
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-5">
                If you&apos;ve experienced IV therapy at Prime IV Jones Valley,
                you already know what it does for you — the refreshed energy,
                the faster recovery, the calm hour in a massage chair while
                your body gets exactly what it needs. It&apos;s the kind of
                feeling you find yourself telling friends about.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                A gift card turns that recommendation into a real experience.
                Instead of another thing that sits on a shelf, you&apos;re
                giving someone close to you an hour for themselves and a boost
                to their wellness — the same great feeling that keeps you
                coming back.
              </p>
              <Link href="#gift-form" className="btn-primary">
                Give the Feeling
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-background-alt rounded-2xl p-8 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Why a Prime IV gift card beats another gift basket
              </h3>
              <ul className="space-y-3">
                {[
                  "An experience they'll actually use — and remember",
                  "They choose the drip that fits their wellness goals",
                  "Administered by licensed medical professionals",
                  "A relaxing, spa-like hour of true self-care",
                  "Available in any amount, ready same day",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you're really giving */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              What You&apos;re Really Giving
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              More Than a Card — A Feeling They&apos;ll Thank You For
            </h2>
            <p className="text-foreground-muted text-lg text-pretty">
              Every gift card unlocks the full {SITE_CONFIG.name} experience in
              Jones Valley — customized IV drips, vitamin injections, and a
              wellness team dedicated to making them feel their best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {giftFeelings.map((feeling) => (
              <div
                key={feeling.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <feeling.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feeling.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {feeling.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="#gift-form" className="btn-primary">
              Get a Gift Card
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Perfect For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              A Thoughtful Gift for Every Occasion
            </h2>
            <p className="text-foreground-muted text-lg mt-4 text-pretty">
              Whoever it&apos;s for and whatever the reason, a wellness gift
              says you want them to feel their absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occasion) => (
              <div
                key={occasion.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <occasion.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{occasion.title}</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {occasion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Gifting Wellness Is Easy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {howItWorks.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-xl shadow-lg p-6 border border-border text-center card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-secondary font-bold text-sm uppercase tracking-wide mb-1">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call to Get Yours Today
            </Link>
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
                <signal.icon className="w-6 h-6 text-secondary-light flex-shrink-0" />
                <span className="text-sm text-white/90">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="section-padding bg-background pb-0">
        <div className="container-custom mx-auto">
          <div className="relative max-w-4xl mx-auto aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gift-card-relaxing.webp"
              alt="Guest smiling and relaxing under a cozy blanket in a massage chair during an IV therapy session at Prime IV Hydration & Wellness in Jones Valley, Huntsville, AL"
              fill
              className="object-cover object-[center_22%]"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Gift card form */}
      <section
        id="gift-form"
        className="section-padding bg-background scroll-mt-24"
      >
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="min-w-0">
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                Get Your Gift Card
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Ready to Make Someone&apos;s Day?
              </h2>
              <p className="text-foreground-muted text-lg mb-6 text-pretty">
                Tell us a little about your gift and our team will reach out to
                finish your gift card — or call{" "}
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {CONTACT.phone}
                </Link>{" "}
                or stop by our Jones Valley spa and we&apos;ll have it ready on
                the spot.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Limited time special: buy a $100 gift card, get $125 to spend!",
                  "Available in any amount — popular picks are $85, $150, and $180.",
                  "Redeemable for every IV drip, injection, and add-on on the menu.",
                  "Ready fast — perfect for last-minute birthdays and thank-yous.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded-lg bg-background-alt px-4 py-3">
                  <span className="block text-xs text-foreground-muted">
                    First-Timer
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    ${PRICING.introOffer.price}
                  </span>
                </div>
                <div className="rounded-lg bg-secondary/10 px-4 py-3">
                  <span className="block text-xs text-foreground-muted">
                    Primary Drips
                  </span>
                  <span className="text-xl font-bold text-secondary">$150</span>
                </div>
                <div className="rounded-lg bg-primary/5 px-4 py-3">
                  <span className="block text-xs text-foreground-muted">
                    Specialty Drips
                  </span>
                  <span className="text-xl font-bold text-primary">$180</span>
                </div>
              </div>
              <p className="text-xs text-foreground-muted mt-6 leading-relaxed">
                Gift card amounts shown reflect current menu pricing and may be
                applied toward any service. IV therapy is not intended to
                diagnose, treat, cure, or prevent disease.
              </p>
            </div>

            <GiftCardForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Gift Card FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Everything You Need to Know
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl shadow-lg p-6 border border-border"
              >
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <p className="text-secondary-light font-semibold uppercase tracking-wide mb-3">
              The Gift of Wellness
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              The Best Gifts Are the Ones You&apos;d Want Yourself
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Give someone close to you the same great feeling you get
              improving your wellness with IV therapy at{" "}
              {SITE_CONFIG.name} in Jones Valley. Any amount, every experience
              on the menu, ready to gift today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#gift-form" className="btn-primary">
                Get a Gift Card
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-outline">
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
