import type { Metadata } from "next";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
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

const linkClass =
  "font-inter text-text/80 transition-colors hover:text-text";

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-32 md:pt-40 lg:grid-cols-2 lg:gap-16">
      {/* Details */}
      <div>
        <Badge>Contact</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl">
          Let&apos;s start something.
        </h1>
        <p className="mt-5 max-w-md font-inter text-lg leading-relaxed text-text/70">
          Send a quick message and we&apos;ll get back to you within one working
          day. Prefer to talk it through first? Book a free consultation — no
          pressure, no hard sell.
        </p>

        <dl className="mt-10 space-y-6">
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
              Email
            </dt>
            <dd className="mt-1">
              <a href={`mailto:${EMAIL}`} className={linkClass}>
                {EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
              Phone
            </dt>
            <dd className="mt-1">
              <a href="tel:+447453388798" className={linkClass}>
                +44 7453 388798
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
              Book a free consultation
            </dt>
            <dd className="mt-1">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Grab a free 15-minute slot →
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
              Studio
            </dt>
            <dd className="mt-1 font-inter text-text/80">
              Exeter, Devon — working across the South West
            </dd>
          </div>
        </dl>

        {/* Other paths → full brief or a free audit */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col rounded-xl bg-surface/40 shadow-e1 p-6">
            <h2 className="font-inter text-lg font-bold text-text">
              Got a bigger project in mind?
            </h2>
            <p className="mt-2 flex-1 font-inter text-sm leading-relaxed text-text/70">
              Walk us through it step by step and we&apos;ll come back with a
              tailored plan and quote.
            </p>
            <Button href="/start-a-project" size="sm" className="mt-5 self-start">
              Start a Project
            </Button>
          </div>

          <div className="flex flex-col rounded-xl bg-surface/40 shadow-e1 p-6">
            <h2 className="font-inter text-lg font-bold text-text">
              Want a free website audit?
            </h2>
            <p className="mt-2 flex-1 font-inter text-sm leading-relaxed text-text/70">
              We&apos;ll review your current site and send back clear,
              no-pressure pointers on what to fix.
            </p>
            <Button
              href="/audit"
              size="sm"
              variant="secondary"
              className="mt-5 self-start"
            >
              Free Website Audit
            </Button>
          </div>
        </div>
      </div>

      {/* Quick message form */}
      <div className="rounded-xl bg-surface/40 shadow-e1 p-6 sm:p-8 lg:self-start">
        <h2 className="font-inter text-sm font-semibold uppercase tracking-wider text-text/50">
          Send a quick message
        </h2>
        <div className="mt-5">
          <ProjectForm kind="project" />
        </div>
      </div>
    </section>
  );
}
