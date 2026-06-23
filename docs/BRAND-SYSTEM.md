# Charged Studio — Brand System

> **The single source of truth for the Charged Studio brand.**
> Every visual and verbal decision — on the website and in any future Charged work — is rooted here.
> This document supersedes and merges the older `brand.md` and `design-system.md`. The full voice guide lives in `tone.md`.
>
> **Version 1.0 · 2026-06-23**

---

## 0. How to use this document

This is both a brand guide and a technical design system. It is organised so a designer can read it top‑to‑bottom and a developer can lift tokens straight into code.

- **Locked** = a core brand decision. Don't change it without a deliberate rebrand. (Palette, the three typefaces, the logo.)
- **Token** = a named value (`--color-accent`, `--space-6`). Always reference the token, never the raw hex/px in components. This is what makes a restyle global and instant.
- Code tokens map to Tailwind utilities via `tailwind.config.ts` and the `:root` block in `app/globals.css`.

---

## 1. Brand Foundation

**Name:** Charged Studio
**What we are:** A premium creative studio — a creative *partner*, not an agency.
**What we lead with:** Websites → Software & apps → SEO & digital presence. Branding is a supporting service, never the headline.
**Location:** Exeter, Devon, UK — working with clients across the UK.
**Who we're for:** Growing local service businesses (Devon / South West) run by busy owners.

**Voice in one line:** *Confident, warm, and direct. We know what we're doing and we care about your business.*

**Tagline (primary — confirmed 2026-06-23):** "Built to perform. Charged to last."
**Tagline (alt):** "Built on belief."

**Brand idea — "Charged":** There is energy in the name. The work should feel *electric* — dark, premium, with a single charge of yellow. Energy is used purposefully, never sprayed everywhere.

> Full personality, do/don't word lists, and tone-by-section guidance: see **`tone.md`**.

---

## 2. Logo

**Primary wordmark:** lowercase `charged`, **set entirely in Caramel** — Caramel is the wordmark typeface. The treatment is a *colour* split, not a font split: the **"c" is ALWAYS Charged Yellow** (on every background, no exceptions); the remaining letters are white (on dark) or near‑black (on light).

**Logomark:** the diagonal slash / lightning‑bolt motif derived from the "c", in Charged Yellow.

### Files (`/public/`)
| File | Use |
|---|---|
| `logo.svg` | **Light logo** — white wordmark + yellow "c". For dark backgrounds. **Primary.** |
| `logo-dark.svg` | **Dark logo** — near‑black wordmark + yellow "c". For light backgrounds. |
| `logo-c.svg` | Logomark / "c" only — yellow. Favicons, avatars, compact spaces. |
| `favicon.svg` | Browser favicon (yellow "c"). |

> All logo files were standardised on **2026-06-23** to use the canonical `#FFC100` (previously `#ffc00e`) and `#020413` (previously `#231f20`). They now match the colour tokens below exactly.

### Rules
- **Minimum width:** 120px for the full wordmark; 24px for the "c" mark.
- **Clear space:** keep a margin equal to the height of the "c" on all sides.
- **Backgrounds:** light logo on dark surfaces; dark logo only on light surfaces (`#F7F7F7`+). Never place the wordmark on a busy image without a scrim.

### Don'ts
Don't recolour the wordmark (yellow "c" is fixed) · don't stretch, skew, or rotate · don't add shadows or outlines · don't reconstruct it in a different font · don't place the yellow "c" on a yellow background.

---

## 3. Colour

### 3.1 Core palette — **Locked**
| Token | Name | Hex | Role |
|---|---|---|---|
| `--color-accent` | Charged Yellow | `#FFC100` | The single accent. CTAs, the logo "c", highlights, focus, the bolt motif. |
| `--color-bg` | Near Black | `#020413` | Page background — the primary dark base. |
| `--color-surface` | Dark Navy | `#171E3A` | Cards, layered sections, inputs. |
| `--color-light` | Off White | `#F7F7F7` | Primary text on dark; light section backgrounds. |

Tailwind names stay as today: `charged-yellow`, `charged-black`, `charged-navy`, `charged-light`.

