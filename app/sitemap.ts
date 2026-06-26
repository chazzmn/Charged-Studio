import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";
import { serviceSlugs } from "@/app/services/services-data";
import { POSTS } from "@/app/blog/posts";

/**
 * sitemap.xml — generated from the same data the pages render from, so it
 * never drifts. Add a route here when you add a top-level page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/start-a-project", priority: 0.8, changeFrequency: "yearly" },
    { path: "/audit", priority: 0.8, changeFrequency: "yearly" },
    { path: "/web-design-exeter", priority: 0.9, changeFrequency: "monthly" },
    { path: "/devon-nurseries", priority: 0.6, changeFrequency: "yearly" },
    { path: "/tend", priority: 0.6, changeFrequency: "yearly" },
    { path: "/chair", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const services: MetadataRoute.Sitemap = serviceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...services, ...posts];
}
