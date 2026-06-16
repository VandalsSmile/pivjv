import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { CONTACT, HOURS, SOCIAL_LINKS } from "@/lib/constants";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Book Your IV Therapy Appointment",
  description: `Contact Prime IV Hydration & Wellness in ${CONTACT.address.city}, AL. Call ${CONTACT.phone}, email us, or fill out our form to schedule your IV therapy appointment.`,
  keywords: [
    "contact Prime IV",
    "IV therapy appointment",
    "book IV drip",
    "Huntsville AL",
    "Prime IV phone",
    "Prime IV location",
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 lg:py-24 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/contact-waiting-area.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover"
          sizes="100vw"
        />
        {/* Navy overlay for text contrast */}
        <div aria-hidden="true" className="absolute inset-0 bg-primary/80" />
        <div className="relative container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Ready to feel your best? Contact us to schedule your IV therapy
              appointment or ask any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Visit Our {CONTACT.address.city} Location
              </h2>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Address
                    </h3>
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
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <Link
                      href={`tel:${CONTACT.phoneClean}`}
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      {CONTACT.phone}
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <Link
                      href={`mailto:${CONTACT.email}`}
                      className="text-foreground-muted hover:text-primary transition-colors"
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
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <div className="text-foreground-muted text-sm space-y-1">
                      <p>Monday - Friday: {HOURS.weekdays}</p>
                      <p>Saturday: {HOURS.saturday}</p>
                      <p>Sunday: {HOURS.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">
                  Follow Us
                </h3>
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

              {/* Map Placeholder */}
              <div className="bg-background-alt rounded-xl p-4 h-64 flex items-center justify-center">
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

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Request an Appointment
                </h2>
                <p className="text-foreground-muted mb-6">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80">
              Explore our services and book your first appointment today.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/specials"
              className="bg-white/10 hover:bg-white/20 rounded-xl p-6 text-center transition-colors"
            >
              <h3 className="font-semibold mb-2">View Specials</h3>
              <p className="text-white/70 text-sm">
                Check out our current offers
              </p>
            </Link>
            <Link
              href="/iv-therapy"
              className="bg-white/10 hover:bg-white/20 rounded-xl p-6 text-center transition-colors"
            >
              <h3 className="font-semibold mb-2">Our Treatments</h3>
              <p className="text-white/70 text-sm">
                Explore IV therapy options
              </p>
            </Link>
            <Link
              href="/memberships"
              className="bg-white/10 hover:bg-white/20 rounded-xl p-6 text-center transition-colors"
            >
              <h3 className="font-semibold mb-2">Memberships</h3>
              <p className="text-white/70 text-sm">Save with monthly plans</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
