import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { ARTICLES } from "@/lib/articles";

const SITE_URL = SITE_CONFIG.url;

// Static, indexable routes with relative priority + change frequency hints.
const STATIC_ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/intro-offer", priority: 0.9, changeFrequency: "weekly" },
  { path: "/menu", priority: 0.9, changeFrequency: "weekly" },
  { path: "/iv-therapy", priority: 0.9, changeFrequency: "weekly" },
  { path: "/medical-weight-loss", priority: 0.9, changeFrequency: "weekly" },
  { path: "/nad-niagen-special", priority: 0.8, changeFrequency: "weekly" },
  { path: "/myers-iv-therapy", priority: 0.8, changeFrequency: "weekly" },
  { path: "/memberships", priority: 0.8, changeFrequency: "weekly" },
  { path: "/specials", priority: 0.8, changeFrequency: "weekly" },
  { path: "/book", priority: 0.8, changeFrequency: "monthly" },
  { path: "/iv-matcher", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/learn-more", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => {
    const parsed = new Date(article.date);
    return {
      url: `${SITE_URL}/learn-more/${article.slug}`,
      lastModified: Number.isNaN(parsed.getTime()) ? now : parsed,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticEntries, ...articleEntries];
}
