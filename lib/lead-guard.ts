// Server-side lead spam checks. Safe to import from tests and server actions.
// Do not import this module from client components — the HMAC secret stays
// on the server.

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

/** Set this in Vercel (Production and Preview). A fallback is used when unset so builds still succeed. */
export const LEAD_GUARD_SECRET_ENV = "LEAD_GUARD_SECRET";

/** Reject submits that arrive sooner than this after the token was issued. */
export const MIN_SUBMIT_MS = 3_000;

/** Tokens older than this are rejected so a captured token cannot be replayed forever. */
export const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

export const RATE_LIMIT_MAX = 3;
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
export const DEDUPE_WINDOW_MS = 24 * 60 * 60 * 1000;

const FALLBACK_SECRET =
  "huntsvilleiv-lead-guard-dev-fallback-not-for-production";

const ALLOWED_HOSTS = new Set([
  "huntsvilleiv.com",
  "www.huntsvilleiv.com",
  "localhost",
  "127.0.0.1",
  "::1",
]);

const JUNK_NAME_TOKENS = new Set([
  "abc",
  "abcdef",
  "abcdefg",
  "asdf",
  "asdfasdf",
  "asdfgh",
  "asdfghjkl",
  "fake",
  "guest",
  "qwer",
  "qwerty",
  "qwertyuiop",
  "sample",
  "test",
  "testing",
  "zxcv",
  "zxcvbn",
  "zxcvbnm",
]);

const KEYBOARD_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

const GMAIL_DOMAINS = new Set(["gmail.com", "googlemail.com"]);

const GMAIL_JUNK_LOCAL =
  /^(test|testing|asdf|asdfgh|asdfghjkl|qwerty|qwertyuiop|abcdef+|abcd|abc|fake|sample|guest)\d*$/;

export type LeadAssessmentInput = {
  name?: string;
  email?: string;
  phone?: string;
  /** Plausible decoy. Any non-empty value is rejected. */
  officeExtension?: string;
  /** Legacy decoy key. Still rejected when a bot fills it. */
  honeypot?: string;
  formToken?: string;
  origin?: string | null;
  referer?: string | null;
  ip?: string;
  now?: number;
};

export type LeadGuardStore = {
  hitsByIp: Map<string, number[]>;
  seenLeads: Map<string, number>;
};

export function createLeadGuardStore(): LeadGuardStore {
  return {
    hitsByIp: new Map(),
    seenLeads: new Map(),
  };
}

const defaultStore = createLeadGuardStore();

function signingSecret(): string {
  const configured = process.env[LEAD_GUARD_SECRET_ENV];
  if (configured && configured.trim() !== "") return configured.trim();
  return FALLBACK_SECRET;
}

function sign(body: string): string {
  return createHmac("sha256", signingSecret()).update(body).digest("base64url");
}

/** HMAC token embedding the issue time and a nonce. */
export function createLeadToken(now = Date.now()): string {
  const body = Buffer.from(
    JSON.stringify({ iat: now, n: randomBytes(16).toString("hex") }),
  ).toString("base64url");
  return `${body}.${sign(body)}`;
}

