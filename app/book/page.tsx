import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, ArrowRight, Star } from "lucide-react";
import { CONTACT, HOURS, PRICING, BOOKING_LINKS } from "@/lib/constants";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Book IV Therapy Huntsville AL | Schedule Your Hydration Drip",
  description:
    "Schedule your IV or injection therapy at Prime IV Hydration & Wellness in Huntsville, AL. Book the $85 first-time intro offer, non-member, member, or injection appointments online — or call (256) 692-6347.",
  keywords: [
    "book IV therapy Huntsville",
    "schedule IV drip",
    "IV therapy appointment Huntsville",
    "Prime IV Huntsville booking",
    "$85 intro offer IV",
  ],
  alternates: { canonical: "/book" },
};

type Service = {
  name: string;
  price?: string;
  regularPrice?: string;
  duration: string;
  description: string;
  href: string;
  featured?: boolean;
};

const SERVICE_GROUPS: {
  heading: string;
  blurb: string;
  services: Service[];
}[] = [
  {
    heading: "Intro Offer",
    blurb: "New to Prime IV? Start here.",
    services: [
      {
        name: "First-Time Client Intro Offer",
        price: `$${PRICING.introOffer.price}`,
        regularPrice: "regularly $120",
        duration: "60–90 min",
        description:
          "Is this your first time? Take advantage now and save. Choose from over a dozen Tier 1 IVs and enjoy the full VIP experience — including our zero-gravity massage chair. Same-day treatment available after your consult.",
        href: BOOKING_LINKS.introOffer,
        featured: true,
      },
    ],
  },
  {
    heading: "IV Therapy",
    blurb: "Customized infusions for energy, immunity, recovery, and more.",
    services: [
      {
        name: "Non-Member Appointment",
        duration: "60–90 min",
        description:
          "Don't have a membership, but you've already used your initial discounted VIP session and are looking to come back in? Our specialists help you choose the ideal drip. Pricing varies by the treatment chosen at the spa.",
        href: BOOKING_LINKS.nonMember,
      },
      {
        name: "Member Appointment",
        duration: "60 min",
        description:
          "Are you a returning member looking to book? Schedule below to use your membership for a personalized treatment built around your custom care plan. Pricing varies by the treatment chosen at the spa.",
        href: BOOKING_LINKS.member,
      },
      {
        name: "Injection Therapy Appointment",
        duration: "20 min",
        description:
          "Boost your energy, metabolism, and overall wellness in just minutes with a targeted vitamin injection. Quick and convenient so you can get back to your busy day. Pricing varies by the injection chosen at the spa.",
        href: BOOKING_LINKS.injection,
      },
    ],
  },
  {
    heading: "Medical Weight Loss",
    blurb: "Flexible weekly options built to fit your lifestyle.",
    services: [
      {
        name: "Weight Management Inquiry",
        price: "Free call",
        duration: "15 min",
        description:
          "Looking for Medical Weight Loss options? Explore flexible weekly programs designed to support your goals with simple, consistent routines. Call us and our team will help you find the right starting point.",
        href: `tel:${CONTACT.phoneClean}`,
      },
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const isExternal = service.href.startsWith("http");
  return (
    <Link
      href={service.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
        service.featured ? "border-primary" : "border-border"
      }`}
    >
      {service.featured && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          <Star className="w-3 h-3 fill-current" />
          Most Popular
        </span>
      )}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h4 className="text-lg font-bold text-foreground text-balance">
          {service.name}
        </h4>
        {service.price && (
          <span className="flex-shrink-0 text-xl font-bold text-primary">
            {service.price}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 text-sm text-foreground-muted mb-3">
        <Clock className="w-4 h-4" />
        <span>{service.duration}</span>
        {service.regularPrice && (
          <span className="text-foreground-muted/80 line-through">
            {service.regularPrice}
          </span>
        )}
      </div>
      <p className="text-sm text-foreground-muted mb-4 flex-1">
        {service.description}
      </p>
      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
        Book now
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Book", path: "/book" }])} />
      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        {/* Hero background image */}
        <Image
          src="/images/book-background.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover opacity-40"
          sizes="100vw"
        />
        {/* Navy overlay for text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-primary/70"
        />
        <div className="relative container-custom mx-auto py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold tracking-wider text-sm mb-3">
              BOOK YOUR SESSION
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Schedule Your IV or Injection Therapy
            </h1>
            <p className="text-lg text-white/80 text-pretty">
              Upgrade your wellness with world-class IV and injection therapy
              right here in Huntsville. Book online below or call our team at{" "}
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="text-secondary hover:text-secondary-light font-semibold"
              >
                {CONTACT.phone}
              </Link>
              . Walk-ins and same-day appointments are always welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Online booking — choose your service */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-semibold tracking-wider text-sm mb-2">
              ONLINE BOOKING
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Choose Your Service
            </h2>
            <p className="text-foreground-muted">
              Select a service below to book securely in just a few taps. Prefer
              to talk first? Call our Huntsville team at{" "}
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="text-primary hover:text-primary-dark font-semibold"
              >
                {CONTACT.phone}
              </Link>
              .
            </p>
          </div>

          <div className="space-y-12">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.heading}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6 pb-3 border-b border-border">
                  <h3 className="text-2xl font-bold text-foreground">
                    {group.heading}
                  </h3>
                  <p className="text-foreground-muted text-sm">{group.blurb}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.services.map((service) => (
                    <ServiceCard key={service.name} service={service} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Membership / group call-out */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-border text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-2 text-balance">
              Want to save on every visit?
            </h3>
            <p className="text-foreground-muted mb-6">
              A Prime IV membership makes it easy to stay consistent with your
              health while saving money each month — lower treatment costs plus
              exclusive discounts on additional services. Booking for a couple
              or group? Call the spa directly so we can accommodate you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/memberships" className="btn-primary">
                Get a Membership &amp; Save
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-secondary"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to feel better — form + details */}
      <section
        id="booking-form"
        className="section-padding bg-background scroll-mt-24"
      >
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-semibold tracking-wider text-sm mb-2">
              BOOK YOUR SESSION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Ready to Feel Better?
            </h2>
            <p className="text-foreground-muted">
              Stop running on empty. Fill out the form and our team will contact
              you to schedule your IV therapy session in Huntsville, AL.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-border aspect-[4/5]">
                <Image
                  src="/images/prime-iv-team.png"
                  alt="The Prime IV Hydration & Wellness team in the Huntsville, AL clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="min-w-0">
                    <span className="block text-xs text-foreground-muted">
                      Call us
                    </span>
                    <span className="font-semibold text-foreground break-words">
                      {CONTACT.phone}
                    </span>
                  </span>
                </Link>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="min-w-0">
                    <span className="block text-xs text-foreground-muted">
                      Visit us
                    </span>
                    <span className="font-semibold text-foreground text-sm break-words">
                      {CONTACT.address.full}
                    </span>
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Location Hours
                </h3>
                <dl className="divide-y divide-border text-sm">
                  <div className="flex justify-between py-2">
                    <dt className="text-foreground-muted">Monday – Friday</dt>
                    <dd className="font-medium text-foreground">
                      {HOURS.weekdays}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-foreground-muted">Saturday</dt>
                    <dd className="font-medium text-foreground">
                      {HOURS.saturday}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-foreground-muted">Sunday</dt>
                    <dd className="font-medium text-foreground">
                      {HOURS.sunday}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-border">
                <Image
                  src="/images/hsa-fsa-eligible.png"
                  alt="HSA and FSA eligible payment badge"
                  width={72}
                  height={72}
                  className="w-16 h-16 flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-bold text-foreground">HSA/FSA Eligible</p>
                  <p className="text-sm text-foreground-muted">
                    Use your pre-tax health dollars. We provide documentation
                    for your records on request.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Request an Appointment
              </h3>
              <p className="text-foreground-muted mb-6">
                Fill out the form below and we&apos;ll get back to you within 24
                hours. New to Prime IV? Ask about our ${PRICING.introOffer.price}{" "}
                VIP intro offer.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
