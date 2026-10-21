import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  ATTRIBUTION_COOKIE,
  ATTRIBUTION_MAX_AGE_SECONDS,
  GOOGLE_ADS_ID,
  GOOGLE_ADS_SEND_TO,
  META_PIXEL_ID,
  appendAttributionFields,
  attributionFieldsFromValue,
  buildAttributionCookie,
  completeLeadSubmit,
  consumePendingLead,
  fireLeadConversion,
  parseAttributionCookie,
} from "./tracking.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next" || entry === ".git") {
      continue;
    }
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, acc);
    else if (/\.(tsx|ts|jsx|js|html)$/.test(entry) && !/\.test\.ts$/.test(entry)) {
      acc.push(full);
    }
  }
  return acc;
}

test("attribution cookie stores click ids and utm params for 90 days", () => {
  const href =
    "https://www.huntsvilleiv.com/contact?gclid=abc123&utm_source=google&utm_medium=cpc&fbclid=fb1&unrelated=no";
  const cookie = buildAttributionCookie(href, "", true);
  assert.ok(cookie);
  assert.match(cookie, new RegExp(`^${ATTRIBUTION_COOKIE}=`));
  assert.match(cookie, /Max-Age=7776000/);
  assert.equal(ATTRIBUTION_MAX_AGE_SECONDS, 7776000);
  assert.match(cookie, /SameSite=Lax/);
  assert.match(cookie, /Secure/);
  assert.doesNotMatch(cookie, /Domain=/);

  const stored = parseAttributionCookie(cookie.split(";")[0]);
  assert.deepEqual(stored, {
    gclid: "abc123",
    utm_source: "google",
    utm_medium: "cpc",
    fbclid: "fb1",
  });
  assert.equal(stored.unrelated, undefined);
});

test("attribution cookie merges new params and keeps existing ones", () => {
  const first = buildAttributionCookie(
    "https://www.huntsvilleiv.com/?fbclid=keep-me&utm_campaign=spring",
    "",
    false,
  );
  assert.ok(first);
  assert.doesNotMatch(first, /Secure/);

  const second = buildAttributionCookie(
    "https://www.huntsvilleiv.com/book?gclid=new-click&gbraid=gb&wbraid=wb",
    first.split(";")[0],
    true,
  );
  assert.ok(second);
  const stored = parseAttributionCookie(second.split(";")[0]);
  assert.equal(stored.fbclid, "keep-me");
  assert.equal(stored.utm_campaign, "spring");
  assert.equal(stored.gclid, "new-click");
  assert.equal(stored.gbraid, "gb");
  assert.equal(stored.wbraid, "wb");
});

test("attribution cookie is left alone when the URL has no tracked params", () => {
  const existing = buildAttributionCookie(
    "https://www.huntsvilleiv.com/?gclid=stay",
    "",
    true,
  );
  assert.equal(
    buildAttributionCookie(
      "https://www.huntsvilleiv.com/menu",
      existing!.split(";")[0],
      true,
    ),
    null,
  );
});

test("attribution fields are appended without clobbering existing labels", () => {
  const fields = attributionFieldsFromValue(
    JSON.stringify({
      gclid: "g1",
      wbraid: "w1",
      fbclid: "f1",
      gbraid: "b1",
      utm_source: "google",
      utm_campaign: "brand",
      ignored: "nope",
    }),
  );
  assert.deepEqual(
    fields.map((field) => field.label),
    ["gclid", "gbraid", "wbraid", "fbclid", "utm_campaign", "utm_source"],
  );

  const merged = appendAttributionFields(
    [
      { label: "Name", value: "Ada" },
      { label: "gclid", value: "from-form" },
    ],
    fields,
  );
  assert.equal(merged.find((field) => field.label === "gclid")?.value, "from-form");
  assert.equal(merged.find((field) => field.label === "utm_source")?.value, "google");
  assert.equal(merged[0].label, "Name");
});

