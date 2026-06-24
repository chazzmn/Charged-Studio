import type { Metadata } from "next";
import Image from "next/image";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Devon Nurseries — Case Study | Charged Studio",
  description:
    "How Charged Studio unified a five-site Devon childcare group under one credible digital presence — increasing enquiries and strengthening the brand.",
  alternates: { canonical: "https://chargedstudio.co.uk/devon-nurseries" },
  openGraph: {
    title: "Devon Nurseries — Case Study | Charged Studio",
    description:
      "How Charged Studio unified a five-site Devon childcare group under one credible digital presence.",
    url: "https://chargedstudio.co.uk/devon-nurseries",
    siteName: "Charged Studio",
    type: "article",
  },
};

const META = [
  { label: "Services", value: "Website Design · Brand Consolidation" },
  { label: "Sector", value: "Childcare" },
  { label: "Location", value: "Devon, UK" },
];

const BLOCKS = [
  {
    heading: "The challenge",
    body: "Devon Nurseries runs five childcare sites across Devon, but each had grown its own look, messaging, and website over time. The result was a fragmented brand that made a single, well-run group feel like five disconnected businesses — and made it harder for parents to find and trust them.",
  },
  {
    heading: "What we did",
    body: "We consolidated all five sites into one clear, consistent digital presence — a single brand system and website built around how parents actually search and decide. Fast, mobile-first, and easy for the team to keep up to date, with each location given its own space under one roof.",
  },
  {
    heading: "The result",
    body: "A unified, credible brand that finally matches the quality of care on the ground — easier to find locally, easier to trust at a glance, and built to turn visits into enquiries across all five sites.",
  },
];

export default function DevonNurseriesPage() {
  return (
    <article>
      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>Case Study</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          Devon Nurseries
        </h1>
        <p className="mt-5 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          Five childcare sites across Devon, unified under one credible digital
          presence.
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          {META.map((m) => (
            <div key={m.label}>
              <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
                {m.label}
              </dt>
              <dd className="mt-1 font-inter text-text">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Main project image */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src="/images/work/devon-nurseries-feature.jpg"
            alt="The unified Devon Nurseries website we designed and built, shown on a desktop monitor"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            preload
          />
        </div>
      </section>

      {/* Write-up */}
      <section className="mx-auto w-full max-w-3xl space-y-12 px-6 pb-8">
        {BLOCKS.map((block) => (
          <div key={block.heading}>
            <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
              {block.heading}
            </h2>
            <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
              {block.body}
            </p>
          </div>
        ))}
      </section>

      <div className="pb-6" />

      <CTASection />
    </article>
  );
}
