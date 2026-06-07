import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, MapPin, Clock } from "lucide-react";
import { CONTACT, HOURS, PRICING } from "@/lib/constants";
import { ContactForm } from "../contact/contact-form";

export const metadata: Metadata = {
  title: "Book an Appointment | Schedule Your IV Therapy",
  description: `Book your IV therapy appointment at Prime IV Hydration & Wellness in ${CONTACT.address.city}, AL. Same-day appointments often available. Call ${CONTACT.phone} or book online.`,
  keywords: [
    "book IV therapy",
    "schedule IV drip",
    "IV appointment",
    "same day IV",
    "Huntsville AL",
    "Prime IV booking",
  ],
};

const STEPS = [
  {
    number: "1",
    title: "Request Your Appointment",
    description:
      "Fill out the form or give us a call. Let us know your preferred date, time, and goals.",
  },
  {
    number: "2",
    title: "Quick Consultation",
    description:
      "Our wellness team confirms your booking and helps you choose the perfect IV therapy.",
  },
  {
    number: "3",
    title: "Relax & Recharge",
    description:
      "Settle into a zero-gravity massage chair while a licensed professional administers your treatment.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Book Now
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Book Your IV Therapy Appointment
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Ready to feel better, faster? Schedule your visit today. New
              clients can claim our ${PRICING.introOffer.price} VIP IV intro
              offer. Same-day appointments are often available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#book-form" className="btn-secondary">
                Book Online
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-outline"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Booking Is Easy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-form" className="section-padding bg-background-alt scroll-mt-32">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
                Request Your Appointment
              </h2>
              <p className="text-foreground-muted mb-8">
                Fill out the form and our team will reach out within 24 hours to
                confirm your appointment. Prefer to talk? Give us a call—we&apos;d
                love to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Location
                    </h3>
                    <p className="text-foreground-muted text-sm">
                      {CONTACT.address.street}, {CONTACT.address.suite}
                      <br />
                      {CONTACT.address.city}, {CONTACT.address.state}{" "}
                      {CONTACT.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      {CONTACT.phone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <div className="text-foreground-muted text-sm space-y-1">
                      <p>Monday - Friday: {HOURS.weekdays}</p>
                      <p>Saturday: {HOURS.saturday}</p>
                      <p>Sunday: {HOURS.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">New Client Special</span>
                </div>
                <p className="text-white/80 text-sm">
                  Claim your first VIP IV for just ${PRICING.introOffer.price}{" "}
                  (regular ${PRICING.introOffer.regularPrice}). Mention it when
                  you book!
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-border h-fit">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Appointment Request
              </h3>
              <p className="text-foreground-muted mb-6">
                We&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
