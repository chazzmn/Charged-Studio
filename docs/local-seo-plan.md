# Local SEO Plan — Ranking for "web design Devon / Exeter"

> Goal: rank on page one (ideally the map pack + #1 organic) for high-intent local
> web-design searches across Devon and the South West. This doc is the keyword →
> page map that the build follows. Companion to `docs/seo.md`.

---

## Strategy in one line

Win two surfaces per search: the **Map Pack** (driven by the Google Business
Profile) and the **organic results** (driven by a dedicated, genuinely useful
page per location + service, plus local authority/links). One page per intent —
never one generic homepage hoping to rank for everything.

---

## Target keywords → page map

Each row is one search intent mapped to the single page that should own it. The
**lead page** is the one we point internal links and authority at first.

| Priority | Target keyword(s) | Owning page (URL) | Status |
|---|---|---|---|
| 1 (lead) | web design Exeter · web designer Exeter · website design Exeter | `/web-design-exeter` | **building now** |
| 2 | web design Devon · web designer Devon · website design Devon | `/web-design-devon` | planned |
| 3 | web design agency Exeter · web design studio Exeter | `/` (homepage) | live — refine |
| 4 | website designer near me (Exeter area) | GBP + `/web-design-exeter` | needs GBP |
| 5 | web design [town] — Exmouth, Topsham, Torquay, Newton Abbot, Tiverton | `/web-design-[town]` | future (after 1 & 2 prove out) |
| — | local SEO Exeter / Devon | `/services/seo` | live — add local angle |
| — | branding / logo design Exeter | `/services/branding` | live — add local angle |
| — | how much does a website cost (Devon) | `/blog/how-much-does-a-website-cost-uk` | live |

### Per-page metadata (location pages)

**`/web-design-exeter`**
- Title: `Web Design Exeter | Custom Websites That Convert — Charged Studio`
- Meta: `Web designer in Exeter building fast, modern, fully-managed websites that turn local searches into enquiries. Founder-led, APM-qualified, 5.0 rated. Free audit.`
- H1: `Web Design in Exeter`

**`/web-design-devon`** (next)
- Title: `Web Design Devon | Websites Built to Win Local Work — Charged Studio`
- Meta: `Devon web designer creating fast, modern, fully-managed websites for service businesses across the county. Founder-led, APM-qualified, 5.0 rated. Free audit.`
- H1: `Web Design in Devon`

---

## What makes a location page rank (the on-page checklist)

Every location page should have:

- A location-specific **H1** ("Web Design in Exeter") and natural use of the
  town/county in headings, body, image alt text, and the URL.
- **Genuinely local content** — references to Exeter/Devon, local business types
  we serve, and why local matters (not the same boilerplate as every other page).
- **Proof** — the 5.0 / 16 Google rating, the 100/100 PageSpeed scores, the APM
  PMQ qualification, and a real local case study (Devon Nurseries).
- **A clear conversion path** — Start a Project + Free Audit CTAs above and below.
- **A local FAQ** targeting the long-tail ("how much does a website cost in
  Exeter?", "do you only work with Exeter businesses?") with FAQPage schema.
- **`LocalBusiness` + `BreadcrumbList` JSON-LD**, plus internal links to the
  matching service page, a case study, and the project form.
- Self-referencing **canonical** + unique title/description.

---

## Off-page (the part that usually decides the top spot)

On-page gets you in the running; these get you to #1.

1. **Google Business Profile** — claim/optimise. Primary category *Website
   designer*; service areas = Exeter + Devon towns; photos; weekly posts. This is
   what puts us in the Map Pack. (Not part of the website build — separate task.)
2. **Reviews** — keep the 5.0 growing; nudge clients to name the work and place
   ("web design in Exeter") naturally in the text.
3. **Citations** — consistent Name/Address/Phone across UK + Devon directories
   (Google, Bing Places, Yell, FreeIndex, local Chamber of Commerce, etc.).
4. **Local backlinks** — Devon business sites, partners, suppliers, any press or
   sponsorships. The biggest differentiator at the top of competitive terms.

---

## Measurement

- **Google Search Console** — track impressions/position for the exact target
  queries; watch the location pages climb. Re-submit sitemap after each new page.
- **Rank tracking** — check positions for the priority terms monthly.
- **GBP insights** — calls, direction requests, profile views from the map pack.

---

## Build order (what we're doing)

1. ✅ This keyword → page map.
2. 🔨 `/web-design-exeter` — the lead location page (template for the rest).
3. ⏭ `/web-design-devon` — clone the pattern.
4. ⏭ GBP optimisation + first citations (off-site).
5. ⏭ Town pages once Exeter + Devon are proving out.
6. ⏭ Wire `next-sitemap` so new pages auto-enter the sitemap (already on roadmap).
