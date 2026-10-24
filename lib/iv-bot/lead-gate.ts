// Content checks for chat-captured leads. Junk is refused here, before
// sendLead, so a blocked chat turn never emails or posts to the CRM.

import {
  emailRejectReason,
  nameRejectReason,
  phoneRejectReason,
} from "../lead-guard";

const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function chatContactBlockReason(input: {
  name: string;
  email: string;
  phone: string;
  requireEmail: boolean;
  requirePhone: boolean;
}): string | null {
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();

  if (!name) return "name-missing";
  const nameReason = nameRejectReason(name);
  if (nameReason) return nameReason;

  if (input.requireEmail && !email) return "email-missing";
  if (email) {
    if (!EMAIL_SHAPE.test(email)) return "email-invalid";
    const emailReason = emailRejectReason(email);
    if (emailReason) return emailReason;
  }

  if (input.requirePhone && !phone) return "phone-missing";
  if (phone) {
    const phoneReason = phoneRejectReason(phone);
    if (phoneReason) return phoneReason;
  }

  if (!email && !phone) return "contact-missing";
  return null;
}

/** Filtered and failed sends are not leads. Callers must not email or track them. */
export function chatLeadAccepted(result: {
  success: boolean;
  filtered?: boolean;
}): boolean {
  return result.success === true && result.filtered !== true;
}
