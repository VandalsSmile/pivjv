import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  MIN_SUBMIT_MS,
  assessLeadSubmission,
  createLeadGuardStore,
  createLeadToken,
  type LeadAssessmentInput,
} from "./lead-guard.ts";

const NOW = Date.parse("2026-04-24T15:00:00.000Z");
const ALLOWED_ORIGIN = "https://www.huntsvilleiv.com";

function legit(overrides: LeadAssessmentInput = {}): LeadAssessmentInput {
  return {
    name: "Jane Porter",
    email: "jane.porter@yahoo.com",
    phone: "2566780033",
    officeExtension: "",
    formToken: createLeadToken(NOW - 5_000),
    origin: ALLOWED_ORIGIN,
    ip: "203.0.113.10",
    now: NOW,
    ...overrides,
  };
}

test("a legit payload with a valid token passes", () => {
  const reason = assessLeadSubmission(legit(), createLeadGuardStore());
  assert.equal(reason, null);
});

test("allowed origins include apex, www, localhost, and Vercel previews", () => {
  for (const origin of [
    "https://huntsvilleiv.com",
    "https://www.huntsvilleiv.com",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://pivjv-git-preview-team.vercel.app",
  ]) {
    assert.equal(
      assessLeadSubmission(
        legit({ origin, ip: `198.51.100.${origin.length % 50}` }),
        createLeadGuardStore(),
      ),
      null,
      origin,
    );
  }
});

test("the known spam example with no token is rejected", () => {
  const reason = assessLeadSubmission(
    {
      name: "abc def",
      email: "abcdef@gmail.com",
      phone: "6505434800",
      origin: ALLOWED_ORIGIN,
      ip: "203.0.113.20",
      now: NOW,
    },
    createLeadGuardStore(),
  );
  assert.equal(reason, "missing-token");
});

test("the known spam example is still rejected when it has a valid token", () => {
  const reason = assessLeadSubmission(
    legit({
      name: "abc def",
      email: "abcdef@gmail.com",
      phone: "6505434800",
      ip: "203.0.113.21",
    }),
    createLeadGuardStore(),
  );
  assert.match(reason ?? "", /^name-/);
});

test("placeholder gmail addresses and the spam phone shape are judged separately", () => {
  const store = createLeadGuardStore();
  assert.match(
    assessLeadSubmission(
      legit({ email: "abcdef@gmail.com", ip: "203.0.113.22" }),
      store,
    ) ?? "",
    /^email-/,
  );
  assert.equal(
    assessLeadSubmission(
      legit({
        email: "someone.else@yahoo.com",
        phone: "6505434800",
        ip: "203.0.113.23",
      }),
      createLeadGuardStore(),
    ),
    null,
  );
  assert.equal(
    assessLeadSubmission(
      legit({ phone: "2565550104", ip: "203.0.113.24" }),
      createLeadGuardStore(),
    ),
    "phone-test-range",
  );
});

test("a payload with the decoy field filled is rejected", () => {
  const reason = assessLeadSubmission(
    legit({ officeExtension: "suite 400", ip: "203.0.113.30" }),
    createLeadGuardStore(),
  );
  assert.equal(reason, "honeypot");
});

test("a legacy honeypot value is rejected too", () => {
  assert.equal(
    assessLeadSubmission(
      legit({ honeypot: "filled", ip: "203.0.113.31" }),
      createLeadGuardStore(),
    ),
    "honeypot",
  );
});

test("a too-fast submit is rejected", () => {
  const reason = assessLeadSubmission(
    legit({
      formToken: createLeadToken(NOW - (MIN_SUBMIT_MS - 1)),
      ip: "203.0.113.40",
    }),
    createLeadGuardStore(),
  );
  assert.equal(reason, "too-fast");
});

test("a cross-origin POST is rejected and a missing origin is rejected", () => {
  assert.equal(
    assessLeadSubmission(
      legit({ origin: "https://leadbot.example", ip: "203.0.113.50" }),
      createLeadGuardStore(),
    ),
    "cross-origin",
  );
  assert.equal(
    assessLeadSubmission(
      legit({ origin: null, ip: "203.0.113.51" }),
      createLeadGuardStore(),
    ),
    "missing-origin",
  );
  assert.equal(
    assessLeadSubmission(
      legit({
        referer: "https://leadbot.example/book",
        ip: "203.0.113.52",
      }),
      createLeadGuardStore(),
    ),
    "cross-origin",
  );
});

test("the same phone or email is dropped for 24 hours", () => {
  const store = createLeadGuardStore();
  assert.equal(
    assessLeadSubmission(legit({ ip: "203.0.113.60" }), store),
    null,
  );
  assert.equal(
    assessLeadSubmission(
      legit({
        email: "different.person@yahoo.com",
        ip: "203.0.113.61",
      }),
      store,
    ),
    "duplicate",
  );
  assert.equal(
    assessLeadSubmission(
      legit({
        phone: "2563271048",
        ip: "203.0.113.62",
      }),
      store,
    ),
    "duplicate",
  );
});

test("an IP can submit at most 3 leads in 10 minutes", () => {
  const store = createLeadGuardStore();
  for (let i = 0; i < 3; i++) {
    assert.equal(
      assessLeadSubmission(
        legit({
          email: `guest${i}@yahoo.com`,
          phone: `25667810${10 + i}`,
          ip: "203.0.113.70",
        }),
        store,
      ),
      null,
    );
  }
  assert.equal(
    assessLeadSubmission(
      legit({
        email: "guest4@yahoo.com",
        phone: "2566781020",
        ip: "203.0.113.70",
      }),
      store,
    ),
    "rate-limit",
  );
});

test("sendLead runs the guard before the alert email and the CRM webhook", () => {
  const source = readFileSync(
    fileURLToPath(new URL("../app/actions/send-lead.ts", import.meta.url)),
    "utf8",
  );
  const guardAt = source.indexOf("assessLeadSubmission");
  const filteredAt = source.indexOf("filtered: true");
  const resendAt = source.indexOf("resend.emails.send");
  const forwardAt = source.indexOf("const webhookForward = isAppointment");
  assert.ok(guardAt > 0);
  assert.ok(filteredAt > guardAt);
  assert.ok(filteredAt < resendAt);
  assert.ok(filteredAt < forwardAt);
});
