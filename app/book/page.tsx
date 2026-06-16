import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, MapPin, Clock, CalendarCheck } from "lucide-react";
import { CONTACT, HOURS, PRICING } from "@/lib/constants";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Book an Appointment | Prime IV Hydration & Wellness Huntsville",
  description:
    "Schedule your IV therapy appointment at Prime IV Hydration & Wellness in Huntsville, AL. Request a time online or call us — same-day appointments often available.",
  keywords: [
    "book IV therapy",
    "schedule IV drip",
    "IV therapy appointment Huntsville",
    "Prime IV Huntsville booking",
    "IV hydration appointment AL",
  ],
};

const STEPS = [
  {
    title: "Tell us what you need",
    description:
      "Share your contact info, the service you're interested in, and your preferred day and time.",
  },
  {
    title: "We confirm your spot",
    description:
      "Our team reaches out within 24 hours to lock in your appointment — same-day visits are often available.",
  },
  {
    title: "Relax and recharge",
    description:
      "Arrive at our Huntsville lounge, complete a quick telehealth screening, and enjoy your drip in comfort.",
  },
];

const BENEFITS = [
  "Doctor-supervised, registered-nurse administered",
  "Comfortable massage-chair lounge",
  "Personalized drips for your goals",
  "Walk-ins welcome when availability allows",
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Book Your Visit
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Schedule Your IV Therapy Appointment
            </h1>
            <p className="text-lg text-foreground-muted text-pretty">
              Feel better, faster. Request your appointment online and our
              Huntsville team will confirm your time — or call us now to book
              instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href={`tel:${CONTACT.phoneClean}`} className="btn-primary">
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
              <Link href="#booking-form" className="btn-secondary">
                <CalendarCheck className="w-4 h-4" />
                Request Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">
              Booking Is Simple
            </h2>
            <p className="text-foreground-muted">
              Three easy steps from request to recharge.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border text-center"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
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

      {/* Booking form + details */}
      <section
        id="booking-form"
        className="section-padding bg-primary text-white scroll-mt-24"
      >
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Request Your Appointment
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Fill out the form and our team will contact you within 24 hours
                to confirm your visit. New to Prime IV? Ask about our $
                {PRICING.introOffer.price} VIP intro offer.
              </p>

              <ul className="space-y-3 mb-8">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-white/80 text-sm">
                      {CONTACT.address.full}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-white/80 text-sm">
                      Mon–Fri: {HOURS.weekdays}
                    </p>
                    <p className="text-white/80 text-sm">
                      Saturday: {HOURS.saturday}
                    </p>
                    <p className="text-white/80 text-sm">
                      Sunday: {HOURS.sunday}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Prefer to call?</p>
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="text-secondary hover:text-secondary-light font-semibold text-sm"
                    >
                      {CONTACT.phone}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
