"use server";

import { Resend } from "resend";

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
  turnstileToken: string;
};

export type SendLeadResult = {
  success: boolean;
  error?: string;
};

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // If no secret is configured, skip verification rather than block all leads.
  if (!secret) return true;

  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      },
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

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

export async function sendLead(payload: LeadPayload): Promise<SendLeadResult> {
  const { formName, name, email, fields, turnstileToken } = payload;

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email service is not configured." };
  }

  const human = await verifyTurnstile(turnstileToken);
  if (!human) {
    return {
      success: false,
      error: "CAPTCHA verification failed. Please try again.",
    };
  }

  const rows = renderRows(fields);

  const notifyHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0a4d68;margin-bottom:4px;">New Lead from your Website</h2>
      <p style="color:#6b7280;margin-top:0;">Submitted via the <strong>${escapeHtml(
        formName,
      )}</strong> form.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
    </div>`;

  const confirmationHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0a4d68;">Thank you, ${escapeHtml(name) || "there"}!</h2>
      <p style="color:#111827;">We've received your request and our team will be in touch within 24 hours. Here's a copy of what you submitted:</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin:16px 0;">${rows}</table>
      <p style="color:#111827;">If you need immediate assistance, call us at (256) 692-6347.</p>
      <p style="color:#6b7280;font-size:13px;margin-top:24px;">Prime IV Hydration &amp; Wellness — Huntsville, AL</p>
    </div>`;

  try {
    // 1) Internal notification to the team
    const notify = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email || undefined,
      subject: NOTIFY_SUBJECT,
      html: notifyHtml,
    });

    if (notify.error) {
      return { success: false, error: notify.error.message };
    }

    // 2) Confirmation to the submitter (best-effort; don't fail the lead if this errors)
    if (email && email.trim() !== "") {
      await resend.emails.send({
        from: FROM,
        to: [email],
        subject: "We received your request — Prime IV Huntsville",
        html: confirmationHtml,
      });
    }

    return { success: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send your request.";
    return { success: false, error: message };
  }
}
