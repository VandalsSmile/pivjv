"use server";

import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

// Internal recipients for every form submission
const NOTIFY_TO = ["jonesvalley@primeivhydration.com", "leads@vs.marketing"];
const FROM = "VS Marketing Alerts <leads@huntsvilleiv.com>";
const NOTIFY_SUBJECT = "New Lead from your Website";

export type LeadField = {
  label: string;
  value: string;
};

export type LeadPayload = {
  formName: string;
  name: string;
  email: string;
  fields: LeadField[];
  /** Hidden honeypot field value — should always be empty for real users. */
  honeypot?: string;
  /** Optional override for the internal notification email subject. */
  notifySubject?: string;
  /**
   * "appointment" sends the submitter an appointment-request confirmation
   * (their requested details + "We will confirm your appointment shortly!").
   * Defaults to the generic "we received your request" confirmation.
   */
  confirmationType?: "general" | "appointment";
};

/** Rows that are internal-only and shouldn't be echoed back to the guest. */
const CONFIRMATION_HIDDEN_LABELS = new Set(["Text Opt-In", "Email Opt-In"]);

export type SendLeadResult = {
  success: boolean;
  error?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRows(fields: LeadField[]): string {
  return fields
    .filter((f) => f.value && f.value.trim() !== "")
    .map(
      (f) => `
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#0a4d68;border-bottom:1px solid #e5e7eb;vertical-align:top;white-space:nowrap;">${escapeHtml(
            f.label,
          )}</td>
          <td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${escapeHtml(
            f.value,
          )}</td>
        </tr>`,
    )
    .join("");
}

function renderAppointmentConfirmation(
  name: string,
  fields: LeadField[],
): string {
  const guestRows = renderRows(
    fields.filter((f) => !CONFIRMATION_HIDDEN_LABELS.has(f.label)),
  );

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1e3a5f;">
      <h2 style="color:#1e3a5f;margin-bottom:8px;">Thank you, ${escapeHtml(name) || "there"}!</h2>
      <p style="color:#111827;margin-top:0;">We've received your appointment request at Prime IV Hydration &amp; Wellness &mdash; Huntsville.</p>
      <div style="background:#f0f7fb;border-left:4px solid #0891b2;border-radius:8px;padding:16px 20px;margin:20px 0;">
        <p style="margin:0;font-size:18px;font-weight:700;color:#1e3a5f;">We will confirm your appointment shortly!</p>
        <p style="margin:6px 0 0;font-size:14px;color:#64748b;">This is a request, not a confirmed booking yet. A team member will reach out to lock in your time.</p>
      </div>
      <h3 style="color:#1e3a5f;font-size:16px;margin:24px 0 8px;">Your appointment request</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin:0 0 20px;">${guestRows}</table>
      <p style="color:#111827;">Need to make a change or have a question? Call us at <a href="tel:${CONTACT.phoneClean}" style="color:#0891b2;">${CONTACT.phone}</a> or text <a href="sms:${CONTACT.textToBookClean}" style="color:#0891b2;">${CONTACT.textToBook}</a>.</p>
      <p style="color:#6b7280;font-size:13px;margin-top:24px;">Prime IV Hydration &amp; Wellness &mdash; ${escapeHtml(CONTACT.address.full)}</p>
    </div>`;
}

export async function sendLead(payload: LeadPayload): Promise<SendLeadResult> {
  const {
    formName,
    name,
    email,
    fields,
    honeypot,
    notifySubject,
    confirmationType = "general",
  } = payload;
  const isAppointment = confirmationType === "appointment";

  // Honeypot: if the hidden field is filled, it's a bot. Pretend success so
  // the bot gets no signal, but don't send anything.
  if (honeypot && honeypot.trim() !== "") {
    return { success: true };
  }

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email service is not configured." };
  }

  const rows = renderRows(fields);
  const subject = notifySubject?.trim() || NOTIFY_SUBJECT;

  const notifyHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0a4d68;margin-bottom:4px;">${escapeHtml(subject)}</h2>
      <p style="color:#6b7280;margin-top:0;">Submitted via the <strong>${escapeHtml(
        formName,
      )}</strong> form.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
    </div>`;

  const confirmationHtml = isAppointment
    ? renderAppointmentConfirmation(name, fields)
    : `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0a4d68;">Thank you, ${escapeHtml(name) || "there"}!</h2>
      <p style="color:#111827;">We've received your request and our team will be in touch within 24 hours. Here's a copy of what you submitted:</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin:16px 0;">${rows}</table>
      <p style="color:#111827;">If you need immediate assistance, call us at ${CONTACT.phone}.</p>
      <p style="color:#6b7280;font-size:13px;margin-top:24px;">Prime IV Hydration &amp; Wellness — Huntsville, AL</p>
    </div>`;
  const confirmationSubject = isAppointment
    ? "Appointment request received — we'll confirm shortly | Prime IV Huntsville"
    : "We received your request — Prime IV Huntsville";

  try {
    // 1) Internal notification to the team
    const notify = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email || undefined,
      subject,
      html: notifyHtml,
    });

    if (notify.error) {
      return { success: false, error: notify.error.message };
    }

    // 2) Confirmation to the submitter (best-effort; don't fail the lead if this errors)
    if (email && email.trim() !== "") {
      const confirmation = await resend.emails.send({
        from: FROM,
        to: [email.trim()],
        replyTo: CONTACT.email,
        subject: confirmationSubject,
        html: confirmationHtml,
      });
      if (confirmation.error) {
        console.error(
          `[send-lead] Confirmation email to submitter failed (${formName}):`,
          confirmation.error.message,
        );
      }
    }

    return { success: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send your request.";
    return { success: false, error: message };
  }
}
