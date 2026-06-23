export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO, for <time> + structured data
  dateDisplay: string;
  category: string;
  readingTime: string;
};

/**
 * Single source of truth for blog posts. The index reads this list; each post
 * page looks up its own entry by slug. To add a post: add an entry here and
 * create app/blog/<slug>/page.tsx.
 */
export const POSTS: PostMeta[] = [
  {
    slug: "how-much-does-a-website-cost-uk",
    title: "How much does a website cost in the UK? (2026 guide)",
    excerpt:
      "What you can expect to pay for a business website in the UK, what actually drives the price, and how to get real value instead of just a cheap site.",
    date: "2026-06-23",
    dateDisplay: "23 June 2026",
    category: "Guides",
    readingTime: "6 min read",
  },
  {
    slug: "how-to-get-found-on-google",
    title: "How to get your business found on Google: a local SEO guide",
    excerpt:
      "A plain-English guide to local SEO for small businesses in Devon and the South West — how to show up when nearby customers search for what you do.",
    date: "2026-06-22",
    dateDisplay: "22 June 2026",
    category: "SEO",
    readingTime: "7 min read",
  },
  {
    slug: "signs-you-need-a-website-redesign",
    title: "7 signs it's time to redesign your website",
    excerpt:
      "If your website is slow, hard to use on mobile, or no longer brings in enquiries, it could be costing you customers. Here are the signs to watch for.",
    date: "2026-06-21",
    dateDisplay: "21 June 2026",
    category: "Web Design",
    readingTime: "5 min read",
  },
  {
    slug: "what-is-aeo",
    title: "What is AEO? Answer Engine Optimisation, explained",
    excerpt:
      "Search is changing. Here's how to get your business named by AI answer engines like ChatGPT and Google's AI overviews — not just ranked on page one.",
    date: "2026-06-23",
    dateDisplay: "23 June 2026",
    category: "SEO",
    readingTime: "5 min read",
  },
  {
    slug: "website-speed",
    title: "Why a fast website wins you more customers",
    excerpt:
      "A slow site quietly costs you enquiries every day. Here's what speed really means, why it matters for local businesses, and how to tell if yours is too slow.",
    date: "2026-06-20",
    dateDisplay: "20 June 2026",
    category: "Performance",
    readingTime: "4 min read",
  },
];

export function getPost(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}