export function isAllowedLeadOrigin(
  origin: string | null | undefined,
): boolean {
  if (!origin) return false;
  let url: URL;
  try {
    url = new URL(origin);
  } catch {
    return false;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return false;
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (ALLOWED_HOSTS.has(host)) return true;
  return host.endsWith(".vercel.app") && host.length > ".vercel.app".length;
}

export function clientIpFromHeaders(
  getHeader: (name: string) => string | null,
): string {
  const forwarded = getHeader("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 64);
  }
  const realIp = getHeader("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 64);
  return "unknown";
}

export function normalizeLeadEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function normalizeLeadPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

function lettersOnly(value: string): string {
  return value.toLowerCase().replace(/[^a-z]/g, "");
}

function nameTokens(name: string): string[] {
  return name.toLowerCase().split(/[^a-z]+/).filter(Boolean);
}

function isSequentialLetters(value: string): boolean {
  if (value.length < 3) return false;
  let ascending = true;
  let descending = true;
  for (let i = 1; i < value.length; i++) {
    const diff = value.charCodeAt(i) - value.charCodeAt(i - 1);
    if (diff !== 1) ascending = false;
    if (diff !== -1) descending = false;
  }
  return ascending || descending;
}

function isKeyboardWalk(value: string): boolean {
  if (value.length < 4) return false;
  for (const row of KEYBOARD_ROWS) {
    const reversed = [...row].reverse().join("");
    if (row.includes(value) || reversed.includes(value)) return true;
  }
  return false;
}

function isSequentialDigits(value: string): boolean {
  if (value.length < 8) return false;
  let ascending = true;
  let descending = true;
  for (let i = 1; i < value.length; i++) {
    const diff = Number(value[i]) - Number(value[i - 1]);
    if (diff !== 1) ascending = false;
    if (diff !== -1) descending = false;
  }
  return ascending || descending;
}

export function nameRejectReason(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) return null;

  const tokens = nameTokens(trimmed);
  if (tokens.length === 0) return null;

  const letters = lettersOnly(trimmed);
  if (letters.length >= 5 && !/[aeiouy]/.test(letters)) return "name-no-vowels";
  if (letters.length >= 4 && /^(.)\1+$/.test(letters)) return "name-repeated";

  if (tokens.some((token) => JUNK_NAME_TOKENS.has(token))) {
    return "name-placeholder";
  }
  if (tokens.some((token) => isKeyboardWalk(token))) return "name-keyboard";

  if (tokens.length >= 2 && tokens.every((token) => token === tokens[0])) {
    const token = tokens[0];
    const suspicious =
      isSequentialLetters(token) ||
      isKeyboardWalk(token) ||
      (token.length >= 4 && !/[aeiouy]/.test(token)) ||
      /^(.)\1+$/.test(token);
    if (suspicious) return "name-repeated-token";
  }

  const sequential = tokens.filter((token) => isSequentialLetters(token));
  if (sequential.length >= 2) return "name-sequential";
  if (
    tokens.length === 1 &&
    isSequentialLetters(tokens[0]) &&
    tokens[0].length >= 4
  ) {
    return "name-sequential";
  }

  return null;
}

export function emailRejectReason(email: string): string | null {
  const trimmed = normalizeLeadEmail(email);
  if (!trimmed) return null;

  const at = trimmed.lastIndexOf("@");
  if (at <= 0 || at === trimmed.length - 1) return null;

  let local = trimmed.slice(0, at);
  const domain = trimmed.slice(at + 1);
  if (!GMAIL_DOMAINS.has(domain)) return null;

  const plus = local.indexOf("+");
  if (plus !== -1) local = local.slice(0, plus);
  if (!local) return null;
  if (GMAIL_JUNK_LOCAL.test(local)) return "email-placeholder";

  const letters = local.replace(/[^a-z]/g, "");
  if (
    letters.length >= 4 &&
    letters.length / local.length >= 0.75 &&
    (isSequentialLetters(letters) || isKeyboardWalk(letters))
  ) {
    return "email-sequential";
  }

  return null;
}

export function phoneRejectReason(phone: string): string | null {
  if (!phone || !phone.trim()) return null;

  const normalized = normalizeLeadPhone(phone);
  if (normalized.length !== 10) return "phone-not-us";
  if (normalized[0] < "2" || normalized[3] < "2") return "phone-not-us";
  if (/^(\d)\1{9}$/.test(normalized)) return "phone-repeated";
  if (isSequentialDigits(normalized)) return "phone-sequential";
  // 555-0100 through 555-0199, any area code.
  if (/^\d{3}55501\d{2}$/.test(normalized)) return "phone-test-range";
  return null;
}

function tokenRejectReason(
  token: string | undefined,
  now: number,
): string | null {
  if (!token || token.trim() === "") return "missing-token";

  const parts = token.split(".");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return "invalid-token";

  const [body, signature] = parts;
  const expected = sign(body);
  const actualBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);
  if (
    actualBuf.length !== expectedBuf.length ||
    !timingSafeEqual(actualBuf, expectedBuf)
  ) {
    return "invalid-token";
  }

  let issuedAt: unknown;
  try {
    const parsed = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8"),
    ) as { iat?: unknown };
    issuedAt = parsed.iat;
  } catch {
    return "invalid-token";
  }

  if (typeof issuedAt !== "number" || !Number.isFinite(issuedAt)) {
    return "invalid-token";
  }

  const age = now - issuedAt;
  if (age < 0) return "invalid-token";
  if (age < MIN_SUBMIT_MS) return "too-fast";
  if (age > TOKEN_TTL_MS) return "expired-token";
  return null;
}

