# Project Roadmap — Charged Studio Website

> The full plan from zero to live. Update status as phases complete.

---

## Current State (last updated 2026-06-23)

**Build:** Next.js 16 + React 19 + Tailwind v4. All core pages + homepage skeleton built and type-checking clean. Deployed to Vercel; pushing to `main` auto-deploys.

**Done:** Scaffold, brand tokens, all 3 fonts (Caramel self-hosted), Nav/Footer/Container, full homepage (Hero, WorkMarquee, Services, ValueProp, FeaturedWork, Testimonials, FAQ, CTA), pages (`/about`, `/contact`, `/start-a-project`, `/audit`, `/devon-nurseries`, `/blog` + 5 posts, `/privacy`, `/terms-of-service`), and a working lead-capture form (`/api/contact` → Resend/Formspree).

**Confirmed decisions:** Reposition to websites-led (software/SEO added, branding demoted). Site's job = lead gen. ICP = local Devon/SW service businesses. Primary CTA = project form; Free Audit secondary; Book-a-call tertiary. Blog = footer-only (SEO), not nav. Case studies: Devon Nurseries = flagship; CHAZZMN deferred; The Unaffiliated dropped.

**Next up:** SEO/technical wiring (sitemap + robots via next-sitemap, homepage Organization JSON-LD, GA4, OG image) → Charlie's visual design pass + real imagery → go-live (domain/DNS, verify Resend domain, cancel Framer).

**Pending on Charlie:** verify domain in Resend; visual design (post-course); supply real images (pull from Framer); legally review Privacy/Terms templates.

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
| `npx create-next-app@latest` with TypeScript + Tailwind | Claude | ✅ Done (Next 16 + Tailwind v4) |
| Install dependencies | Claude | ✅ `framer-motion` + `next-sitemap` installed. NOTE: `resend` NOT installed (we call the Resend REST API via fetch — no SDK); `next-seo` not used (App Router metadata API instead) |
| Configure `tailwind.config.ts` with brand colours + fonts | Claude | ✅ Done — REQUIRES `@config` line in globals.css (Tailwind v4) |
| Configure `next.config.ts` — image domains, redirects | Claude | ✅ Done (framerusercontent.com allowed; redirects empty) |
| Set up root layout: fonts, GA4 script, nav, footer | Claude | 🟡 Fonts + Nav + Footer done. GA4 script NOT added yet |
| Create `.env.local` template for secrets | Claude | ✅ `.env.example` (committed) + `.env.local` (gitignored, has Charlie's Resend key) |
| Build `<Nav />` component | Claude | ✅ Done — fixed, transparent→solid on scroll, mobile menu |
| Build `<Footer />` component | Claude | ✅ Done — 4-col; dead links cleaned |
| Build `<Container />` component | Claude | ✅ Done |
| Push initial scaffold to GitHub | Claude | ✅ Done (Charlie pushing from his Mac) |
| Confirm Vercel auto-deploy is working | Charlie | ✅ Done |

---

## Phase 3 — Page by Page

| Page | Status |
|---|---|
| Home (`/`) | 🟡 Skeleton COMPLETE — Hero, WorkMarquee, Services, ValueProp, FeaturedWork, Testimonials, FAQ, CTA. Pending: visual design pass + real imagery |
| About (`/about`) | 🟡 Skeleton — belief-led story, values, photo placeholder |
| Contact (`/contact`) | 🟡 Skeleton — details + reused project form |
| Start a Project (`/start-a-project`) | ✅ Done — project form (name/email/business/needs) |
| Audit (`/audit`) | ✅ Done — free audit page + URL form |
| FAQ | ✅ Lives as a section on the homepage (`/#faq`); nav + footer link there. No separate /faq page (by design) |
| Blog index (`/blog`) | ✅ Built — footer-linked (NOT in nav, by design), posts.ts data source |
| Blog post: What is AEO (`/blog/what-is-aeo`) | ✅ Built — with BlogPosting JSON-LD |
| Blog post: Website Speed (`/blog/website-speed`) | ✅ Built — with BlogPosting JSON-LD |
| Case study: Devon Nurseries (`/devon-nurseries`) | 🟡 Skeleton built — page + homepage FeaturedWork section. Needs real images + design pass |
| Case study: CHAZZMN (`/chazzmn`) | ⏸️ Deferred — Charlie's own brand, mid-redevelopment. Add once its rebuild is live |
| Case study: The Unaffiliated (`/the-unaffiliated`) | ❌ Dropped — lost client, can't stand behind it |
| Privacy Policy (`/privacy`) | 🟡 Template built (UK/GDPR) — Charlie to review before relying on it |
| Terms of Service (`/terms-of-service`) | 🟡 Template built (England & Wales) — Charlie to review |

---

## Phase 4 — Polish & QA

| Task | Status |
|---|---|
| Mobile responsiveness — every page, every breakpoint | ⬜ |
| Animations — all sections have entrance animations | 🟡 Framer Motion entrances on built sections (reduced-motion safe). Revisit during design pass |
| Contact form — connected to Resend / email delivery tested | 🟡 Built — /api/contact (Resend if RESEND_API_KEY, else Formspree via FORMSPREE_ENDPOINT). Key added; needs Resend domain verify + a real delivery test |
| `next-sitemap` generating `sitemap.xml` correctly | ⬜ Installed, not configured |
| `robots.txt` confirmed correct | ⬜ (comes with next-sitemap) |
| JSON-LD structured data on homepage | ⬜ Homepage Organization schema still TODO (blog posts already have BlogPosting JSON-LD) |
| All pages have unique metadata (title + description) | ✅ Every built page has metadata + canonical |
| All images have `alt` text | 🟡 Placeholders are divs; applies once real images go in |
| All images using `next/image` | 🟡 Logo uses next/image; section images are placeholder divs until real assets |
| Lighthouse score 95+ on all pages | ⬜ (run + add the real score as a homepage proof point) |
| Cross-browser test: Chrome, Safari, Firefox, Edge | ⬜ |
| `npm run build` passes with zero errors | ✅ Verified green (Turbopack); tsc clean |

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
