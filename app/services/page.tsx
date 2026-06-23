import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";
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

export default function ServicesPage() {
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-xl bg-surface/40 shadow-e1 p-8 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-3">
                <Badge>{s.eyebrow}</Badge>
                {s.lead && (
                  <span className="font-inter text-xs font-semibold uppercase tracking-wider text-accent">
                    Where we start
                  </span>
                )}
              </div>
              <h2 className="mt-5 font-inter text-2xl font-bold text-text">
                {s.h1}
              </h2>
              <p className="mt-3 flex-1 font-inter text-base leading-relaxed text-text/70">
                {s.outcome}
              </p>
              <span className="mt-6 inline-block font-inter text-sm font-semibold text-text transition-colors group-hover:text-accent">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
