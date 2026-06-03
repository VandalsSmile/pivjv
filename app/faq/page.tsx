import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT, FAQS } from "@/lib/constants";
import { FaqAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | IV Therapy FAQ",
  description: `Get answers to common questions about IV therapy at Prime IV ${CONTACT.address.city}. Learn about treatments, benefits, safety, and what to expect during your visit.`,
  keywords: [
    "IV therapy FAQ",
    "IV drip questions",
    "is IV therapy safe",
    "how often IV therapy",
    "IV therapy benefits",
    "Huntsville AL",
  ],
};

export default function FaqPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              FAQ
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Get quick answers to common questions about IV therapy at Prime IV{" "}
              {CONTACT.address.city}. Can&apos;t find what you&apos;re looking
              for? Contact us directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-primary"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={FAQS} />

            {/* Additional Questions */}
            <div className="mt-12 space-y-8">
              <div className="bg-background-alt rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  What should I expect during my first visit?
                </h3>
                <p className="text-foreground-muted">
                  During your first visit, you&apos;ll complete a brief health
                  questionnaire and have a consultation with our wellness team.
                  We&apos;ll discuss your goals, recommend the best treatment
                  for you, and answer any questions. The IV infusion typically
                  takes 30-60 minutes, during which you can relax in our
                  comfortable zero-gravity massage chairs.
                </p>
              </div>

              <div className="bg-background-alt rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Is IV therapy safe?
                </h3>
                <p className="text-foreground-muted">
                  Yes, IV therapy is very safe when administered by licensed
                  healthcare professionals. At Prime IV {CONTACT.address.city},
                  all treatments are performed by trained medical staff using
                  medical-grade ingredients and sterile equipment. We conduct a
                  health screening before your first treatment to ensure IV
                  therapy is appropriate for you.
                </p>
              </div>

              <div className="bg-background-alt rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  What are the benefits of IV therapy over oral supplements?
                </h3>
                <p className="text-foreground-muted">
                  IV therapy delivers nutrients directly into your bloodstream,
                  bypassing the digestive system. This means your body can
                  absorb up to 100% of the vitamins and minerals, compared to
                  just 20-50% with oral supplements. You&apos;ll also feel the
                  effects faster, often during or immediately after treatment.
                </p>
              </div>

              <div className="bg-background-alt rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Can I use my HSA/FSA for IV therapy?
                </h3>
                <p className="text-foreground-muted">
                  Yes! IV therapy treatments at Prime IV are typically eligible
                  for HSA (Health Savings Account) and FSA (Flexible Spending
                  Account) payment. We accept these payment methods and can
                  provide any necessary documentation for your records.
                </p>
              </div>

              <div className="bg-background-alt rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Do you offer same-day appointments?
                </h3>
                <p className="text-foreground-muted">
                  Yes, we offer same-day appointments based on availability.
                  Call us at {CONTACT.phone} to check current availability, or
                  book online. We recommend booking in advance for the best
                  selection of times, especially for weekends.
                </p>
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
              Still Have Questions?
            </h2>
            <p className="text-white/80 mb-8">
              Our team is here to help. Contact us directly and we&apos;ll be
              happy to answer any questions about IV therapy or our services.
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
