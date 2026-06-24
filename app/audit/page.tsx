import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import { CheckCircle } from "@/components/icons";

export const metadata: Metadata = {
  title: "Free Website Audit — Charged Studio",
  description:
    "Request a free, no-obligation audit of your website. We'll review speed, SEO, mobile, broken links, social presence, branding and AEO — and show you how to fix what's holding you back.",
  alternates: { canonical: "https://chargedstudio.co.uk/audit" },
  openGraph: {
    title: "Free Website Audit — Charged Studio",
    description:
      "Request a free, no-obligation audit of your website. We'll show you what's holding your digital presence back.",
    url: "https://chargedstudio.co.uk/audit",
    siteName: "Charged Studio",
    type: "website",
  },
};

const PILLS = [
  "Page Speed",
  "SEO Basics",
  "Mobile",
  "Broken Links",
  "Social Presence",
  "Branding",
  "AEO",
];

export default function AuditPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 md:pt-36">
      {/* What we check — pills */}
      <ul className="flex flex-wrap justify-center gap-2.5">
        {PILLS.map((pill) => (
          <li
            key={pill}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-3 py-1.5 font-inter text-xs font-semibold uppercase tracking-wider text-accent"
          >
            <CheckCircle className="h-3.5 w-3.5 text-accent" />
            {pill}
          </li>
        ))}
      </ul>

      {/* Form card */}
      <div className="mt-9 rounded-2xl border border-border bg-surface/40 shadow-e1 p-6 sm:p-9">
        <h1 className="font-anton text-3xl uppercase leading-none text-text sm:text-4xl">
          Request your audit
        </h1>
        <div className="mt-7">
          <AuditForm />
        </div>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-center font-inter text-xs text-text/50">
        <CheckCircle className="h-3.5 w-3.5 text-accent" />
        100% free. No obligation. We&apos;ll never share your details.
      </p>
    </section>
  );
}
