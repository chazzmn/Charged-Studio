import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { BoltMark, Stars, CheckCircle } from "@/components/icons";
import { faqPageLd, SITE_URL } from "@/lib/structured-data";
import { getService } from "@/app/services/services-data";

const PAGE_URL = `${SITE_URL}/web-design-exeter`;

export const metadata: Metadata = {
  title: "Web Design Exeter | Custom Websites That Convert — Charged Studio",
  description:
    "Web designer in Exeter building fast, modern, fully-managed websites that turn local searches into enquiries. Founder-led, APM-qualified, 5.0 rated. Free audit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Web Design Exeter | Custom Websites That Convert — Charged Studio",
    description:
      "Web designer in Exeter building fast, modern, fully-managed websites that turn local searches into enquiries. Founder-led, APM-qualified, 5.0 rated.",
    url: PAGE_URL,
    siteName: "Charged Studio",
    type: "website",
  },
};

const FAQS = [
  {
    q: "How much does a website cost in Exeter?",
    a: "Every project is priced to fit what you need — we don't sell fixed packages. Most small-business sites in the Exeter area fall into a clear range depending on scope; tell us about yours and you'll have a tailored quote within a working day. See our guide on what a website costs for the full picture.",
  },
  {
    q: "Do you only work with businesses in Exeter?",
    a: "Exeter is home, but we work with service businesses right across Devon and the South West — Exmouth, Topsham, Torquay, Newton Abbot, Tiverton and beyond. Being local means we understand your customers and your patch; the work itself is delivered wherever you are.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most websites take 2–4 weeks from kickoff, depending on scope. You'll get a clear timeline up front and deal directly with the person designing and building it — no account managers, no hand-offs.",
  },
  {
    q: "Will my website rank on Google in Exeter?",
    a: "We build local SEO foundations into every site — clean structure, fast Core Web Vitals, schema, and a Google Business Profile angle — so you're set up to rank for the Exeter searches that bring in work. Ongoing SEO then compounds it.",
  },
  {
    q: "What happens after launch?",
    a: "We stick around. Hosting, domain, SSL, updates and improvements are handled on an ongoing basis, so your site keeps pulling its weight long after it goes live. Most clients stay on monthly.",
  },
];

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

export default function WebDesignExeterPage() {
  const websites = getService("websites");
  const features = websites?.features ?? [];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${PAGE_URL}/#service`,
        name: "Charged Studio — Web Design Exeter",
        url: PAGE_URL,
        description:
          "Founder-led web design in Exeter. Fast, modern, fully-managed websites built to turn local searches into enquiries for service businesses across Devon.",
        image: `${SITE_URL}/og-image.jpg`,
        priceRange: "££",
        telephone: "+44-7453-388798",
        email: "hello@chargedstudio.co.uk",
        areaServed: [
          { "@type": "City", name: "Exeter" },
          { "@type": "AdministrativeArea", name: "Devon" },
        ],
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
            name: "Web Design Exeter",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={graph} />
      <JsonLd data={faqPageLd(FAQS)} />

      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>Web Design · Exeter</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          Web Design in Exeter
        </h1>
        <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          Charged Studio is a founder-led web design studio in Exeter, building
          fast, modern, fully-managed websites for service businesses across
          Devon. We turn the searches your customers are already making into
          booked jobs and enquiries — and look after the whole thing so you never
          have to touch it.
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

      {/* Built for Exeter */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          Built for Exeter businesses
        </h2>
        <div className="mt-6 space-y-5 font-inter text-lg leading-relaxed text-text/70">
          <p>
            When someone in Exeter searches for what you do, you&apos;re either on
            the first page or you&apos;re invisible — and they call the competitor
            whose site loaded first. A slow, dated website quietly costs you that
            work every day.
          </p>
          <p>
            We build the opposite: sites that feel fast and effortless, earn trust
            in seconds, and make it obvious how to get in touch. Being local to
            Exeter means we understand who your customers are and what wins work
            here — and you deal directly with the person designing and building
            your site, start to finish.
          </p>
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
          Proven across Devon
        </h2>
        <p className="mt-6 font-inter text-lg leading-relaxed text-text/70">
          We consolidated Devon Nurseries — a five-site childcare group — into one
          credible, unified website that&apos;s easier to find, easier to trust,
          and built to bring in more enquiries. It&apos;s the kind of local result
          we build for.
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
          gets your business ranking for the Exeter and Devon searches that win
          work.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <h2 className="font-anton text-3xl uppercase leading-tight text-text sm:text-4xl">
          Web design in Exeter — common questions
        </h2>
        <dl className="mt-10 divide-y divide-border border-y border-border">
          {FAQS.map((f) => (
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
