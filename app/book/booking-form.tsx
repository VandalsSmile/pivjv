"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { TurnstileWidget } from "@/components/turnstile-widget";

const SERVICE_OPTIONS = [
  "$85 VIP Intro IV (New Clients)",
  "Myers' Cocktail",
  "Immunity / Wellness Drip",
  "Hydration / Recovery Drip",
  "Beauty / Anti-Aging Drip",
  "Energy / Performance Drip",
  "NAD+ / Niagen",
  "Medical Weight Loss",
  "Vitamin Injection / Add-On",
  "Not sure yet — help me choose",
];

const TIME_OPTIONS = [
  "Morning (9 AM - 12 PM)",
  "Midday (12 PM - 3 PM)",
  "Afternoon (3 PM - 6 PM)",
  "Saturday (10 AM - 4 PM)",
];

export function BookingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      formName: "Book an Appointment",
      name: formData.name,
      email: formData.email,
      turnstileToken: captchaToken,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Service of Interest", value: formData.service },
        { label: "Preferred Date", value: formData.date },
        { label: "Preferred Time", value: formData.time },
        { label: "Message", value: formData.message },
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
    <div className="bg-white rounded-2xl p-8 text-foreground shadow-lg">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Service of Interest *
          </label>
          <select
            id="service"
            required
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Preferred Time
            </label>
            <select
              id="time"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select a time...</option>
              {TIME_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Anything else? (optional)
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder="Health goals, questions, or scheduling notes..."
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
          className="btn-primary w-full justify-center disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Request My Appointment
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
          A one-time state-mandated $25 telehealth screening is required at your
          first visit.
        </p>
      </form>
    </div>
  );
}
