# Project Roadmap — Charged Studio Website

> The full plan from zero to live. Update status as phases complete.

---

## Current State (last updated 2026-06-23)

**Build:** Next.js 16 + React 19 + Tailwind v4. All core pages + homepage skeleton built and type-checking clean. Deployed to Vercel; pushing to `main` auto-deploys.

**Done:** Scaffold, brand tokens, all 3 fonts (Caramel self-hosted), Nav/Footer/Container, full homepage (Hero, WorkMarquee, Services, ValueProp, FeaturedWork, Testimonials, FAQ, CTA), pages (`/about`, `/contact`, `/start-a-project`, `/audit`, `/devon-nurseries`, `/blog` + 5 posts, `/privacy`, `/terms-of-service`), and a working lead-capture form (`/api/contact` → Resend/Formspree).

**Confirmed decisions:** Reposition to websites-led (software/SEO added, branding demoted). Site's job = lead gen. ICP = local Devon/SW service businesses. Primary CTA = project form; Free Audit secondary; Book-a-call tertiary. Blog = footer-only (SEO), not nav. Case studies: Devon Nurseries = flagship; CHAZZMN deferred; The Unaffiliated dropped.

**Theme decision (2026-06-23 — REVERTED TO DARK):** Charlie trialled a light theme then reversed it — the site is back **DARK**: `#020413` page background, `#F7F7F7` primary text, yellow `#FFC100` the single accent, navy `#171E3A` surfaces. This now **matches the canonical `BRAND-SYSTEM.md`** (which always read dark), so no reconciliation pass is needed. Implemented by flipping `:root` semantic tokens + dark-tuned shadows in `globals.css` and reversing the literal theme classes across all pages/components (page text → `charged-light`, cards → `bg-charged-navy/40`, borders → `border-white/x`, gradients + marquee edge-fades → dark). Nav + Footer were already dark bookends. Chatbot re-skinned to dark. tsc clean; Tailwind compiles. (Light-theme work is recoverable in git history if ever wanted again.)

**AI chat bot (2026-06-23 — NEW):** Simple floating chat button, bottom-right, answers general visitor questions. Charlie has existing working code (currently live on chargedstudio.co.uk) to reuse. Scoped as a port/reuse, not a new build.

**Next up:** Direction lock (light theme + hero) → **Phase 3.5 design pass & IA v2** (apply light theme, remove emojis, hero video, scrolling reviews, per-service pages, contact redesign, about-process, AI bot) → SEO/technical wiring (sitemap + robots, Organization JSON-LD, GA4, OG image) → go-live (domain/DNS, verify Resend, cancel Framer).

**Pending on Charlie:** verify domain in Resend; visual design (post-course); supply real images (pull from Framer); legally review Privacy/Terms templates.

---

## NEXT SESSION — confirmed requirements (Charlie, 2026-06-23) — NOT yet built

These are the agreed next jobs. Do these, then push (Charlie said "we're very close to a finished product").

1. **Start a Project → LONG MULTI-STEP FORM.** Charlie wants the "Start a Project" CTA to open a long, multi-step / wizard-style form (not the current single short form: name/email/business/message). Think structured intake broken into steps (e.g. what you need → project details → budget/timeline → about you/contact). Triggered by the existing "Start a Project" buttons. Replaces/extends `components/ProjectForm.tsx` (kind="project") + `app/start-a-project/page.tsx`. Still posts to `/api/contact` (extend the payload + the email template in `app/api/contact/route.ts` to include the new fields). EXACT steps/fields not yet specified by Charlie — confirm the field list with him before building, OR propose a sensible structured intake and let him adjust.
2. **Audit feature — REDESIGN TO MATCH CHARLIE'S REFERENCE PHOTO.** Charlie has a screenshot/photo of what the `/audit` page should look like. ⚠️ **The image did NOT come through in chat (uploads folder was empty) — ASK CHARLIE TO RE-SEND IT before building.** Current `/audit` is just a URL request form that emails the request. Likely direction (confirm against the photo): an instant/automated audit experience (e.g. visitor enters URL → live PageSpeed/SEO scores shown on-page) — but DO NOT assume; get the reference image first.
3. **Services section (homepage `components/Services.tsx`) — "not good", needs a redesign.** Charlie flagged the current 1-big-card + 3-card layout (Websites / Software & Apps / SEO & Digital Presence / Branding & Creative) as weak. Specifics not given — propose a stronger layout in his visual pass. Copy/structure are fine; it's the visual treatment.
4. ~~**About page redesign — match Charlie's reference layout + add HIM.**~~ ✅ **DONE 2026-06-24.** Founder hero in `app/about/page.tsx`: big name "Charlie Norona", subtitle "Founder & Creative Director", founder cut-out (`/images/charlie-norona.png`, web-sized 800px from `public/content/Charlie Norona.png`) on a yellow circle (left), bio paragraphs leading on the **APM PMQ** USP (right), stat row (**APM PMQ** · **100%** · **Exeter**), and a circular "CONTACT →" button → `/contact`. Process + Values sections retained below. tsc clean. ⏳ Charlie to eyeball the cut-out's vertical fit inside the circle on `npm run dev` (object-bottom; tweak the `top-10` inset if the head sits too high/low).
5. **BUG: Denise Russell missing from the reviews marquee.** Charlie reports she's not showing. Investigate `components/Testimonials.tsx` (she's the 5th entry, the only one with no `image` → initials fallback). Ensure she renders, or resolve the earlier open item (give Denise a headshot, OR swap in Ivan who has a photo `public/images/testimonials/ivan.jpg` but currently no quote).

