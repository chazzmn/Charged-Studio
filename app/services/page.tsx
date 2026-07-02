import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { BoltMark } from "@/components/icons";
import { SearchGraphic } from "@/components/graphics";
import { SERVICES } from "./services-data";

export const metadata: Metadata = {
  title: "Services — Websites, Software, SEO & Branding | Charged Studio",
  description:
    "What Charged Studio does: custom websites, bespoke software, local SEO and branding for growing businesses across Exeter, Devon and the South West.",
  alternates: { canonical: "https://chargedstudio.co.uk/services" },
  openGraph: {
    title: "Services — Websites, Software, SEO & Branding | Charged Studio",
    description:
      "Custom websites, bespoke software, local SEO and branding for growing businesses across Devon and the South West.",
    url: "https://chargedstudio.co.uk/services",
    siteName: "Charged Studio",
    type: "website",
  },
};

/** Per-service visual — real project photo, or a coded scene (hero style). */
const VISUALS: Record<
  string,
  { photo?: string; alt?: string; graphic?: "search" }
> = {
  websites: {
    photo: "/images/work/brightwater-dental.png",
    alt: "A dental practice website designed and built by Charged Studio",
  },
  software: {
    photo: "/images/work/tend-dashboard-dark.jpg",
    alt: "A custom scheduling dashboard built by Charged Studio",
  },
  seo: { graphic: "search" },
  branding: {
    photo: "/images/work/chazzmn.jpg",
    alt: "Brand identity and creative work by Charged Studio",
  },
};

/** Recent real builds — a photo strip for proof lower on the page. */
const RECENT_WORK = [
  { src: "/images/work/picked-flavour.jpg", alt: "Hartleys fruit & veg website" },
  { src: "/images/work/coast-county-estate.png", alt: "Coast & County estate agency website" },
  { src: "/images/work/meridian-accountancy.png", alt: "Meridian accountancy website" },
  { src: "/images/work/ember-oak-coffee.png", alt: "Ember & Oak coffee website" },
  { src: "/images/work/harbour-field-trades.png", alt: "Harbourfield trades website" },
  { src: "/images/work/proper-fish.jpg", alt: "Proper Fish website" },
];

/** Hero-style browser frame — the site's visual style pillar. */
function Frame({ children, glow = false }: { children: ReactNode; glow?: boolean }) {
  return (
    <div className="relative">
      {glow && (
        <div
          aria-hidden
          className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-3xl"
        />
      )}
      <div className="overflow-hidden rounded-xl bg-surface shadow-e2 ring-1 ring-border">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-text/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-text/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-text/20" />
          <span className="ml-2 h-4 flex-1 rounded bg-text/5" />
        </div>
        <div className="relative aspect-[16/10] bg-gradient-to-br from-surface via-surface to-bg">
          {children}
        </div>
      </div>
    </div>
  );
}

/** The media inside a Frame — real photo, or a coded hero-style graphic. */
function Media({ slug }: { slug: string }) {
  const v = VISUALS[slug];
  if (v?.photo) {
    return (
      <Image
        src={v.photo}
        alt={v.alt ?? ""}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-top"
      />
    );
  }
  return (
    <div className="absolute inset-0">
      <SearchGraphic />
    </div>
  );
}

export default function ServicesPage() {
  const [lead, ...rest] = SERVICES;

  return (
    <>
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>Services</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          Everything your business needs to grow online.
        </h1>
        <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          Websites first — plus the software, visibility and brand to back them
          up. Most clients stay on monthly, so we look after the lot and you stay
          focused on running your business.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        {/* Featured — the lead service */}
        <Reveal className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-surface/40 to-surface/10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div>
            <span className="font-inter text-xs font-semibold uppercase tracking-wider text-accent">
              Where we start
            </span>
            <h2 className="mt-3 font-anton text-3xl uppercase leading-[0.95] text-text sm:text-4xl">
              {lead.name}
            </h2>
            <p className="mt-4 max-w-xl font-inter text-base leading-relaxed text-text/70">
              {lead.outcome}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {lead.features.slice(0, 6).map((f) => (
                <li key={f.title} className="flex items-center gap-2">
                  <BoltMark className="h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="font-inter text-sm text-text/85">{f.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href={`/services/${lead.slug}`}>Explore {lead.name} →</Button>
              {lead.priceFrom && (
                <span className="font-anton text-xl uppercase text-accent">
                  {lead.priceFrom}
                </span>
              )}
            </div>
          </div>

          <Frame glow>
            <Media slug={lead.slug} />
          </Frame>
        </Reveal>

        {/* The rest — visual service cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((s) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-gradient-to-br from-surface to-surface/20 p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-glow sm:p-6"
              >
                <Frame>
                  <Media slug={s.slug} />
                </Frame>

                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="font-anton text-xl uppercase leading-[1] text-text sm:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-text/70">
                    {s.outcome}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.features.slice(0, 3).map((f) => (
                      <li
                        key={f.title}
                        className="rounded-full border border-border bg-text/5 px-3 py-1 font-inter text-xs text-text/75"
                      >
                        {f.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    {s.priceFrom ? (
                      <span className="font-anton text-lg uppercase text-accent">
                        {s.priceFrom}
                      </span>
                    ) : (
                      <span className="font-inter text-sm text-text/50">
                        Quoted per project
                      </span>
                    )}
                    <span className="font-inter text-sm font-bold uppercase tracking-widest text-text transition-colors group-hover:text-accent">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Recent work — a photo strip for proof */}
        <Reveal className="mt-16">
          <p className="text-center font-inter text-xs font-semibold uppercase tracking-[0.2em] text-text/50">
            A few of the sites we&apos;ve built
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {RECENT_WORK.map((w) => (
              <div
                key={w.src}
                className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface"
              >
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
