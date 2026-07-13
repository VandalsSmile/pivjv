"use client";

import { useState } from "react";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { TurnstileWidget } from "@/components/turnstile-widget";
import { PRICING } from "@/lib/constants";

const PROMO_CODE = PRICING.introOffer.promoCode;

export function IntroOfferForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const result = await sendLead({
      formName: "Intro Offer Claim",
      name: formData.name,
      email: formData.email,
      turnstileToken: captchaToken,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Promo Code", value: PROMO_CODE },
        {
          label: "Offer",
          value: `$${PRICING.introOffer.price} First-Time Intro IV`,
        },
        { label: "Preferred Time", value: formData.preferredTime },
        { label: "Message", value: formData.message },
      ],
    });

    setIsSubmitting(false);

    if (!result.success) {
      setErrorMessage(
        result.error || "Something went wrong. Please try again or call us.",
      );
      return;
    }

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredTime: "",
      message: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-foreground text-center shadow-lg border border-border">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Offer Claimed!</h3>
        <p className="text-foreground-muted">
          Thanks — we received your request with code{" "}
          <span className="font-semibold text-foreground">{PROMO_CODE}</span>.
          Our team will reach out shortly to book your $
          {PRICING.introOffer.price} intro session.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 text-foreground shadow-lg border border-border">
      <div className="mb-6">
        <p className="text-secondary font-semibold uppercase tracking-wide text-xs mb-2">
          Required to lock in ${PRICING.introOffer.price}
        </p>
        <h3 className="text-xl font-bold mb-1">Claim Your Intro Offer</h3>
        <p className="text-sm text-foreground-muted">
          Submit this form with promo code{" "}
          <span className="font-semibold text-foreground">{PROMO_CODE}</span>{" "}
          to claim pricing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="intro-code"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Promo Code *
          </label>
          <input
            type="text"
            id="intro-code"
            readOnly
            value={PROMO_CODE}
            className="w-full px-4 py-3 border border-secondary/40 bg-secondary/5 rounded-lg font-mono font-semibold tracking-wide text-secondary outline-none"
            aria-describedby="intro-code-help"
          />
          <p id="intro-code-help" className="text-xs text-foreground-muted mt-1">
            This code is included automatically when you submit.
          </p>
        </div>

        <div>
          <label
            htmlFor="intro-name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="intro-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="intro-email"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="intro-email"
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
              htmlFor="intro-phone"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="intro-phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="(555) 555-5555"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="intro-time"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Preferred Time (optional)
          </label>
          <select
            id="intro-time"
            value={formData.preferredTime}
            onChange={(e) =>
              setFormData({ ...formData, preferredTime: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select a time window...</option>
            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
            <option value="Midday (12 PM - 3 PM)">Midday (12 PM - 3 PM)</option>
            <option value="Afternoon (3 PM - 6 PM)">
              Afternoon (3 PM - 6 PM)
            </option>
            <option value="Saturday (10 AM - 4 PM)">
              Saturday (10 AM - 4 PM)
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="intro-message"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Message (optional)
          </label>
          <textarea
            id="intro-message"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder="Anything we should know before your visit?"
          />
        </div>

        <TurnstileWidget
          onVerify={setCaptchaToken}
          onExpire={() => setCaptchaToken("")}
          onError={() => setCaptchaToken("")}
        />

        <button
          type="submit"
          disabled={isSubmitting || !captchaToken}
          className="btn-secondary w-full justify-center disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Claim ${PRICING.introOffer.price} Offer
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {errorMessage && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {errorMessage}
          </p>
        )}

        <p className="text-xs text-foreground-muted text-center">
          By submitting, you agree to be contacted about your intro offer
          booking. First-time clients only.
        </p>
      </form>
    </div>
  );
}
