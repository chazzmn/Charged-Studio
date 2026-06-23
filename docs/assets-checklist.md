# Assets Checklist — Charged Studio

> Every asset needed to build the site. Nothing gets built without the assets being ready. Track status here.

---

## Status Key
- `[ ]` Not started
- `[~]` In progress / sourcing
- `[x]` Done — file saved to `/public/`

## Current state (2026-06-23)
- The site is BUILT with tasteful placeholder tiles/divs sized to final dimensions — so dropping real images in won't shift layout. All section images are placeholders; the logo SVGs are real and in use.
- Brand logo SVGs already in `/public/`: `logo.svg`, `logo-dark.svg`, `logo-c.svg`, `favicon.svg`. Caramel font self-hosted at `/public/fonts/Caramel-Regular.woff2`.
- **Case study decisions:** Devon Nurseries = flagship (build properly with real shots). CHAZZMN = deferred until its rebuild is live. The Unaffiliated = dropped (lost client) — removed from the site.
- **Priority real assets to pull from the live Framer site (framerusercontent.com):** homepage work-marquee shots, Devon Nurseries hero + gallery, testimonial headshots (currently initials avatars), Charlie's about photo, a hero showreel video (`/public/videos/hero-reel.mp4` + poster `/public/images/hero-poster.jpg`), and a real `/public/og-image.jpg`.

---

## Brand Assets

| Asset | Format | Destination | Status | Notes |
|---|---|---|---|---|
| Logo (light — for dark bg) | SVG | `/public/logo.svg` | `[ ]` | Export from Adobe Illustrator |
| Logo (dark — for light bg) | SVG | `/public/logo-dark.svg` | `[ ]` | Export from Adobe Illustrator |
| Favicon | ICO + SVG | `/public/favicon.ico`, `/public/icon.svg` | `[ ]` | Extract from logo |
| Apple touch icon | PNG 180×180 | `/public/apple-icon.png` | `[ ]` | |
| OG / Social share image | JPG 1200×630 | `/public/og-image.jpg` | `[ ]` | Dark bg, logo + tagline |
| Lightning bolt / charged motif | SVG | `/public/motif.svg` | `[ ]` | The decorative SVG from Framer site |

---

## Photography / Project Images

### Homepage — scrolling marquee / gallery
| Image | Source | Destination | Status |
|---|---|---|---|
| Project shot 1 | Framer CDN | `/public/images/gallery-1.jpg` | `[ ]` |
| Project shot 2 | Framer CDN | `/public/images/gallery-2.jpg` | `[ ]` |
| Project shot 3 | Framer CDN | `/public/images/gallery-3.jpg` | `[ ]` |
| Project shot 4 | Framer CDN | `/public/images/gallery-4.jpg` | `[ ]` |
| Project shot 5 | Framer CDN | `/public/images/gallery-5.jpg` | `[ ]` |
| (add all from scrolling band) | | | |

### Case Study — Devon Nurseries
| Asset | Destination | Status |
|---|---|---|
| Hero image | `/public/images/devon-nurseries/hero.jpg` | `[ ]` |
| Project screenshots / mockups | `/public/images/devon-nurseries/` | `[ ]` |

### Case Study — CHAZZMN
| Asset | Destination | Status |
|---|---|---|
| Hero image | `/public/images/chazzmn/hero.jpg` | `[ ]` |
| Project screenshots / mockups | `/public/images/chazzmn/` | `[ ]` |

### Case Study — The Unaffiliated
| Asset | Destination | Status |
|---|---|---|
| Hero image | `/public/images/the-unaffiliated/hero.jpg` | `[ ]` |
| Project screenshots / mockups | `/public/images/the-unaffiliated/` | `[ ]` |

---

## Testimonial Headshots

| Person | Destination | Status |
|---|---|---|
| Tariq Salfo | `/public/images/testimonials/tariq-salfo.jpg` | `[ ]` |
| Jane Gold | `/public/images/testimonials/jane-gold.jpg` | `[ ]` |
| Jack Smith | `/public/images/testimonials/jack-smith.jpg` | `[ ]` |
| Claire Black | `/public/images/testimonials/claire-black.jpg` | `[ ]` |
| Olivia Johnson | `/public/images/testimonials/olivia-johnson.jpg` | `[ ]` |
| Denise Russell | `/public/images/testimonials/denise-russell.jpg` | `[ ]` |
| Ivanhoe Norona | `/public/images/testimonials/ivanhoe-norona.jpg` | `[ ]` |
| Hannah James | `/public/images/testimonials/hannah-james.jpg` | `[ ]` |

---

## About Page

| Asset | Destination | Status |
|---|---|---|
| Charlie Norona photo | `/public/images/charlie-norona.png` | `[ ]` |
| Background decorative SVG | `/public/images/about-bg.svg` | `[ ]` |

---

## Blog

| Asset | Destination | Status |
|---|---|---|
| Post: "What is AEO" — cover image | `/public/images/blog/what-is-aeo.jpg` | `[ ]` |
| Post: "Website Speed" — cover image | `/public/images/blog/website-speed.jpg` | `[ ]` |

---

## How to Download Assets from Framer

The current site images are hosted on `framerusercontent.com`. To download them:

1. Open the live Framer site in Chrome
2. Open DevTools → Network tab → filter by `Img`
3. Right-click each image URL → open in new tab → save
4. Rename according to the destinations above
5. Optimise: run through [Squoosh](https://squoosh.app) or `sharp` before saving to `/public/`

> Target: all JPGs under 200KB, all PNGs under 500KB unless they are hero-level images.

---

## Image Optimisation Rules

- Always use `next/image` `<Image />` component — never raw `<img>`
- Set explicit `width` and `height` on all images to prevent CLS
- Use `priority` prop on hero/above-fold images
- Use `loading="lazy"` (default) for all below-fold images
- WebP conversion handled automatically by Next.js
