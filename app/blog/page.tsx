import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/Badge";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Charged Studio",
  description:
    "Insights on web design, SEO, AEO, and digital growth for businesses across Devon and the South West.",
  alternates: { canonical: "https://chargedstudio.co.uk/blog" },
  openGraph: {
    title: "Blog — Charged Studio",
    description:
      "Insights on web design, SEO, AEO, and digital growth from Charged Studio.",
    url: "https://chargedstudio.co.uk/blog",
    siteName: "Charged Studio",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:pt-40">
      <Badge>Blog</Badge>
      <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-charged-light sm:text-5xl lg:text-6xl">
        Insights on web, SEO &amp; growth
      </h1>
      <p className="mt-5 max-w-2xl font-inter text-lg leading-relaxed text-charged-light/70">
        Plain-English thinking on web design, getting found online, and turning
        your digital presence into real enquiries.
      </p>

      <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex h-full flex-col rounded-xl border border-white/10 bg-charged-navy/40 p-7 transition-colors hover:border-white/20"
            >
              <p className="font-inter text-xs font-semibold uppercase tracking-wider text-charged-light/50">
                {post.category} · {post.readingTime}
              </p>
              <h2 className="mt-3 font-inter text-xl font-bold leading-snug text-charged-light">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 font-inter text-base leading-relaxed text-charged-light/70">
                {post.excerpt}
              </p>
              <span className="mt-6 font-inter text-sm font-bold uppercase tracking-widest text-charged-yellow">
                Read article →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
