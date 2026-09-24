"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Loader2,
  ArrowRight,
  Phone,
  Check,
} from "lucide-react";
import { sendLead } from "@/app/actions/send-lead";
import { HoneypotField } from "@/components/honeypot-field";
import { OptInCheckboxes } from "@/components/opt-in-checkboxes";
import { CONTACT, PRICING } from "@/lib/constants";

// Open hours per weekday (0 = Sunday … 6 = Saturday) for Jones Valley.
// Matches HOURS in lib/constants.ts. [openHour, closeHour] in 24h time.
const WEEKDAY_HOURS: Record<number, [number, number]> = {
  0: [10, 17], // Sunday
  1: [9, 15], // Monday
  2: [10, 19], // Tuesday
  3: [9, 18], // Wednesday
  4: [10, 19], // Thursday
  5: [9, 18], // Friday
  6: [9, 17], // Saturday
};

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatHour(hour: number): string {
  const period = hour >= 12 ? "PM" : "AM";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}:00 ${period}`;
}

/** Hourly appointment start times from open until one hour before close. */
function timeSlotsForDate(date: Date): string[] {
  const [open, close] = WEEKDAY_HOURS[date.getDay()] ?? [];
  if (open === undefined || close === undefined) return [];
  const slots: string[] = [];
  for (let h = open; h <= close - 1; h++) {
    slots.push(formatHour(h));
  }
  return slots;
}

function formatDateLong(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BookIntroForm() {
  const router = useRouter();
  const today = useMemo(startOfToday, []);

  const [viewMonth, setViewMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    textOptIn: true,
    emailOptIn: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const timeSlots = selectedDate ? timeSlotsForDate(selectedDate) : [];

  // Build the calendar grid (leading blanks + day cells) for the viewed month.
  const calendarCells = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstWeekday; i++) cells.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(new Date(year, month, day));
    }
    return cells;
  }, [viewMonth]);

  const canGoPrev =
    viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() &&
      viewMonth.getMonth() > today.getMonth());

  const goPrevMonth = () => {
    if (!canGoPrev) return;
    setViewMonth(
      new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1),
    );
  };
  const goNextMonth = () => {
    setViewMonth(
      new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1),
    );
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!selectedDate) {
      setErrorMessage("Please choose a date for your appointment.");
      return;
    }
    if (!selectedTime) {
      setErrorMessage("Please choose a time for your appointment.");
      return;
    }

    setIsSubmitting(true);

    const result = await sendLead({
      formName: "Book Intro Offer Online",
      notifySubject: "New IV Booking Request from Website",
      name: formData.name,
      email: formData.email,
      honeypot: formData.company,
      fields: [
        { label: "Name", value: formData.name },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        {
          label: "Requested Date",
          value: formatDateLong(selectedDate),
        },
        { label: "Requested Time", value: selectedTime },
        {
          label: "Offer",
          value: `$${PRICING.introOffer.price} First-Time Intro (code ${PRICING.introOffer.promoCode})`,
        },
        { label: "Notes", value: formData.message },
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step 1 — date + Step 2 — time */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Choose your date */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              1
            </span>
            <h3 className="text-lg font-bold text-foreground">
              Choose your date
            </h3>
          </div>

          <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={goPrevMonth}
                disabled={!canGoPrev}
                aria-label="Previous month"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground-muted transition-colors hover:bg-background-alt disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <p className="font-semibold text-foreground">
                {MONTH_LABELS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
              </p>
              <button
                type="button"
                onClick={goNextMonth}
                aria-label="Next month"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground-muted transition-colors hover:bg-background-alt"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-1 grid grid-cols-7 gap-1">
              {WEEKDAY_LABELS.map((label) => (
                <div
                  key={label}
                  className="py-1 text-center text-xs font-medium text-foreground-muted"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {calendarCells.map((cell, idx) => {
                if (!cell) return <div key={`blank-${idx}`} />;
                const isPast = cell < today;
                const isSelected =
                  selectedDate !== null &&
                  cell.getTime() === selectedDate.getTime();
                return (
                  <button
                    key={cell.toISOString()}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleSelectDate(cell)}
                    aria-label={formatDateLong(cell)}
                    aria-pressed={isSelected}
                    className={`flex h-10 items-center justify-center rounded-lg text-sm transition-colors ${
                      isSelected
                        ? "bg-primary font-bold text-white"
                        : isPast
                          ? "cursor-not-allowed text-foreground-muted/40"
                          : "text-foreground hover:bg-background-alt"
                    }`}
                  >
                    {cell.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Choose your time */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              2
            </span>
            <h3 className="text-lg font-bold text-foreground">
              Choose your time
            </h3>
          </div>

          {!selectedDate ? (
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 text-sm text-foreground-muted shadow-sm">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
              <p>
                Pick a date first and we&apos;ll show the times open that day.
                We&apos;re open seven days a week.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-medium text-foreground">
                {formatDateLong(selectedDate)}
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {timeSlots.map((slot) => {
                  const active = slot === selectedTime;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      aria-pressed={active}
                      className={`flex items-center justify-center gap-1 rounded-lg border px-2 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "border-primary bg-primary text-white"
                          : "border-border text-foreground hover:border-primary/40 hover:bg-background-alt"
                      }`}
                    >
                      {active && <Check className="h-3.5 w-3.5" />}
                      {slot}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-foreground-muted">
                Don&apos;t see a time that works? Add a backup below and
                we&apos;ll do our best to match it.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Step 3 — details */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            3
          </span>
          <h3 className="text-lg font-bold text-foreground">Your details</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="book-name"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="book-name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg border border-border px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="book-email"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="book-email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-border px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="book-phone"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="book-phone"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-lg border border-border px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                placeholder="(256) 555-1234"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="book-promo"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Promo Code *
            </label>
            <input
              type="text"
              id="book-promo"
              readOnly
              value={PRICING.introOffer.promoCode}
              className="w-full rounded-lg border border-border bg-background-alt px-4 py-3 font-semibold text-primary outline-none"
            />
            <p className="mt-1 text-xs text-foreground-muted">
              Pre-filled for you. Required to lock in the $
              {PRICING.introOffer.price} intro price.
            </p>
          </div>

          <div>
            <label
              htmlFor="book-message"
              className="mb-1 block text-sm font-medium text-foreground"
            >
              Anything we should know?{" "}
              <span className="font-normal text-foreground-muted">
                (optional)
              </span>
            </label>
            <textarea
              id="book-message"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full resize-none rounded-lg border border-border px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
              placeholder="Your wellness goals, a backup time that works, questions for our team..."
            />
          </div>

          <OptInCheckboxes
            idPrefix="book-intro"
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
            id="book-intro-company"
            value={formData.company}
            onChange={(value) => setFormData({ ...formData, company: value })}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Request My ${PRICING.introOffer.price} Appointment
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          {errorMessage && (
            <p className="text-center text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}

          <p className="text-center text-xs text-foreground-muted">
            This sends an appointment request — a team member confirms your time
            before your visit. First-time visitors only. HSA/FSA eligible. A
            one-time state-mandated ${PRICING.medicalClearance} telehealth
            screening is required at your first visit.
          </p>

          <div className="rounded-xl border border-border bg-background-alt p-4 text-center">
            <p className="mb-3 text-sm text-foreground-muted">
              Prefer to talk to a human? Mention code{" "}
              <span className="font-semibold text-primary">
                {PRICING.introOffer.promoCode}
              </span>{" "}
              when you call.
            </p>
            <Link
              href={`tel:${CONTACT.phoneClean}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary bg-white px-6 py-3 font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Call {CONTACT.phone}
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
