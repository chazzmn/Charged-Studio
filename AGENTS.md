<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Charged Studio Website

> Read CLAUDE.md first — that is the primary source of truth for this project.
> For the full task checklist and current status, see `docs/project-roadmap.md`.

@CLAUDE.md

## Quick Reference

- **Stack:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4
- **Colours:** `charged-yellow` #FFC100 | `charged-black` #020413 | `charged-navy` #171E3A | `charged-light` #F7F7F7
- **Fonts:** Anton (headings, `font-anton`) | Inter Tight (body/UI, `font-inter`) | Caramel (brand moments only, `font-caramel`, self-hosted)
- **Hosting:** Vercel — auto-deploys on push to `main`
- **Repo:** github.com/chazzmn/charged-studio
- **Live site:** open from the Vercel dashboard (Visit button) — `*.vercel.app`. Custom domain `chargedstudio.co.uk` not yet pointed at Vercel.
- **Positioning (confirmed):** Lead with WEBSITES → Software & Apps → SEO/Digital Presence. Branding is supporting only. Primary goal of the site = GET CLIENTS (lead gen). Retainers stay a light touch for now. ICP = local Devon / South West service businesses.

## Non-negotiable Rules

- Never use `<img>` — always `next/image` `<Image />`. Use `preload` (NOT `priority` — deprecated in Next 16) for above-fold images; `unoptimized` for SVGs.
- Never hardcode colours — use Tailwind tokens (`charged-*`).
- Every page needs a `metadata` export with unique title + description (+ canonical).
- Mobile-first.
- Run `npx tsc --noEmit` before marking any task complete.
- Images are placeholders (sized to final dimensions) until Charlie provides real assets.

## Key technical notes / gotchas

- **Tailwind v4:** `app/globals.css` MUST contain `@config "../tailwind.config.ts";` — without it, the brand utilities (`font-caramel`, `bg-charged-black`, etc.) silently don't generate. Keep that line.
- **Do NOT run `npm install` or `next build` in the agent sandbox.** The project folder is a shared mount; installing/building from the Linux sandbox overwrites Charlie's Mac `node_modules` with Linux native binaries and breaks his `npm run dev`. Safe checks only: `npx tsc --noEmit` (pure JS) and an isolated `npx @tailwindcss/cli@4 -i app/globals.css -o /tmp/x.css` for CSS resolution.
- **If a full sandbox build is ever truly needed:** temporarily (1) stub the two Google fonts in `layout.tsx` (sandbox has no network for Google Fonts) and (2) set a temp `distDir: ".next-verify"` in `next.config.ts` (the mounted `.next` gets host-locked), then revert all of it + the tsconfig include lines Next auto-adds. tsc has verified clean throughout; the production build is green on Vercel.

## Current state (2026-06-23)

Homepage skeleton + all core pages built (functional, intentionally plain — awaiting Charlie's VISUAL design pass + real imagery).

**Pages:** `/` (Hero, WorkMarquee, Services, ValueProp, FeaturedWork, Testimonials, FAQ, CTA), `/about`, `/contact`, `/start-a-project`, `/audit`, `/devon-nurseries` (flagship case study), `/blog` + 5 posts, `/privacy`, `/terms-of-service`, `/api/contact` (route handler).

**Lead capture is LIVE:** `components/ProjectForm.tsx` → `/api/contact` → Resend (if `RESEND_API_KEY`) else Formspree (`FORMSPREE_ENDPOINT`). Charlie has added his Resend key locally + on Vercel. Domain verification in Resend still pending for sending from `hello@chargedstudio.co.uk` (test sender works meanwhile). See `.env.example`.

**Nav/IA decision:** Nav = About · FAQ (→ `/#faq`) · Contact + "Start a Project" CTA. Blog is footer-only (SEO, not nav). Dead footer links removed.

**What's next:** SEO/technical wiring (`next-sitemap` config → sitemap.xml + robots.txt, homepage Organization JSON-LD, GA4, real OG image), Charlie's visual design pass, real images (pull from Framer per `docs/assets-checklist.md`), then go-live (domain/DNS, verify Resend domain, cancel Framer).
