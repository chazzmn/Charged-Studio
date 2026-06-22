# SEO Strategy — Charged Studio

> SEO is baked in from day one. Every page, every image, every link is an SEO decision.

---

## Setup Checklist (do before launch)

- [x] Google Search Console account created — active, linked to Framer site
- [x] Site verified — re-verify when domain points to Vercel (re-submit sitemap after go-live)
- [ ] Google Analytics 4 property created — Measurement ID added to `.env.local`
- [ ] `next-sitemap` installed and configured — generates `/sitemap.xml` and `/robots.txt` on build
- [ ] OG image created and set as default
- [ ] Structured data (JSON-LD) added to homepage
- [ ] Canonical tags on every page
- [ ] All images have `alt` text

---

## Page-Level Metadata

Every page in `/app/*/page.tsx` must export a `metadata` object. Template:

```ts
export const metadata: Metadata = {
  title: 'Page Title — Charged Studio',
  description: 'One or two sentences. 150–160 characters max. Benefit-led.',
  alternates: { canonical: 'https://chargedstudio.co.uk/page-slug' },
  openGraph: {
    title: 'Page Title — Charged Studio',
    description: '...',
    url: 'https://chargedstudio.co.uk/page-slug',
    siteName: 'Charged Studio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title — Charged Studio',
    description: '...',
    images: ['/og-image.jpg'],
  },
}
```

---

## Page-by-Page SEO Targets

| Page | Target keyword | Title | Meta description |
|---|---|---|---|
| `/` | web design agency Exeter | Charged Studio — Web Design & Branding Agency, Exeter | Charged Studio builds premium websites, brand identities, and digital assets for growing businesses. Based in Exeter, working with clients across the UK. |
| `/about` | web design studio Exeter | About Charged Studio — The Story Behind the Brand | Learn about Charged Studio, our founder Charlie Norona, and the belief-led approach that makes us different. Based in Exeter, built for businesses ready to grow. |
| `/contact` | hire web designer Exeter | Contact Charged Studio — Let's Start Something | Ready to grow your brand? Get in touch with Charged Studio. Based in Exeter, working with businesses across the UK. |
| `/start-a-project` | start web design project | Start a Project — Charged Studio | Tell us about your project and we'll get back to you within 24 hours. |
| `/audit` | free website audit | Free Website Audit — Charged Studio | Get a free, no-obligation audit of your current website. We'll identify what's holding your digital presence back. |
| `/blog` | web design tips, branding advice | Blog — Charged Studio | Insights on web design, branding, SEO, and digital strategy from the team at Charged Studio. |
| `/faq` | web design FAQ | FAQ — Charged Studio | Everything you need to know about working with Charged Studio — process, timelines, pricing, and more. |

---

## Structured Data

### Homepage — Organization schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Charged Studio",
  "url": "https://chargedstudio.co.uk",
  "logo": "https://chargedstudio.co.uk/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-7453388798",
    "email": "hello@chargedstudio.co.uk",
    "contactType": "customer service"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Exeter",
    "addressRegion": "Devon",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://www.instagram.com/charged.studio/",
    "https://www.linkedin.com/company/charged-studio/"
  ]
}
```

### Blog posts — BlogPosting schema (add to each post)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "datePublished": "YYYY-MM-DD",
  "author": { "@type": "Person", "name": "Charlie Norona" },
  "publisher": { "@type": "Organization", "name": "Charged Studio" }
}
```

---

## Technical SEO Requirements

- **Sitemap:** Auto-generated at `/sitemap.xml` via `next-sitemap` — run on every build
- **Robots:** `/robots.txt` — allow all, point to sitemap
- **Canonical:** Every page has a self-referencing canonical
- **Performance:** Lighthouse 95+ target. Use `next/image`, `next/font`, lazy loading.
- **Core Web Vitals:** LCP < 2.5s, CLS < 0.1, INP < 200ms
- **HTTPS:** Vercel handles SSL — always https
- **Redirects:** If any old Framer URLs differ from new Next.js URLs, add 301 redirects in `next.config.ts`

---

## Google Search Console

- **Verification method:** DNS TXT record (preferred — doesn't depend on a meta tag staying in place)
- **Verification code:** [ADD WHEN CREATED]
- **Property type:** Domain property (covers all subdomains and http/https)
- **Sitemap submitted:** `https://chargedstudio.co.uk/sitemap.xml`

---

## Local SEO

Charged Studio is based in Exeter — local search matters.

- Mention "Exeter" and "Devon" naturally in homepage and about copy
- Consider Google Business Profile (separate from this site, but link to it)
- Target keywords: "web design agency Exeter", "branding studio Devon", "website design Exeter"
