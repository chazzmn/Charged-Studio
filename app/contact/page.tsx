import type { Metadata } from "next";
import Badge from "@/components/Badge";
import ProjectForm from "@/components/ProjectForm";

export const metadata: Metadata = {
  title: "Contact Charged Studio — Let's Start Something",
  description:
    "Ready to grow your brand? Get in touch with Charged Studio. Based in Exeter, working with businesses across Devon and the South West.",
  alternates: { canonical: "https://chargedstudio.co.uk/contact" },
  openGraph: {
    title: "Contact Charged Studio — Let's Start Something",
    description:
      "Ready to grow? Get in touch with Charged Studio, Exeter.",
    url: "https://chargedstudio.co.uk/contact",
    siteName: "Charged Studio",
    type: "website",
  },
};

const CALENDLY = "https://calendly.com/hello-chargedstudio/15min";
const EMAIL = "hello@chargedstudio.co.uk";

const linkClass =
  "font-inter text-charged-light/80 transition-colors hover:text-charged-light";

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-32 md:pt-40 lg:grid-cols-2 lg:gap-16">
      {/* Details */}
      <div>
        <Badge>Contact</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-charged-light sm:text-5xl">
          Let&apos;s start something.
        </h1>
        <p className="mt-5 max-w-md font-inter text-lg leading-relaxed text-charged-light/70">
          Tell us what you need and we&apos;ll get back to you within one working
          day. Prefer to talk? Book a quick call — no pressure, no hard sell.
        </p>

        <dl className="mt-10 space-y-6">
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-charged-light/50">
              Email
            </dt>
            <dd className="mt-1">
              <a href={`mailto:${EMAIL}`} className={linkClass}>
                {EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-charged-light/50">
              Phone
            </dt>
            <dd className="mt-1">
              <a href="tel:+447453388798" className={linkClass}>
                +44 7453 388798
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-charged-light/50">
              Book a call
            </dt>
            <dd className="mt-1">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                15-minute intro call →
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-charged-light/50">
              Studio
            </dt>
            <dd className="mt-1 font-inter text-charged-light/80">
              Exeter, Devon — working across the South West
            </dd>
          </div>
        </dl>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-white/10 bg-charged-navy/40 p-6 sm:p-8 lg:self-start">
        <ProjectForm kind="project" />
      </div>
    </section>
  );
}
