"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { HoneypotField } from "@/components/honeypot-field";
import {
  LEAD_GUARD_UNAVAILABLE_MESSAGE,
  useLeadGuard,
} from "@/components/use-lead-guard";
import { OptInCheckboxes } from "@/components/opt-in-checkboxes";
import { beginLeadSubmit, completeLeadSubmit } from "@/lib/tracking";

export function ContactForm() {
  const router = useRouter();
  const leadGuard = useLeadGuard("contact-company");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    textOptIn: true,
    emailOptIn: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");
    beginLeadSubmit();

    const guard = await leadGuard.readSubmissionGuard();
    if (!guard) {
      setIsSubmitting(false);
      setErrorMessage(LEAD_GUARD_UNAVAILABLE_MESSAGE);
      return;
    }

    const result = await sendLead({
      formName: "Contact",
      name: formData.name,
      email: formData.email,
      officeExtension: guard.officeExtension,
      formToken: guard.formToken,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Message", value: formData.message },
        { label: "Text Opt-In", value: formData.textOptIn ? "Yes" : "No" },
        { label: "Email Opt-In", value: formData.emailOptIn ? "Yes" : "No" },
      ],
    });

    if (!result.success) {
      setIsSubmitting(false);
      setErrorMessage(
        result.error || "Something went wrong. Please try again or call us.",
      );
      return;
    }

    completeLeadSubmit("Contact", {
      filtered: result.filtered,
      honeypot: guard.officeExtension,
    });
    router.push("/thank-you");
  };

  return (
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
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your wellness goals or any questions you have..."
        />
      </div>

      <OptInCheckboxes
        idPrefix="contact"
        textOptIn={formData.textOptIn}
        emailOptIn={formData.emailOptIn}
        onTextChange={(checked) =>
          setFormData({ ...formData, textOptIn: checked })
        }
        onEmailChange={(checked) =>
          setFormData({ ...formData, emailOptIn: checked })
        }
      />

      <HoneypotField
        id="contact-company"
        value={leadGuard.officeExtension}
        onChange={leadGuard.setOfficeExtension}
      />

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

      {errorMessage && (
        <p className="text-sm text-red-600 text-center" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="text-xs text-foreground-muted text-center">
        By submitting this form, you agree to be contacted about your
        appointment request.
      </p>
    </form>
  );
}