### 3.2 Extended tokens (new — refinement)
Built *from* the locked palette so the studio always feels like one voice.

**Accent ramp**
| Token | Hex / value | Use |
|---|---|---|
| `--color-accent` | `#FFC100` | Default accent. |
| `--color-accent-hover` | `#FFCE3A` | Hover on dark (lifts brightness). |
| `--color-accent-pressed` | `#E0A900` | Active/pressed. |
| `--color-accent-soft` | `rgba(255,193,0,0.12)` | Tinted backgrounds, soft badges, highlights. |

**Surfaces (dark)**
| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#020413` | Base page. |
| `--color-surface` | `#171E3A` | Cards / primary raised surface. |
| `--color-surface-raised` | `#1E2747` | Hover / nested / elevated surface. |

**Borders & lines**
| Token | Value | Use |
|---|---|---|
| `--color-border` | `rgba(247,247,247,0.10)` | Default hairline borders, dividers. |
| `--color-border-strong` | `rgba(247,247,247,0.20)` | Emphasised borders, secondary buttons. |

**Text**
| Token | Hex | Use |
|---|---|---|
| `--color-text` | `#F7F7F7` | Primary text on dark. |
| `--color-text-muted` | `#9CA3AF` | Secondary text, labels, metadata. |
| `--color-text-subtle` | `#6B7280` | Captions, disabled, fine print. |
| `--color-text-inverse` | `#020413` | Text on yellow or light surfaces. |

**Feedback (forms only — keep minimal)**
| Token | Hex | Use |
|---|---|---|
| `--color-success` | `#34D399` | Success states. |
| `--color-error` | `#F87171` | Errors, invalid fields. |
| `--color-focus` | `#FFC100` | Focus ring (= accent). |

### 3.3 Contrast & accessibility (WCAG 2.1 AA)
| Pair | Ratio | Verdict |
|---|---|---|
| `#F7F7F7` on `#020413` | ~18.9:1 | ✅ AAA |
| `#9CA3AF` on `#020413` | ~7.0:1 | ✅ AA (all sizes) |
| `#020413` on `#FFC100` | ~12.4:1 | ✅ AAA — this is why CTA text is near‑black, not white |
| White on `#171E3A` | ~13:1 | ✅ AAA |
| `#FFC100` text on `#020413` | ~10:1 | ✅ — fine for large/bold; avoid yellow for long body copy |

**Rule:** never put white text on a yellow button — always near‑black (`--color-text-inverse`). Yellow is an *accent*, not a body‑text colour.

---

## 4. Typography

Three typefaces — **Locked**. Each has one job.

| Font | Role | Weights | Load |
|---|---|---|---|
| **Anton** | Display & headings (H1/H2, hero) | 400 only* | `next/font/google` → `font-anton` |
| **Inter Tight** | Everything else — body, UI, nav, buttons, labels | 400 / 500 / 600 / 700 | `next/font/google` → `font-inter` |
| **Caramel** | The logo wordmark + rare branded callouts | 400 only | self‑hosted `/public/fonts/Caramel-Regular.woff2` → `font-caramel` |

> *\*Correction:* Anton ships in **one weight (400)** and is intrinsically heavy. Earlier docs listed "700–900" — that was wrong. Get weight/impact from **size, uppercase, and tight tracking**, not font‑weight. Never apply `font-bold` to Anton.

### 4.1 Type scale (root = 16px)
Display sizes are fluid via `clamp(min, vw, max)` so the hero scales smoothly.

