import { BoltMark } from "@/components/icons";

/**
 * Shared coded "scene" graphics, used in BOTH the hero loop (HeroMockup.tsx)
 * and the homepage service rows (Services.tsx). Pure presentational markup —
 * no client hooks, no animation library. The build-in stagger is CSS:
 * the root is a `.reveal-stagger` container and its DIRECT children fade/rise in
 * one after another when `show` is true (driven by the hero scene's active state,
 * or simply true in the services rows). Each scene is designed to "assemble" —
 * more blocks = a richer build-up — while staying inside a 16:10 frame.
 */

function root(show: boolean, layout: string) {
  return `reveal-stagger${show ? " in" : ""} ${layout}`;
}

/** WEBSITES — a full landing page assembling: nav, hero, feature cards, logo strip. */
export function WebsiteGraphic({ show = true }: { show?: boolean }) {
  return (
    <div className={root(show, "flex h-full w-full flex-col gap-2.5 p-4 sm:gap-3 sm:p-5")}>
      {/* nav */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-accent">
            <BoltMark className="h-2.5 w-2.5 text-text-inverse" />
          </span>
          <span className="h-2 w-14 rounded-full bg-text/20" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-text/10" />
          <span className="h-1.5 w-8 rounded-full bg-text/10" />
          <span className="hidden h-1.5 w-8 rounded-full bg-text/10 sm:block" />
          <span className="h-4 w-11 rounded-md bg-accent" />
        </div>
      </div>

      {/* hero */}
      <div className="grid flex-1 grid-cols-5 gap-3">
        <div className="col-span-3 flex flex-col justify-center gap-2">
          <span className="h-3 w-16 rounded-full bg-accent-soft ring-1 ring-accent/30" />
          <span className="h-3.5 w-[92%] rounded bg-text/25" />
          <span className="h-3.5 w-[64%] rounded bg-text/25" />
          <span className="mt-0.5 h-1.5 w-[78%] rounded-full bg-text/10" />
          <span className="h-1.5 w-[58%] rounded-full bg-text/10" />
          <div className="mt-1.5 flex gap-2">
            <span className="h-5 w-20 rounded-md bg-accent" />
            <span className="h-5 w-14 rounded-md bg-surface-raised ring-1 ring-border" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2 rounded-lg bg-surface-raised p-2 ring-1 ring-border">
          <div className="flex-1 rounded bg-gradient-to-br from-accent/30 to-surface" />
          <span className="h-1.5 w-3/4 rounded-full bg-text/15" />
          <span className="h-1.5 w-1/2 rounded-full bg-text/10" />
        </div>
      </div>

      {/* feature cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((k) => (
          <div
            key={k}
            className="flex flex-col gap-1.5 rounded-md bg-surface-raised p-2 ring-1 ring-border"
          >
            <span className="h-3 w-3 rounded bg-accent/70" />
            <span className="h-1.5 w-full rounded-full bg-text/15" />
            <span className="h-1.5 w-2/3 rounded-full bg-text/10" />
          </div>
        ))}
      </div>

      {/* logo / trust strip */}
      <div className="flex items-center justify-between rounded-md bg-surface-raised px-3 py-2 ring-1 ring-border">
        <span className="h-1.5 w-10 rounded-full bg-text/12" />
        <span className="h-1.5 w-8 rounded-full bg-text/12" />
        <span className="h-1.5 w-12 rounded-full bg-text/12" />
        <span className="h-1.5 w-8 rounded-full bg-text/12" />
        <span className="hidden h-1.5 w-10 rounded-full bg-text/12 sm:block" />
      </div>
    </div>
  );
}

/** SEO — ranking #1 in a fuller search results page + a rising trend. */
export function SearchGraphic({ show = true }: { show?: boolean }) {
  return (
    <div className={root(show, "flex h-full w-full flex-col gap-2.5 p-4 sm:p-5")}>
      {/* search bar with a local query */}
      <div className="flex items-center gap-2 rounded-full bg-surface-raised px-3 py-2 ring-1 ring-border">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3-3" strokeLinecap="round" />
        </svg>
        <span className="h-2 w-28 rounded-full bg-text/20" />
        <span className="ml-auto h-3 w-12 rounded-full bg-accent-soft ring-1 ring-accent/30" />
      </div>

      {/* tabs */}
      <div className="flex items-center gap-3 px-1">
        <span className="h-1.5 w-8 rounded-full bg-accent" />
        <span className="h-1.5 w-6 rounded-full bg-text/12" />
        <span className="h-1.5 w-7 rounded-full bg-text/12" />
        <span className="h-1.5 w-5 rounded-full bg-text/12" />
        <span className="ml-auto flex items-center gap-1 text-accent">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M12 19V6M6 12l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="h-1.5 w-6 rounded-full bg-accent/60" />
        </span>
      </div>

      {/* #1 ranked result */}
      <div className="flex items-center gap-3 rounded-md border border-accent/40 bg-accent-soft p-2.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent font-anton text-[11px] text-text-inverse">
          1
        </span>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="h-2 w-[62%] rounded-full bg-text/30" />
          <span className="h-1.5 w-[40%] rounded-full bg-accent/50" />
          <span className="h-1.5 w-[88%] rounded-full bg-text/12" />
        </div>
      </div>

      {/* result 2 */}
      <div className="flex flex-col gap-1.5 px-1">
        <span className="h-2 w-[48%] rounded-full bg-text/18" />
        <span className="h-1.5 w-[30%] rounded-full bg-text/12" />
        <span className="h-1.5 w-[82%] rounded-full bg-text/10" />
      </div>

      {/* result 3 */}
      <div className="flex flex-col gap-1.5 px-1">
        <span className="h-2 w-[44%] rounded-full bg-text/18" />
        <span className="h-1.5 w-[28%] rounded-full bg-text/12" />
        <span className="h-1.5 w-[76%] rounded-full bg-text/10" />
      </div>

      {/* impressions trend */}
      <div className="mt-auto flex items-end gap-1.5 rounded-md bg-surface-raised p-2.5 ring-1 ring-border">
        <span className="h-2.5 w-1.5 rounded-sm bg-accent/30" />
        <span className="h-3.5 w-1.5 rounded-sm bg-accent/40" />
        <span className="h-3 w-1.5 rounded-sm bg-accent/50" />
        <span className="h-5 w-1.5 rounded-sm bg-accent/70" />
        <span className="h-6 w-1.5 rounded-sm bg-accent" />
        <span className="ml-auto h-1.5 w-16 self-center rounded-full bg-text/12" />
      </div>
    </div>
  );
}

/** SOFTWARE — a fuller dashboard: sidebar, top bar, stat cards, chart, table rows. */
export function SoftwareGraphic({ show = true }: { show?: boolean }) {
  return (
    <div className={root(show, "relative flex h-full w-full flex-col gap-2.5 p-4 pl-14 sm:gap-3 sm:p-5 sm:pl-16")}>
      {/* sidebar (absolute so each main block can stagger independently) */}
      <div className="absolute inset-y-4 left-4 flex w-8 flex-col gap-2 rounded-md bg-surface-raised p-2 ring-1 ring-border sm:inset-y-5 sm:left-5 sm:w-9">
        <span className="h-3 w-full rounded bg-accent" />
        <span className="h-2 w-full rounded bg-text/15" />
        <span className="h-2 w-full rounded bg-text/15" />
        <span className="h-2 w-3/4 rounded bg-text/15" />
        <span className="mt-auto h-2 w-full rounded bg-text/10" />
      </div>

      {/* top bar */}
      <div className="flex items-center justify-between">
        <span className="h-2.5 w-24 rounded-full bg-text/20" />
        <div className="flex items-center gap-2">
          <span className="h-3 w-16 rounded-full bg-surface-raised ring-1 ring-border" />
          <span className="h-4 w-4 rounded-full bg-accent/70" />
        </div>
      </div>

      {/* stat cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((k) => (
          <div
            key={k}
            className="flex flex-col gap-1.5 rounded-md bg-surface-raised p-2 ring-1 ring-border"
          >
            <span className="h-1.5 w-1/2 rounded-full bg-text/20" />
            <span className="h-3.5 w-3/4 rounded bg-text/30" />
            <span className="h-1 w-2/3 rounded-full bg-accent/50" />
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="flex flex-1 items-end gap-1.5 rounded-md bg-surface-raised p-2.5 ring-1 ring-border">
        <span className="h-[40%] w-full rounded-sm bg-accent/30" />
        <span className="h-[65%] w-full rounded-sm bg-accent/45" />
        <span className="h-[50%] w-full rounded-sm bg-accent/35" />
        <span className="h-[80%] w-full rounded-sm bg-accent/60" />
        <span className="h-[62%] w-full rounded-sm bg-accent/45" />
        <span className="h-full w-full rounded-sm bg-accent" />
        <span className="h-[72%] w-full rounded-sm bg-accent/55" />
      </div>

      {/* table rows */}
      <div className="flex flex-col gap-1.5 rounded-md bg-surface-raised p-2.5 ring-1 ring-border">
        {[0, 1, 2].map((k) => (
          <div key={k} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent/60" />
            <span className="h-1.5 flex-1 rounded-full bg-text/12" />
            <span className="h-1.5 w-8 rounded-full bg-text/18" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** BRANDING — a fuller brand board: logo lockup, palette, type specimen, tiles. */
export function BrandingGraphic({ show = true }: { show?: boolean }) {
  return (
    <div className={root(show, "flex h-full w-full flex-col justify-center gap-3 p-4 sm:gap-3.5 sm:p-5")}>
      {/* logo lockup */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
          <BoltMark className="h-6 w-6 text-text-inverse" />
        </span>
        <div className="flex flex-col gap-1.5">
          <span className="h-3 w-24 rounded bg-text/30" />
          <span className="h-1.5 w-16 rounded-full bg-text/12" />
        </div>
      </div>

      {/* palette */}
      <div className="flex gap-2">
        <span className="h-7 w-7 rounded-md bg-accent" />
        <span className="h-7 w-7 rounded-md bg-accent-pressed" />
        <span className="h-7 w-7 rounded-md bg-surface-raised ring-1 ring-border" />
        <span className="h-7 w-7 rounded-md bg-text/80" />
        <span className="h-7 w-7 rounded-md bg-text/20" />
      </div>

      {/* type specimen */}
      <div className="flex items-end gap-3">
        <span className="font-anton text-4xl uppercase leading-none text-text/35">Aa</span>
        <div className="flex flex-1 flex-col gap-1.5 pb-1">
          <span className="h-2 w-[72%] rounded-full bg-text/18" />
          <span className="h-1.5 w-[90%] rounded-full bg-text/10" />
          <span className="h-1.5 w-[64%] rounded-full bg-text/10" />
        </div>
      </div>

      {/* brand application tiles */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="flex h-9 items-center justify-center rounded-md bg-accent">
          <BoltMark className="h-4 w-4 text-text-inverse" />
        </div>
        <div className="flex h-9 items-center justify-center rounded-md bg-surface-raised ring-1 ring-border">
          <BoltMark className="h-4 w-4 text-accent" />
        </div>
        <div className="flex h-9 flex-col items-center justify-center gap-1 rounded-md bg-surface-raised ring-1 ring-border">
          <span className="h-1.5 w-8 rounded-full bg-text/20" />
          <span className="h-1 w-5 rounded-full bg-text/12" />
        </div>
      </div>
    </div>
  );
}
