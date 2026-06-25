import type { Metadata } from "next";
import Image from "next/image";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tend — Case Study | Charged Studio",
  description:
    "A shift-scheduling concept for independent hospitality where labour cost is a live number you see while you plan — a self-initiated product design case study by Charged Studio.",
  alternates: { canonical: "https://chargedstudio.co.uk/tend" },
  openGraph: {
    title: "Tend — Case Study | Charged Studio",
    description:
      "A shift-scheduling concept for independent hospitality where labour cost is a live number you see while you plan.",
    url: "https://chargedstudio.co.uk/tend",
    siteName: "Charged Studio",
    type: "article",
  },
};

const META = [
  { label: "Services", value: "Product Design · UI Design" },
  { label: "Type", value: "Self-initiated concept" },
  { label: "Year", value: "2026" },
];

const FEATURES = [
  {
    title: "Live labour-cost meter",
    body: "A persistent read on cost vs. forecast sales, updating with every change to the rota and colour-coded against target.",
  },
  {
    title: "Drag-and-drop rota grid",
    body: "Build the week visually. Costs, hours, and compliance recalculate instantly as shifts move.",
  },
  {
    title: "Demand forecasting",
    body: "Per-daypart predictions from sales history, seasonality, weather, and local events, translated into a recommended level of cover.",
  },
  {
    title: "Availability & time-off",
    body: "Staff set availability and request leave in-app; it lands in the grid automatically, so you never roster someone who can't work.",
  },
  {
    title: "One-tap shift swaps",
    body: "Staff arrange cover between themselves; the manager approves with a single action and the rota and costs update.",
  },
  {
    title: "Compliance guardrails",
    body: "In-the-moment warnings for overtime, rest breaks, and under-18 hour limits — caught while building, not discovered at payroll.",
  },
];

export default function TendPage() {
  return (
    <article>
      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>Case Study</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          Tend
        </h1>
        <p className="mt-5 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          Build the rota. Watch the wage bill. A shift-scheduling tool for
          independent hospitality, where labour cost is a number you see{" "}
          <em>while</em> you plan — not a number you regret after payday.
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
          {META.map((m) => (
            <div key={m.label}>
              <dt className="font-inter text-xs font-semibold uppercase tracking-wider text-text/50">
                {m.label}
              </dt>
              <dd className="mt-1 font-inter text-text">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Main project image — dashboard (dark) */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src="/images/work/tend-dashboard-dark.jpg"
            alt="The Tend dashboard in dark mode — live labour cost, wage bill, scheduled hours, and a chart of labour cost against forecast sales"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            preload
          />
        </div>
      </section>

      {/* Overview + problem */}
      <section className="mx-auto w-full max-w-3xl space-y-12 px-6 pb-8">
        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            Overview
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            Tend is an original concept developed as a self-initiated product
            design exercise — a scheduling platform built for the owner-operators
            and general managers of independent cafés, bars, and small restaurant
            groups. Most scheduling tools treat the rota and the money as two
            separate problems: you build the week in one place, then find out what
            it cost you somewhere else, usually too late to do anything about it.
            Tend collapses that gap. Every shift you drag onto the grid updates a
            single, honest number in real time — labour cost as a percentage of
            forecast sales. The result is a tool that doesn&apos;t just help you
            fill the week, it helps you afford it.
          </p>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            The problem
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            Independent hospitality runs on margins thin enough to disappear in a
            single badly-planned week. Labour is the largest controllable cost in
            the building — typically 28–35% of sales — and the one most owners
            manage with the least visibility. In practice the rota gets built in a
            spreadsheet or a WhatsApp group, and the true cost of those decisions
            doesn&apos;t surface until the payroll run, by which point the money is
            spent. Cost is invisible at the point of decision, demand and staffing
            are disconnected, and the admin is relentless — so the same mistakes
            repeat every week.
          </p>
          <blockquote className="mt-6 border-l-2 border-accent pl-5 font-inter text-lg italic leading-relaxed text-text/80">
            &ldquo;I don&apos;t find out if I got the rota right until I&apos;ve
            already paid for it being wrong.&rdquo;
            <span className="mt-2 block text-sm not-italic text-text/50">
              — owner of a three-site coffee group, early research
            </span>
          </blockquote>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            Who it&apos;s for
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            The primary user is the owner-operator — running one to three venues,
            8 to 40 staff, hospitality-trained rather than finance-trained — who
            cares about labour percentage but has never had a tool that made it
            legible in real time. The general manager builds and publishes the
            rota on their behalf and lives in the tool daily, needing speed inside
            a budget someone else set. The staff member just wants to know when
            they&apos;re working, get paid right, and swap a shift without a
            guilt-trip — so Tend&apos;s staff-facing app is deliberately thin and
            the depth lives where the manager works.
          </p>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            The solution
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            Tend reframes scheduling around a single principle: the cost of a
            decision should be visible at the moment you make it. It makes labour
            cost a live number that moves as you plan and colour-codes against
            target, so you correct before you publish, not after you pay. It
            forecasts the week from sales history, day of week, and local signals
            like weather and nearby events, then suggests the cover each shift
            needs. And it takes the admin off the owner&apos;s plate — availability,
            time-off, one-tap swaps, and compliance guardrails all flow straight
            into the grid, with approved hours exporting clean to payroll.
          </p>
        </div>
      </section>

      {/* Key features */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20">
        <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
          Key features
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-surface/40 p-6"
            >
              <h3 className="font-inter text-base font-semibold text-text">
                {f.title}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Second image — dashboard (light) */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src="/images/work/tend-dashboard-light.jpg"
            alt="The Tend dashboard in light mode — the same interface, built on design tokens so it holds up in both themes"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <p className="mt-4 text-center font-inter text-sm text-text/50">
          Built on design tokens from the start — light and dark, both
          first-class.
        </p>
      </section>

      {/* Design solution + outcome */}
      <section className="mx-auto w-full max-w-3xl space-y-12 px-6 py-8">
        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            The design solution
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            The interface had one job: make a financial tool feel as quick and
            unintimidating as a calendar, for someone who never asked to think like
            an accountant. A tight neutral grey scale, hairline borders, one
            confident accent used only where it earns attention, and tabular mono
            numerals let the figures read like data. The dashboard leads with the
            four numbers an owner actually checks — labour percentage, wage bill,
            scheduled hours, open shifts — then puts forecast sales and labour cost
            on the same axis, so the relationship the whole product exists to
            expose is the first thing you see. Alerts are reserved for genuine
            decisions, so the interface stays calm and the warnings carry weight.
          </p>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            Outcome
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            As a portfolio concept, Tend demonstrates Charged Studio&apos;s
            approach end to end: framing a real operational problem, defining the
            people it affects, and resolving it into a product with a clear point
            of view and a finished, production-grade interface — not a wireframe,
            but something that looks and behaves like a product you could ship.
          </p>
        </div>
      </section>

      <div className="pb-6" />

      <CTASection />
    </article>
  );
}
