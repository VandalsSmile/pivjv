"use client";

import { useState } from "react";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { TurnstileWidget } from "@/components/turnstile-widget";

const AMOUNT_LABELS: Record<string, string> = {
  "85": "$85 — Covers the VIP Intro Offer IV",
  "150": "$150 — Covers any Primary IV Drip",
  "180": "$180 — Covers any Specialty IV Drip",
  custom: "Custom Amount",
};

const OCCASION_LABELS: Record<string, string> = {
  birthday: "Birthday",
  "thank-you": "Thank You / Appreciation",
  anniversary: "Anniversary",
  holiday: "Holiday",
  "new-parent": "New Parent",
  recovery: "Recovery & Encouragement",
  "just-because": "Just Because",
};

export function GiftCardForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    occasion: "",
    recipientName: "",
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
      formName: "Gift Card Inquiry",
      name: formData.name,
      email: formData.email,
      turnstileToken: captchaToken,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Gift Amount",
          value: AMOUNT_LABELS[formData.amount] || formData.amount,
        },
        {
          label: "Occasion",
          value: OCCASION_LABELS[formData.occasion] || formData.occasion,
        },
        { label: "Recipient Name", value: formData.recipientName },
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
      amount: "",
      occasion: "",
      recipientName: "",
      message: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-foreground text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-foreground-muted">
          {
            "We'll reach out within 24 hours to finish your gift card and make sure it's ready to give."
          }
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
            htmlFor="amount"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Gift Amount *
          </label>
          <select
            id="amount"
            required
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select an amount...</option>
            <option value="85">$85 — Covers the VIP Intro Offer IV</option>
            <option value="150">$150 — Covers any Primary IV Drip</option>
            <option value="180">$180 — Covers any Specialty IV Drip</option>
            <option value="custom">Custom Amount</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="occasion"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Occasion (optional)
          </label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={(e) =>
              setFormData({ ...formData, occasion: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select an occasion...</option>
            <option value="birthday">Birthday</option>
            <option value="thank-you">Thank You / Appreciation</option>
            <option value="anniversary">Anniversary</option>
            <option value="holiday">Holiday</option>
            <option value="new-parent">New Parent</option>
            <option value="recovery">Recovery & Encouragement</option>
            <option value="just-because">Just Because</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="recipientName"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Who is it for? (optional)
          </label>
          <input
            type="text"
            id="recipientName"
            value={formData.recipientName}
            onChange={(e) =>
              setFormData({ ...formData, recipientName: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Recipient's name"
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
            placeholder="A custom amount, a gift message for the card, or questions about gifting..."
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
              Start My Gift Card
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
