import type { Metadata } from "next";
import Link from "next/link";
import PostLayout from "@/components/PostLayout";
import { getPost } from "../posts";

const post = getPost("website-in-a-day")!;

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
        Not every business needs a six-week project. Sometimes you just need to be
        online — properly — and you need it now. A new venture launching this
        weekend. A campaign that goes live Monday. A meeting where &ldquo;here&apos;s
        our website&rdquo; has to be a real answer, not &ldquo;it&apos;s coming.&rdquo;
      </p>
      <p>
        For those moments, a focused website built in a single day can be exactly
        the right call. Here&apos;s when it works, what you actually get, and when
        you&apos;re better off going bigger.
      </p>

      <h2>When a one-day website is the smart move</h2>
      <ul>
        <li>
          <strong>You&apos;re just starting out.</strong> You need a credible
          presence before you spend on a full build — somewhere to send customers
          that isn&apos;t just a social profile.
        </li>
        <li>
          <strong>You have a deadline.</strong> A launch, an event, a pitch, a bit
          of press. Being live and looking sharp matters more than having every
          page.
        </li>
        <li>
          <strong>You&apos;re testing an idea.</strong> Get a real site in front of
          real customers, see what lands, then invest in the full version once you
          know it works.
        </li>
        <li>
          <strong>Your current presence is holding you back.</strong> A dated site
          — or a Facebook page doing the job of a website — is quietly costing you
          trust. A fast, clean site fixes that today.
        </li>
      </ul>

      <h2>What you can realistically get in a day</h2>
      <p>
        A one-day site is a sharp, single-page website — not a twenty-page build
        squeezed into a rush. Done right, that&apos;s more than enough to win work:
      </p>
      <ul>
        <li>A strong hero that says who you are and what you do in seconds.</li>
        <li>The essentials — services, proof, and a clear reason to choose you.</li>
        <li>An obvious way to get in touch: enquiry form, phone, directions.</li>
        <li>Fast, mobile-first, and live on your own domain.</li>
      </ul>
      <p>
        It won&apos;t be a full e-commerce store or a custom booking system in a
        day — and it shouldn&apos;t pretend to be. What it will be is fast, focused,
        and genuinely useful from the moment it&apos;s live.
      </p>

      <h2>How we build one this fast without cutting corners</h2>
      <p>
        Speed comes from process, not shortcuts. We start with a short, structured
        conversation to nail down your goal, your customers, and the one action you
        want visitors to take. You bring the basics — your logo, a few words about
        the business, any photos. We build, you review, we launch. Every Charged
        build is run to a clear plan, so &ldquo;in a day&rdquo; still means
        considered, on-brand, and built to perform.
      </p>

      <h2>When to go bigger instead</h2>
      <p>
        If you need to sell online, manage lots of pages, or run something custom
        behind the scenes, a full project is the right home for that — and often a
        one-day site is a smart <em>phase one</em>: get live now, grow into the
        bigger build when you&apos;re ready. If you&apos;re not sure which you need,
        that&apos;s exactly what a quick conversation is for.
      </p>

      <h2>The bottom line</h2>
      <p>
        Being online shouldn&apos;t have to wait weeks. If you need a website fast,
        tell us what you&apos;re launching and by when —{" "}
        <Link href="/start-a-project">start a project</Link> and we&apos;ll tell you
        honestly what we can get live for you. Not sure where you stand today? Grab
        a <Link href="/audit">free audit</Link> and we&apos;ll point you in the
        right direction.
      </p>
    </PostLayout>
  );
}
