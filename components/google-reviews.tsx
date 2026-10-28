import { Star } from "lucide-react";
import {
  GOOGLE_RATING_LABEL,
  GOOGLE_REVIEWS_URL,
  type GoogleReview,
} from "@/lib/google-reviews";
import { cn } from "@/lib/utils";

const STAR_KEYS = [0, 1, 2, 3, 4] as const;

type Tone = "light" | "dark";

function GoogleStars({ tone = "light" }: { tone?: Tone }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {STAR_KEYS.map((key) => (
        <Star
          key={key}
          className={cn(
            "size-3.5",
            tone === "dark"
              ? "fill-yellow-300 text-yellow-300"
              : "fill-amber-700 text-amber-700",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function GoogleReviewLink({ tone = "light" }: { tone?: Tone }) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-sm font-medium underline decoration-1 underline-offset-2",
        tone === "dark"
          ? "text-white hover:text-secondary-light"
          : "text-primary hover:text-secondary-dark",
      )}
    >
      Google review
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function GoogleRatingLink({
  tone = "light",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const onDark = tone === "dark";
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block whitespace-nowrap text-sm font-medium leading-5 underline decoration-1 underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2",
        onDark
          ? "text-white focus-visible:outline-white hover:text-secondary-light"
          : "text-primary focus-visible:outline-primary hover:text-secondary-dark",
        className,
      )}
    >
      {GOOGLE_RATING_LABEL}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function ReviewAttribution({
  review,
  tone = "light",
}: {
  review: GoogleReview;
  tone?: Tone;
}) {
  return (
    <figcaption className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
      <GoogleStars tone={tone} />
      <span
        className={cn(
          "text-sm font-semibold",
          tone === "dark" ? "text-white" : "text-foreground",
        )}
      >
        {review.name}
      </span>
      <GoogleReviewLink tone={tone} />
    </figcaption>
  );
}

export function GoogleReviewPullQuote({
  review,
  tone = "light",
  className,
}: {
  review: GoogleReview;
  tone?: Tone;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "rounded-2xl border p-4 sm:p-5",
        tone === "dark"
          ? "border-white/25 bg-white/10 text-white"
          : "border-border bg-white text-foreground shadow-sm",
        className,
      )}
    >
      <blockquote
        className={cn(
          "text-sm leading-relaxed",
          tone === "dark" ? "text-white" : "text-foreground",
        )}
      >
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
      <ReviewAttribution review={review} tone={tone} />
    </figure>
  );
}

export function GoogleReviewCard({ review }: { review: GoogleReview }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-white p-5 shadow-sm">
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
      <ReviewAttribution review={review} />
    </figure>
  );
}

export function GoogleReviewSection({
  reviews,
  pullQuote,
  className,
}: {
  reviews: readonly GoogleReview[];
  pullQuote?: GoogleReview;
  className?: string;
}) {
  return (
    <section
      aria-labelledby="google-reviews-heading"
      className={cn("section-padding bg-background-alt", className)}
    >
      <div className="container-custom mx-auto">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <GoogleRatingLink />
          <h2
            id="google-reviews-heading"
            className="mt-3 text-3xl font-bold text-balance md:text-4xl"
          >
            What guests say
          </h2>
        </div>
        {pullQuote ? (
          <GoogleReviewPullQuote
            review={pullQuote}
            className="mx-auto mb-8 max-w-3xl"
          />
        ) : null}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <GoogleReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
