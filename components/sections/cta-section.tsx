"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Check, Loader2 } from "lucide-react";
import { CONTACT, PRICING } from "@/lib/constants";

export function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
              Book Your Session
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready to Feel Better?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Stop running on empty. Start performing at your best. Fill out the
              form and our team will contact you to schedule your first IV
              therapy session.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/specials" className="btn-primary">
                Book ${PRICING.introOffer.price} Intro IV
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`tel:${CONTACT.phoneClean}`}
                className="btn-outline text-white border-white hover:bg-white hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Link>
            </div>

            <p className="text-white/60 text-sm mb-6">
              *One-time state-mandated ${PRICING.medicalClearance} telehealth
              screening required at first visit.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-sm">Same-day appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-sm">No obligation</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-2xl p-8 text-foreground">
            <h3 className="text-xl font-bold mb-2">Request an Appointment</h3>
            <p className="text-foreground-muted mb-6">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Thank You!
                </h4>
                <p className="text-foreground-muted">
                  We&apos;ll be in touch within 24 hours to confirm your
                  appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your wellness goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-secondary w-full justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Appointment
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-foreground-muted text-center">
                  By submitting this form, you agree to be contacted about your
                  appointment request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
