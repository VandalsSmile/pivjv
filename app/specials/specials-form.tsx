"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { sendLead } from "@/app/actions/send-lead";
import { HoneypotField } from "@/components/honeypot-field";
import {
  LEAD_GUARD_UNAVAILABLE_MESSAGE,
  useLeadGuard,
} from "@/components/use-lead-guard";
import { OptInCheckboxes } from "@/components/opt-in-checkboxes";
import { beginLeadSubmit, completeLeadSubmit } from "@/lib/tracking";

const SPECIAL_LABELS: Record<string, string> = {
  intro: `$${PRICING.introOffer.price} VIP Intro Offer (New Clients)`,
  "summer-slim": "The Summer Slim - $105 (Beauty & Aging)",
  "travel-defense": "The Travel Defense - $200 (Health & Wellness)",
};

export function SpecialsForm() {
  const router = useRouter();
  const leadGuard = useLeadGuard("specials-company");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    special: "",
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
      formName: "Specials",
      name: formData.name,
      email: formData.email,
      officeExtension: guard.officeExtension,
      formToken: guard.formToken,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Special",
          value: SPECIAL_LABELS[formData.special] || formData.special,
        },
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

    completeLeadSubmit("Specials", {
      filtered: result.filtered,
      honeypot: guard.officeExtension,
    });
    router.push("/thank-you");
  };

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

        <OptInCheckboxes
          idPrefix="specials"
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
          id="specials-company"
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
