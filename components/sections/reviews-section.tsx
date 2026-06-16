import { Star } from "lucide-react";
import Link from "next/link";
import { REVIEWS } from "@/lib/constants";

export function ReviewsSection() {
  return (
    <section id="testimonials" className="section-padding bg-background scroll-mt-24">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>

          <div className="inline-flex items-center gap-2 bg-background-alt rounded-full px-4 py-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-bold">5.0</span>
            <span className="text-foreground-muted">Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-border"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground-muted mb-2">
                {review.date}
              </p>
              <p className="text-foreground mb-4 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {review.initials}
                </div>
                <span className="font-medium text-foreground">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-foreground-muted mb-4">
            Had a great experience? We&apos;d love to hear from you!
          </p>
          <Link
            href="https://g.page/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-primary text-primary hover:bg-primary hover:text-white"
          >
            Write a Review on Google
          </Link>
        </div>
      </div>
    </section>
  );
}
