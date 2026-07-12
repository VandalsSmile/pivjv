import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

/** Paths that should never be crawled (admin uploader + APIs). */
const DISALLOW = ["/upload", "/api/"];

/**
 * Major search engines and AI / answer-engine crawlers we explicitly welcome.
 *
 * Search: Googlebot, Bingbot, DuckDuckBot, Applebot, Yandex, Baiduspider
 * AI / AEO: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot,
 *           Google-Extended, PerplexityBot, Applebot-Extended, Amazonbot,
 *           meta-externalagent, cohere-ai, CCBot, and related bots
 */
const FRIENDLY_BOTS = [
  // Search engines
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "Yandex",
  "Baiduspider",
  // OpenAI (ChatGPT search + training)
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic (Claude)
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google Gemini / AI Overviews training
  "Google-Extended",
  // Other AI / answer engines
  "PerplexityBot",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "FacebookBot",
  "cohere-ai",
  "CCBot",
  "Bytespider",
  "Diffbot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default for any crawler not listed below.
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      // Explicit welcome for Google + major AI crawlers (same public policy).
      {
        userAgent: FRIENDLY_BOTS,
        allow: "/",
        disallow: DISALLOW,
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
