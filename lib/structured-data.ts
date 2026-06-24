/**
 * Structured data (JSON-LD) for SEO + AEO (Answer Engine Optimisation).
 * One source of truth for the organisation graph; helpers for page-level schema.
 * Rendered via <JsonLd /> (components/JsonLd.tsx).
 */

export const SITE_URL = "https://chargedstudio.co.uk";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Charged Studio as a local professional service + the website that fronts it. */
export const siteGraphLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "Charged Studio",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "Charged Studio is a founder-led web design and digital studio in Exeter, Devon. We build fast, modern websites, custom software, SEO and branding for growing service businesses across Devon and the South West.",
      slogan: "Built to perform. Charged to last.",
      email: "hello@chargedstudio.co.uk",
      telephone: "+44-7453-388798",
      priceRange: "££",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Exeter",
        addressRegion: "Devon",
        addressCountry: "GB",
      },
      areaServed: [
        { "@type": "City", name: "Exeter" },
        { "@type": "AdministrativeArea", name: "Devon" },
        { "@type": "AdministrativeArea", name: "South West England" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      knowsAbout: [
        "Web design",
        "Website development",
        "Local SEO",
        "Answer Engine Optimisation",
        "Custom software development",
        "Branding and visual identity",
      ],
      founder: {
        "@type": "Person",
        name: "Charlie Norona",
        jobTitle: "Founder & Creative Director",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "APM Project Management Qualification (PMQ)",
        },
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@chargedstudio.co.uk",
        telephone: "+44-7453-388798",
        areaServed: "GB",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.instagram.com/charged.studio/",
        "https://www.linkedin.com/company/charged-studio/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "16",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Charged Studio",
      inLanguage: "en-GB",
      publisher: { "@id": ORG_ID },
    },
  ],
};

/** FAQPage schema — pass an array of { q, a }. Great for AEO + rich results. */
export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
