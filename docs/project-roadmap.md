# Project Roadmap — Charged Studio Website

> The full plan from zero to live. Update status as phases complete.

---

## SESSION LOG (2026-07-01) — SITE IS LIVE · deep review, quick wins, hero rework, blog

**Site is LIVE at chargedstudio.co.uk** (Charlie confirmed). Note: Vercel currently serves **www** as primary while all code canonicals are **non-www** — see backlog.

**Deep review done.** Verdict: strong, not perfect (~85%). Real work shows well (marquee + case-study cards are real screenshots), copy/local-SEO/structure are solid. Biggest gaps flagged: (1) hero/services used grey "loading-state" skeleton graphics as the lead visual; (2) www/non-www canonical mismatch; (3) review volume (16 vs competitors' 60+) — off-site, Charlie building naturally; (4) chatbot decision — Charlie: **keep the scripted bot as-is for now**.

**Quick wins — SHIPPED (tsc clean):**
- **Nav CTA fixed** — "Start a Project" now → `/start-a-project` (was pointing at `/contact`, bypassing the wizard). `components/Nav.tsx` `CTA` const.
- **Trust count-ups removed** — PageSpeed scores (`WhyCharged`) + Google rating (`Testimonials`) render final values (100 / 5.0 / 16) and just pop/fade in via `Reveal` instead of counting from zero. `components/CountUp.tsx` now **unused** (safe to delete later).
- **Footer tagline** → "Built to perform. Charged to last." (`components/Footer.tsx`).
- **Stray files** — 36 committed `.fuse_hidden*` files untracked from git (`git rm --cached`, staged as deletions); duplicate `.gitignore` rule collapsed to one. (On-disk copies are gitignored; iCloud+dev-server regenerate them — restart dev server to clear.)

**Hero rework — SHIPPED (Charlie approved, then "up a level"):**
- Scene 0 "Coming soon" replaced with a **brand reveal**: real `logo.svg` wordmark + accent underline + "Built to perform. Charged to last." (this also fixed the near-blank mobile hero frame — the old scene was `text/10`, invisible).
- **Scale + fade** scene transitions (was opacity-only) + **progress dots** (active stretches to an accent pill).
- **Pacing slowed** to 4500ms/scene (was 2800) with **more build-up** — `reveal-stagger` delays extended to `nth-child(12)` in `globals.css`.
- **Richer, fuller scenes** in `components/graphics.tsx` (shared with `Services.tsx` rows, both 16:10): Website = nav+hero+3 feature cards+trust strip; SEO = search+tabs+#1 result+2 results+impressions trend; Software = sidebar+topbar+3 stat cards+chart+table; Branding = logo lockup+palette+type specimen+application tiles. Same palette/vibe, denser.

**Blog:** added `/blog/website-in-a-day` ("Website in a day: when fast is the right call") — seeds the planned 1-day website offering. In `posts.ts` + page; auto-added to sitemap.

**Service hub `/services` — REBUILT visual-first (Charlie: old grid was "dry / copy-heavy / no variation"; wanted "more visuals, more photos, like the hero — the hero is the style pillar"):**
- `app/services/page.tsx` rebuilt as a **bento**: one full-width **featured Websites card** + a 3-up grid (Software / SEO / Branding), then a 6-up **"a few of the sites we've built"** real-photo strip.
- Every visual uses the **hero browser-frame** language (chrome + 16:10 + glow) via local `Frame`/`Media` helpers. Real screenshots from `public/images/work/` (brightwater-dental, tend-dashboard, chazzmn + strip); SEO uses the coded `SearchGraphic`. Photos are easily swapped in the `VISUALS`/`RECENT_WORK` maps.
- Copy trimmed to scannable: feature titles from `services-data` shown as bolt-marker points (featured) / chips (cards).
- **Card heading hierarchy fixed** (Charlie): removed the yellow eyebrow **pill**; the bold Anton heading is now the **service name** (`s.name` — "Website Design", "Software & Apps", …) so the eye lands on *what it is*; the faint line is the description (`s.outcome`). Featured keeps a small "Where we start" accent label.
- Fixed a latent bug: old hub cards had `hover:border-accent` with **no `border`** (no-op).

**Availability/urgency pill — SIMPLIFIED site-wide (Charlie's call — supersedes the "self-updating urgency" backlog idea):** `components/AvailabilityPill.tsx` is now a plain presentational pill reading **"Limited project spaces available"** (+ amber pulsing dot). All month-flip date logic removed — nothing to drift out of accuracy. Shows in `Hero` + `CTASection`. Now a server component (dropped `"use client"`).

### Backlog — next sessions (Charlie's list, 2026-07-01)
- [ ] **www/non-www** — set apex `chargedstudio.co.uk` as **Primary** domain in Vercel so `www` redirects to it (matches all canonicals). Dashboard action, no code. *(If he prefers www, flip SITE_URL + metadataBase + canonicals instead.)*
- [~] **Card visual design pass** — service **hub** cards DONE (visual-first rebuild above). Still to lift if wanted: **case-study cards** (`FeaturedWork`), **testimonial cards** (`Testimonials` — note the duplicate `shadow-e1` class to clean), **why-charged pillars** (not carded).
- [x] **Urgency card** — DONE. Simplified to a static "Limited project spaces available" pill (Charlie chose clean-and-always-true over a self-updating mechanism).
- [ ] **AEO consulting/package** — add to the SEO service (`/services/seo`).
- [x] **1-day website option** — DONE (2026-07-02). Charlie's calls: name **"Website in a Day"**, **fixed £495**, placement **new pricing tier only** (lightest touch — no dedicated section/page). Added as the **first** Websites pricing tier in `app/services/services-data.ts` (single-page site, live in a day, on your own domain). Consequent accuracy edits: `priceFrom` anchor **From £695 → From £495** (updates the /services hub featured + grid cards), metaDescription final line → "One-day websites from £495", pricing `note` now leads with the fixed-£495 day build, and the "How much does a website cost?" FAQ + a new "Can you really build a website in a day?" FAQ introduce it (feeds FAQPage schema/AEO). Pricing grid in `app/services/[slug]/page.tsx` now uses `lg:grid-cols-4` for 4 tiers (was orphaning the 4th card). Left `lib/locations.ts` town-page FAQs untouched (they describe bespoke project pricing). tsc clean.
- [ ] **More blog posts** to specific goals (topics TBC — proposed: custom vs Wix/Squarespace, AEO/get-recommended-by-AI, Exeter buyer's guide).
- [ ] **Hero (optional follow-up)** — literal wordmark→nav morph; per-scene captions.
- [ ] **New real case study** — blocked until the next client lands.
- [ ] Optional: delete now-unused `components/CountUp.tsx`.

---

## SESSION LOG (2026-06-26) — quick wins, About story, service pages

Done this session (tsc clean throughout; pushed to `main`):
- **Hero** — kept the "Web Design Studio · Exeter & the South West" eyebrow; removed the "Fast, modern websites…" sub-paragraph (Charlie's call — opposite of the original quick-win wording).
- **Availability signal** — new `components/AvailabilityPill.tsx` near the hero CTAs and atop `CTASection`. Client component: shows the current month, then flips to the next month exactly 5 days before that month begins (e.g. 26 June → "July"). Amber pulsing dot, reduced-motion safe.
- **Tend** — Charlie confirmed it's a concept, NOT a client project. Reframed to read as a real project without claiming a client/delivery: `Type` → "Studio project"; stripped "self-initiated"/"concept" from meta description, Overview, Outcome, and the `FeaturedWork` blurb.
- **About** — added the "Why we exist" story `<section>` between the studio intro and Founder.
- **Service pages** — bulked out all four `/services/[slug]`: added outcome statements, "who it's for", a 4-step "how it works", and a **pricing** block. Real anchors from Charlie: Websites — Landing £695 / Business £1,495 / E-commerce £2,495; Software — £1,250; SEO — £295/month. Branding left as "Quoted per project" (no number given). Hub cards show "from" prices. ⚠️ SEO £295/mo is now public — a small exception to the "no public retainer pricing" line; confirmed with Charlie. Branding still needs a "from" figure if wanted. (Software + SEO later gained premium anchor tiers — see git.)
- **PERF "regression" — CORRECTED understanding.** Lighthouse "Legacy JavaScript" (~14 KiB), "Reduce unused JS" (~26 KiB) and "Forced reflow" are all **Unscored diagnostics** — they do NOT feed the performance score. The 70 KiB chunk carrying them is a pre-built dependency (Vercel `@vercel/analytics` + `@vercel/speed-insights`), which `browserslist` can't recompile. My first attempt (narrowing `browserslist`) did nothing and was **reverted** to `["last 2 years","not dead"]`. Real score dips came from JS I'd *added* (the imperative WebMCP component) — now removed. If Charlie wants that 70 KiB chunk gone, the lever is dropping the Vercel analytics/speed-insights deps (monitoring tradeoff), not browserslist.
- **WebMCP (AEO) — REDONE the right way.** My first pass used `navigator.modelContext.provideContext` (imperative) — but `provideContext` was removed from the spec (Mar 2026; it's `registerTool` now) AND AEO checkers can't run JS, so nothing registered. Replaced with the **zero-JS** signals the WebMCP Checker actually scans: (1) **Declarative API** — `toolname`/`tooldescription` attrs on the contact form (`ProjectForm`, `contactChargedStudio`) + audit form (`AuditForm`, `requestWebsiteAudit`); TS allowed via `webmcp.d.ts` HTMLAttributes augmentation. (2) **Manifest** at `/.well-known/webmcp` — `app/api/webmcp/route.ts` (force-static JSON) mapped via a rewrite in `next.config.ts` (also `.json`). Imperative `components/WebMCP.tsx` deleted. Covers form coverage / tools registered / valid schemas with no client-JS cost. Refs: webmcp-checker.com guide, webmachinelearning.github.io/webmcp.

### Quick wins (30 mins each, do first)

- [x] **Remove hero sub-header** — DONE (removed the sub-paragraph, kept the eyebrow per Charlie).
- [x] **Update Tend case study type** — DONE. Confirmed concept (not a client); reframed as "Studio project", removed "self-initiated"/"concept" across page + FeaturedWork.
- [x] **Availability signal** — DONE via `AvailabilityPill` (auto-rolls month, 5 days before).

### Content: About page (this is the highest-conversion change)

Rewrite `app/about/page.tsx` intro section to include a **Why we exist** story block between the current tagline and the Founder section. The story:

> Small businesses are stuck between two bad options: do it all yourself and figure it out from scratch, or go to a big agency and pay for a generic product that doesn't fit how you actually work.  
> Charged was built to close that gap. We build websites, software, and brand systems tailored to each client's exact goals and budget. There are very few clients we turn down — we know what it feels like when these products feel out of reach.  
> We believe anyone with the drive to run their own business deserves access to affordable, tailored digital products that help them compete.

Keep the voice sharp and direct — not angry/anti-corporate, but with conviction. Fits between the `<Badge>About the studio</Badge>` block and the Founder section. Add as a standalone `<section>` or subsection called "Why we exist" or keep it copy-level within the existing intro block.

### Content: Service pages — bulk out + price anchors

Each `/services/[slug]` page is currently thin. Before launching more local SEO pages (which will link to services), these need substance.

- [x] **Bulk out each service page** — DONE. Added outcomes, "who it's for", 4-step "how it works", and pricing to all four `/services/[slug]`.
- [x] **Add price anchors** — DONE with Charlie's real numbers (Websites £695/£1,495/£2,495 tiers, Software £1,250, SEO £295/mo, Branding "Quoted per project"). Hub cards show "from" prices. ⚠️ Branding has no numeric anchor yet; SEO monthly price is now public (confirmed).
- Services updated: `websites`, `software`, `seo`, `branding` (slugs in `app/services/services-data.ts`).

### Content: Contact page — simplify primary form

- [x] Keep the detailed Start-a-Project wizard (`/start-a-project`) as-is. — untouched.
- [x] **Contact page DECLUTTERED (2026-07-02).** Charlie: page "felt cluttered and dense". The form was already name/email/message (`ProjectForm kind="project"`) — the density came from **five competing shadowed blocks**. Rebuilt `app/contact/page.tsx` as two airy columns: LEFT = intro + borderless contact details (email/phone/studio, larger type, no card) + one clear "Book a free 15-min call →" link under a divider; RIGHT = a single form card ("Send a message") as the primary action, with the free-audit and Start-a-Project paths demoted to two subtle text links below (were heavy `shadow-e1` cards). Removed the `Button` import (no longer used); still a server component. tsc clean.

### Case studies — add a third

- [x] **Add a third case study** — DONE. `/chair` (`app/chair/page.tsx`): a Tend-style studio-project concept — a booking + retention tool for independent salons & clinics ("an empty chair is revenue you can't get back"). Health & beauty vertical, chosen by Charlie to broaden ICP appeal. Wired into `FeaturedWork.tsx` (now 3-up) + sitemap. ⏳ Charlie to add `public/images/work/chair-booking-dark.jpg` + `chair-dashboard-light.jpg`.
- [x] Labelling consistent across Devon Nurseries (real) + Tend + Chair (both "Studio project" concepts, no client claim).
- Note: Lighthouse proof-panel item below = SKIP per Charlie (scores are verifiable at PageSpeed; panel is redundant).

### Lighthouse proof

- [ ] Add visible screenshot evidence for the 100/100/100/100 PageSpeed claims on the homepage. Charlie has screenshots — drop them in `public/images/proof/` and add a small "proof panel" near the claim. Note: the live scores are verifiable at PageSpeed Insights so this is about trust, not verification.

### Local SEO — location pages (do AFTER service pages have substance)

Per `docs/local-seo-plan.md`, the keyword→page map calls for town-level pages. Don't build these until the service pages they link to are bulked out — thin pages pointing to thin pages compound each other's weakness.

**Now data-driven (2026-06-26):** location pages refactored to a single shared `components/LocationPage.tsx` + per-place data in `lib/locations.ts`. Each town = one data entry + a ~6-line `app/web-design-<slug>/page.tsx` + sitemap/footer line. `/web-design-exeter` migrated onto it (content identical); future towns are cheap and stay non-duplicate via unique per-place copy/FAQs.

Priority order once service pages are ready:
- [x] `/web-design-devon` — DONE. Devon-specific hero, built-for, local proof, 5 unique FAQs (incl. real pricing), LocalBusiness/Breadcrumb/FAQPage JSON-LD. In sitemap + footer.
- [x] `/web-design-plymouth` — DONE (Britain's Ocean City angle, Plympton/Plymstock areas).
- [x] `/web-design-barnstaple` — DONE (North Devon hub: Bideford/Ilfracombe/Braunton).
- [x] `/web-design-torquay` — DONE (Torbay / English Riviera; Paignton/Brixham; tourism angle).
- [x] `/web-design-bristol` — DONE. Note: Bristol is NOT Devon — framed as South West (county field = "South West"); copy/schema avoid Devon claims.
- [x] `/web-design-st-thomas` — DONE. Hyper-local Exeter neighbourhood (Cowick Street); county field = "Exeter" for the SEO scope line.
- [ ] `/web-design-taunton`
- [ ] `/web-design-tiverton`
- **Sitemap + footer are now generated from `LOCATIONS`** — adding a town auto-wires both. tsc clean.

Pattern for each: local hero, proof bar, services included, local case study/client ref if available, local FAQ, ProfessionalService + Breadcrumb + FAQPage JSON-LD, internal links to service pages. Wire each into `app/sitemap.ts` and footer nav (location pages section).

### Homepage polish (do last — content first)

- [ ] **Replace the website screenshot carousel** — only worth doing if the replacement is higher quality and more persuasive. Weak motion is worse than none.
- [x] **Subtle entrance animations** — DONE (2026-06-26). New `components/CountUp.tsx` (IntersectionObserver + rAF, reduced-motion safe). Applied: `Reveal` fade-ups on WhyCharged heading/proof-bar/pillars + Testimonials header; CountUp on the four 100 PageSpeed scores and the 5.0/16 Google rating; subtle hover-lift on FeaturedWork case cards (motion-reduce safe). No framer-motion re-added — stays CSS/Reveal, perf intact. tsc clean.

---

## Current State (last updated 2026-06-25) — ⚡ LAUNCH-READY + LOCAL SEO PUSH UNDERWAY

**TL;DR for a fresh session:** The core build is **done** (100/100/100/100 PageSpeed). Two tracks of work are now active on top of it: (1) **Local SEO** — the new priority: ranking #1 for "web design / web designer Exeter & Devon" via dedicated location pages + Google Business Profile. Lead page `/web-design-exeter` is built; plan + keyword→page map in `docs/local-seo-plan.md`. (2) **Go-live** (domain/DNS → Search Console → cancel Framer) — see Phase 5. Live test URL: `https://charged-studio.vercel.app/`.

### Session 2026-06-25 — added on top of the finished build
- **New case study `/tend`** (`app/tend/page.tsx`) — self-initiated product-design concept (hospitality shift-scheduling tool). `FeaturedWork.tsx` reworked to show Devon Nurseries **and** Tend. ⏳ Charlie to drop 2 images: `public/images/work/tend-dashboard-dark.jpg` + `tend-dashboard-light.jpg`.
- **Homepage compacted** (mobile scroll): `Services.tsx` dropped the duplicated feature accordion (detail lives on `/services/[slug]`), compact rows + alternating graphic; `WhyCharged.tsx` shortened + 2-up mobile grid; new `components/SectionDivider.tsx` (hairline + yellow glow) between every homepage section.
- **Contrast pass:** readable `text-text/40` & `/30` → `/60` (AA on dark) across WhyCharged, AuditForm, ProjectWizard, ProjectForm, Chatbot, LegalLayout, Footer.
- **LOCAL SEO (priority):** `docs/local-seo-plan.md` = keyword→page map + strategy. Built `/web-design-exeter` (local hero, proof bar, what's-included reusing websites features, Devon Nurseries proof, local FAQ, ProfessionalService+Breadcrumb+FAQPage JSON-LD, internal links, footer-linked). **NEXT:** `/web-design-devon` (clone), town pages, then off-site (GBP, reviews, citations, local backlinks).
- **`next.config.ts`** got `turbopack.root` (stray `~/package-lock.json` removed). Dev cold-boot is slow (2–4 min, iCloud-synced `Documents`); HMR fast once Ready — leave the server running.
- tsc clean throughout.

**Build:** Next.js 16 + React 19 + Tailwind v4. All pages built, type-checking clean, deployed to Vercel (auto-deploys on push to `main`). **No framer-motion** (removed for perf — animations are pure CSS via `components/Reveal.tsx`); Hero/Services/FeaturedWork are server components. Fonts: Anton + Inter Tight (Caramel dropped).

**Done (everything):** Scaffold, brand tokens, fonts, Nav/Footer/Container, full homepage (Hero with looping 5-scene coded mockup, WorkMarquee, **WhyCharged** trust section, Services pinned-scroll + coded graphics, ValueProp, FeaturedWork, Testimonials, FAQ, CTA), pages (`/about` studio+founder, `/contact`, `/start-a-project` **multi-step wizard**, `/audit` full request form, `/services` hub + 4 `/services/[slug]`, `/devon-nurseries` w/ real image, `/blog` + 5 posts, `/privacy` + `/terms-of-service` restyled, branded `not-found`), lead capture (`/api/contact` → Resend, **verified + tested**), favicon (yellow-c, transparent), OG image, SEO/AEO (sitemap, robots, Organization/WebSite/FAQPage JSON-LD, llms.txt), GA4 behind cookie consent. See the per-item detail in the sections below.

**Confirmed decisions:** Reposition to websites-led (software/SEO added, branding demoted). Site's job = lead gen. ICP = local Devon/SW service businesses. Primary CTA = project form; Free Audit secondary; Book-a-call tertiary. Blog = footer-only (SEO), not nav. Case studies: Devon Nurseries = flagship; CHAZZMN deferred; The Unaffiliated dropped.

**Theme decision (2026-06-23 — REVERTED TO DARK):** Charlie trialled a light theme then reversed it — the site is back **DARK**: `#020413` page background, `#F7F7F7` primary text, yellow `#FFC100` the single accent, navy `#171E3A` surfaces. This now **matches the canonical `BRAND-SYSTEM.md`** (which always read dark), so no reconciliation pass is needed. Implemented by flipping `:root` semantic tokens + dark-tuned shadows in `globals.css` and reversing the literal theme classes across all pages/components (page text → `charged-light`, cards → `bg-charged-navy/40`, borders → `border-white/x`, gradients + marquee edge-fades → dark). Nav + Footer were already dark bookends. Chatbot re-skinned to dark. tsc clean; Tailwind compiles. (Light-theme work is recoverable in git history if ever wanted again.)

**AI chat bot (2026-06-23 — NEW):** Simple floating chat button, bottom-right, answers general visitor questions. Charlie has existing working code (currently live on chargedstudio.co.uk) to reuse. Scoped as a port/reuse, not a new build.

**Next up — GO LIVE only (Phase 5).** The build is finished. Remaining steps (all need Charlie / DNS access):
1. Add `chargedstudio.co.uk` to the Vercel project → get the DNS records (A record / nameservers).
2. Update DNS at the registrar → point to Vercel → wait for propagation → confirm SSL.
3. Test all pages on the live domain.
4. Verify Google Search Console on the live domain → submit `sitemap.xml` → request indexing on key pages.
5. Confirm GA4 (`G-9P8NYQN0KQ`) is receiving data (after accepting the cookie banner).
6. Cancel the Framer subscription.

**Optional / nice-to-have (not blockers):** AI-backed chatbot upgrade (`/api/chat` + LLM key) — current bot is scripted & good; `app/error.tsx` runtime error boundary; tidy leftover files in `public/content` + `public/Imagary`; Charlie's About-page notes; real photos in the Services rows (currently coded graphics, which are the intended look).

**Pending on Charlie (non-blocking):** any final visual design tweaks; optional real imagery.

**Confirmed by Charlie 2026-06-24:** Resend domain verified + forms tested working; Privacy/Terms legally reviewed; Google Search Console set up (will be **connected at go-live**, not before).

**Pre-launch cleanups (last-minute, before go-live):**
- **Services section visuals** — UPDATE 2026-06-24: each row now shows its matching **coded graphic** (shared with the hero: Website / SEO / Software / Branding from `components/graphics.tsx`), not photos. These are the intended visuals now; real photos optional later if wanted.
- Build/added 2026-06-24: new **`WhyCharged`** trust section sits between the work marquee and Services (founder-led · APM PMQ · local · ongoing). No imagery needed (icon-led), but copy is final-draft — review before go-live.

---

## NEXT SESSION — confirmed requirements (Charlie, 2026-06-23) — NOT yet built

These are the agreed next jobs. Do these, then push (Charlie said "we're very close to a finished product").

1. ~~**Start a Project → LONG MULTI-STEP FORM.**~~ ✅ **DONE 2026-06-24.** New `components/ProjectWizard.tsx` — 4-step wizard with progress bar, per-step validation, back/continue, success state: (1) what you need (service multi-select) → (2) your project (type + description + current URL) → (3) budget & timeline → (4) about you (name/email/business/phone). Wired into `app/start-a-project/page.tsx` (replaced the short `ProjectForm`; **`/contact` still uses the short `ProjectForm kind="project"` — left untouched on purpose**). Posts to `/api/contact` kind=project; route extended with `services, projectType, budget, timeline, phone`. ⏳ Field lists (services, budget tiers £1k–£10k+, timelines) are **proposed defaults — Charlie to tweak** (esp. budget ranges vs his pricing). tsc clean.
2. ~~**Audit feature — REDESIGN TO MATCH CHARLIE'S REFERENCE PHOTO.**~~ ✅ **DONE 2026-06-24.** Direction confirmed = **redesigned request form** (NOT an automated/instant audit). Reference received. Rebuilt `app/audit/page.tsx`: centred row of topic pills (Page Speed · SEO Basics · Mobile · Broken Links · Social Presence · Branding · AEO, each with a check icon) + a dark card "REQUEST YOUR AUDIT". New `components/AuditForm.tsx` (client): first/last name, email, company/brand, website URL (globe icon), industry `<select>`, a 2×2 "biggest challenge" selector (Not enough traffic / Low conversions / Looks outdated / Not sure — just want a review), optional notes, "Request my audit →" submit. Posts to `/api/contact` kind=audit; route extended with `industry` + `challenge` fields in the email. Added `CheckCircle` to `components/icons.tsx`. tsc clean. (Old `/audit` used `ProjectForm kind="audit"` — that branch is now unused by /audit but ProjectForm still serves the project flow.)
3. ~~**Services section (homepage `components/Services.tsx`) — "not good", needs a redesign.**~~ ✅ **DONE 2026-06-24.** Rebuilt as a "pinned scroll" pattern (ref: cbwebsitedesign.co.uk, Charlie's pick): per-service row with the title + "Explore →" CTA sticky on the left (lg+) while a visual + native `<details>` accordion of the service's feature points scroll past on the right. Mix of visuals per Charlie: real screenshots for Websites (dn-home) + Branding (chazzmn), branded bolt/numeral panels for SEO + Software. Now imports the single source of truth `app/services/services-data.ts` (removed the duplicate SERVICES array). Fully responsive — collapses to single-column, sticky off, tap-friendly accordions on mobile. Added `Chevron` to icons.tsx. tsc clean; Tailwind compiles. Copy/structure are fine; it's the visual treatment.
4. ~~**About page redesign — match Charlie's reference layout + add HIM.**~~ ✅ **DONE 2026-06-24.** Founder hero in `app/about/page.tsx`: big name "Charlie Norona", subtitle "Founder & Creative Director", founder cut-out (`/images/charlie-norona.png`, web-sized 800px from `public/content/Charlie Norona.png`) on a yellow circle (left), bio paragraphs leading on the **APM PMQ** USP (right), stat row (**APM PMQ** · **100%** · **Exeter**), and a circular "CONTACT →" button → `/contact`. Process + Values sections retained below. tsc clean. ⏳ Charlie to eyeball the cut-out's vertical fit inside the circle on `npm run dev` (object-bottom; tweak the `top-10` inset if the head sits too high/low).
5. ~~**BUG: Denise Russell missing from the reviews marquee.**~~ ✅ **RESOLVED 2026-06-24.** She was rendering all along (initials fallback) — the real gap was no headshot. Charlie supplied one as JXL; converted to `public/images/testimonials/denise-russell.jpg` (200×267, via pillow-jxl-plugin since ImageMagick has no JXL delegate) and wired into her entry in `components/Testimonials.tsx`. Original JXL removed. tsc clean. (Ivan still has a photo but no quote — unused, left as-is.)

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
| Export favicon | Charlie/Claude | ✅ **DONE 2026-06-24** — branded favicon from the c-mark: `app/icon.svg` (yellow "c", **transparent bg** per Charlie), `app/apple-icon.png` (180, iOS), regenerated `app/favicon.ico` (16/32/48/64). Note: yellow-on-transparent is a touch low-contrast on white browser tabs (acceptable; swap to dark-squircle bg if it ever bothers). Auto-wired by Next App Router; replaced the default Next favicon. (Charlie's uploaded logo-dark.svg = identical to repo's, no logo change.) |
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
| Set up root layout: fonts, GA4 script, nav, footer | Claude | ✅ **DONE** — Fonts + Nav + Footer + **GA4** (ID `G-9P8NYQN0KQ`, production-gated, env-overridable via `NEXT_PUBLIC_GA_ID`). **GA now gated behind cookie consent** — `components/CookieConsent.tsx` (Accept/Decline banner, choice saved to localStorage; GA only loads after Accept). UK PECR compliant. (Old `Analytics.tsx` folded into CookieConsent + removed.) |
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
| Case study: Tend (`/tend`) | ✅ **Built 2026-06-25** — product-design concept (hospitality shift-scheduling). Featured on homepage alongside Devon Nurseries. ⏳ Charlie to add `public/images/work/tend-dashboard-dark.jpg` + `tend-dashboard-light.jpg` |
| Local SEO landing: Web Design Exeter (`/web-design-exeter`) | ✅ **Built 2026-06-25** — lead location page (full local content + JSON-LD). Template for `/web-design-devon` + town pages. See `docs/local-seo-plan.md` |
| Case study: CHAZZMN (`/chazzmn`) | ⏸️ Deferred — Charlie's own brand, mid-redevelopment. Add once its rebuild is live |
| Case study: The Unaffiliated (`/the-unaffiliated`) | ❌ Dropped — lost client, can't stand behind it |
| Privacy Policy (`/privacy`) | ✅ Content legally reviewed by Charlie (2026-06-24). Still ⬜ to restyle into a designed page (Phase 3.5). |
| Terms of Service (`/terms-of-service`) | ✅ Content legally reviewed by Charlie (2026-06-24). Still ⬜ to restyle into a designed page (Phase 3.5). |

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
| Hero visual | Claude | ✅ **DONE 2026-06-24** — Charlie's concept: the browser-frame mockup **loops a 5-scene Charged story**: "Coming soon" → Website builds in → SEO/ranking → Software/dashboard → Branding → repeat (each staggers in). Scene graphics extracted to **`components/graphics.tsx`** (`WebsiteGraphic`, `SearchGraphic`, `SoftwareGraphic`, `BrandingGraphic` + shared `gContainer`/`gBlock`) and **shared with the services rows**. `components/HeroMockup.tsx` drives the loop (framer-motion; reduced-motion holds the Website scene). Pure code, no asset/video. Branding mark uses the **bolt** (the "c" was messy — removed). |
| Scrolling reviews (testimonial marquee) | Claude | ✅ Done — Testimonials = pausable marquee, edge fades, reduced-motion fallback |
| Trust signals: 5-star Google rating badge + social connectors | Claude | ✅ Done — real figures (5.0 / 16 Google reviews) in reviews header; socials in footer |
| Restyle Privacy + Terms into properly designed pages | Claude | ✅ **DONE 2026-06-24** — restyled the shared `components/LegalLayout.tsx` (both pages benefit): refined header + "last updated" pill, **auto-generated sticky table of contents** (built from the `<h2>`s, desktop), yellow list markers, sectioned headings with dividers, lead-paragraph treatment, and a closing contact card. Content unchanged (already legally reviewed). |
| **Separate page per service** (Websites, Software/Apps, SEO, Branding) — SEO play, real copy each | Claude | ✅ Done — `/services` hub + `/services/[slug]` (data in `app/services/services-data.ts`). Per-page metadata + FAQPage JSON-LD + cross-links; wired into Nav, footer, homepage cards. Also fixed flip bug: mobile hamburger lines were invisible (`bg-charged-light`→`bg-charged-black`) |
| Contact page redesign: quick get-in-touch form + "Book a free consultation" (reframe from "call") + contact details (number/email/location) + button to Start-a-Project form | Claude | ✅ Done |
| About page: add a process section (lean on APM / PM background) | Claude | ✅ Done — "How we work / Structured, not chaotic", 4 steps |
| **Chat bot** — floating button bottom-right, general Q&A | Claude | 🟢 **IMPROVED 2026-06-24** (`components/Chatbot.tsx`): richer/more accurate answers (founder-led, APM PMQ, 5.0/16 reviews, retainers, industries, AEO, timelines), new intents (why-charged, reviews, industries). **Mobile fixes:** launcher now hidden when open on mobile (was covering the Send button); **deferred load** via `components/ChatbotLoader.tsx` (dynamic ssr:false + idle mount) to speed up phone load. Still a scripted bot — **AI-backed upgrade** (`/api/chat` + LLM key) remains the optional next step if Charlie wants free-form answers. |
| Consolidate image assets (currently `public/Imagary/`, `content/` empty) + clean filenames | Claude/Charlie | ⬜ |

---

## Phase 4 — Polish & QA

| Task | Status |
|---|---|
| Mobile responsiveness — every page, every breakpoint | ⬜ |
| Animations — all sections have entrance animations | ✅ **2026-06-24 — framer-motion REMOVED for mobile perf.** All entrances now pure CSS via `components/Reveal.tsx` (tiny IntersectionObserver + `.reveal`/`.reveal-stagger` classes in globals.css), FAQ accordion = CSS grid-rows, Nav menu = CSS opacity, hero loop = CSS crossfade + `.reveal-stagger`. Removed the framer dependency from the client bundle entirely (was the heaviest JS); **Hero, Services and FeaturedWork are now server components** (no hydration). Hero renders statically (no reveal) so above-fold paints immediately (LCP). framer-motion still in package.json but unused — safe to `npm uninstall framer-motion` later. Reduced-motion safe throughout. |
| Contact form — connected to Resend / email delivery tested | ✅ **DONE 2026-06-24** — Resend domain verified, forms send + deliver correctly (contact, audit, and the new project wizard all post to /api/contact → Resend). |
| `sitemap.xml` | ✅ **DONE 2026-06-24** — native `app/sitemap.ts` (generated from services + blog data, never drifts). **Switched away from `next-sitemap`** (no postbuild needed; dep now unused, safe to remove later). |
| `robots.txt` | ✅ **DONE 2026-06-24** — native `app/robots.ts`: allow all **including AI/answer-engine crawlers** (GPTBot/ClaudeBot/PerplexityBot/Google-Extended) for AEO; references sitemap + host. |
| JSON-LD structured data | ✅ **DONE 2026-06-24** — site-wide Organization+ProfessionalService+WebSite graph (`lib/structured-data.ts` via `components/JsonLd.tsx` in layout): address (Exeter/Devon), areaServed, socials (sameAs), founder Charlie Norona w/ **APM PMQ credential**, 5.0/16 aggregateRating, knowsAbout. Homepage **FAQPage** schema (shared `app/faq-data.ts`). Service pages already have FAQPage; blog posts have BlogPosting. **AEO:** added `public/llms.txt`; set `<html lang="en-GB">`. **OG share image** ✅ generated `public/og-image.jpg` (1200×630, branded — wordmark on dark + glow; already referenced in layout metadata). |
| All pages have unique metadata (title + description) | ✅ Every built page has metadata + canonical |
| All images have `alt` text | 🟡 Placeholders are divs; applies once real images go in |
| All images using `next/image` | 🟡 Logo uses next/image; section images are placeholder divs until real assets |
| Lighthouse score 95+ on all pages | ✅ **100 / 100 / 100 / 100** (Performance · Accessibility · Best Practices · SEO) on **mobile AND desktop** via PageSpeed Insights (2026-06-24). Got there by: removing framer-motion, server-component-first (Hero/Services/FeaturedWork), `experimental.inlineCss` (killed render-blocking CSS), modern `browserslist` (dropped legacy-JS polyfills), a11y contrast + link-underline fixes, deferred/mobile-off chatbot, dropped Caramel font. **Worth using as a homepage proof point.** |
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
