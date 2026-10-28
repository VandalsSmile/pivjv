import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { NIAGEN_50MG_SPECIAL } from "./constants.ts";
import { NIAGEN_INJECTIONS } from "./menu-data.ts";
import {
  isNiagen50SpecialActive,
  niagen50KnowledgeLine,
  niagen50OfferSchema,
  niagenSpecialEndLabel,
} from "./niagen-special.ts";

const during = new Date("2026-11-15T18:00:00Z");
const lastEvening = new Date("2026-12-01T04:30:00Z");
const after = new Date("2026-12-01T18:00:00Z");

test("50mg Niagen standard prices stay on the menu data", () => {
  const row = NIAGEN_INJECTIONS.find((item) => item.dose === "50mg");
  assert.ok(row);
  assert.equal(row.single, "$150");
  assert.equal(row.pack, "$525");
  assert.equal(NIAGEN_50MG_SPECIAL.price, 85);
  assert.equal(NIAGEN_50MG_SPECIAL.endsOn, "2026-11-30");
  assert.equal(niagenSpecialEndLabel(), "November 30, 2026");
});

test("November special is active through the end date in Huntsville", () => {
  assert.equal(isNiagen50SpecialActive(during), true);
  assert.equal(isNiagen50SpecialActive(lastEvening), true);
  assert.equal(isNiagen50SpecialActive(after), false);
});

test("offer schema uses the $85 special until it ends", () => {
  const live = niagen50OfferSchema("/nad-niagen-special", during);
  assert.equal(live.price, "85");
  assert.equal(live.priceCurrency, "USD");
  assert.equal(live.priceValidUntil, "2026-11-30");
  const ended = niagen50OfferSchema("/nad-niagen-special", after);
  assert.equal(ended.price, "150");
  assert.equal("priceValidUntil" in ended, false);
});

test("chat knowledge quotes $85 and the clinic phone during November", () => {
  const live = niagen50KnowledgeLine(during);
  assert.match(live, /\$85/);
  assert.match(live, /November 2026 special/);
  assert.match(live, /\(256\) 678-0033 to book/);
  assert.match(live, /even better deal/);
  assert.match(live, /Do not invent a pack price/);
  assert.match(live, /injection-only Niagen booking/);
  const ended = niagen50KnowledgeLine(after);
  assert.match(ended, /special ended/);
  assert.match(ended, /single \$150/);
  assert.equal(ended.includes("Quote $85"), false);
});

test("Niagen landing and learn-more pages do not mention the telehealth fee", () => {
  const landing = readFileSync(
    new URL("../app/nad-niagen-special/page.tsx", import.meta.url),
    "utf8",
  );
  const article = readFileSync(
    new URL("../app/learn-more/niagen-nad-injections/page.tsx", import.meta.url),
    "utf8",
  );
  for (const source of [landing, article]) {
    assert.equal(/telehealth/i.test(source), false);
    assert.equal(source.includes("medicalClearance"), false);
  }
  assert.match(landing, /NIAGEN_50MG_SPECIAL/);
  assert.match(article, /NIAGEN_50MG_SPECIAL/);
});
