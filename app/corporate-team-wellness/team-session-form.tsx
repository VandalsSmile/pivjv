"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { HoneypotField } from "@/components/honeypot-field";
import { OptInCheckboxes } from "@/components/opt-in-checkboxes";

const TEAM_SIZES = [
  "2 - 5 people",
  "6 - 10 people",
  "11 - 20 people",
  "21 - 40 people",
  "40+ people",
];

const TIMEFRAMES = [
  "As soon as possible",
  "Within the next month",
  "1 - 3 months out",
  "Just gathering info for now",
];

export function TeamSessionForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    teamSize: "",
    timeframe: "",
    message: "",
    website: "",
    textOptIn: true,
    emailOptIn: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    const result = await sendLead({
      formName: "Corporate & Team Wellness Sessions",
      name: formData.name,
      email: formData.email,
      honeypot: formData.website,
      notifySubject: "New team session inquiry from your website!",
      fields: [
        { label: "Name", value: formData.name },
        { label: "Company / Organization", value: formData.company },
        { label: "Work Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Team Size", value: formData.teamSize },
        { label: "Ideal Timing", value: formData.timeframe },
        { label: "Details", value: formData.message },
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

    router.push("/thank-you");
  };

  return (
    <div
      id="team-inquiry"
      className="bg-white rounded-2xl shadow-xl overflow-hidden text-foreground scroll-mt-24"
    >
      <div className="bg-secondary px-6 py-4 text-center text-white">
        <p className="font-bold">Host Your Team at Prime IV</p>
        <p className="text-white/90 text-sm">
          Tell us about your team and we&apos;ll build the morning around you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="team-name"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="team-name"
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
              htmlFor="team-company"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Company *
            </label>
            <input
              type="text"
              id="team-company"
              required
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Company or organization"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="team-email"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Work Email *
            </label>
            <input
              type="email"
              id="team-email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="team-phone"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="team-phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="(256) 555-5555"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="team-size"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Team Size *
            </label>
            <select
              id="team-size"
              required
              value={formData.teamSize}
              onChange={(e) =>
                setFormData({ ...formData, teamSize: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">How many people?</option>
              {TEAM_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="team-timeframe"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Ideal Timing
            </label>
            <select
              id="team-timeframe"
              value={formData.timeframe}
              onChange={(e) =>
                setFormData({ ...formData, timeframe: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select timing...</option>
              {TIMEFRAMES.map((frame) => (
                <option key={frame} value={frame}>
                  {frame}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="team-message"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Anything else we should know? (optional)
          </label>
          <textarea
            id="team-message"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder="Occasion, preferred day of the week, breakfast ideas, budget..."
          />
        </div>

        <OptInCheckboxes
          idPrefix="team"
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
          id="team-website"
          value={formData.website}
          onChange={(value) => setFormData({ ...formData, website: value })}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-secondary w-full justify-center disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Request Your Team Session
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-xs text-foreground-muted text-center">
          No obligation. We&apos;ll reach out with availability and a custom
          quote for your group.
        </p>

        {errorMessage && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
