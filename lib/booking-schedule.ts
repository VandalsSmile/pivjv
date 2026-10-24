// Open hours for chat booking. The pairs match WEEKDAY_HOURS in
// components/appointment-booking-form.tsx (0 = Sunday). Last start is one
// hour before close. Same-day requests need the same two-hour hour-bucket
// lead the form uses (current hour + 2). Times are America/Chicago, the
// clinic clock, so the server does not offer slots based on UTC.

import { HOURS } from "./constants";

export const CLINIC_TIME_ZONE = "America/Chicago";
export const BOOKING_WINDOW_DAYS = 60;

export const WEEKDAY_OPEN_CLOSE: Record<number, [number, number]> = {
  0: [10, 17],
  1: [9, 15],
  2: [10, 19],
  3: [9, 18],
  4: [10, 19],
  5: [9, 18],
  6: [9, 17],
};

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export type ClinicNow = {
  iso: string;
  hour: number;
  minute: number;
  weekday: string;
};

export function clinicNow(date = new Date()): ClinicNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CLINIC_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  let hour = Number(get("hour"));
  if (hour === 24) hour = 0;
  return {
    iso: `${get("year")}-${get("month")}-${get("day")}`,
    hour,
    minute: Number(get("minute")),
    weekday: get("weekday"),
  };
}

function isoToUtcDate(iso: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return date;
}

function addDays(iso: string, days: number): string {
  const date = isoToUtcDate(iso);
  if (!date) return iso;
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function formatHour(hour: number): string {
  const period = hour >= 12 ? "PM" : "AM";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}:00 ${period}`;
}

export function formatLongDate(iso: string): string {
  const date = isoToUtcDate(iso);
  if (!date) return iso;
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** Bookable start times for a clinic date. Empty when closed, past, or too soon. */
export function slotsForDate(iso: string, now: ClinicNow = clinicNow()): string[] {
  const date = isoToUtcDate(iso);
  if (!date || iso < now.iso) return [];
  const bounds = WEEKDAY_OPEN_CLOSE[date.getUTCDay()];
  if (!bounds) return [];
  const [open, close] = bounds;
  const earliest = iso === now.iso ? Math.max(open, now.hour + 2) : open;
  const slots: string[] = [];
  for (let hour = earliest; hour <= close - 1; hour++) {
    slots.push(formatHour(hour));
  }
  return slots;
}

export function isBookableSlot(
  iso: string,
  time: string,
  now: ClinicNow = clinicNow(),
): boolean {
  return slotsForDate(iso, now).includes(time);
}

export function upcomingOpenDays(
  now: ClinicNow = clinicNow(),
  count = 5,
): string[] {
  const days: string[] = [];
  for (let offset = 0; offset < BOOKING_WINDOW_DAYS && days.length < count; offset++) {
    const iso = addDays(now.iso, offset);
    if (slotsForDate(iso, now).length > 0) days.push(iso);
  }
  return days;
}

export function todayHoursLabel(now: ClinicNow = clinicNow()): string {
  return HOURS.days.find((entry) => entry.day === now.weekday)?.hours ?? "unknown";
}
