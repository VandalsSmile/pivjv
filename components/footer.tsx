import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT, LOGO_URL, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { TextToBookLink } from "@/components/text-to-book-link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Got questions?</h3>
            <div className="space-y-3">
              <p className="text-white/70 text-sm">Email address</p>
              <Link
                href={`mailto:${CONTACT.email}`}
                className="block text-secondary hover:text-secondary-light transition-colors"
              >
                {CONTACT.email}
              </Link>
              <p className="text-white/70 text-sm mt-4">Phone</p>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="block text-white hover:text-secondary transition-colors font-medium"
              >
                {CONTACT.phone}
              </Link>
              <p className="text-white/70 text-sm mt-4">Text to book</p>
              <TextToBookLink
                showIcon={false}
                className="block text-white hover:text-secondary transition-colors font-medium"
              >
                {CONTACT.textToBook}
              </TextToBookLink>
            </div>

            <div className="mt-6">
              <p className="text-white/70 text-sm mb-3">Follow Us</p>
              <div className="flex gap-4">
                <Link
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="w-6 h-6"
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
                  className="text-white hover:text-secondary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Logo & Book */}
          <div className="flex flex-col items-start">
            <Image
              src={LOGO_URL}
              alt={SITE_CONFIG.name}
              width={180}
              height={60}
              className="h-12 w-auto mb-6"
            />
            <Link href="/book" className="btn-primary">
              Book Now
            </Link>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-full bg-white p-1.5 flex-shrink-0 shadow-sm">
                <Image
                  src="/images/hsa-fsa-eligible.png"
                  alt="HSA and FSA eligible payment badge"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <span className="text-sm text-white/70">
                HSA/FSA Eligible
              </span>
            </div>
          </div>

          {/* Find Our Spa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Our Spa</h3>
            <Link
              href={CONTACT.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-white/90 hover:text-secondary transition-colors"
            >
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>
                {CONTACT.address.street}
                <br />
                {CONTACT.address.suite}
                <br />
                {CONTACT.address.city}, {CONTACT.address.state}{" "}
                {CONTACT.address.zip}
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/iv-therapy"
                className="block text-white/90 hover:text-secondary transition-colors"
              >
                IV Therapies
              </Link>
              <Link
                href="/specials"
                className="block text-white/90 hover:text-secondary transition-colors"
              >
                Specials
              </Link>
              <Link
                href="/memberships"
                className="block text-white/90 hover:text-secondary transition-colors"
              >
                Memberships
              </Link>
              <Link
                href="/about"
                className="block text-white/90 hover:text-secondary transition-colors"
              >
                Why Prime IV
              </Link>
              <Link
                href="/faq"
                className="block text-white/90 hover:text-secondary transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block text-white/90 hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-white/60 text-sm">
              &copy; {currentYear} Prime IV {CONTACT.address.city}. All rights
              reserved.
            </p>
            <Link
              href="/privacy"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="mt-4 text-center text-white/60 text-sm">
            Digital Marketing by https://www.govsmarketing.com
          </p>
          <p className="mt-4 text-center text-white/40 text-xs leading-relaxed">
            The therapies provided have not been evaluated by the Food and Drug
            Administration. These compounded products are custom formulations
            prepared by Prime IV Hydration & Wellness and are not intended to
            diagnose, treat, cure, or prevent any disease. The content on this
            website is for informational purposes only and should not be
            considered medical advice. It is not a substitute for professional
            medical diagnosis, treatment, or care. Any designations or
            references to therapies are for marketing purposes only and do not
            imply FDA approval or clinical efficacy. Always consult a licensed
            healthcare provider before starting any therapy program to ensure it
            is appropriate for your individual health needs. If you have any
            medical concerns or conditions, seek the advice of your physician or
            other qualified healthcare professional. Individual results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