test("mocked successful submit fires conversion and Lead with one event id", () => {
  const gtagCalls: unknown[][] = [];
  const fbqCalls: unknown[][] = [];
  const dataLayer: unknown[] = [];
  const eventId = "11111111-2222-4333-8444-555555555555";

  fireLeadConversion(
    { form_name: "Contact", page_path: "/contact" },
    {
      gtag: (...args) => {
        gtagCalls.push(args);
      },
      fbq: (...args) => {
        fbqCalls.push(args);
      },
      dataLayer,
      eventId,
    },
  );

  assert.equal(gtagCalls.length, 1);
  assert.deepEqual(gtagCalls[0], [
    "event",
    "conversion",
    { send_to: GOOGLE_ADS_SEND_TO, transaction_id: eventId },
  ]);
  assert.deepEqual(fbqCalls[0], [
    "track",
    "Lead",
    { content_name: "Contact" },
    { eventID: eventId },
  ]);
  assert.deepEqual(dataLayer, [
    {
      event: "generate_lead",
      form_name: "Contact",
      page_path: "/contact",
      event_id: eventId,
    },
  ]);
  assert.equal(
    (gtagCalls[0][2] as { transaction_id: string }).transaction_id,
    (fbqCalls[0][3] as { eventID: string }).eventID,
  );
});

test("consumePendingLead fires once and a direct visit does not", () => {
  const store = new Map<string, string>();
  const gtagCalls: unknown[][] = [];
  const fbqCalls: unknown[][] = [];
  const dataLayer: unknown[] = [];

  const previousWindow = globalThis.window;
  Object.assign(globalThis, {
    window: {
      location: {
        pathname: "/specials",
        href: "https://www.huntsvilleiv.com/specials",
        protocol: "https:",
      },
      sessionStorage: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => {
          store.set(key, value);
        },
        removeItem: (key: string) => {
          store.delete(key);
        },
      },
      dataLayer,
      gtag: (...args: unknown[]) => {
        gtagCalls.push(args);
      },
      fbq: (...args: unknown[]) => {
        fbqCalls.push(args);
      },
    },
  });

  try {
    assert.equal(consumePendingLead(), null);

    completeLeadSubmit("Specials", "");
    const eventId = consumePendingLead();
    assert.ok(eventId);
    assert.equal(gtagCalls.length, 1);
    assert.equal(fbqCalls.length, 1);
    assert.equal(
      (gtagCalls[0][2] as { transaction_id: string }).transaction_id,
      eventId,
    );
    assert.equal((fbqCalls[0][3] as { eventID: string }).eventID, eventId);
    assert.equal((fbqCalls[0][2] as { content_name: string }).content_name, "Specials");
    assert.equal(
      (dataLayer[0] as { event_id: string; page_path: string }).page_path,
      "/specials",
    );

    assert.equal(consumePendingLead(), null);
    assert.equal(gtagCalls.length, 1);
    assert.equal(fbqCalls.length, 1);

    completeLeadSubmit("Contact", "bot-company");
    assert.equal(consumePendingLead(), null);
  } finally {
    if (previousWindow === undefined) {
      delete (globalThis as { window?: unknown }).window;
    } else {
      globalThis.window = previousWindow;
    }
  }
});

test("layout loads gtag and the meta pixel once and omits GTM-WFC2K873", () => {
  const sources = walk(root).map((file) => readFileSync(file, "utf8"));
  const all = sources.join("\n");

  assert.equal(all.split("gtag/js?id=").length - 1, 1);
  assert.equal(all.split("fbq('init'").length - 1, 1);
  assert.equal(all.split("fbq('track', 'PageView')").length - 1, 1);
  assert.equal(all.split("GTM-WFC2K873").length - 1, 0);
  assert.equal(all.split("googletagmanager.com/gtm.js").length - 1, 0);
  assert.equal(all.split(GOOGLE_ADS_ID).length - 1, 2);
  assert.equal(all.split(META_PIXEL_ID).length - 1, 1);
  assert.match(all, new RegExp(GOOGLE_ADS_SEND_TO.replace(/\//g, "\\/")));

  const layout = readFileSync(path.join(root, "app/layout.tsx"), "utf8");
  assert.match(layout, /statcounter/);
  assert.match(layout, /chatway/);
  assert.match(layout, /pintrk/);
});
