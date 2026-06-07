import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Blog | IV Therapy Tips, Wellness & Recovery Guides",
  description:
    "Read the Prime IV Hydration & Wellness blog for expert tips on IV therapy, hydration, recovery, immunity, and healthy living in Huntsville, AL.",
  keywords: [
    "IV therapy blog",
    "wellness tips",
    "hydration guide",
    "recovery tips",
    "Huntsville AL",
    "Prime IV blog",
  ],
};

const POSTS = [
  {
    slug: "what-is-a-myers-cocktail",
    title: "What Is a Myers' Cocktail and Why Is It So Popular?",
    excerpt:
      "Discover the history and benefits of the most time-tested IV therapy in the world—and why it remains a client favorite.",
    category: "IV Therapy 101",
    date: "June 2, 2026",
  },
  {
    slug: "iv-therapy-for-athletes",
    title: "IV Therapy for Athletes: Recover Faster, Perform Better",
    excerpt:
      "Learn how targeted IV drips help athletes reduce soreness, replenish electrolytes, and get back to peak performance.",
    category: "Fitness & Recovery",
    date: "May 24, 2026",
  },
  {
    slug: "benefits-of-nad-therapy",
    title: "The Benefits of NAD+ Therapy for Energy & Longevity",
    excerpt:
      "Explore how NAD+ supports cellular energy, mental clarity, and healthy aging—and what to expect from your session.",
    category: "Wellness",
    date: "May 15, 2026",
  },
  {
    slug: "beat-summer-dehydration",
    title: "5 Ways to Beat Summer Dehydration in Huntsville",
    excerpt:
      "Hot Alabama summers can leave you drained. Here's how to stay hydrated and energized all season long.",
    category: "Hydration",
    date: "May 8, 2026",
  },
  {
    slug: "hangover-recovery-guide",
    title: "The Ultimate Hangover Recovery Guide",
    excerpt:
      "From rapid rehydration to nausea relief, here's how IV therapy helps you bounce back after a long night.",
    category: "Recovery",
    date: "April 30, 2026",
  },
  {
    slug: "iv-therapy-for-immunity",
    title: "Boost Your Immune System With IV Therapy",
    excerpt:
      "High-dose vitamin C, zinc, and antioxidants can help your body stay resilient. Here's what you need to know.",
    category: "Immunity",
    date: "April 22, 2026",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              Learn More
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The Prime IV Wellness Blog
            </h1>
            <p className="text-white/80 text-lg">
              Expert tips, guides, and insights on IV therapy, hydration,
              recovery, and living your healthiest life.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <Link
            href={`/blog/${featured.slug}`}
            className="block bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-sm text-foreground-muted">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
                {featured.title}
              </h2>
              <p className="text-foreground-muted mb-4 max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Calendar className="w-4 h-4" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="section-padding bg-background-alt pt-0">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col bg-white rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 text-balance">
                    {post.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
