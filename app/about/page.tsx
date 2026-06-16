import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Users,
  Heart,
  Award,
  Sparkles,
  Syringe,
  CalendarCheck,
  UserCheck,
} from "lucide-react";
import {
  CONTACT,
  WHY_PRIME_IV,
  TRUST_SIGNALS,
  BOOKING_LINKS,
} from "@/lib/constants";

import { ReviewsSection } from "@/components/sections/reviews-section";

export const metadata: Metadata = {
  title: "About Us | Prime IV Hydration & Wellness Huntsville, AL",
  description:
    "Meet Ann & John Van Steenburgh, the family behind Prime IV Jones Valley in Huntsville, AL. A locally owned wellness space built on care, connection, and preventive wellness.",
  keywords: [
    "about Prime IV",
    "IV therapy Huntsville",
    "Ann Van Steenburgh",
    "Jones Valley wellness",
    "family-owned IV therapy",
    "Prime IV team",
    "Huntsville Alabama",
  ],
  alternates: { canonical: "/about" },
};

const BOOKING_OPTIONS = [
  {
    title: "First Visit Offer",
    description: "Special pricing for new clients",
    href: BOOKING_LINKS.introOffer,
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Non-Member Booking",
    description: "Book a one-time IV therapy session",
    href: BOOKING_LINKS.nonMember,
    icon: CalendarCheck,
    featured: false,
  },
  {
    title: "Member Booking",
    description: "For active Prime IV members",
    href: BOOKING_LINKS.member,
    icon: UserCheck,
    featured: false,
  },
  {
    title: "Injection Appointment",
    description: "Quick vitamin & wellness shots",
    href: BOOKING_LINKS.injection,
    icon: Syringe,
    featured: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Care You Can Trust. Wellness You Can Feel.
            </h1>
            <p className="text-white/80 text-lg mb-8 text-pretty">
              From energy and hydration to recovery, immunity, and beauty—choose
              from our full range of IV drips and injections designed to help
              you feel better, faster.
            </p>
            <Link href="/book" className="btn-primary">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-border aspect-[4/3]">
                <Image
                  src="/images/ann-john-van-steenburgh.webp"
                  alt="Owners Ann and John Van Steenburgh outside the Prime IV Hydration & Wellness grand opening in Huntsville, AL"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Family-Owned</p>
                    <p className="text-sm text-foreground-muted">
                      Local business
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Community First</p>
                    <p className="text-sm text-foreground-muted">
                      Cared for like a neighbor
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">RN-Founded</p>
                    <p className="text-sm text-foreground-muted">
                      Led by a career nurse
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
                Family-Owned & Local
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Care Rooted in Experience, Community, and Preventive Wellness
              </h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Ann Van Steenburgh, RN, and her husband John are the heart
                  behind Prime IV Jones Valley—a locally owned wellness space
                  built on care, connection, and a genuine desire to help their
                  community feel better.
                </p>
                <p>
                  After years as a career nurse, Ann saw firsthand how often
                  people were treated only after they were already run down,
                  depleted, or unwell. She recognized an opportunity to do
                  something more proactive—something that could truly make a
                  difference in people&apos;s everyday lives. That vision led her
                  to transition from traditional bedside care into the world of
                  wellness, where she could help people stay energized, recover
                  faster, and take control of their health before issues arise.
                </p>
                <p>
                  John, a dedicated fitness enthusiast, experienced the benefits
                  of IV therapy firsthand through his own training and recovery.
                  Seeing how impactful it could be—not just for athletes, but for
                  everyday wellness—he knew this was something their community
                  needed more access to.
                </p>
                <p>
                  Together, Ann and John have created more than just a place for
                  IV therapy—they&apos;ve built a welcoming, community-focused
                  space where relationships matter, conversations are real, and
                  every guest is cared for like a neighbor. Their mission is
                  simple: bring meaningful, results-driven wellness services to
                  Jones Valley and help the people around them feel their best,
                  every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="bg-secondary text-white py-14 lg:py-16">
        <div className="container-custom mx-auto px-4">
          <p className="max-w-4xl mx-auto text-center text-2xl md:text-3xl font-bold leading-relaxed text-balance">
            Wellness shouldn&apos;t start when something goes wrong—it should be
            part of how you take care of yourself every day.
          </p>
        </div>
      </section>

      {/* Why Prime IV */}
      <section id="why-prime-iv" className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Prime IV in {CONTACT.address.city}?
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We&apos;re committed to providing the highest quality IV therapy
              treatments with a focus on safety, effectiveness, and your
              comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {WHY_PRIME_IV.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-medium text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Safe. Professional. Trusted.
              </h3>
              <p className="text-white/80">
                At Prime IV {CONTACT.address.city}, your health is our priority.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TRUST_SIGNALS.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/10 rounded-xl"
                >
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">{signal}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/70 mt-8">
              You&apos;re not just getting a drip—you&apos;re getting expert
              care.
            </p>
          </div>
        </div>
      </section>

      {/* Book Your Visit */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Book Your Visit
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Ready to feel your best? Choose the option that fits you and
              schedule your appointment online.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOOKING_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <a
                  key={option.title}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col rounded-2xl p-6 border transition-shadow hover:shadow-lg ${
                    option.featured
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground border-border"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      option.featured ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        option.featured ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                  <p
                    className={`text-sm mb-6 ${
                      option.featured ? "text-white/80" : "text-foreground-muted"
                    }`}
                  >
                    {option.description}
                  </p>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 font-semibold ${
                      option.featured ? "text-white" : "text-secondary"
                    }`}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />
    </>
  );
}
