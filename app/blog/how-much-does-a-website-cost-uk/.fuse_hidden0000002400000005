import type { Metadata } from "next";
import Link from "next/link";
import PostLayout from "@/components/PostLayout";
import { getPost } from "../posts";

const post = getPost("how-much-does-a-website-cost-uk")!;

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
        It&apos;s the first question almost every business owner asks, and the
        honest answer is: it depends. A website can cost anything from a few
        hundred pounds to tens of thousands, because &ldquo;a website&rdquo; can
        mean very different things. This guide breaks down what you can realistically
        expect to pay in the UK in 2026, what drives the price, and how to make
        sure you get value rather than just a cheap site.
      </p>

      <h2>How much does a website cost in the UK?</h2>
      <p>
        As a rough guide to the UK market:
      </p>
      <ul>
        <li>
          <strong>DIY website builders</strong> (Wix, Squarespace) — roughly
          £10–£40 a month. Cheapest up front, but the work and the limitations are
          all yours.
        </li>
        <li>
          <strong>Freelancer, small business site</strong> — typically around
          £1,000–£3,000 for a straightforward brochure website.
        </li>
        <li>
          <strong>Studio-built, custom website</strong> — usually £3,000 upwards,
          depending on scope, with design, performance, and SEO built in properly.
        </li>
        <li>
          <strong>Larger or e-commerce projects</strong> — more again, as
          complexity and functionality grow.
        </li>
      </ul>
      <p>
        These are market ranges, not a quote — every project is different, which
        is exactly why the next section matters.
      </p>

      <h2>What affects the price of a website?</h2>
      <p>
        Two sites with the same number of pages can cost wildly different amounts.
        The main factors are:
      </p>
      <ul>
        <li>
          <strong>Custom design vs template</strong> — bespoke design that fits
          your brand costs more than a stretched template, and looks it.
        </li>
        <li>
          <strong>Number of pages and content</strong> — more pages, and whether
          you need copywriting and images, all add up.
        </li>
        <li>
          <strong>Functionality</strong> — booking systems, online payments,
          customer logins, and integrations add development time.
        </li>
        <li>
          <strong>Performance and SEO</strong> — a site built to load fast and
          rank well takes more care than one that just looks fine.
        </li>
        <li>
          <strong>Ongoing support</strong> — whether updates and maintenance are
          included or left to you.
        </li>
      </ul>

      <h2>Cheap isn&apos;t the same as good value</h2>
      <p>
        A £200 website that doesn&apos;t load properly, doesn&apos;t show up on
        Google, and doesn&apos;t bring in a single enquiry is the most expensive
        website you can buy — because it costs you customers every day while
        appearing to save you money. The right question isn&apos;t
        &ldquo;what&apos;s the cheapest?&rdquo; but &ldquo;what will actually
        bring in work?&rdquo; A{" "}
        <Link href="/blog/website-speed">fast</Link>, well-built site that turns
        visitors into enquiries pays for itself.
      </p>

      <h2>What about ongoing costs?</h2>
      <p>
        Beyond the build, budget for hosting, a domain name, and maintenance. Some
        studios (including us) roll hosting, updates, and fixes into one simple
        managed arrangement, so you&apos;re never left with a broken site and
        nobody to call.
      </p>

      <h2>How to get an accurate price</h2>
      <p>
        The only way to know what your website should cost is to talk through what
        you actually need. If you&apos;re a business in Devon or the South West,{" "}
        <Link href="/start-a-project">tell us about your project</Link> and
        we&apos;ll give you a clear, honest quote — or get a{" "}
        <Link href="/audit">free audit</Link> of your current site first to see
        what&apos;s worth fixing.
      </p>
    </PostLayout>
  );
}
