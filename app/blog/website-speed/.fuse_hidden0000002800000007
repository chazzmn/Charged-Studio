import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";
import { getPost } from "../posts";

const post = getPost("website-speed")!;

export const metadata: Metadata = {
  title: `${post.title} — Charged Studio`,
  description: post.excerpt,
  alternates: { canonical: `https://chargedstudio.co.uk/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url: `https://chargedstudio.co.uk/blog/${post.slug}`,
    siteName: "Charged Studio",
    type: "article",
  },
};

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>
        Here&apos;s an uncomfortable truth: most people won&apos;t wait for a slow
        website. If a page takes too long to load, they hit back and try the next
        result — and you never even knew they were there. For a local business,
        that&apos;s a customer lost in silence, every single day.
      </p>
      <p>
        Speed isn&apos;t a nice-to-have or a developer&apos;s vanity metric.
        It&apos;s one of the few things that affects how many people find you,
        how many stay, and how many actually get in touch.
      </p>

      <h2>What &ldquo;fast&rdquo; actually means</h2>
      <p>
        Google measures real-world speed with a set of metrics called Core Web
        Vitals. You don&apos;t need to memorise them, but they&apos;re worth
        knowing in plain English:
      </p>
      <ul>
        <li>
          <strong>Loading</strong> — how quickly the main content appears. People
          should see something useful almost immediately.
        </li>
        <li>
          <strong>Responsiveness</strong> — how fast the page reacts when someone
          taps or clicks. Nothing feels worse than a frozen button.
        </li>
        <li>
          <strong>Stability</strong> — whether things jump around as the page
          loads. Content shifting under your thumb is a quick way to lose trust.
        </li>
      </ul>

      <h2>Why it matters more than you think</h2>
      <p>
        Speed hits you in three places at once. It&apos;s a{" "}
        <strong>ranking factor</strong>, so a faster site can climb above a slower
        competitor. It&apos;s a <strong>first impression</strong> — a snappy site
        signals a sharp, professional business before a word is read. And
        it&apos;s <strong>conversions</strong>: the easier and faster it is to
        reach your contact form, the more enquiries you get. On mobile, where most
        local searches happen, this matters even more.
      </p>

      <h2>What usually slows a site down</h2>
      <ul>
        <li>Huge, unoptimised images that weren&apos;t resized for the web.</li>
        <li>Heavy page builders that ship more code than your site needs.</li>
        <li>Too many third-party scripts — trackers, chat widgets, plugins.</li>
      </ul>

      <h2>How to check yours</h2>
      <p>
        Put your address into Google&apos;s free{" "}
        <a
          href="https://pagespeed.web.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          PageSpeed Insights
        </a>{" "}
        tool. It scores your site on mobile and desktop and lists exactly
        what&apos;s slowing it down. If your mobile score is low, you&apos;re
        almost certainly losing enquiries you never see.
      </p>

      <h2>The bottom line</h2>
      <p>
        Speed is a feature — arguably your most important one, because nothing
        else matters if people leave before the page loads. We build every site
        to be fast from the ground up, because a quick site is a site that wins
        work. Want to know how yours stacks up? Grab a free audit and we&apos;ll
        tell you.
      </p>
    </PostLayout>
  );
}
