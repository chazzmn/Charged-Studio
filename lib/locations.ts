import type { Metadata } from "next";
import { SITE_URL } from "@/lib/structured-data";

/**
 * Local-SEO location pages (`/web-design-<place>`).
 *
 * One data entry per place drives the shared `components/LocationPage`. Keep the
 * copy genuinely place-specific — unique headings, body and FAQs — so each page
 * earns its ranking rather than reading as a duplicate doorway page.
 *
 * To add a town: add an entry here, create a thin `app/web-design-<slug>/page.tsx`
 * that renders <LocationPage>, then add it to `app/sitemap.ts` and the footer.
 */

export type LocationFaq = { q: string; a: string };
export type AreaServed = {
  type: "City" | "AdministrativeArea" | "Town";
  name: string;
};

export type LocationContent = {
  slug: string; // e.g. "web-design-exeter"
  place: string; // "Exeter" | "Devon"
  county: string; // "Devon"
  badge: string;
  h1: string;
  title: string;
  description: string;
  heroIntro: string;
  builtForHeading: string;
  builtForParas: string[];
  localProofHeading: string;
  localProofPara: string;
  faqsHeading: string;
  faqs: LocationFaq[];
  schemaName: string;
  schemaDescription: string;
  areaServed: AreaServed[];
  breadcrumbName: string;
};