### Already DONE this session (2026-06-23, code; verify with `npm run dev`)
- **Theme reverted to DARK** + **full semantic-token migration** (re-theme now = edit `app/globals.css` `:root` only).
- **Nav reverted** to transparent-over-hero → translucent `bg-bg/80 backdrop-blur-md` on scroll (was a solid attention-drawing bar). `components/Nav.tsx`.
- **Testimonial headshots wired in.** Files copied to `public/images/testimonials/` (kebab-named): tariq-salfo.jpg, jane-gold.png, jack-smith.png, olivia-johnson.png (+ ivan.jpg unused). `components/Testimonials.tsx` now renders `next/image` with an initials fallback. ⚠️ **Denise Russell has no headshot; Ivan has a photo but no quote** — Charlie to decide (add a Denise photo, or give Ivan a quote and swap). Originals live in `public/content/testimonial headshots/`.

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

## Phase 3.5 — Design Pass & IA v2 (CURRENT FOCUS — added 2026-06-23)

Distilled from Charlie's design notes. Gated by the direction lock (light theme + hero concept).

| Task | Owner | Status |
|---|---|---|
| **Lock direction:** light theme confirmed (`#F7F7F7`); confirm hero concept (full-bleed bg video vs split video-right/black-left) + mobile behaviour | Charlie | 🟡 Theme ✅ light; hero concept TBC |
| Reconcile `BRAND-SYSTEM.md` with the theme | Claude | ✅ N/A — site reverted to DARK (2026-06-23), which already matches BRAND-SYSTEM.md. No reconciliation needed. |
| ~~Apply light theme~~ → **REVERTED to dark** across all pages/components (tokens, surfaces, borders, gradients, chatbot) | Claude | ✅ Done — light trial reversed; :root tokens + literal classes flipped back to dark; tsc clean, Tailwind compiles |
| **Semantic-token migration** — replace ALL hardcoded colour classes (`bg-charged-*`, `text-charged-*`, `*-white`) with role tokens (`bg-bg`, `bg-surface`, `text-text`, `text-text-inverse`, `border-border`, `text-accent`, etc.). Makes re-theming a one-file edit. | Claude | ✅ Done 2026-06-23 — 0 literal colour classes remain in app/components; opacity preserved (`text-text/70`); tsc clean, Tailwind compiles. **Re-theme = edit `app/globals.css` `:root` only.** Note: nav/footer/chatbot now flip WITH the theme (no permanent dark bookends — re-add as a deliberate override if wanted). |
| **Remove ALL emojis** (⚡ in Services, audit-form icons) → bolt-motif SVG or thin line icons | Claude | ✅ Done — `components/icons.tsx` (BoltMark + SVG Stars); zero emojis remain |
| Hero: generate background image + seamless loop video (no camera move, dark charged moment) + overlay text/CTAs | Claude/Charlie | ⏸️ Parked — image gen plan-gated (Recraft/video need paid Higgsfield); z_image draft was "mid". Prompts drafted |
| Scrolling reviews (testimonial marquee) | Claude | ✅ Done — Testimonials = pausable marquee, edge fades, reduced-motion fallback |
| Trust signals: 5-star Google rating badge + social connectors | Claude | ✅ Done — real figures (5.0 / 16 Google reviews) in reviews header; socials in footer |
| Restyle Privacy + Terms into properly designed pages | Claude | ⬜ |
| **Separate page per service** (Websites, Software/Apps, SEO, Branding) — SEO play, real copy each | Claude | ✅ Done — `/services` hub + `/services/[slug]` (data in `app/services/services-data.ts`). Per-page metadata + FAQPage JSON-LD + cross-links; wired into Nav, footer, homepage cards. Also fixed flip bug: mobile hamburger lines were invisible (`bg-charged-light`→`bg-charged-black`) |
| Contact page redesign: quick get-in-touch form + "Book a free consultation" (reframe from "call") + contact details (number/email/location) + button to Start-a-Project form | Claude | ✅ Done |
| About page: add a process section (lean on APM / PM background) | Claude | ✅ Done — "How we work / Structured, not chaotic", 4 steps |
| **Chat bot** — floating button bottom-right, general Q&A; port existing code from chargedstudio.co.uk | Claude | 🟡 INTERIM — ported + improved (`components/Chatbot.tsx`, site-wide). **Charlie: "will do for now" but flagged it must be REDEVELOPED before the site is delivered.** Likely path: AI-backed (`/api/chat` + LLM key) and/or richer flows. Do NOT ship as-is. |
| Consolidate image assets (currently `public/Imagary/`, `content/` empty) + clean filenames | Claude/Charlie | ⬜ |

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
