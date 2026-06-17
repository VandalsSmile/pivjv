"use client";

import { useState } from "react";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { TurnstileWidget } from "@/components/turnstile-widget";

const ROLE_LABELS: Record<string, string> = {
  bride: "Bride - $125 (Special bridal rate)",
  "bridal-party": "Bridal Party Member - $140 each",
  "bridal-party-group": "Bridal Party Group Booking",
};

export function BridalForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    weddingDate: "",
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
      formName: "Bridal Glow Offer",
      name: formData.name,
      email: formData.email,
      turnstileToken: captchaToken,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Role", value: ROLE_LABELS[formData.role] || formData.role },
        { label: "Wedding / Event Date", value: formData.weddingDate },
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
      role: "",
      weddingDate: "",
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
          {"We'll be in touch within 24 hours to help you plan your bridal glow and lock in your special rate."}
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
            htmlFor="role"
            className="block text-sm font-medium text-foreground mb-1"
          >
            I&apos;m Booking As *
          </label>
          <select
            id="role"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select an option...</option>
            <option value="bride">Bride - $125 (Special bridal rate)</option>
            <option value="bridal-party">
              Bridal Party Member - $140 each
            </option>
            <option value="bridal-party-group">
              Bridal Party Group Booking
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="weddingDate"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Wedding / Event Date (optional)
          </label>
          <input
            type="date"
            id="weddingDate"
            value={formData.weddingDate}
            onChange={(e) =>
              setFormData({ ...formData, weddingDate: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
            placeholder="Tell us about your bridal party size, timeline, or beauty goals..."
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
              Claim My Bridal Discount
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