export const LOCATIONS: LocationContent[] = [
  {
    slug: "web-design-exeter",
    place: "Exeter",
    county: "Devon",
    badge: "Web Design · Exeter",
    h1: "Web Design in Exeter",
    title: "Web Design Exeter | Custom Websites That Convert — Charged Studio",
    description:
      "Web designer in Exeter building fast, modern, fully-managed websites that turn local searches into enquiries. Founder-led, APM-qualified, 5.0 rated. Free audit.",
    heroIntro:
      "Charged Studio is a founder-led web design studio in Exeter, building fast, modern, fully-managed websites for service businesses across Devon. We turn the searches your customers are already making into booked jobs and enquiries — and look after the whole thing so you never have to touch it.",
    builtForHeading: "Built for Exeter businesses",
    builtForParas: [
      "When someone in Exeter searches for what you do, you're either on the first page or you're invisible — and they call the competitor whose site loaded first. A slow, dated website quietly costs you that work every day.",
      "We build the opposite: sites that feel fast and effortless, earn trust in seconds, and make it obvious how to get in touch. Being local to Exeter means we understand who your customers are and what wins work here — and you deal directly with the person designing and building your site, start to finish.",
    ],
    localProofHeading: "Proven across Devon",
    localProofPara:
      "We consolidated Devon Nurseries — a five-site childcare group — into one credible, unified website that's easier to find, easier to trust, and built to bring in more enquiries. It's the kind of local result we build for.",
    faqsHeading: "Web design in Exeter — common questions",
    faqs: [
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
    ],
    schemaName: "Charged Studio — Web Design Exeter",
    schemaDescription:
      "Founder-led web design in Exeter. Fast, modern, fully-managed websites built to turn local searches into enquiries for service businesses across Devon.",
    areaServed: [
      { type: "City", name: "Exeter" },
      { type: "AdministrativeArea", name: "Devon" },
    ],
    breadcrumbName: "Web Design Exeter",
  },
  {
    slug: "web-design-devon",
    place: "Devon",
    county: "Devon",
    badge: "Web Design · Devon",
    h1: "Web Design in Devon",
    title: "Web Design Devon | Websites Built to Win Local Work — Charged Studio",
    description:
      "Devon web designer creating fast, modern, fully-managed websites for service businesses across the county. Founder-led, APM-qualified, 5.0 rated. Free audit.",
    heroIntro:
      "Charged Studio is a founder-led web design studio based in Exeter, building fast, modern, fully-managed websites for service businesses right across Devon. We turn the searches your customers are already making into booked jobs and enquiries — and look after the whole thing so you never have to touch it.",
    builtForHeading: "Built for Devon businesses",
    builtForParas: [
      "From Exeter to Plymouth, Barnstaple to Torquay, Devon's best service businesses are too often let down by slow, dated websites — and they lose work to the competitor whose site loaded first. When a customer searches for what you do, you're either on the first page or you're invisible.",
      "We build the opposite: fast, modern sites that earn trust in seconds and make it obvious how to get in touch. Based in Devon and working across the county, we understand your customers and your patch — and you deal directly with the person designing and building your site, start to finish.",
    ],
    localProofHeading: "Proven in Devon",
    localProofPara:
      "We consolidated Devon Nurseries — a five-site childcare group across the county — into one credible, unified website that's easier to find, easier to trust, and built to bring in more enquiries. It's the kind of local result we build for Devon businesses.",
    faqsHeading: "Web design in Devon — common questions",
    faqs: [
      {
        q: "How much does a website cost in Devon?",
        a: "Every project is priced to fit what you need — we don't sell fixed packages. Landing pages start from £695, business websites from £1,495, and larger or e-commerce builds from £2,495. Tell us about your project and you'll have a tailored quote within a working day.",
      },
      {
        q: "Which areas of Devon do you cover?",
        a: "All of it. We're based in Exeter and work with service businesses right across Devon — Plymouth, Torquay, Barnstaple, Newton Abbot, Exmouth, Tiverton, Tavistock and everywhere between. Being local means we understand your customers; the work is delivered wherever you are.",
      },
      {
        q: "Do I need to be in Exeter to work with you?",
        a: "Not at all. Most of the work happens remotely with a clear process and regular check-ins, and we're always happy to meet in person anywhere in Devon when it helps. You'll deal directly with the founder either way.",
      },
      {
        q: "Will my website rank on Google across Devon?",
        a: "We build local SEO foundations into every site — clean structure, fast Core Web Vitals, schema and a Google Business Profile angle — so you're set up to rank for the Devon town searches that bring in work. Ongoing SEO then compounds it.",
      },
      {
        q: "What happens after launch?",
        a: "We stick around. Hosting, domain, SSL, updates and improvements are handled on an ongoing basis, so your site keeps pulling its weight long after it goes live. Most clients stay on monthly.",
      },
    ],
    schemaName: "Charged Studio — Web Design Devon",
    schemaDescription:
      "Founder-led web design across Devon. Fast, modern, fully-managed websites built to turn local searches into enquiries for service businesses county-wide.",
    areaServed: [
      { type: "AdministrativeArea", name: "Devon" },
      { type: "City", name: "Exeter" },
      { type: "City", name: "Plymouth" },
      { type: "City", name: "Torquay" },
      { type: "City", name: "Barnstaple" },
    ],
    breadcrumbName: "Web Design Devon",
  },
  {
    slug: "web-design-plymouth",
    place: "Plymouth",
    county: "Devon",
    badge: "Web Design · Plymouth",
    h1: "Web Design in Plymouth",
    title: "Web Design Plymouth | Websites That Win Local Work — Charged Studio",
    description:
      "Plymouth web designer building fast, modern, fully-managed websites that turn local searches into enquiries. Founder-led, APM-qualified, 5.0 rated. Free audit.",
    heroIntro:
      "Charged Studio is a founder-led web design studio in Devon, building fast, modern, fully-managed websites for service businesses in Plymouth and across the South West. We turn the searches your customers are already making into booked jobs and enquiries — and look after the whole thing so you never have to touch it.",
    builtForHeading: "Built for Plymouth businesses",
    builtForParas: [
      "Plymouth is a big, competitive city — Britain's Ocean City — and that means more businesses fighting for the same customers. When someone searches for what you do, the one on the first page with the fastest, clearest site wins the call. A dated website quietly hands that work to a competitor.",
      "We build sites that load fast, earn trust in seconds, and make it obvious how to get in touch — engineered to turn Plymouth searches into enquiries. You deal directly with the person designing and building it, from first call to launch and beyond.",
    ],
    localProofHeading: "Proven across Devon",
    localProofPara:
      "We consolidated Devon Nurseries — a five-site childcare group — into one credible, unified website that's easier to find, easier to trust, and built to bring in more enquiries. It's the kind of local result we build for service businesses across Plymouth and Devon.",
    faqsHeading: "Web design in Plymouth — common questions",
    faqs: [
      {
        q: "How much does a website cost in Plymouth?",
        a: "Every project is priced to what you need, not a fixed package. Landing pages start from £695, business websites from £1,495, and larger or e-commerce builds from £2,495. Tell us about your project and you'll have a tailored quote within a working day.",
      },
      {
        q: "Do you work with businesses across Plymouth?",
        a: "Yes — from the Barbican and the city centre out to Plympton, Plymstock and the surrounding villages. We're Devon-based, so we understand the local market; the work itself is delivered wherever you are in the city.",
      },
      {
        q: "Are you actually based in Plymouth?",
        a: "We're based in Devon and work with Plymouth businesses remotely with a clear, structured process — and we're happy to meet in person when it helps. You always deal directly with the founder, never an account manager.",
      },
      {
        q: "Will my website rank on Google in Plymouth?",
        a: "We build local SEO foundations into every site — clean structure, fast Core Web Vitals, schema and a Google Business Profile angle — so you're set up to rank for the Plymouth searches that bring in work. Ongoing SEO then compounds it.",
      },
      {
        q: "What happens after launch?",
        a: "We stick around. Hosting, domain, SSL, updates and improvements are handled on an ongoing basis, so your site keeps pulling its weight long after it goes live. Most clients stay on monthly.",
      },
    ],
    schemaName: "Charged Studio — Web Design Plymouth",
    schemaDescription:
      "Founder-led web design for Plymouth. Fast, modern, fully-managed websites built to turn local searches into enquiries for service businesses across the South West.",
    areaServed: [
      { type: "City", name: "Plymouth" },
      { type: "AdministrativeArea", name: "Devon" },
    ],
    breadcrumbName: "Web Design Plymouth",
  },
  {
    slug: "web-design-barnstaple",
    place: "Barnstaple",
    county: "Devon",
    badge: "Web Design · Barnstaple",
    h1: "Web Design in Barnstaple",
    title: "Web Design Barnstaple | Websites for North Devon — Charged Studio",
    description:
      "Barnstaple web designer building fast, modern, fully-managed websites for North Devon businesses. Founder-led, APM-qualified, 5.0 rated. Free audit.",
    heroIntro:
      "Charged Studio is a founder-led web design studio in Devon, building fast, modern, fully-managed websites for service businesses in Barnstaple and across North Devon. We turn the searches your customers are already making into booked jobs and enquiries — and look after the whole thing so you never have to touch it.",
    builtForHeading: "Built for Barnstaple & North Devon businesses",
    builtForParas: [
      "As North Devon's main commercial town, Barnstaple is the hub a huge rural area relies on — and customers from across the region search online before they travel in. If your site is slow or dated, they scroll on to the business whose site loaded first.",
      "We build fast, modern sites that earn trust instantly and make enquiring effortless — built to pull in work from Barnstaple and the towns and coast around it. You deal directly with the person designing and building your site, start to finish.",
    ],
    localProofHeading: "Proven across Devon",
    localProofPara:
      "We consolidated Devon Nurseries — a five-site childcare group — into one credible, unified website that's easier to find, easier to trust, and built to win more enquiries. It's the kind of result we build for service businesses across Barnstaple and North Devon.",
    faqsHeading: "Web design in Barnstaple — common questions",
    faqs: [
      {
        q: "How much does a website cost in Barnstaple?",
        a: "Projects are priced to fit, not sold as fixed packages. Landing pages start from £695, business websites from £1,495, and larger or e-commerce builds from £2,495. Tell us what you need and you'll have a tailored quote within a working day.",
      },
      {
        q: "Do you cover North Devon as well as Barnstaple?",
        a: "Yes — Barnstaple, Bideford, Ilfracombe, Braunton, South Molton and the surrounding villages and coast. Being Devon-based means we understand the North Devon market; the work is delivered wherever you are.",
      },
      {
        q: "Do I need to be in Barnstaple to work with you?",
        a: "No. Most of the work happens remotely with a clear process and regular check-ins, and we'll meet in person across North Devon when it helps. You deal directly with the founder throughout.",
      },
      {
        q: "Will my website rank on Google in Barnstaple?",
        a: "We build local SEO foundations into every site — clean structure, fast Core Web Vitals, schema and a Google Business Profile angle — so you're set up to rank for the North Devon searches that bring in work. Ongoing SEO compounds it.",
      },
      {
        q: "What happens after launch?",
        a: "We stick around. Hosting, domain, SSL, updates and improvements are handled on an ongoing basis, so your site keeps pulling its weight long after it goes live. Most clients stay on monthly.",
      },
    ],
    schemaName: "Charged Studio — Web Design Barnstaple",
    schemaDescription:
      "Founder-led web design for Barnstaple and North Devon. Fast, modern, fully-managed websites built to turn local searches into enquiries for service businesses.",
    areaServed: [
      { type: "Town", name: "Barnstaple" },
      { type: "AdministrativeArea", name: "Devon" },
    ],
    breadcrumbName: "Web Design Barnstaple",
  },
  {
    slug: "web-design-torquay",
    place: "Torquay",
    county: "Devon",
    badge: "Web Design · Torquay",
    h1: "Web Design in Torquay",
    title: "Web Design Torquay | Websites for the English Riviera — Charged Studio",
    description:
      "Torquay web designer building fast, modern, fully-managed websites for businesses across Torbay and the English Riviera. Founder-led, 5.0 rated. Free audit.",
    heroIntro:
      "Charged Studio is a founder-led web design studio in Devon, building fast, modern, fully-managed websites for service businesses in Torquay and across Torbay. We turn the searches your customers are already making into booked jobs and enquiries — and look after the whole thing so you never have to touch it.",
    builtForHeading: "Built for Torquay & Torbay businesses",
    builtForParas: [
      "Torquay and the English Riviera run on visitors, and competition for them is fierce — hospitality, trades, clinics and services all chasing the same searches. A slow or dated website loses that work to whoever loads first and looks the part.",
      "We build fast, modern sites that earn trust in seconds and turn Torbay searches into bookings and enquiries. Local to Devon and dealing with you directly, from first call to launch and the support that follows.",
    ],
    localProofHeading: "Proven across Devon",
    localProofPara:
      "We consolidated Devon Nurseries — a five-site childcare group — into one credible, unified website that's easier to find, easier to trust, and built to bring in more enquiries. It's the kind of local result we build for service businesses across Torquay and Torbay.",
    faqsHeading: "Web design in Torquay — common questions",
    faqs: [
      {
        q: "How much does a website cost in Torquay?",
        a: "Every project is priced to what you need. Landing pages start from £695, business websites from £1,495, and larger or e-commerce builds from £2,495. Tell us about your project and you'll have a tailored quote within a working day.",
      },
      {
        q: "Do you cover Paignton and Brixham too?",
        a: "Yes — the whole of Torbay: Torquay, Paignton, Brixham and the surrounding area. Being Devon-based means we know the Riviera market; the work is delivered wherever you are along the bay.",
      },
      {
        q: "Do you work with hospitality and tourism businesses?",
        a: "Often — hotels, cafés, attractions and the trades and services around them. If you rely on visitors and locals finding and trusting you online, a fast, clear site is one of the best investments you can make.",
      },
      {
        q: "Will my website rank on Google in Torquay?",
        a: "We build local SEO foundations into every site — clean structure, fast Core Web Vitals, schema and a Google Business Profile angle — so you're set up to rank for the Torbay searches that bring in work. Ongoing SEO compounds it.",
      },
      {
        q: "What happens after launch?",
        a: "We stick around. Hosting, domain, SSL, updates and improvements are handled on an ongoing basis, so your site keeps pulling its weight long after it goes live. Most clients stay on monthly.",
      },
    ],
    schemaName: "Charged Studio — Web Design Torquay",
    schemaDescription:
      "Founder-led web design for Torquay and Torbay. Fast, modern, fully-managed websites built to turn local searches into enquiries for service businesses on the English Riviera.",
    areaServed: [
      { type: "Town", name: "Torquay" },
      { type: "AdministrativeArea", name: "Devon" },
    ],
    breadcrumbName: "Web Design Torquay",
  },
  {
    slug: "web-design-bristol",
    place: "Bristol",
    county: "South West",
    badge: "Web Design · Bristol",
    h1: "Web Design in Bristol",
    title: "Web Design Bristol | Fast, Modern Websites That Convert — Charged Studio",
    description:
      "Bristol web designer building fast, modern, fully-managed websites that turn searches into enquiries. Founder-led, APM-qualified, 5.0 rated. Free audit.",
    heroIntro:
      "Charged Studio is a founder-led web design studio in the South West, building fast, modern, fully-managed websites for service businesses in Bristol and the surrounding area. We turn the searches your customers are already making into booked jobs and enquiries — and look after the whole thing so you never have to touch it.",
    builtForHeading: "Built for Bristol businesses",
    builtForParas: [
      "Bristol is the South West's biggest, most competitive digital market — a city full of ambitious businesses and the agencies chasing them. Standing out takes a site that's genuinely fast, sharp and built to convert, not a templated one that looks like everyone else's.",
      "That's what we build: distinctive, quick-loading sites that earn trust and turn visitors into enquiries — with a founder-led process and no account managers in the way. You deal directly with the person designing and building it.",
    ],
    localProofHeading: "Proven across the South West",
    localProofPara:
      "We consolidated Devon Nurseries — a five-site group — into one credible, unified website that's easier to find, easier to trust, and built to bring in more enquiries. It's the kind of result we build for ambitious businesses across the South West.",
    faqsHeading: "Web design in Bristol — common questions",
    faqs: [
      {
        q: "How much does a website cost in Bristol?",
        a: "Projects are priced to fit, not sold as fixed packages. Landing pages start from £695, business websites from £1,495, and larger or e-commerce builds from £2,495. Tell us about your project and you'll have a tailored quote within a working day.",
      },
      {
        q: "Are you based in Bristol?",
        a: "We're a South West studio and work with Bristol businesses remotely with a clear, structured process, meeting in person when it helps. You deal directly with the founder, not an account manager — often sharper and better value than a big-city agency.",
      },
      {
        q: "What kind of Bristol businesses do you work with?",
        a: "Service businesses of all kinds — trades, clinics, consultancies, hospitality and more. If you rely on customers finding and trusting you online, we can help.",
      },
      {
        q: "Will my website rank on Google in Bristol?",
        a: "We build local SEO foundations into every site — clean structure, fast Core Web Vitals, schema and a Google Business Profile angle — so you're set up to rank for the Bristol searches that bring in work. Ongoing SEO then compounds it.",
      },
      {
        q: "What happens after launch?",
        a: "We stick around. Hosting, domain, SSL, updates and improvements are handled on an ongoing basis, so your site keeps pulling its weight long after it goes live. Most clients stay on monthly.",
      },
    ],
    schemaName: "Charged Studio — Web Design Bristol",
    schemaDescription:
      "Founder-led web design for Bristol. Fast, modern, fully-managed websites built to turn local searches into enquiries for service businesses across the South West.",
    areaServed: [{ type: "City", name: "Bristol" }],
    breadcrumbName: "Web Design Bristol",
  },
  {
    slug: "web-design-st-thomas",
    place: "St Thomas",
    county: "Exeter",
    badge: "Web Design · St Thomas",
    h1: "Web Design in St Thomas, Exeter",
    title: "Web Design St Thomas, Exeter | Local Websites — Charged Studio",
    description:
      "Web designer for St Thomas and Exeter, building fast, modern, fully-managed websites that turn local searches into enquiries. Founder-led, 5.0 rated. Free audit.",
    heroIntro:
      "Charged Studio is a founder-led web design studio in Exeter, building fast, modern, fully-managed websites for the independent businesses of St Thomas and across the city. We turn the searches your customers are already making into booked jobs and enquiries — and look after the whole thing so you never have to touch it.",
    builtForHeading: "Built for St Thomas businesses",
    builtForParas: [
      "St Thomas is one of Exeter's busiest independent neighbourhoods — the shops, salons, trades and services along Cowick Street and around it all competing for local custom. When a neighbour searches for what you do, the business with the fastest, clearest site gets the call.",
      "We build exactly that: quick, modern sites that earn trust in seconds and make enquiring effortless — and we're right here in Exeter, so you deal face-to-face with the person designing and building your site.",
    ],
    localProofHeading: "Proven across Exeter & Devon",
    localProofPara:
      "We consolidated Devon Nurseries — a five-site childcare group — into one credible, unified website that's easier to find, easier to trust, and built to bring in more enquiries. It's the kind of local result we build for businesses in St Thomas and across Exeter.",
    faqsHeading: "Web design in St Thomas — common questions",
    faqs: [
      {
        q: "How much does a website cost?",
        a: "Every project is priced to what you need, not a fixed package. Landing pages start from £695, business websites from £1,495, and larger or e-commerce builds from £2,495. Tell us about yours and you'll have a tailored quote within a working day.",
      },
      {
        q: "Do you work with other parts of Exeter too?",
        a: "Yes — St Thomas is on our doorstep, and we work with businesses right across Exeter and Devon: the city centre, Heavitree, St Leonard's, Pinhoe, Topsham and beyond.",
      },
      {
        q: "Can we meet in person?",
        a: "Easily — we're Exeter-based, so a coffee in St Thomas or the city centre is no problem at all. You'll always deal directly with the founder, never an account manager.",
      },
      {
        q: "Will my website rank for local Exeter searches?",
        a: "We build local SEO foundations into every site — clean structure, fast Core Web Vitals, schema and a Google Business Profile angle — so you're set up to rank for the St Thomas and wider Exeter searches that bring in work. Ongoing SEO compounds it.",
      },
      {
        q: "What happens after launch?",
        a: "We stick around. Hosting, domain, SSL, updates and improvements are handled on an ongoing basis, so your site keeps pulling its weight long after it goes live. Most clients stay on monthly.",
      },
    ],
    schemaName: "Charged Studio — Web Design St Thomas, Exeter",
    schemaDescription:
      "Founder-led web design for St Thomas and Exeter. Fast, modern, fully-managed websites built to turn local searches into enquiries for independent businesses.",
    areaServed: [
      { type: "Town", name: "St Thomas" },
      { type: "City", name: "Exeter" },
      { type: "AdministrativeArea", name: "Devon" },
    ],
    breadcrumbName: "Web Design St Thomas",
  },
];

export function locationSlugs(): string[] {
  return LOCATIONS.map((l) => l.slug);
}

export function getLocation(slug: string): LocationContent | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

/** Builds the Next metadata export for a location page from its content. */
export function locationMetadata(data: LocationContent): Metadata {
  const url = `${SITE_URL}/${data.slug}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      siteName: "Charged Studio",
      type: "website",
    },
  };
}
