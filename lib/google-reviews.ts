/**
 * Verbatim Jones Valley Google reviews. Do not edit the wording, including
 * the truncated ellipsis on Jenna's review.
 */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?cid=14351832786343501424";

export const GOOGLE_RATING_LABEL = "★ 5.0 · 49 Google reviews";

export type GoogleReview = {
  name: string;
  text: string;
};

export const GOOGLE_REVIEWS = {
  brandy: {
    name: "Brandy T.",
    text: "The best infusion place ever! Such caring and nice staff! Very calming and peaceful place! Love the massage chairs too!",
  },
  allison: {
    name: "Allison H.",
    text: "This place is amazing! From the greeting at the front desk with the wellness water and hot towels by the wonderful and friendly staff to the consultation where you are truly listened to by the nurses. This service is unlike any in the area. Do yourself a favor and go enjoy the massage chairs too! You wont regret it!",
  },
  jenna: {
    name: "Jenna W.",
    text: "This IV lounge is outstanding. They offer a wide range of excellent services, and Ann, the nurse, took the time to thoroughly explain all my options and helped me choose the treatment that was right for me. The entire staff was kind, …",
  },
  tracey: {
    name: "Tracey S.",
    text: "This place and what they do is amazing! I received the Myers infusion and vitamin D3 shot, which only took about 40 minutes, and when I say my energy level is better automatically. I'm definitely going to become a member. They are a must try facility. Thank you Nurse Rachel for the amazing knowledge you shared with me.",
  },
} as const satisfies Record<string, GoogleReview>;

/** Three reviews for the intro-page blocks. Jenna is reserved for the pull-quote. */
export const GOOGLE_REVIEW_BLOCK = [
  GOOGLE_REVIEWS.allison,
  GOOGLE_REVIEWS.brandy,
  GOOGLE_REVIEWS.tracey,
] as const;
