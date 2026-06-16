"use client";

import { useState } from "react";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { sendLead } from "@/app/actions/send-lead";
import { TurnstileWidget } from "@/components/turnstile-widget";

const SPECIAL_LABELS: Record<string, string> = {
  intro: `$${PRICING.introOffer.price} VIP Intro Offer (New Clients)`,
  "summer-slim": "The Summer Slim - $105 (Beauty & Aging)",
  "travel-defense": "The Travel Defense - $200 (Health & Wellness)",
};

export function SpecialsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    special: "",
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
      formName: "Specials",
      name: formData.name,
      email: formData.email,
      turnstileToken: captchaToken,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Special",
          value: SPECIAL_LABELS[formData.special] || formData.special,
        },
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
    setFormData({ name: "", email: "", phone: "", special: "", message: "" });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-foreground text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-foreground-muted">
          {"We'll be in touch within 24 hours to confirm your appointment and apply your special offer."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 text-foreground">
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email *
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
            Phone *
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
            htmlFor="special"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Which Special? *
          </label>
          <select
            id="special"
            required
            value={formData.special}
            onChange={(e) =>
              setFormData({ ...formData, special: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select a special...</option>
            <option value="intro">
              ${PRICING.introOffer.price} VIP Intro Offer (New Clients)
            </option>
            <option value="summer-slim">
              The Summer Slim - $105 (Beauty & Aging)
            </option>
            <option value="travel-defense">
              The Travel Defense - $200 (Health & Wellness)
            </option>
          </select>
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
            placeholder="Any questions or preferred appointment times..."
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
              Claim My Special
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {errorMessage && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