| Token | Font | Size (rem / clamp) | Line height | Weight | Tracking | Transform |
|---|---|---|---|---|---|---|
| `display` | Anton | `clamp(2.75rem, 6vw, 5rem)` | 0.95 | 400 | -0.01em | UPPERCASE |
| `h1` | Anton | `clamp(2.25rem, 5vw, 3.75rem)` | 1.0 | 400 | -0.01em | UPPERCASE |
| `h2` | Anton | `clamp(1.875rem, 4vw, 3rem)` | 1.05 | 400 | 0 | UPPERCASE |
| `h3` | Inter Tight | `1.5rem → 1.875rem` | 1.2 | 600 | -0.01em | — |
| `h4` | Inter Tight | `1.25rem` | 1.3 | 600 | 0 | — |
| `body-lg` | Inter Tight | `1.125rem` | 1.6 | 400 | 0 | — |
| `body` | Inter Tight | `1rem` | 1.6 | 400 | 0 | — |
| `body-sm` | Inter Tight | `0.875rem` | 1.5 | 400 | 0 | — |
| `eyebrow` | Inter Tight | `0.75rem` | 1.4 | 600 | 0.12em | UPPERCASE |
| `button` | Inter Tight | `0.875rem` | 1 | 700 | 0.1em | UPPERCASE |
| `caption` | Inter Tight | `0.75rem` | 1.4 | 400 | 0 | — |

### 4.2 Rules
- One H1 per page (Anton). Section headings are H2 (Anton). Sub‑heads switch to Inter Tight at H3.
- Body line length: aim **60–75 characters** (`max-w-prose` / ~65ch).
- Caramel is used **once or twice per page at most** — it's a seasoning, not a body font.

---

## 5. Spacing

4px base unit. Reference the token, not the pixel.

| Token | px | rem |
|---|---|---|
| `--space-1` | 4 | 0.25 |
| `--space-2` | 8 | 0.5 |
| `--space-3` | 12 | 0.75 |
| `--space-4` | 16 | 1 |
| `--space-6` | 24 | 1.5 |
| `--space-8` | 32 | 2 |
| `--space-12` | 48 | 3 |
| `--space-16` | 64 | 4 |
| `--space-24` | 96 | 6 |
| `--space-32` | 128 | 8 |

**Rhythm rules**
| Context | Value |
|---|---|
| Section vertical padding | `clamp(96px, 12vw, 128px)` (`py-24 → py-32`) |
| Container | max‑width **1280px**, side padding **24px** (`max-w-7xl mx-auto px-6`) |
| Content text column | max **720px** (~65ch) |
| Card padding | 24–32px |
| Heading → body gap | 16–24px |
| Grid / component gaps | 32 → 64px |

---

## 6. Radius, Elevation & Motion

### 6.1 Radius
| Token | px | Use |
|---|---|---|
| `--radius-sm` | 6 | Inputs, badges, small chips |
| `--radius-md` | 10 | Buttons, small cards |
| `--radius-lg` | 16 | Cards, panels |
| `--radius-xl` | 24 | Hero media, large feature panels |
| `--radius-full` | 9999 | Pills, avatars |

### 6.2 Elevation (dark UI — lean on borders + glow, not heavy shadows)
| Token | Value | Use |
|---|---|---|
| `--shadow-e1` | `0 1px 2px rgba(0,0,0,.4), 0 8px 24px rgba(0,0,0,.25)` | Raised cards |
| `--shadow-e2` | `0 8px 40px rgba(0,0,0,.45)` | Nav bar, overlays, menus |
| `--shadow-glow` | `0 0 0 1px rgba(255,193,0,.4), 0 10px 30px rgba(255,193,0,.25)` | CTA hover, accent highlight |

