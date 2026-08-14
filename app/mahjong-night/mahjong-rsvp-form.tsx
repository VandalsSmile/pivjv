"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, Phone, Check } from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { HoneypotField } from "@/components/honeypot-field";
import { OptInCheckboxes } from "@/components/opt-in-checkboxes";
import { CONTACT } from "@/lib/constants";
import { MAHJONG_EVENT, EVENT_DATE_LABEL } from "@/lib/mahjong-event";

const NOTIFY_SUBJECT = "New Mahjong Event RSVP";

const GUEST_OPTIONS = [
  { value: "1", label: "Just me" },
  { value: "2", label: "Me + 1" },
  { value: "3", label: "Me + 2" },
  { value: "4", label: "Full table (4)" },
];

type MahjongRsvpFormProps = {
  /** Compact layout for the hero card. */
  variant?: "default" | "hero";
};

export function MahjongRsvpForm({ variant = "default" }: MahjongRsvpFormProps) {
  const isHero = variant === "hero";
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    firstTime: "",
    playedBefore: "",
    message: "",
    company: "",
    textOptIn: true,
    emailOptIn: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const id = (suffix: string) =>
    isHero ? `mahjong-hero-${suffix}` : `mahjong-${suffix}`;

  const guestLabel =
    GUEST_OPTIONS.find((o) => o.value === formData.guests)?.label ?? "Just me";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const result = await sendLead({
      formName: "Mahjong Night RSVP",
      name: formData.name,
      email: formData.email,
      honeypot: formData.company,
      notifySubject: NOTIFY_SUBJECT,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Event",
          value: `${MAHJONG_EVENT.name} — ${EVENT_DATE_LABEL}, ${MAHJONG_EVENT.timeLabel}`,
        },
        {
          label: "Seats Requested",
          value: `${formData.guests} (${guestLabel})`,
        },
        { label: "First-Time IV Client", value: formData.firstTime },
        { label: "Played Mahjong Before", value: formData.playedBefore },
        {
          label: "Notes / Medical Considerations",
          value: formData.message,
        },
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
      id={isHero ? "rsvp" : undefined}
      className="bg-white rounded-2xl text-foreground shadow-xl border border-border overflow-hidden scroll-mt-24"
    >
      <div className="bg-accent p-4 text-center text-white">
        <span className="inline-block bg-white text-accent-dark text-xs font-bold px-3 py-1 rounded-full">
          Only {MAHJONG_EVENT.seats} seats — first to RSVP, first served
        </span>
      </div>

      <div className={isHero ? "p-5 sm:p-6" : "p-6 sm:p-8"}>
        <div className="mb-5">
          <h3 className="text-xl font-bold mb-1">Request Your Seat</h3>
          <p className="text-sm text-foreground-muted">
            Submitting this form puts you in line. We&apos;ll reach out to
            confirm your seat — you&apos;re not booked until you hear back from
            us.
          </p>
        </div>

        <div className="mb-5 rounded-lg bg-background-alt border border-border px-4 py-3">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm text-foreground-muted">
              All-in for the night
            </span>
            <span className="text-2xl font-bold text-accent-dark tabular-nums">
              ${MAHJONG_EVENT.ticketPrice}
            </span>
          </div>
          <p className="text-xs text-foreground-muted mt-1">
            Includes your {MAHJONG_EVENT.drip.name} drip, charcuterie, drinks,
            mahjong, and your raffle entry.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label
              htmlFor={id("name")}
              className="block text-sm font-medium text-foreground mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id={id("name")}
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
                htmlFor={id("email")}
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id={id("email")}
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
                htmlFor={id("phone")}
                className="block text-sm font-medium text-foreground mb-1"
              >
                Phone *
              </label>
              <input
                type="tel"
                id={id("phone")}
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

          <fieldset>
            <legend className="block text-sm font-medium text-foreground mb-2">
              How many seats? *
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {GUEST_OPTIONS.map((option) => {
                const isSelected = formData.guests === option.value;
                return (
                  <label
                    key={option.value}
                    className={`relative flex flex-col items-center justify-center gap-0.5 rounded-lg border-2 px-2 py-2.5 cursor-pointer text-center transition-all ${
                      isSelected
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name={id("guests")}
                      value={option.value}
                      checked={isSelected}
                      onChange={() =>
                        setFormData({ ...formData, guests: option.value })
                      }
                      className="sr-only"
                    />
                    {isSelected && (
                      <Check
                        className="absolute top-1.5 right-1.5 w-3.5 h-3.5 text-accent"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-lg font-bold leading-none">
                      {option.value}
                    </span>
                    <span className="text-[11px] text-foreground-muted leading-tight">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
            <p className="text-xs text-foreground-muted mt-2">
              Every guest counts toward the {MAHJONG_EVENT.seats}-seat cap. Each
              person should still submit their own RSVP if possible.
            </p>
          </fieldset>

          <div>
            <label
              htmlFor={id("first-time")}
              className="block text-sm font-medium text-foreground mb-1"
            >
              Have you had IV therapy with us before? *
            </label>
            <select
              id={id("first-time")}
              required
              value={formData.firstTime}
              onChange={(e) =>
                setFormData({ ...formData, firstTime: e.target.value })
              }
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select one...</option>
              <option value="Yes — existing client">
                Yes — I&apos;m an existing client
              </option>
              <option value="No — first time (needs $25 screening)">
                No — this is my first time
              </option>
              <option value="Not sure">I&apos;m not sure</option>
            </select>
            <p className="text-xs text-foreground-muted mt-1.5">
              First-timers need a one-time ${MAHJONG_EVENT.screeningFee}{" "}
              telehealth screening. We&apos;ll set it up before the event.
            </p>
          </div>

          {!isHero && (
            <>
              <div>
                <label
                  htmlFor={id("played")}
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Have you played mahjong before? (optional)
                </label>
                <select
                  id={id("played")}
                  value={formData.playedBefore}
                  onChange={(e) =>
                    setFormData({ ...formData, playedBefore: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select one...</option>
                  <option value="I play regularly">I play regularly</option>
                  <option value="I've played a few times">
                    I&apos;ve played a few times
                  </option>
                  <option value="Total beginner — teach me">
                    Total beginner — teach me
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor={id("message")}
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Anything we should know? (optional)
                </label>
                <textarea
                  id={id("message")}
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Food allergies, medications, medical conditions, or who you'd like to sit with"
                />
              </div>
            </>
          )}

          <OptInCheckboxes
            idPrefix={isHero ? "mahjong-hero" : "mahjong"}
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
            id={id("company")}
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
                Sending RSVP...
              </>
            ) : (
              <>
                RSVP for Mahjong Night
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <Link
            href={`tel:${CONTACT.phoneClean}`}
            className="btn-primary w-full justify-center"
          >
            <Phone className="w-4 h-4" />
            Call to RSVP
          </Link>

          {errorMessage && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {errorMessage}
            </p>
          )}

          <p className="text-xs text-foreground-muted text-center">
            Seats are limited to {MAHJONG_EVENT.seats} and filled first to RSVP,
            first served. Your seat is confirmed only after our team reaches out.
          </p>
        </form>
      </div>
    </div>
  );
}
