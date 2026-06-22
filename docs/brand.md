# Brand Guide — Charged Studio

> Source of truth for all visual brand decisions. Every design choice in the site must be rooted here.

---

## Brand Identity

**Name:** Charged Studio  
**Tagline options (current):** "We build the brand your business deserves." / "Built on Belief."  
**Positioning:** Premium creative studio for growing businesses. Website-first, but also software, apps, SEO, and ongoing digital partnerships. Not an agency — a creative partner.
**Location:** Exeter, Devon, UK — working with clients across the UK

---

## Colour Palette (confirmed)

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-accent` | Charged Yellow | `#FFC100` | Primary accent — CTAs, the "c" in logo, highlights, hover states, active elements |
| `--color-bg` | Near Black | `#020413` | Page background — the primary dark base |
| `--color-surface` | Dark Navy | `#171E3A` | Cards, section backgrounds, layered surfaces |
| `--color-light` | Off White | `#F7F7F7` | Text on dark, light section backgrounds |
| `--color-text-primary` | White / Off White | `#F7F7F7` | Primary text on dark backgrounds |
| `--color-text-muted` | Mid grey | `#9ca3af` (approx) | Secondary text, labels, metadata |

### Tailwind config mapping
```ts
colors: {
  'charged-yellow': '#FFC100',
  'charged-black': '#020413',
  'charged-navy': '#171E3A',
  'charged-light': '#F7F7F7',
}
```

---

## Typography (confirmed)

Three typefaces — each has a specific role:

| Font | Role | Load via |
|---|---|---|
| **Anton** | Headings / Display — H1, H2, hero text | `next/font/google` |
| **Inter Tight** | Body, UI, labels, buttons, nav | `next/font/google` |
| **Caramel** | Charged brand moments only — the "c" in the logo, special branded type treatments | Self-host (not on Google Fonts) |

### Usage rules
- **Anton** — big, bold, impactful. For section headings and hero statements. Uppercase where appropriate.
- **Inter Tight** — everything else. Body copy, nav links, button labels, form fields, metadata.
- **Caramel** — use very sparingly. Only for moments where the "Charged" brand identity needs to show up typographically (logo, branded callouts). Not for body copy.

### Scale
| Role | Font | Mobile | Desktop | Weight |
|---|---|---|---|---|
| Hero / Display | Anton | `text-5xl` | `text-8xl` | 400 (Anton is inherently bold) |
| H1 | Anton | `text-4xl` | `text-6xl` | 400 |
| H2 | Anton | `text-3xl` | `text-5xl` | 400 |
| H3 | Inter Tight | `text-2xl` | `text-3xl` | 600–700 |
| Body | Inter Tight | `text-base` | `text-lg` | 400 |
| Label / Tag | Inter Tight | `text-xs` | `text-sm` | 500, uppercase, tracking-wider |
| CTA Button | Inter Tight | `text-sm` | `text-sm` | 700, uppercase, tracking-widest |

---

## Logo

**Primary logo:** "charged" wordmark — lowercase, with the "c" rendered in Caramel font at `#FFC100` yellow. Remaining letters in near-black or white depending on background.

**Logomark:** Lightning bolt / "charged" symbol — the diagonal slash motif in `#FFC100`. Exists in single, double, and combined-with-wordmark variants.

- **Light version (on dark bg):** White wordmark + yellow "c" + yellow lightning bolt
- **Dark version (on light bg):** Black wordmark + yellow "c" + yellow lightning bolt

**Export required:**
- `/public/logo.svg` — light version (for dark backgrounds — primary use)
- `/public/logo-dark.svg` — dark version (for light backgrounds)
- `/public/logomark.svg` — lightning bolt symbol only
- `/public/favicon.ico` + `/public/icon.svg`

**Minimum size:** 120px wide. Clear space = height of the "c" on all sides.

---

## Visual Style

- **Aesthetic:** Dark, electric, premium. The yellow accent brings energy — use it purposefully, not everywhere.
- **Background:** `#020413` base. `#171E3A` for layered surfaces/cards.
- **Imagery:** Real project work only. Mockups of delivered sites. No stock.
- **Motion:** Smooth, intentional. The brand has energy — animations should feel alive but never chaotic.
- **The lightning bolt motif:** The diagonal slash/bolt is a core visual element. Use as decorative background texture, section dividers, or large abstract shapes — always in `#FFC100` at low opacity or full.

---

## OG / Social Image

- **Format:** 1200×630px
- **Background:** `#020413`
- **Content:** Charged Studio logo (light version) centred, tagline below in Inter Tight
- **Destination:** `/public/og-image.jpg`

---

## References (visual standard to match or exceed)

- [Linear.app](https://linear.app) — dark, premium, grid-perfect
- [Vercel.com](https://vercel.com) — confident, clean
- [Basement Studio](https://basement.studio) — creative studio, bold type, dark
- [Stripe](https://stripe.com) — trust, hierarchy, polish