function refererOrigin(referer: string): string | null {
  try {
    return new URL(referer).origin;
  } catch {
    return null;
  }
}

function rateLimitExceeded(
  store: LeadGuardStore,
  ip: string,
  now: number,
): boolean {
  const fresh = (store.hitsByIp.get(ip) ?? []).filter(
    (seenAt) => now - seenAt < RATE_LIMIT_WINDOW_MS,
  );
  if (fresh.length >= RATE_LIMIT_MAX) {
    store.hitsByIp.set(ip, fresh);
    return true;
  }
  fresh.push(now);
  store.hitsByIp.set(ip, fresh);
  return false;
}

function dedupeKeys(email: string, phone: string): string[] {
  const keys: string[] = [];
  const normalizedEmail = normalizeLeadEmail(email);
  const normalizedPhone = normalizeLeadPhone(phone);
  if (normalizedEmail) keys.push(`e:${normalizedEmail}`);
  if (normalizedPhone) keys.push(`p:${normalizedPhone}`);
  return keys;
}

function isDuplicateLead(
  store: LeadGuardStore,
  email: string,
  phone: string,
  now: number,
): boolean {
  for (const [key, seenAt] of store.seenLeads) {
    if (now - seenAt >= DEDUPE_WINDOW_MS) store.seenLeads.delete(key);
  }
  return dedupeKeys(email, phone).some((key) => {
    const seenAt = store.seenLeads.get(key);
    return seenAt !== undefined && now - seenAt < DEDUPE_WINDOW_MS;
  });
}

function rememberLead(
  store: LeadGuardStore,
  email: string,
  phone: string,
  now: number,
): void {
  for (const key of dedupeKeys(email, phone)) {
    store.seenLeads.set(key, now);
  }
}

/**
 * Returns a reason code when the submission should be dropped, or null when
 * it should be delivered. Reason codes contain no visitor data.
 * Accepted leads are remembered for duplicate suppression. The shared store
 * is process-local (one serverless instance).
 */
export function assessLeadSubmission(
  input: LeadAssessmentInput,
  store: LeadGuardStore = defaultStore,
): string | null {
  const now = input.now ?? Date.now();
  const decoy = `${input.officeExtension ?? ""} ${input.honeypot ?? ""}`.trim();
  if (decoy) return "honeypot";

  const tokenReason = tokenRejectReason(input.formToken, now);
  if (tokenReason) return tokenReason;

  const origin = input.origin?.trim() ?? "";
  if (!origin || origin.toLowerCase() === "null") return "missing-origin";
  if (!isAllowedLeadOrigin(origin)) return "cross-origin";

  const referer = input.referer?.trim() ?? "";
  if (referer) {
    const fromReferer = refererOrigin(referer);
    if (!fromReferer || !isAllowedLeadOrigin(fromReferer)) return "cross-origin";
  }

  const ip = input.ip?.trim() || "unknown";
  if (rateLimitExceeded(store, ip, now)) return "rate-limit";

  const nameReason = nameRejectReason(input.name ?? "");
  if (nameReason) return nameReason;
  const emailReason = emailRejectReason(input.email ?? "");
  if (emailReason) return emailReason;
  const phoneReason = phoneRejectReason(input.phone ?? "");
  if (phoneReason) return phoneReason;

  if (isDuplicateLead(store, input.email ?? "", input.phone ?? "", now)) {
    return "duplicate";
  }
  rememberLead(store, input.email ?? "", input.phone ?? "", now);
  return null;
}
