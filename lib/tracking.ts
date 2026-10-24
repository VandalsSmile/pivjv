// First-party ad click and UTM capture, plus the lead conversion events
// fired once on /thank-you after a successful form submit.

export const GOOGLE_ADS_ID = "AW-855692798";
export const GOOGLE_ADS_SEND_TO = "AW-855692798/7kj-CIa-7aQdEP6rg5gD";
export const META_PIXEL_ID = "3160062637430655";

/** 90 days, in seconds. */
export const ATTRIBUTION_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;

export const ATTRIBUTION_COOKIE = "hiv_attr_v1";
export const PENDING_LEAD_KEY = "hiv_pending_lead_v1";

const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid", "fbclid"] as const;

export type AttributionField = {
  label: string;
  value: string;
};

export type PendingLead = {
  form_name: string;
  page_path: string;
};

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    fbq?: Fbq;
    __hivGoogleAdsConfigured?: boolean;
    __hivMetaPixel?: boolean;
  }
}

export function isAttributionKey(key: string): boolean {
  if (!/^[a-z0-9_]{1,40}$/.test(key)) return false;
  if ((CLICK_ID_KEYS as readonly string[]).includes(key)) return true;
  return key.startsWith("utm_") && key.length > 4;
}

export function parseAttributionValue(
  value: string | undefined | null,
): Record<string, string> {
  if (!value) return {};

  const attempts = [value];
  try {
    attempts.push(decodeURIComponent(value));
  } catch {
    // Value was not URI-encoded.
  }

  for (const attempt of attempts) {
    try {
      const parsed = JSON.parse(attempt) as unknown;
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        continue;
      }
      const out: Record<string, string> = {};
      for (const [key, raw] of Object.entries(parsed)) {
        if (!isAttributionKey(key) || typeof raw !== "string") continue;
        const trimmed = raw.trim();
        if (!trimmed) continue;
        out[key] = trimmed;
      }
      return out;
    } catch {
      // Try the decoded attempt next.
    }
  }

  return {};
}

export function parseAttributionCookie(
  cookieString: string,
): Record<string, string> {
  const parts = cookieString.split(/;\s*/);
  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const name = part.slice(0, eq).trim();
    if (name !== ATTRIBUTION_COOKIE) continue;
    return parseAttributionValue(part.slice(eq + 1));
  }
  return {};
}

export function mergeAttribution(
  existing: Record<string, string>,
  params: URLSearchParams,
): { next: Record<string, string>; changed: boolean } {
  const next = { ...existing };
  let changed = false;

  params.forEach((value, key) => {
    if (!isAttributionKey(key)) return;
    const trimmed = value.trim();
    if (!trimmed || next[key] === trimmed) return;
    next[key] = trimmed;
    changed = true;
  });

  return { next, changed };
}

export function serializeAttributionCookie(
  data: Record<string, string>,
  secure: boolean,
): string {
  const payload = encodeURIComponent(JSON.stringify(data));
  const secureAttr = secure ? "; Secure" : "";
  return `${ATTRIBUTION_COOKIE}=${payload}; Path=/; Max-Age=${ATTRIBUTION_MAX_AGE_SECONDS}; SameSite=Lax${secureAttr}`;
}

/** Returns a Set-Cookie string when the URL has new click or UTM params. */
export function buildAttributionCookie(
  href: string,
  cookieString: string,
  secure: boolean,
): string | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }

  const existing = parseAttributionCookie(cookieString);
  const { next, changed } = mergeAttribution(existing, url.searchParams);
  if (!changed) return null;
  return serializeAttributionCookie(next, secure);
}

export function attributionFieldsFromValue(
  value: string | undefined | null,
): AttributionField[] {
  const data = parseAttributionValue(value);
  const keys = Object.keys(data).sort((a, b) => {
    const ai = (CLICK_ID_KEYS as readonly string[]).indexOf(a);
    const bi = (CLICK_ID_KEYS as readonly string[]).indexOf(b);
    if (ai !== -1 || bi !== -1) {
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    }
    return a.localeCompare(b);
  });
  return keys.map((key) => ({ label: key, value: data[key] }));
}

