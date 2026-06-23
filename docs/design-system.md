# Design System — Charged Studio

> The visual rulebook. Every component, spacing decision, and animation should reference this doc.

---

## Philosophy

The site should feel like it was designed by someone who obsesses over the details. Clean, intentional, premium. It should make other web design studios feel slightly embarrassed.

Reference studios to study before building any section:
- **Basement Studio** (basement.studio) — bold type, dark, editorial
- **Linear** (linear.app) — dark, precise, grid-perfect
- **Vercel** (vercel.com) — confident, clean, fast-feeling
- **Stripe** (stripe.com) — trust, hierarchy, polish

---

## Spacing Scale (Tailwind)

Use Tailwind's default spacing scale. Key breakpoints to be consistent:

| Usage | Class |
|---|---|
| Section vertical padding | `py-24` → `py-32` on desktop |
| Container max width | `max-w-7xl mx-auto px-6` |
| Component gap | `gap-8` → `gap-16` |
| Between heading and body | `mt-4` → `mt-6` |

---

## Typography Scale

| Role | Mobile | Desktop | Weight |
|---|---|---|---|
| Display (hero) | `text-5xl` | `text-8xl` / `text-9xl` | 700–900 |
| H1 | `text-4xl` | `text-6xl` | 700 |
| H2 | `text-3xl` | `text-5xl` | 700 |
| H3 | `text-2xl` | `text-3xl` | 600 |
| Body large | `text-lg` | `text-xl` | 400 |
| Body | `text-base` | `text-lg` | 400 |
| Label / tag | `text-xs` | `text-sm` | 500–600, uppercase, tracking-wider |
| CTA / button | `text-sm` | `text-sm` | 700, uppercase, tracking-widest |

---

## Buttons

### Primary CTA
```
bg-white text-black font-bold uppercase tracking-widest text-sm px-8 py-4
hover: bg-neutral-200 transition-colors
```

### Secondary / Ghost
```
border border-white/30 text-white font-bold uppercase tracking-widest text-sm px-8 py-4
hover: border-white/80 transition-colors
```

---

## Components to Build

### Layout
- `<Nav />` — fixed top, transparent → solid on scroll. Logo left, links right, CTA button.
- `<Footer />` — 4 column: sitemap, socials, legal, contact. Dark background.
- `<Container />` — max-w-7xl, centred, px-6

### Homepage Sections
- `<Hero />` — full-height, large headline, CTA, decorative SVG
- `<LogoMarquee />` — horizontal scrolling image band (project shots)
- `<Stats />` — animated counter: projects delivered, satisfaction %, repeat clients
- `<Services />` — 4 service cards with icon/type, headline, description, feature list
- `<Work />` — case study cards: image, title, description, link
- `<Testimonials />` — scrolling carousel, star rating, quote, name, photo
- `<FAQ />` — accordion, 4 questions
- `<CTA />` — full-width contact invite section

### Reusable UI
- `<Badge />` — small label tag (e.g. "BRANDING", "WEBSITE DESIGN")
- `<AnimatedCounter />` — number counts up on scroll into view
- `<Accordion />` — FAQ component
- `<TestimonialCard />`
- `<ProjectCard />`
- `<ServiceCard />`

---

## Animations

Use **Framer Motion** for all animations.

| Animation type | Usage |
|---|---|
| Fade up | Default entrance for sections — `y: 20 → 0, opacity: 0 → 1` |
| Stagger children | Lists of cards/items — delay each child by `0.1s` |
| Counter | Numbers count up when scrolled into view |
| Marquee | Infinite horizontal scroll for image band |
| Hover lift | Cards — `y: -4` on hover |
| Nav background | Transparent → dark on scroll |

**Rules:**
- All animations triggered by scroll into view (`whileInView`, not on mount)
- Duration: `0.4s–0.6s` — fast enough to feel snappy, slow enough to feel smooth
- `once: true` — don't re-animate when scrolling back up
- Respect `prefers-reduced-motion` — wrap animations in a check

---

## Dark Mode

The site is **dark by default**. There is no light/dark toggle — it's always dark.

Background: near-black (not pure `#000000` — too harsh. Use `#0a0a0a` or `#080808`)
Text: `#ffffff` primary, `#a1a1aa` muted (zinc-400)
Borders: `rgba(255,255,255,0.1)` — subtle

---

## Grid System

12-column grid. Use CSS Grid via Tailwind:
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|---|---|---|
| Mobile (default) | < 768px | Single column, stacked |
| `md` | 768px | 2 columns where applicable |
| `lg` | 1024px | Full desktop layout |
| `xl` | 1280px | Wider containers |
| `2xl` | 1536px | Max width caps at 1280px — no layout changes |

---

## Components built (2026-06-23)

Reusable: `Container`, `Badge` (yellow pill), `Nav` (client; fixed, scroll-aware, mobile menu), `Footer`, `ProjectForm` (client; `kind="project"|"audit"`), `LegalLayout`, `PostLayout` (blog post wrapper + BlogPosting JSON-LD), `CTASection`.

Homepage sections: `Hero` (contained browser-mockup reel + placeholder video), `WorkMarquee` (CSS infinite scroll, pauses on hover/reduced-motion), `Services` (Websites featured + Software/SEO/Branding), `ValueProp`, `FeaturedWork` (Devon Nurseries), `Testimonials` (initials avatars), `FAQ` (accordion).

> These are functional skeletons styled with brand tokens — built so the VISUAL design pass (Charlie's) can restyle globally via tokens without touching structure. The current look is deliberately plain; the craft layer (bolt motif, depth, grain, richer motion, real imagery) is the next phase.
