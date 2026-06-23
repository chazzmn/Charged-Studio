# Project Roadmap — Charged Studio Website

> The full plan from zero to live. Update status as phases complete.

---

## Phase 1 — Foundation (Do Before Writing Code)

| Task | Owner | Status |
|---|---|---|
| Write CLAUDE.md | Claude | ✅ Done |
| Write brand.md | Claude | ✅ Done — colours + fonts confirmed |
| Write tone.md | Claude | ✅ Done |
| Write seo.md | Claude | ✅ Done |
| Write assets-checklist.md | Claude | ✅ Done |
| Write design-system.md | Claude | ✅ Done |
| Confirm brand colours (`#FFC100`, `#020413`, `#F7F7F7`, `#171E3A`) | Charlie | ✅ Done |
| Confirm typography (Anton / Inter Tight / Caramel) | Charlie | ✅ Done |
| Google Search Console active + verified | Charlie | ✅ Done |
| Export logo SVG (light + dark) | Charlie | ⬜ |
| Export favicon | Charlie | ⬜ |
| Download all site images from Framer CDN | Charlie | ⬜ |
| Download all testimonial headshots | Charlie | ⬜ |
| Download Charlie's about photo | Charlie | ⬜ |
| Create GitHub repo: `charged-website` | Charlie | ✅ Done — github.com/chazzmn/charged-studio |
| Connect Vercel to GitHub repo | Charlie | ✅ Done — https://charged-studio-du74cwe1k-chazzmns-projects.vercel.app |
| Set up Google Analytics 4 — get Measurement ID | Charlie | ⬜ |
| Set up Google Search Console — get DNS TXT record | Charlie | ⬜ |
| Add DNS TXT record at domain registrar | Charlie | ⬜ |
| Note current DNS settings (before touching nameservers) | Charlie | ⬜ |

---

## Phase 2 — Scaffold & Config

| Task | Owner | Status |
|---|---|---|
| `npx create-next-app@latest` with TypeScript + Tailwind | Claude | ⬜ |
| Install dependencies: `framer-motion`, `next-seo`, `next-sitemap`, `resend` | Claude | ⬜ |
| Configure `tailwind.config.ts` with brand colours + fonts | Claude | ⬜ |
| Configure `next.config.ts` — image domains, redirects | Claude | ⬜ |
| Set up root layout: fonts, GA4 script, nav, footer | Claude | ⬜ |
| Create `.env.local` template for secrets | Claude | ⬜ |
| Build `<Nav />` component | Claude | ✅ Done — fixed, transparent→solid on scroll, mobile menu |
| Build `<Footer />` component | Claude | ✅ Done — 4-col: studio, work, connect, legal |
| Build `<Container />` component | Claude | ✅ Done |
| Push initial scaffold to GitHub | Claude | ⬜ |
| Confirm Vercel auto-deploy is working | Charlie | ⬜ |

---

## Phase 3 — Page by Page

| Page | Status |
|---|---|
| Home (`/`) | 🟡 Skeleton COMPLETE — Hero, WorkMarquee, Services, ValueProp, FeaturedWork, Testimonials, FAQ, CTA. Pending: visual design pass + real imagery |
| About (`/about`) | ⬜ |
| Contact (`/contact`) | ⬜ |
| Start a Project (`/start-a-project`) | ✅ Done — project form (name/email/business/needs) |
| Audit (`/audit`) | ✅ Done — free audit page + URL form |
| FAQ (`/faq`) | ⬜ |
| Blog index (`/blog`) | ⬜ |
| Blog post: What is AEO (`/blog/what-is-aeo`) | ⬜ |
| Blog post: Website Speed (`/blog/website-speed`) | ⬜ |
| Case study: Devon Nurseries (`/devon-nurseries`) | 🟡 Skeleton built — page + homepage FeaturedWork section. Needs real images + design pass |
| Case study: CHAZZMN (`/chazzmn`) | ⏸️ Deferred — Charlie's own brand, mid-redevelopment. Add once its rebuild is live |
| Case study: The Unaffiliated (`/the-unaffiliated`) | ❌ Dropped — lost client, can't stand behind it |
| Privacy Policy (`/privacy`) | ⬜ |
| Terms of Service (`/terms-of-service`) | ⬜ |

---

## Phase 4 — Polish & QA

| Task | Status |
|---|---|
| Mobile responsiveness — every page, every breakpoint | ⬜ |
| Animations — all sections have entrance animations | ⬜ |
| Contact form — connected to Resend / email delivery tested | 🟡 Built — /api/contact (Resend if RESEND_API_KEY, else Formspree via FORMSPREE_ENDPOINT). Needs env key + a real delivery test |
| `next-sitemap` generating `sitemap.xml` correctly | ⬜ |
| `robots.txt` confirmed correct | ⬜ |
| JSON-LD structured data on homepage | ⬜ |
| All pages have unique metadata (title + description) | ⬜ |
| All images have `alt` text | ⬜ |
| All images using `next/image` | ⬜ |
| Lighthouse score 95+ on all pages | ⬜ |
| Cross-browser test: Chrome, Safari, Firefox, Edge | ⬜ |
| `npm run build` passes with zero errors | ⬜ |

---

## Phase 5 — Go Live

| Task | Status |
|---|---|
| Add `chargedstudio.co.uk` to Vercel project | ⬜ |
| Get Vercel DNS records (A record or nameservers) | ⬜ |
| Update DNS at domain registrar → point to Vercel | ⬜ |
| Wait for DNS propagation (up to 48h) | ⬜ |
| Confirm SSL certificate issued by Vercel | ⬜ |
| Test all pages on live domain | ⬜ |
| Submit sitemap to Google Search Console | ⬜ |
| Request indexing on key pages in Search Console | ⬜ |
| Confirm GA4 receiving data | ⬜ |
| Cancel Framer subscription | ⬜ |

---

## Ongoing (Post-Launch)

- Add new case studies as projects complete
- Publish blog posts (target: 2/month minimum for SEO)
- Monitor Search Console for crawl errors
- Monitor Core Web Vitals in Search Console
- A/B test CTA copy when traffic grows
