"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, Phone } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { TurnstileWidget } from "@/components/turnstile-widget";
import { CONTACT, PRICING } from "@/lib/constants";

const EXPECTED_CODE = PRICING.introOffer.promoCode;
const NOTIFY_SUBJECT = "New Intro Offer Claim from Your Website";

type IntroOfferFormProps = {
  /** Compact layout for the hero card. */
  variant?: "default" | "hero";
};

export function IntroOfferForm({ variant = "default" }: IntroOfferFormProps) {
  const isHero = variant === "hero";
  const router = useRouter();
  const [formData, setFormData] = useState({
    promoCode: EXPECTED_CODE,
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const enteredCode = formData.promoCode.trim().toUpperCase();
    if (enteredCode !== EXPECTED_CODE) {
      setErrorMessage(
        `Please enter the correct promo code: ${EXPECTED_CODE}`,
      );
      return;
    }

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
      notifySubject: NOTIFY_SUBJECT,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Promo Code", value: enteredCode },
        {
          label: "Offer",
          value: `$${PRICING.introOffer.price} First-Time Intro IV`,
        },
        { label: "Preferred Time", value: formData.preferredTime },
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
    <div
      id={isHero ? "claim-offer" : undefined}
      className="bg-white rounded-2xl text-foreground shadow-xl border border-border overflow-hidden scroll-mt-24"
    >
      <div className="bg-secondary p-4 text-center text-white">
        <span className="inline-block bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full">
          Enter code {EXPECTED_CODE} to claim ${PRICING.introOffer.price}
        </span>
      </div>

      <div className={isHero ? "p-5 sm:p-6" : "p-6 sm:p-8"}>
        <div className="mb-5">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-4xl sm:text-5xl font-bold text-secondary">
              ${PRICING.introOffer.price}
            </span>
            <span className="text-lg text-foreground-muted line-through">
              ${PRICING.introOffer.regularPrice}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-1">Claim Your Intro Offer</h3>
          <p className="text-sm text-foreground-muted">
            Enter promo code{" "}
            <span className="font-mono font-semibold text-foreground">
              {EXPECTED_CODE}
            </span>{" "}
            below, or call and mention the code to book.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label
              htmlFor="intro-code"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Promo / Claim Code *
            </label>
            <input
              type="text"
              id="intro-code"
              required
              value={formData.promoCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  promoCode: e.target.value.toUpperCase(),
                })
              }
              className="w-full px-4 py-3 border border-secondary/40 bg-secondary/5 rounded-lg font-mono font-semibold tracking-wide text-secondary focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder={EXPECTED_CODE}
              autoComplete="off"
              spellCheck={false}
            />
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
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

          {!isHero && (
            <>
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
                  <option value="Morning (9 AM - 12 PM)">
                    Morning (9 AM - 12 PM)
                  </option>
                  <option value="Midday (12 PM - 3 PM)">
                    Midday (12 PM - 3 PM)
                  </option>
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
            </>
          )}

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

          <Link
            href={`tel:${CONTACT.phoneClean}`}
            className="btn-primary w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            Call Now to Book &amp; Claim
          </Link>

          {errorMessage && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {errorMessage}
            </p>
          )}

          <p className="text-xs text-foreground-muted text-center">
            Mention code {EXPECTED_CODE} when calling. First-time clients only.
            One-time ${PRICING.medicalClearance} telehealth screening required.
          </p>
        </form>
      </div>
    </div>
  );
}