### 6.3 Motion
| Token | Value |
|---|---|
| `--ease-out` (entrance) | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in` (exit) | `cubic-bezier(0.4, 0, 1, 1)` |
| `--dur-fast` | 150ms |
| `--dur-base` | 250ms |
| `--dur-slow` | 400ms |
| `--dur-slowest` | 600ms |

**Patterns** (Framer Motion): fade‑up (`y: 16→0, opacity: 0→1`, 500ms, `--ease-out`) · stagger children 0.08s · hover‑lift `translateY(-4px)` at `--dur-base` · marquee 40s linear infinite.
**Rules:** trigger on `whileInView` with `once: true` (never on mount, never re‑fire) · always respect `prefers-reduced-motion` · motion should feel alive, never chaotic.

---

## 7. Components

> Resolves the earlier conflict: the **primary CTA is yellow** (brand accent), not white. Near‑black text sits on it for AAA contrast.

### 7.1 Buttons
**Primary**
```
bg: --color-accent · text: --color-text-inverse (#020413)
font: Inter Tight 700, uppercase, tracking 0.1em, 0.875rem
padding: 16px 32px · radius: --radius-md
hover:   bg --color-accent-hover + --shadow-glow + translateY(-1px)
active:  bg --color-accent-pressed
focus-visible: 2px ring --color-focus, 2px offset
disabled: opacity 0.5, no pointer
```

**Secondary (on dark)**
```
bg: transparent · text: --color-text · border: 1px --color-border-strong
hover: border --color-accent + text --color-accent
```

**Ghost / tertiary**
```
text: --color-text · no border/bg
hover: text --color-accent (or underline for inline links)
```

### 7.2 Badge / Eyebrow
- **Soft:** `bg --color-accent-soft`, text `--color-accent`, `eyebrow` type, radius `--radius-full`, padding 4×12.
- **Solid:** `bg --color-accent`, text `--color-text-inverse` — use for a single emphasised tag only.

### 7.3 Card
```
bg: --color-surface · border: 1px --color-border · radius: --radius-lg
padding: 32px · shadow: --shadow-e1
hover: translateY(-4px) + border --color-accent/30 (--dur-base, --ease-out)
```

### 7.4 Input / form field
```
bg: --color-surface (or transparent) · border: 1px --color-border
radius: --radius-md · padding: 12px 16px · text: body · placeholder: --color-text-muted
focus: border --color-accent + 2px focus ring
error: border --color-error + helper text in --color-error
```

### 7.5 Nav
Fixed top, ~72px tall. Transparent over the hero → on scroll: `bg #020413 @ 80%` + `backdrop-blur` + bottom border `--color-border` + `--shadow-e2`. Logo left (light logo), links Inter Tight 500, primary CTA button right. Mobile: hamburger → full‑screen overlay.

### 7.6 Section pattern
`eyebrow` (yellow, uppercase) → Anton **H2** → `body-lg` intro → content. Keeps every section visually consistent.

---

## 8. Layout & Grid

- **12‑column** grid; container max **1280px**, side padding **24px**.
- Default responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

| Breakpoint | Width | Behaviour |
|---|---|---|
| base | <768px | Single column, stacked (mobile‑first) |
| `md` | 768px | 2 columns where applicable |
| `lg` | 1024px | Full desktop layout |
| `xl` | 1280px | Wider containers |
| `2xl` | 1536px | No new layout — container stays capped at 1280px |

---

## 9. Imagery & the Bolt Motif

- **Imagery:** real project work only — mockups of delivered sites and live work. **No stock photography.** Frame images for a dark UI; add a subtle scrim if text overlaps.
- **The bolt / slash motif:** the diagonal lightning slash from the "c" is a core graphic device. Use it as low‑opacity background texture, as a section divider, or as a large abstract accent shape — always in `--color-accent`, at low opacity for texture or full strength as a deliberate highlight. Don't overuse it; one charged moment per view.
- **Surface treatment:** subtle gradients from `#020413` → `#171E3A`, optional fine grain/noise, and the bolt motif give depth without clutter.

---

## 10. Verbal identity (summary)

Confident · Direct · Premium · Human · Invested · Electric.

- **Use:** build, sharp, partner, grow, digital presence, charged/electric (sparingly).
- **Avoid:** solutions, leverage, passionate about, world‑class, seamless, innovative, exclamation overload.
- **Lead with websites**, then software/apps, then SEO. Branding supports.

> Full guide, examples, and tone‑by‑section: **`tone.md`**.

---

## 11. Design reference bar (the standard to match or beat)

[Linear](https://linear.app) — dark, precise, grid‑perfect · [Vercel](https://vercel.com) — confident, fast‑feeling · [Basement Studio](https://basement.studio) — bold type, editorial · [Stripe](https://stripe.com) — trust, hierarchy, polish.

---

## 12. Token reference (for code)

Copy block lives in `app/globals.css` (`:root`) and is mapped to Tailwind in `tailwind.config.ts`. See `styleguide.html` for a live, rendered version of everything in this document.

*End of Brand System v1.0.*
