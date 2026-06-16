import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { CONTACT } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Resource Center | IV Therapy Guides & Education",
  description: `Learn the science behind IV therapy. Browse beginner guides, comparisons, and wellness articles from Prime IV Hydration & Wellness in ${CONTACT.address.city}, AL.`,
  keywords: [
    "IV therapy guide",
    "IV therapy education",
    "IV therapy resource center",
    "Huntsville AL IV therapy",
  ],
};

export default function LearnMorePage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Resource Center
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Learn the Science Behind IV Therapy
            </h1>
            <p className="text-white/80 text-lg">
              Honest, easy-to-understand guides to help you make confident
              decisions about your wellness.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/learn-more/${article.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-border p-6 flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                  {article.category} &middot; {article.readTime}
                </span>
                <h2 className="text-xl font-bold text-foreground mb-2 text-balance">
                  {article.title}
                </h2>
                <p className="text-foreground-muted text-sm mb-4 flex-1">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
