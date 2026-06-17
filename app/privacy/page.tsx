import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy | How We Protect Your Data",
  description: `Learn how Prime IV Hydration & Wellness in ${CONTACT.address.city}, AL collects, uses, and protects information gathered through our website and online services.`,
  keywords: [
    "privacy policy",
    "Prime IV privacy",
    "data protection",
    "Huntsville AL",
  ],
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "March 19, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              How We Protect Your Data
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Privacy Policy
            </h1>
            <p className="text-white/80 text-lg">
              {SITE_CONFIG.name} &ndash; {CONTACT.address.city}, AL
            </p>
            <p className="text-white/60 text-sm mt-3">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Introduction
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  This Privacy Policy explains how {SITE_CONFIG.name} &ndash;{" "}
                  {CONTACT.address.city} (&ldquo;Prime IV,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and
                  protects information gathered through our website and online
                  services. It also outlines your choices and our overall
                  privacy practices.
                </p>
                <p>
                  This policy applies only to information collected online
                  through our website and digital platforms, including those
                  operated by our affiliates and related entities, unless
                  otherwise stated. Please review this policy carefully.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Personal Information
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  &ldquo;Personal Information&rdquo; refers to any information
                  that can be used to identify you as an individual. This may
                  include your name, address, email address, phone number, or
                  other contact details.
                </p>
                <p>
                  You can browse our website without providing Personal
                  Information. However, we may collect Personal Information when
                  you voluntarily provide it, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete a contact or registration form</li>
                  <li>Book an appointment</li>
                  <li>Apply for a job</li>
                  <li>Sign up for emails, promotions, or updates</li>
                </ul>
                <p>
                  If you choose not to provide requested information, you may
                  still use our website, but some features or services may be
                  unavailable.
                </p>
                <p>
                  We may also receive information about you from other sources
                  and combine it with the information you provide. Any combined
                  data will be treated in accordance with this Privacy Policy.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Cookies &amp; Tracking Technologies
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  Our website may use cookies, web beacons, and similar
                  technologies to enhance your experience and collect usage
                  data.
                </p>
                <p>
                  Cookies are small text files stored on your device that help
                  us understand website activity and remember preferences. Web
                  beacons are small images used to track engagement, such as
                  email opens or page visits.
                </p>
                <p>We may collect information such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                </ul>
                <p>
                  This data helps us improve website performance and user
                  experience. In some cases, we may associate this information
                  with Personal Information you provide. You can adjust your
                  browser settings to block or notify you about cookies. Please
                  note that disabling cookies may impact certain features of our
                  website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>We may use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to inquiries and customer service requests</li>
                  <li>Process bookings or service requests</li>
                  <li>Send marketing communications (only if you opt in)</li>
                  <li>Improve our website, services, and marketing efforts</li>
                  <li>Personalize your experience based on your preferences</li>
                </ul>
                <p>
                  We may also use aggregated, non-identifiable data for
                  analytics and business insights. If you have an existing
                  relationship with us (such as a client or partner), we may use
                  your information to communicate with you regarding that
                  relationship.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Information Sharing &amp; Disclosure
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  We respect your privacy and limit how your information is
                  shared. We may disclose information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To comply with legal obligations or law enforcement requests
                  </li>
                  <li>
                    To enforce our policies or protect our rights, users, or
                    business
                  </li>
                  <li>
                    In connection with a business transfer (such as a merger or
                    acquisition)
                  </li>
                </ul>
                <p>Important:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We do not share mobile information with third parties for
                    marketing or promotional purposes.
                  </li>
                  <li>
                    Information may be shared with service providers (such as
                    customer support or scheduling platforms) solely to support
                    our operations.
                  </li>
                  <li>
                    Text messaging opt-in data and consent will never be shared
                    with third parties.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Third-Party Websites
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Our website may contain links to third-party websites. These
                sites operate independently and have their own privacy policies.
                Prime IV {CONTACT.address.city} is not responsible for their
                content or privacy practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Data Transfers
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Our website is operated in the United States. If you access our
                site from outside the U.S., your information may be transferred
                and processed in the United States, where privacy laws may
                differ from those in your location. By using our site, you
                consent to this transfer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Policy Updates
              </h2>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  By using our website, you agree to the terms of this Privacy
                  Policy. We may update this policy from time to time. Any
                  changes will be posted on this page. Continued use of our
                  website after updates means you accept the revised policy.
                </p>
                <p>
                  We will always use your Personal Information in accordance with
                  the policy in effect at the time it was collected, unless you
                  consent to changes.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <div className="bg-background-alt rounded-xl p-6 space-y-4">
                <p className="font-semibold text-foreground">
                  {SITE_CONFIG.name} &ndash; {CONTACT.address.city}
                </p>
                <Link
                  href={CONTACT.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-foreground-muted hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span>
                    {CONTACT.address.street}, {CONTACT.address.suite}
                    <br />
                    {CONTACT.address.city}, {CONTACT.address.state}{" "}
                    {CONTACT.address.zip}
                  </span>
                </Link>
                <Link
                  href={`tel:${CONTACT.phoneClean}`}
                  className="flex items-center gap-3 text-foreground-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                  {CONTACT.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Questions About IV Therapy?
            </h2>
            <p className="text-white/80 mb-8">
              Our team is here to help. Reach out anytime or book your first
              appointment today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/specials" className="btn-outline">
                View Specials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
