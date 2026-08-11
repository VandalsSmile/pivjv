"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, Phone, Check } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { HoneypotField } from "@/components/honeypot-field";
import { OptInCheckboxes } from "@/components/opt-in-checkboxes";
import { CONTACT, IV_PACKS, PRICING, getPackMath } from "@/lib/constants";

const NOTIFY_SUBJECT = "New IV Pack Pre-Purchase Request";

/** Event name the pack cards dispatch so choosing a card preselects it here. */
export const PACK_SELECT_EVENT = "iv-pack-select";

type IvPacksFormProps = {
  /** Compact layout for the hero card. */
  variant?: "default" | "hero";
};

export function IvPacksForm({ variant = "default" }: IvPacksFormProps) {
  const isHero = variant === "hero";
  const router = useRouter();
  // Default to the 12-pack — the best per-IV value.
  const [packId, setPackId] = useState(IV_PACKS[IV_PACKS.length - 1].id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
    company: "",
    textOptIn: true,
    emailOptIn: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Let the pack comparison cards further down the page drive this selection.
  useEffect(() => {
    const handleSelect = (event: Event) => {
      const detail = (event as CustomEvent<{ packId?: string }>).detail;
      if (detail?.packId && IV_PACKS.some((p) => p.id === detail.packId)) {
        setPackId(detail.packId);
      }
    };
    window.addEventListener(PACK_SELECT_EVENT, handleSelect);
    return () => window.removeEventListener(PACK_SELECT_EVENT, handleSelect);
  }, []);

  const selectedPack = IV_PACKS.find((p) => p.id === packId) ?? IV_PACKS[0];
  const math = getPackMath(selectedPack);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const result = await sendLead({
      formName: "IV Pack Pre-Purchase",
      name: formData.name,
      email: formData.email,
      honeypot: formData.company,
      notifySubject: NOTIFY_SUBJECT,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Pack Requested",
          value: `${selectedPack.name} — $${selectedPack.price.toLocaleString()} ($${math.perIv}/IV, saves $${math.savings.toLocaleString()})`,
        },
        { label: "Preferred Time", value: formData.preferredTime },
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

    router.push("/thank-you");
  };

  return (
    <div
      id={isHero ? "reserve-pack" : undefined}
      className="bg-white rounded-2xl text-foreground shadow-xl border border-border overflow-hidden scroll-mt-24"
    >
      <div className="bg-accent p-4 text-center text-white">
        <span className="inline-block bg-white text-accent-dark text-xs font-bold px-3 py-1 rounded-full">
          Pre-purchase &amp; save up to ${getPackMath(IV_PACKS[1]).savings} (
          {getPackMath(IV_PACKS[1]).percentOff}%) — no membership
        </span>
      </div>

      <div className={isHero ? "p-5 sm:p-6" : "p-6 sm:p-8"}>
        <div className="mb-5">
          <h3 className="text-xl font-bold mb-1">Lock In Your IV Pack</h3>
          <p className="text-sm text-foreground-muted">
            Choose your pack below and we&apos;ll call to finalize your
            pre-purchase. No monthly commitment, ever.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <fieldset>
            <legend className="block text-sm font-medium text-foreground mb-2">
              Choose Your Pack *
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {IV_PACKS.map((pack) => {
                const packMath = getPackMath(pack);
                const isSelected = pack.id === packId;
                return (
                  <label
                    key={pack.id}
                    className={`relative flex flex-col gap-1 rounded-lg border-2 p-3 cursor-pointer transition-all ${
                      isSelected
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="pack"
                      value={pack.id}
                      checked={isSelected}
                      onChange={() => setPackId(pack.id)}
                      className="sr-only"
                    />
                    {isSelected && (
                      <Check
                        className="absolute top-2 right-2 w-4 h-4 text-accent"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                      {pack.quantity} IVs
                    </span>
                    <span className="text-2xl font-bold text-foreground leading-none">
                      ${pack.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-accent-dark font-semibold">
                      ${packMath.perIv} per IV
                    </span>
                    <span className="text-xs text-foreground-muted">
                      {packMath.percentOff}% off
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="rounded-lg bg-background-alt border border-border px-4 py-3">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm text-foreground-muted">
                You&apos;re saving
              </span>
              <span className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-accent-dark tabular-nums">
                  ${math.savings.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-accent-dark bg-accent/10 rounded-full px-2 py-0.5">
                  {math.percentOff}% OFF
                </span>
              </span>
            </div>
            <p className="text-xs text-foreground-muted mt-1">
              ${math.perIv}/IV vs. ${PRICING.nonMemberDrip} per drip paid one at
              a time (${math.value.toLocaleString()} total).
            </p>
          </div>

          <div>
            <label
              htmlFor={isHero ? "pack-hero-name" : "pack-name"}
              className="block text-sm font-medium text-foreground mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id={isHero ? "pack-hero-name" : "pack-name"}
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
                htmlFor={isHero ? "pack-hero-email" : "pack-email"}
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id={isHero ? "pack-hero-email" : "pack-email"}
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
                htmlFor={isHero ? "pack-hero-phone" : "pack-phone"}
                className="block text-sm font-medium text-foreground mb-1"
              >
                Phone *
              </label>
              <input
                type="tel"
                id={isHero ? "pack-hero-phone" : "pack-phone"}
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
                  htmlFor="pack-time"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Best Time to Reach You (optional)
                </label>
                <select
                  id="pack-time"
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
                  htmlFor="pack-message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Questions About the Packs? (optional)
                </label>
                <textarea
                  id="pack-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Which drips are you most interested in?"
                />
              </div>
            </>
          )}

          <OptInCheckboxes
            idPrefix={isHero ? "pack-hero" : "pack"}
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
            id={isHero ? "pack-hero-company" : "pack-company"}
            value={formData.company}
            onChange={(value) => setFormData({ ...formData, company: value })}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-accent w-full justify-center disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Reserve My {selectedPack.name}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <Link
            href={`tel:${CONTACT.phoneClean}`}
            className="btn-primary w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            Call to Pre-Purchase
          </Link>

          {errorMessage && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {errorMessage}
            </p>
          )}

          <p className="text-xs text-foreground-muted text-center">
            IVs never expire. Packs are for one person and are not transferable.
            New clients need a one-time ${PRICING.medicalClearance} telehealth
            screening.
          </p>
        </form>
      </div>
    </div>
  );
}
