import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";
import { getPost } from "../posts";

const post = getPost("what-is-aeo")!;

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
        For twenty years, &ldquo;getting found online&rdquo; meant one thing:
        ranking on the first page of Google. That&apos;s still important — but the
        way people search is changing fast. More and more, they&apos;re asking a
        question to ChatGPT, Perplexity, or Google&apos;s own AI overview and
        reading the answer it writes back, without ever clicking a list of blue
        links.
      </p>
      <p>
        That shift has a name: <strong>Answer Engine Optimisation</strong>, or
        AEO. It&apos;s the practice of making sure your business is the one those
        AI tools mention when someone asks a question you can answer.
      </p>

      <h2>AEO vs SEO</h2>
      <p>
        They&apos;re cousins, not rivals. SEO is about ranking a page so a person
        clicks it. AEO is about being the trusted source an answer engine quotes
        or cites. The good news: most of what makes you rank well also makes you
        easy for an AI to understand and recommend. Do the fundamentals properly
        and you win on both fronts.
      </p>

      <h2>How to actually do it</h2>
      <p>
        AEO isn&apos;t a trick or a setting you switch on. It&apos;s clarity. AI
        models reward content that answers real questions plainly and can be
        trusted. In practice that means:
      </p>
      <ul>
        <li>
          <strong>Answer real questions directly.</strong> Write the way your
          customers ask — &ldquo;how much does a new website cost?&rdquo; — and
          give a clear, useful answer near the top.
        </li>
        <li>
          <strong>Structure your content.</strong> Clear headings, short
          paragraphs, and FAQ sections make it easy for a model to lift the right
          answer.
        </li>
        <li>
          <strong>Add structured data.</strong> Behind-the-scenes markup
          (schema) tells engines exactly what your page, business, and articles
          are — removing guesswork.
        </li>
        <li>
          <strong>Be consistent and credible.</strong> Matching business name,
          address, and details everywhere builds the trust that gets you cited.
        </li>
      </ul>

      <h2>Why it matters for local businesses</h2>
      <p>
        Picture a customer asking, &ldquo;who&apos;s the best plumber in
        Exeter?&rdquo; or &ldquo;a good nursery in Devon.&rdquo; The answer engine
        is going to name a handful of businesses. AEO is how you make sure
        yours is one of them — before your competitor&apos;s is. For a local
        service business, being the named recommendation is worth more than being
        the tenth blue link.
      </p>

      <h2>The bottom line</h2>
      <p>
        AEO isn&apos;t magic and it isn&apos;t a fad — it&apos;s the natural next
        step from SEO as search becomes conversational. Build a fast, clear,
        well-structured site that genuinely answers your customers&apos;
        questions, and you&apos;ll be ready for it. That&apos;s exactly how we
        build at Charged.
      </p>
    </PostLayout>
  );
}
