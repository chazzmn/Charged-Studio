import type { Metadata } from "next";
import Link from "next/link";
import PostLayout from "@/components/PostLayout";
import { getPost } from "../posts";

const post = getPost("how-to-get-found-on-google")!;

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
        When someone nearby needs what you offer, they don&apos;t open the phone
        book — they Google it. &ldquo;Plumber near me,&rdquo; &ldquo;nursery in
        Exeter,&rdquo; &ldquo;best builder in Devon.&rdquo; Showing up for those
        searches is called local SEO, and for a local business it&apos;s the
        single most valuable thing your website can do. Here&apos;s how it works,
        in plain English.
      </p>

      <h2>What is local SEO?</h2>
      <p>
        Local SEO is the work of getting your business to appear when people
        nearby search for your services — both in Google&apos;s map results and
        in the regular list of links. It&apos;s less about competing with the
        whole country and more about being the obvious choice in your area.
      </p>

      <h2>Set up your Google Business Profile</h2>
      <p>
        This is the biggest lever, and it&apos;s free. Your Google Business
        Profile is what powers the map listing with your name, hours, photos, and
        reviews. Claim it, fill in every field, choose the right categories, and
        keep it up to date. For many local searches, this matters as much as your
        website itself.
      </p>

      <h2>Get your website basics right</h2>
      <p>
        Google wants to recommend sites that give visitors a good experience. That
        means your site should be:
      </p>
      <ul>
        <li>
          <strong>Fast</strong> — speed is a ranking factor and a first
          impression. (More on{" "}
          <Link href="/blog/website-speed">why website speed matters</Link>.)
        </li>
        <li>
          <strong>Mobile-friendly</strong> — most local searches happen on a
          phone.
        </li>
        <li>
          <strong>Clear about what you do and where</strong> — mention your
          services and your area (Exeter, Devon, the South West) naturally in your
          headings and text.
        </li>
        <li>
          <strong>Consistent</strong> — your business name, address, and phone
          number should match everywhere they appear online.
        </li>
      </ul>

      <h2>Earn reviews</h2>
      <p>
        Reviews are one of the strongest local signals — and they win trust before
        a customer even clicks. Make it a habit to ask happy customers for a
        Google review, and reply to the ones you get.
      </p>

      <h2>Create helpful local content</h2>
      <p>
        Pages and posts that answer the questions your customers ask help you rank
        for more searches — and increasingly, they help AI tools recommend you
        too (see{" "}
        <Link href="/blog/what-is-aeo">what AEO is and why it matters</Link>).
        Useful, specific, locally relevant content beats generic filler every
        time.
      </p>

      <h2>How long does local SEO take?</h2>
      <p>
        It&apos;s a build, not a switch. A Google Business Profile can show
        results quickly, while ranking improvements from website and content work
        typically build over weeks and months. The businesses that win are the
        ones that start and stay consistent.
      </p>

      <h2>Want a head start?</h2>
      <p>
        If you&apos;re not sure why your site isn&apos;t showing up, grab a{" "}
        <Link href="/audit">free website audit</Link> — we&apos;ll tell you
        exactly what&apos;s holding your local visibility back and how to fix it.
      </p>
    </PostLayout>
  );
}
