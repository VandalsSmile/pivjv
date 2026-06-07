import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, ArrowRight, Car } from "lucide-react";
import { CONTACT, HOURS } from "@/lib/constants";
import { CtaSection } from "@/components/sections/cta-section";

const IMAGES = {
  storefront:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIV%2BOUTSIDE%2B-aGyuXgH9wn19gHbBMYHUzZckqI97vX.jpg",
};

export const metadata: Metadata = {
  title: "Our Location | Visit Prime IV in Huntsville, AL",
  description: `Find Prime IV Hydration & Wellness at ${CONTACT.address.full}. Get directions, hours, and parking info for our ${CONTACT.address.city}, AL IV therapy spa.`,
  keywords: [
    "Prime IV location",
    "IV therapy near me",
    "Huntsville IV spa",
    "Carl T Jones Drive",
    "directions",
    "IV therapy Huntsville AL",
  ],
};

const NEARBY_AREAS = [
  "Jones Valley",
  "Hampton Cove",
  "Madison",
  "Owens Cross Roads",
  "Big Cove",
  "Downtown Huntsville",
];

export default function OurLocationPage() {
  const mapQuery = encodeURIComponent(CONTACT.address.full);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Our Location
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Visit Us in {CONTACT.address.city}, AL
            </h1>
            <p className="text-white/80 text-lg">
              Conveniently located on Carl T. Jones Drive, our spa-like wellness
              center is easy to reach from across the Huntsville area.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Details */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
              <iframe
                title={`Map to Prime IV ${CONTACT.address.city}`}
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Details */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Prime IV Hydration & Wellness
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-foreground-muted">
                      {CONTACT.address.street}
                      <br />
                      {CONTACT.address.suite}
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
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <Link
                      href={`mailto:${CONTACT.email}`}
                      className="text-foreground-muted hover:text-primary transition-colors break-all"
                    >
                      {CONTACT.email}
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

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`https://maps.google.com/?q=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="btn-secondary"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storefront & Parking */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px]">
              <Image
                src={IMAGES.storefront}
                alt={`Prime IV Hydration & Wellness ${CONTACT.address.city} storefront`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                  Easy to Find
                </p>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
                Convenient Parking & Access
              </h2>
              <p className="text-foreground-muted mb-6">
                Our location offers ample free parking right outside the door,
                making your visit quick and stress-free. Step inside to a clean,
                comfortable, spa-like environment designed for relaxation.
              </p>
              <h3 className="font-semibold text-foreground mb-3">
                Proudly Serving:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {NEARBY_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-foreground-muted"
                  >
                    <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
