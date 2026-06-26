import type { ReactNode } from "react";
import Link from "next/link";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { BoltMark, Stars, CheckCircle } from "@/components/icons";
import { faqPageLd, SITE_URL } from "@/lib/structured-data";
import { getService } from "@/app/services/services-data";
import type { LocationContent } from "@/lib/locations";

const PROOF: { icon: ReactNode; label: string }[] = [
  { icon: <Stars className="h-4 w-4" />, label: "5.0 from 16 Google reviews" },
  {
    icon: <BoltMark className="h-4 w-4 text-accent" />,
    label: "100/100 Google PageSpeed",
  },
  {
    icon: <CheckCircle className="h-4 w-4 text-accent" />,
    label: "APM project-management qualified",
  },
];

/**
 * Shared template for the local-SEO location pages. Content comes from a
 * `LocationContent` entry in `lib/locations.ts` so each place stays unique.
 */
export default function LocationPage({ data }: { data: LocationContent }) {
  const websites = getService("websites");
  const features = websites?.features ?? [];

  const pageUrl = `${SITE_URL}/${data.slug}`;
  const seoScope =
    data.place === data.county
      ? `the ${data.county}`
      : `the ${data.place} and ${data.county}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${pageUrl}/#service`,
        name: data.schemaName,
        url: pageUrl,
        description: data.schemaDescription,
        image: `${SITE_URL}/og-image.jpg`,
        priceRange: "££",
        telephone: "+44-7453-388798",
        email: "hello@chargedstudio.co.uk",
        areaServed: data.areaServed.map((a) => ({
          "@type": a.type,
          name: a.name,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Exeter",
          addressRegion: "Devon",
          addressCountry: "GB",
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "16",
          bestRating: "5",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: data.breadcrumbName,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={graph} />
      <JsonLd data={faqPageLd(data.faqs)} />

      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>{data.badge}</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          {data.h1}
        </h1>
        <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          {data.heroIntro}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/start-a-project">Start a Project</Button>
          <Button href="/audit" variant="secondary">
            Free Website Audit
          </Button>
        </div>

        {/* Proof bar */}
        <ul className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          {PROOF.map(({ icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2"
            >
              {icon}
              <span className="font-inter text-sm text-text/80">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Built for <place> */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          {data.builtForHeading}
        </h2>
        <div className="mt-6 space-y-5 font-inter text-lg leading-relaxed text-text/70">
          {data.builtForParas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          What&apos;s included
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-surface/40 shadow-e1 p-7">
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
        <Link
          href="/services/websites"
          className="mt-8 inline-block font-inter text-sm font-bold uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
        >
          Full website design service →
        </Link>
      </section>

      {/* Local proof — case study */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <Badge>Local work</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          {data.localProofHeading}
        </h2>
        <p className="mt-6 font-inter text-lg leading-relaxed text-text/70">
          {data.localProofPara}
        </p>
        <Link
          href="/devon-nurseries"
          className="mt-6 inline-block font-inter text-sm font-bold uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
        >
          Read the case study →
        </Link>
        <p className="mt-8 font-inter text-base leading-relaxed text-text/70">
          Want to be found for &ldquo;near me&rdquo; searches too? Our{" "}
          <Link href="/services/seo" className="text-accent hover:opacity-80">
            local SEO service
          </Link>{" "}
          gets your business ranking for {seoScope} searches that win work.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          {data.faqsHeading}
        </h2>
        <dl className="mt-10 divide-y divide-border border-y border-border">
          {data.faqs.map((f) => (
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

      <CTASection />
    </>
  );
}
