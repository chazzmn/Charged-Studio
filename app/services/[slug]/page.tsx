import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { BoltMark } from "@/components/icons";
import { SERVICES, getService, serviceSlugs } from "../services-data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `https://chargedstudio.co.uk/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: "Charged Studio",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>{service.eyebrow}</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          {service.h1}
        </h1>
        <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          {service.intro}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/start-a-project">Start a Project</Button>
          <Button href="/audit" variant="secondary">
            Free Website Audit
          </Button>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-14 md:pt-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {service.outcomes.map((o) => (
            <div
              key={o}
              className="flex items-start gap-3 rounded-xl bg-surface/40 p-6 shadow-e1"
            >
              <BoltMark className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="font-inter text-lg font-semibold leading-snug text-text">
                {o}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          What&apos;s included
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-surface/40 shadow-e1 p-7"
            >
              <BoltMark className="h-5 w-5 text-accent" />
              <h3 className="mt-4 font-inter text-lg font-bold text-text">
                {f.title}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <Badge>Who it&apos;s for</Badge>
        <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          {service.whoForLead}
        </p>
        <ul className="mt-7 space-y-4">
          {service.whoFor.map((w) => (
            <li
              key={w}
              className="flex items-start gap-3 font-inter text-lg leading-relaxed text-text/80"
            >
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {w}
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          How it works
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((p) => (
            <li key={p.step} className="rounded-xl bg-surface/40 shadow-e1 p-7">
              <span className="font-anton text-3xl text-accent">{p.step}</span>
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

      {/* Pricing */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <Badge>Pricing</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          Clear starting prices
        </h2>
        <div
          className={`mt-10 grid grid-cols-1 gap-6 ${
            service.pricing.tiers.length >= 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : service.pricing.tiers.length > 1
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "max-w-md"
          }`}
        >
          {service.pricing.tiers.map((t) => (
            <div
              key={t.label}
              className="flex flex-col rounded-xl border border-border bg-surface/40 p-7"
            >
              <p className="font-inter text-xs font-semibold uppercase tracking-wider text-text/60">
                {t.label}
              </p>
              <p className="mt-2 font-anton text-3xl uppercase text-text">
                {t.price}
              </p>
              <p className="mt-3 font-inter text-sm leading-relaxed text-text/70">
                {t.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl font-inter text-sm leading-relaxed text-text/60">
          {service.pricing.note}
        </p>
      </section>

      {/* Why it matters */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <Badge>{service.whyTitle}</Badge>
        <div className="mt-6 space-y-5 font-inter text-lg leading-relaxed text-text/70">
          {service.whyBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          Common questions
        </h2>
        <dl className="mt-10 divide-y divide-charged-black/10 border-y border-border">
          {service.faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="font-inter text-lg font-semibold text-text">
                {f.q}
              </dt>
              <dd className="mt-2 font-inter leading-relaxed text-text/70">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Other services */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-anton text-2xl uppercase leading-tight text-text sm:text-3xl">
          More from Charged
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="group rounded-xl bg-surface/40 shadow-e1 p-7 transition-colors hover:border-accent"
            >
              <h3 className="font-inter text-lg font-bold text-text">
                {o.name}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
                {o.outcome}
              </p>
              <span className="mt-4 inline-block font-inter text-sm font-semibold text-text transition-colors group-hover:text-accent">
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