export function appendAttributionFields(
  fields: AttributionField[],
  attribution: AttributionField[],
): AttributionField[] {
  const seen = new Set(fields.map((field) => field.label));
  const merged = [...fields];
  for (const field of attribution) {
    if (!field.value.trim() || seen.has(field.label)) continue;
    seen.add(field.label);
    merged.push(field);
  }
  return merged;
}

export function captureAttribution(): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const nextCookie = buildAttributionCookie(
    window.location.href,
    document.cookie,
    window.location.protocol === "https:",
  );
  if (nextCookie) document.cookie = nextCookie;
}

export function queuePendingLead(formName: string, pagePath: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(
      PENDING_LEAD_KEY,
      JSON.stringify({ form_name: formName, page_path: pagePath }),
    );
  } catch {
    // Storage can throw in private mode or when cookies are blocked.
  }
}

export function takePendingLead(): PendingLead | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(PENDING_LEAD_KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(PENDING_LEAD_KEY);
    const parsed = JSON.parse(raw) as {
      form_name?: unknown;
      page_path?: unknown;
    };
    if (typeof parsed.form_name !== "string" || !parsed.form_name.trim()) {
      return null;
    }
    return {
      form_name: parsed.form_name,
      page_path: typeof parsed.page_path === "string" ? parsed.page_path : "",
    };
  } catch {
    return null;
  }
}

/** Call before sendLead so the 90-day cookie is on the request. */
export function beginLeadSubmit(): void {
  captureAttribution();
}

type LeadSubmitGuard = {
  /** Server dropped the submission. Do not fire ad conversions. */
  filtered?: boolean;
  honeypot?: string;
};

/**
 * Queue the thank-you conversion after sendLead returns success.
 * Filtered and honeypot submissions are fake successes and do not fire ads events.
 */
export function completeLeadSubmit(
  formName: string,
  honeypotOrGuard?: string | LeadSubmitGuard,
): void {
  if (typeof window === "undefined") return;
  const guard: LeadSubmitGuard =
    typeof honeypotOrGuard === "string"
      ? { honeypot: honeypotOrGuard }
      : (honeypotOrGuard ?? {});
  if (guard.filtered) return;
  if (guard.honeypot && guard.honeypot.trim() !== "") return;
  queuePendingLead(formName, window.location.pathname);
}

export function fireLeadConversion(
  pending: PendingLead,
  deps: {
    gtag: Gtag;
    fbq: Fbq;
    dataLayer: unknown[];
    eventId: string;
  },
): void {
  const { form_name, page_path } = pending;
  const event_id = deps.eventId;

  deps.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_SEND_TO,
    transaction_id: event_id,
  });
  deps.fbq(
    "track",
    "Lead",
    { content_name: form_name },
    { eventID: event_id },
  );
  deps.dataLayer.push({
    event: "generate_lead",
    form_name,
    page_path,
    event_id,
  });
}

/** Fire the queued lead once. Returns the event id, or null when nothing is queued. */
export function consumePendingLead(): string | null {
  if (typeof window === "undefined") return null;
  const pending = takePendingLead();
  if (!pending) return null;

  const eventId = crypto.randomUUID();
  window.dataLayer = window.dataLayer || [];

  const gtag: Gtag =
    typeof window.gtag === "function"
      ? window.gtag
      : function gtag() {
          window.dataLayer?.push(arguments);
        };

  const fbq: Fbq =
    typeof window.fbq === "function"
      ? window.fbq
      : function fbq() {
          // Pixel base code is loaded in the root layout. If this runs
          // before that snippet, keep the call from throwing.
        };

  fireLeadConversion(pending, {
    gtag,
    fbq,
    dataLayer: window.dataLayer,
    eventId,
  });

  return eventId;
}
