import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, MessageCircle } from "lucide-react";
import {
  CONTACT,
  HOURS,
  PRICING,
  BOOKING_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { BookingForm } from "./booking-form";
import { TextToBookLink } from "@/components/text-to-book-link";

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
  openGraph: { url: "/book" },
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
        regularPrice: `regularly $${PRICING.introOffer.regularPrice}`,
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
        <div className="relative container-custom mx-auto px-4 md:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold tracking-wider text-sm mb-3">
              BOOK YOUR SESSION
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Schedule Your IV or Injection Therapy
            </h1>
            <p className="text-lg text-white/80 text-pretty">
              Upgrade your wellness with world-class IV and injection therapy
              right here in Huntsville. Book online below, call our team at{" "}
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="text-secondary hover:text-secondary-light font-semibold"
              >
                {CONTACT.phone}
              </Link>
              , or{" "}
              <TextToBookLink
                showIcon={false}
                className="text-secondary hover:text-secondary-light font-semibold"
              >
                text to book at {CONTACT.textToBook}
              </TextToBookLink>
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
              </Link>{" "}
              or{" "}
              <TextToBookLink
                showIcon={false}
                className="text-primary hover:text-primary-dark font-semibold"
              >
                text to book at {CONTACT.textToBook}
              </TextToBookLink>
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
              <TextToBookLink showNumber className="btn-secondary" />
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
                <TextToBookLink
                  showNumber
                  iconClassName="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="min-w-0">
                    <span className="block text-xs text-foreground-muted">
                      Text to book
                    </span>
                    <span className="font-semibold text-foreground break-words">
                      {CONTACT.textToBook}
                    </span>
                  </span>
                </TextToBookLink>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border sm:col-span-2">
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

      {/* Contact information */}
      <section
        id="contact"
        className="section-padding bg-background-alt scroll-mt-24"
      >
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-secondary font-semibold tracking-wider text-sm mb-2">
              CONTACT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Get in Touch
            </h2>
            <p className="text-foreground-muted">
              Ready to feel your best? Reach out to schedule your IV therapy
              appointment or ask any questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact details */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Visit Our {CONTACT.address.city} Location
              </h3>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Address
                    </h4>
                    <Link
                      href={CONTACT.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      {CONTACT.address.street}
                      <br />
                      {CONTACT.address.suite}
                      <br />
                      {CONTACT.address.city}, {CONTACT.address.state}{" "}
                      {CONTACT.address.zip}
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      {CONTACT.phone}
                    </Link>
                  </div>
                </div>

                {/* Text to book */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Text to book
                    </h4>
                    <TextToBookLink
                      showIcon={false}
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      {CONTACT.textToBook}
                    </TextToBookLink>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <Link
                      href={`mailto:${CONTACT.email}`}
                      className="text-foreground-muted hover:text-primary transition-colors break-words"
                    >
                      {CONTACT.email}
                    </Link>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <div className="text-foreground-muted text-sm space-y-1">
                      <p>Monday - Friday: {HOURS.weekdays}</p>
                      <p>Saturday: {HOURS.saturday}</p>
                      <p>Sunday: {HOURS.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <Link
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl p-4 border border-border flex items-center justify-center min-h-64">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                <p className="text-foreground-muted">
                  <Link
                    href={CONTACT.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View on Google Maps
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
