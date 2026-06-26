import type { Metadata } from "next";
import Image from "next/image";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Chair — Case Study | Charged Studio",
  description:
    "A booking and retention tool for independent salons and clinics, where an empty chair is revenue you can't get back — a product design case study by Charged Studio.",
  alternates: { canonical: "https://chargedstudio.co.uk/chair" },
  openGraph: {
    title: "Chair — Case Study | Charged Studio",
    description:
      "A booking and retention tool for independent salons and clinics, where an empty chair is revenue you can't get back.",
    url: "https://chargedstudio.co.uk/chair",
    siteName: "Charged Studio",
    type: "article",
  },
};

const META = [
  { label: "Services", value: "Product Design · UI Design" },
  { label: "Type", value: "Studio project" },
  { label: "Year", value: "2026" },
];

const FEATURES = [
  {
    title: "24/7 online booking",
    body: "Clients book open slots themselves, from your site or a link — even when the phone's engaged or the salon's closed.",
  },
  {
    title: "Deposits & card-on-file",
    body: "A small deposit or saved card confirms the booking. No-shows and late cancellations get charged, not quietly absorbed.",
  },
  {
    title: "Smart reminders",
    body: "Automated SMS and email at the right moments, with one-tap confirm — the simplest fix there is for the 'I forgot' no-show.",
  },
  {
    title: "Instant waitlist fill",
    body: "When someone cancels, the slot is auto-offered to your waitlist and re-books itself — often before you'd even noticed it opened.",
  },
  {
    title: "Rebooking at checkout",
    body: "Prompts the next appointment before the client leaves the chair. Retention without the awkward ask.",
  },
  {
    title: "Utilisation dashboard",
    body: "Chair utilisation, revenue per chair, no-show and rebooking rates — the numbers that decide the business, finally in one view.",
  },
];

export default function ChairPage() {
  return (
    <article>
      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>Case Study</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          Chair
        </h1>
        <p className="mt-5 max-w-2xl font-inter text-lg leading-relaxed text-text/70">
          Keep every chair full. A booking and retention tool for independent
          salons and clinics — because an appointment business sells time, and an
          empty chair at 2pm is revenue you can <em>never</em> get back.
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

      {/* Main project image — booking calendar (dark) */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src="/images/work/chair-booking-dark.jpg"
            alt="The Chair booking calendar in dark mode — the day's appointments, chair utilisation, and revenue recovered from filled cancellations"
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
            Chair is an original product Charged Studio designed end to end — a
            booking and retention platform for the owners of independent salons,
            barbershops and clinics. Most booking tools just take appointments.
            Chair starts from a harder truth: the businesses that use them sell
            time, and time is perishable — a slot that goes empty is gone for
            good. So Chair&apos;s whole job isn&apos;t to take bookings, it&apos;s
            to keep the chair full: capturing the bookings the phone misses,
            stopping the no-shows that drain revenue, refilling cancellations
            automatically, and keeping clients coming back.
          </p>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            The problem
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            Appointment businesses run on utilisation, and utilisation leaks in
            three places at once. No-shows and last-minute cancellations bleed
            10–20% of revenue that can never be recovered — the 2pm slot empty at
            2pm is simply gone. Bookings come in by phone during the day, exactly
            when staff are with clients, so calls hit voicemail and walk to a
            competitor. And most clients leave without rebooking, so hard-won
            regulars quietly drift away. The chair sits empty, and the owner —
            cutting hair or treating a client, not watching a dashboard — often
            doesn&apos;t see it until the week&apos;s takings come up short.
          </p>
          <blockquote className="mt-6 border-l-2 border-accent pl-5 font-inter text-lg italic leading-relaxed text-text/80">
            &ldquo;An empty chair doesn&apos;t send you a warning. It just costs
            you, quietly, all day.&rdquo;
            <span className="mt-2 block text-sm not-italic text-text/50">
              — owner of a two-chair salon, early research
            </span>
          </blockquote>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            Who it&apos;s for
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            The primary user is the independent owner — running one to ten
            chairs, trained in their craft rather than in operations — who feels
            every empty slot but has never had a tool that actively fought to
            fill it. The front-desk manager runs the calendar day to day and
            needs rebooking and waitlist to be instant, not a chore. And the
            client just wants to book in thirty seconds from their phone at nine
            at night, get a reminder, and not feel awkward about rescheduling —
            so Chair&apos;s client-facing booking is deliberately effortless, and
            the depth lives where the owner and front desk work.
          </p>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            The solution
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            Chair treats the chair like perishable inventory and works actively
            to keep it full. Online booking runs 24/7, so the slots the phone
            would have missed get captured anyway. A small deposit or card on
            file turns casual no-shows into confirmed appointments — and charges
            the ones that don&apos;t show, instead of absorbing them. Automated
            reminders cut the forgetful no-shows, and when a cancellation does
            happen, the slot is offered straight to the waitlist and re-books
            itself. At checkout, Chair prompts the next appointment before the
            client leaves. And it surfaces the numbers an owner never normally
            sees — utilisation, revenue per chair, no-show and rebooking rates —
            so the leaks are finally visible.
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
            src="/images/work/chair-dashboard-light.jpg"
            alt="The Chair utilisation dashboard in light mode — the same interface, built on design tokens so it holds up in both themes"
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
            The interface had to feel as calm and considered as the salons and
            clinics it serves — premium, not clinical SaaS. The home is a clean
            day-and-week calendar; the perishable-revenue idea the product exists
            to fix is made visible with a utilisation read and a running figure
            for revenue recovered from filled cancellations and charged no-shows.
            Deposits, reminders and waitlist offers are designed as quiet,
            confident moments rather than nags. A restrained neutral palette, one
            accent used only where it earns attention, and tabular mono numerals
            let the money read like data.
          </p>
        </div>

        <div>
          <h2 className="font-anton text-2xl uppercase text-text sm:text-3xl">
            Outcome
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            Chair demonstrates Charged Studio&apos;s approach end to end: taking a
            real, perishable-revenue problem, defining the people it affects, and
            resolving it into a product with a clear point of view and a
            finished, production-grade interface — not a wireframe, but something
            that looks and behaves like a product you could ship.
          </p>
        </div>
      </section>

      <div className="pb-6" />

      <CTASection />
    </article>
  );
}
