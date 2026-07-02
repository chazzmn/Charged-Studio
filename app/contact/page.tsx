import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/Badge";
import ProjectForm from "@/components/ProjectForm";

export const metadata: Metadata = {
  title: "Contact Charged Studio — Let's Start Something",
  description:
    "Get in touch with Charged Studio. Send a quick message, book a free consultation, or start a project. Based in Exeter, working across Devon and the South West.",
  alternates: { canonical: "https://chargedstudio.co.uk/contact" },
  openGraph: {
    title: "Contact Charged Studio — Let's Start Something",
    description:
      "Send a quick message, book a free consultation, or start a project. Charged Studio, Exeter.",
    url: "https://chargedstudio.co.uk/contact",
    siteName: "Charged Studio",
    type: "website",
  },
};

const CALENDLY = "https://calendly.com/hello-chargedstudio/15min";
const EMAIL = "hello@chargedstudio.co.uk";

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 pb-28 pt-32 md:pt-40 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
      {/* Left — intro + how to reach us */}
      <div className="lg:pt-1">
        <Badge>Contact</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl">
          Let&apos;s start something.
        </h1>
        <p className="mt-5 max-w-md font-inter text-lg leading-relaxed text-text/70">
          Send a message and we&apos;ll get back to you within one working day.
          No pressure, no hard sell.
        </p>

        <dl className="mt-12 space-y-8">
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
              Email
            </dt>
            <dd className="mt-1.5">
              <a
                href={`mailto:${EMAIL}`}
                className="font-inter text-lg text-text transition-colors hover:text-accent"
              >
                {EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
              Phone
            </dt>
            <dd className="mt-1.5">
              <a
                href="tel:+447453388798"
                className="font-inter text-lg text-text transition-colors hover:text-accent"
              >
                +44 7453 388798
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
              Studio
            </dt>
            <dd className="mt-1.5 font-inter text-lg text-text/80">
              Exeter, Devon — working across the South West
            </dd>
          </div>
        </dl>

        <div className="mt-12 border-t border-border pt-8">
          <p className="font-inter text-text/70">Prefer to talk it through?</p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-inter text-lg font-semibold text-text transition-colors hover:text-accent"
          >
            Book a free 15-minute consultation →
          </a>
        </div>
      </div>

      {/* Right — the message form (primary action) */}
      <div>
        <div className="rounded-2xl border border-border bg-surface/40 p-6 shadow-e1 sm:p-8">
          <h2 className="font-anton text-2xl uppercase text-text">
            Send a message
          </h2>
          <p className="mt-2 font-inter text-sm leading-relaxed text-text/60">
            A line about what you&apos;re after is plenty — we&apos;ll take it
            from there.
          </p>
          <div className="mt-6">
            <ProjectForm kind="project" />
          </div>
        </div>

        {/* Secondary paths — light text, not competing cards */}
        <p className="mt-6 font-inter text-sm leading-relaxed text-text/60">
          Got a bigger project?{" "}
          <Link
            href="/start-a-project"
            className="font-semibold text-text transition-colors hover:text-accent"
          >
            Start a detailed brief →
          </Link>
          <br />
          Want a free review of your current site?{" "}
          <Link
            href="/audit"
            className="font-semibold text-text transition-colors hover:text-accent"
          >
            Get a free audit →
          </Link>
        </p>
      </div>
    </section>
  );
}
