import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ARTICLES, type Article } from "@/lib/articles";
import { CtaSection } from "@/components/sections/cta-section";

export function ArticleLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const article = ARTICLES.find((a) => a.slug === slug) as Article;
  const related = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/learn-more"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resource Center
            </Link>
            <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
              {article.category} &middot; {article.readTime}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      <article className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto prose-article">{children}</div>
        </div>
      </article>

      <section className="section-padding bg-background-alt">
        <div className="container-custom mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Keep Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/learn-more/${a.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                  {a.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-2 text-balance">
                  {a.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
