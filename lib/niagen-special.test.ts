import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { NAD_HOLIDAY_SPECIAL } from "./constants.ts";
import {
  holidaySalePrice,
  holidaySpecialItems,
  holidaySpecialKnowledgeLines,
  holidaySpecialOfferSchema,
  holidaySpecialRangeLabel,
  isHolidaySpecialActive,
} from "./niagen-special.ts";

const before = new Date("2026-10-31T18:00:00Z");
const firstMorning = new Date("2026-11-01T06:30:00Z");
const during = new Date("2026-12-15T18:00:00Z");
const lastEvening = new Date("2027-01-01T04:30:00Z");
const after = new Date("2027-01-01T18:00:00Z");

test("holiday special config is 50% off Nov 1 through Dec 31", () => {
  assert.equal(NAD_HOLIDAY_SPECIAL.percentOff, 50);
  assert.equal(NAD_HOLIDAY_SPECIAL.startsOn, "2026-11-01");
  assert.equal(NAD_HOLIDAY_SPECIAL.endsOn, "2026-12-31");
  assert.equal(holidaySpecialRangeLabel(), "November 1 – December 31, 2026");
});

test("sale prices are half of the menu singles", () => {
  assert.equal(holidaySalePrice("$150"), "$75");
  assert.equal(holidaySalePrice("$149"), "$74.50");
  assert.equal(holidaySalePrice("$499"), "$249.50");
  const items = holidaySpecialItems();
  const find = (group: string, dose: string) =>
    items.find((item) => item.group === group && item.dose === dose);
  assert.equal(find("NAD+ injection", "100mg")?.sale, "$37.50");
  assert.equal(find("Niagen injection", "50mg")?.sale, "$75");
  assert.equal(find("Niagen injection", "100mg")?.sale, "$125");
  assert.equal(find("NAD+ infusion", "500mg")?.sale, "$249.50");
  assert.equal(find("NAD+ infusion", "1,000mg")?.sale, "$360");
});

test("special is active only within the window in Huntsville", () => {
  assert.equal(isHolidaySpecialActive(before), false);
  assert.equal(isHolidaySpecialActive(firstMorning), true);
  assert.equal(isHolidaySpecialActive(during), true);
  assert.equal(isHolidaySpecialActive(lastEvening), true);
  assert.equal(isHolidaySpecialActive(after), false);
});

test("offer schema uses sale prices only during the window", () => {
  const live = holidaySpecialOfferSchema("/nad-niagen-special", during);
  assert.equal(live.lowPrice, "37.5");
  assert.equal(live.highPrice, "360");
  assert.equal(live.priceValidUntil, "2026-12-31");
  const ended = holidaySpecialOfferSchema("/nad-niagen-special", after);
  assert.equal(ended.lowPrice, "75");
  assert.equal("priceValidUntil" in ended, false);
});

test("chat knowledge quotes the holiday special and the clinic phone", () => {
  const live = holidaySpecialKnowledgeLines(during).join("\n");
  assert.match(live, /50% off/);
  assert.match(live, /\(256\) 678-0033 to book/);
  assert.match(live, /Niagen injection 50mg \$75 \(reg\. \$150\)/);
  assert.match(live, /Do not invent a pack price/);
  assert.match(live, /injection-only NAD\+ or Niagen booking/);
  const ended = holidaySpecialKnowledgeLines(after).join("\n");
  assert.match(ended, /ended on December 31, 2026/);
  assert.equal(ended.includes("$75"), false);
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
  assert.match(landing, /NAD_HOLIDAY_SPECIAL/);
  assert.match(article, /NAD_HOLIDAY_SPECIAL/);
});
