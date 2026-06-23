import type { Metadata } from "next";
import Link from "next/link";
import PostLayout from "@/components/PostLayout";
import { getPost } from "../posts";

const post = getPost("signs-you-need-a-website-redesign")!;

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
        A website doesn&apos;t fail all at once — it quietly stops pulling its
        weight. Enquiries dip, the design starts to feel dated, and you&apos;re
        not quite sure why. If a few of the signs below sound familiar, it&apos;s
        probably time for a redesign.
      </p>

      <h2>1. It&apos;s slow to load</h2>
      <p>
        If your site takes more than a few seconds to appear, people leave before
        they&apos;ve seen it. Speed affects both your Google ranking and your
        enquiries — here&apos;s{" "}
        <Link href="/blog/website-speed">why website speed matters</Link>.
      </p>

      <h2>2. It doesn&apos;t work well on a phone</h2>
      <p>
        Most visitors are on mobile. If your site is fiddly to use on a phone —
        tiny text, buttons that miss, content that overflows — you&apos;re losing
        the majority of your audience.
      </p>

      <h2>3. It looks dated</h2>
      <p>
        Your website is often a customer&apos;s first impression. If it looks like
        it was built a decade ago, people quietly assume your business is behind
        the times too — even when your work is excellent.
      </p>

      <h2>4. It isn&apos;t bringing in enquiries</h2>
      <p>
        A website&apos;s job is to turn visitors into customers. If yours gets
        traffic but no calls, emails, or form submissions, something in the
        design, messaging, or speed is letting you down.
      </p>

      <h2>5. You can&apos;t be found on Google</h2>
      <p>
        If you&apos;re invisible when people search for what you do, your site
        isn&apos;t working hard enough. A redesign done properly bakes in the
        basics of{" "}
        <Link href="/blog/how-to-get-found-on-google">local SEO</Link> from the
        ground up.
      </p>

      <h2>6. It&apos;s a pain to update</h2>
      <p>
        If changing a price or adding a photo means emailing someone and waiting a
        week, your site is working against you. A modern build makes everyday
        updates simple.
      </p>

      <h2>7. It no longer reflects your business</h2>
      <p>
        Businesses grow and change. If your website still shows old services, old
        branding, or a version of you from years ago, it&apos;s undercutting the
        quality you actually deliver.
      </p>

      <h2>Not sure where yours stands?</h2>
      <p>
        Get a <Link href="/audit">free website audit</Link> and we&apos;ll tell
        you honestly whether a redesign is worth it — or{" "}
        <Link href="/start-a-project">start a project</Link> if you already know
        it&apos;s time.
      </p>
    </PostLayout>
  );
}
