import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";

/**
 * robots.txt — allow everything, including AI/answer-engine crawlers
 * (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). For AEO we WANT
 * those bots to read and cite the site, so nothing is disallowed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
