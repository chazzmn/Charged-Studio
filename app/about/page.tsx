import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Charged Studio — The Story Behind the Brand",
  description:
    "Learn about Charged Studio, founder Charlie Norona, and the belief-led approach that makes us different. Based in Exeter, built for businesses ready to grow.",
  alternates: { canonical: "https://chargedstudio.co.uk/about" },
  openGraph: {
    title: "About Charged Studio — The Story Behind the Brand",
    description:
      "The belief-led studio behind Charged. Based in Exeter, working with businesses across the South West.",
    url: "https://chargedstudio.co.uk/about",
    siteName: "Charged Studio",
    type: "website",
  },
};

const VALUES = [
  {
    title: "Websites that work",
    body: "Not just good-looking — built to load fast, rank locally, and turn visitors into enquiries. A website should earn its keep.",
  },
  {
    title: "A real partner",
    body: "We're not a vendor you brief and forget. We learn your business, stay close, and treat your growth as the measure of our work.",
  },
  {
    title: "Local and hands-on",
    body: "Based in Exeter, working across Devon and the South West. You get a real person who knows your patch — not a faceless agency.",
  },
];

const STATS = [
  { value: "APM PMQ", label: "Qualified Project Manager" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Exeter", label: "Devon, UK" },
];

const PROCESS = [
  {
    step: "01",
    title: "Immerse",
    body: "Before a pixel moves, we get inside your business — your customers, your goals, what winning actually looks like. The hard thinking happens first.",
  },
  {
    step: "02",
    title: "Plan",
    body: "A clear scope, timeline and milestones up front. Drawing on a formal project-management background, you always know what's happening and what comes next.",
  },
  {
    step: "03",
    title: "Design & build",
    body: "We build sharp, fast, on-brand work — with structured feedback points along the way, so nothing's signed off until it's right.",
  },
  {
    step: "04",
    title: "Launch & look after",
    body: "We go live, then stick around — hosting, updates and ongoing support, so your site keeps pulling its weight long after launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Founder hero */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-32 md:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Founder cut-out on yellow circle */}
          <div className="order-1 lg:order-none">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-x-0 bottom-0 top-10 rounded-full bg-accent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 top-10 rounded-full shadow-glow" />
              <Image
                src="/images/charlie-norona.png"
                alt="Charlie Norona, Founder & Creative Director of Charged Studio"
                fill
                sizes="(max-width: 1024px) 80vw, 36vw"
                className="relative object-contain object-bottom drop-shadow-2xl"
                preload
              />
            </div>
          </div>

          {/* Intro */}
          <div className="order-2 lg:order-none">
            <Badge>Founder</Badge>
            <h1 className="mt-5 font-anton text-5xl uppercase leading-[0.9] text-text sm:text-6xl lg:text-7xl">
              Charlie
              <br />
              Norona
            </h1>
            <p className="mt-4 font-inter text-lg font-semibold uppercase tracking-[0.18em] text-accent">
              Founder &amp; Creative Director
            </p>

            <div className="mt-7 max-w-xl space-y-4 font-inter text-lg leading-relaxed text-text/70">
              <p>
                I started Charged on a belief most agencies don&apos;t act on:
                that a website isn&apos;t a one-off project you tick off — it&apos;s
                the foundation a business grows on, and it deserves looking
                after.
              </p>
              <p>
                I&apos;m a{" "}
                <span className="font-semibold text-text">
                  qualified project manager (APM PMQ)
                </span>{" "}
                as well as a designer — so every project runs on a real process,
                not guesswork. Structured planning and psychology-led design
                thinking, brought to work most studios treat as purely creative.
                That&apos;s the difference you feel.
              </p>
            </div>

            {/* Stat row */}
            <dl className="mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-7">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-anton text-2xl uppercase leading-none text-text sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 font-inter text-xs leading-snug text-text/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Circular contact button */}
            <div className="mt-9">
              <Link
                href="/contact"
                aria-label="Contact Charlie"
                className="group inline-flex h-28 w-28 flex-col items-center justify-center rounded-full bg-accent text-text-inverse transition duration-base ease-out hover:-translate-y-px hover:bg-accent-hover hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <span className="font-inter text-sm font-bold uppercase tracking-[0.1em]">
                  Contact
                </span>
                <span className="mt-0.5 text-lg transition-transform duration-base ease-out group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process — leans on the project-management background */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <Badge>How we work</Badge>
          <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
            Structured, not chaotic.
          </h2>
          <p className="mt-5 font-inter text-lg leading-relaxed text-text/70">
            Every project runs on a clear process — as intentional and organised
            as it is creative. That&apos;s why working with Charged feels
            effortless: the hard thinking happens long before the design does.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <li
              key={p.step}
              className="rounded-xl bg-surface/40 shadow-e1 p-7"
            >
              <span className="font-anton text-3xl text-accent">
                {p.step}
              </span>
              <h3 className="mt-4 font-inter text-lg font-bold text-text">
                {p.title}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-xl bg-surface/40 shadow-e1 p-8"
            >
              <h2 className="font-inter text-xl font-bold text-text">
                {v.title}
              </h2>
              <p className="mt-3 font-inter text-base leading-relaxed text-text/70">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
