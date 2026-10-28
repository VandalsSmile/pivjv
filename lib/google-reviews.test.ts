import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  GOOGLE_RATING_LABEL,
  GOOGLE_REVIEW_BLOCK,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_URL,
} from "./google-reviews.ts";
import { localBusinessSchema } from "./structured-data.ts";

const VERBATIM = {
  brandy:
    "The best infusion place ever! Such caring and nice staff! Very calming and peaceful place! Love the massage chairs too!",
  allison:
    "This place is amazing! From the greeting at the front desk with the wellness water and hot towels by the wonderful and friendly staff to the consultation where you are truly listened to by the nurses. This service is unlike any in the area. Do yourself a favor and go enjoy the massage chairs too! You wont regret it!",
  jenna:
    "This IV lounge is outstanding. They offer a wide range of excellent services, and Ann, the nurse, took the time to thoroughly explain all my options and helped me choose the treatment that was right for me. The entire staff was kind, …",
  tracey:
    "This place and what they do is amazing! I received the Myers infusion and vitamin D3 shot, which only took about 40 minutes, and when I say my energy level is better automatically. I'm definitely going to become a member. They are a must try facility. Thank you Nurse Rachel for the amazing knowledge you shared with me.",
} as const;

test("google review copy and names stay verbatim", () => {
  for (const key of Object.keys(VERBATIM) as (keyof typeof VERBATIM)[]) {
    assert.equal(GOOGLE_REVIEWS[key].text, VERBATIM[key]);
  }
  assert.equal(GOOGLE_REVIEWS.jenna.text.at(-1), "…");
  assert.equal(GOOGLE_REVIEWS.jenna.text.endsWith("..."), false);
  assert.deepEqual(
    Object.values(GOOGLE_REVIEWS).map((review) => review.name),
    ["Brandy T.", "Allison H.", "Jenna W.", "Tracey S."],
  );
  assert.deepEqual(
    GOOGLE_REVIEW_BLOCK.map((review) => review.name),
    ["Allison H.", "Brandy T.", "Tracey S."],
  );
  const blockNames: string[] = GOOGLE_REVIEW_BLOCK.map((review) => review.name);
  assert.equal(blockNames.includes("Jenna W."), false);
});

test("rating line links to the Jones Valley Google Maps CID", () => {
  assert.equal(GOOGLE_RATING_LABEL, "★ 5.0 · 49 Google reviews");
  assert.equal(
    GOOGLE_REVIEWS_URL,
    "https://www.google.com/maps?cid=14351832786343501424",
  );
  const ui = readFileSync(
    new URL("../components/google-reviews.tsx", import.meta.url),
    "utf8",
  );
  assert.match(ui, /target="_blank"/);
  assert.match(ui, /rel="noopener noreferrer"/);
  assert.match(ui, /GOOGLE_RATING_LABEL/);
  assert.equal(ui.includes("reviewCount"), false);
  assert.equal(ui.includes('"Review"'), false);
});

test("site aggregateRating is 5.0 from 49 reviews and has no Review entities", () => {
  const schema = localBusinessSchema();
  assert.equal(schema.aggregateRating.ratingValue, "5.0");
  assert.equal(schema.aggregateRating.reviewCount, "49");
  assert.equal("review" in schema, false);
  const serialized = JSON.stringify(schema);
  assert.equal(serialized.includes('"@type":"Review"'), false);
  assert.equal(serialized.includes('"reviewCount":"6"'), false);
});
