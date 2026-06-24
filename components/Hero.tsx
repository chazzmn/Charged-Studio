import Button from "@/components/Button";
import HeroMockup from "@/components/HeroMockup";

/** Homepage hero — copy on the left, a looping coded browser mockup on the right.
 *  Rendered statically (no scroll-reveal) so the above-fold content paints
 *  immediately — best for LCP and perceived mobile load. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative glow — electric energy without an image dependency */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 md:pt-40 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        {/* Copy */}
        <div>
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Web Design Studio · Exeter &amp; the South West
          </p>
          <h1 className="mt-5 font-anton text-5xl uppercase leading-[0.95] text-text sm:text-6xl lg:text-7xl">
            We build the website
            <br />
            your business <span className="text-accent">deserves.</span>
          </h1>
          <p className="mt-6 max-w-md font-inter text-lg leading-relaxed text-text/70">
            Fast, modern websites that turn local searchers into customers — for
            service businesses across Devon and the South West.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/start-a-project">Start a Project</Button>
            <Button href="/audit" variant="secondary">
              Free Website Audit
            </Button>
          </div>
        </div>

        {/* Mockup reel */}
        <div className="relative">
          {/* Glow behind the frame */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/15 blur-3xl"
          />

          <div className="overflow-hidden rounded-xl bg-surface shadow-e2 ring-1 ring-border">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-text/20" />
              <span className="h-3 w-3 rounded-full bg-text/20" />
              <span className="h-3 w-3 rounded-full bg-text/20" />
              <div className="ml-3 flex-1 rounded bg-text/5 px-3 py-1 font-inter text-xs text-text/70">
                chargedstudio.co.uk
              </div>
            </div>

            {/* Media — fixed 16:10 so the layout never shifts.
                Loops from "Coming soon" through what we do. */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-surface via-surface to-bg">
              <HeroMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
