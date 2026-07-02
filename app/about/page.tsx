import type { Metadata } from "next";
import Image from "next/image";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import {
  UserMark,
  CheckCircle,
  BoltMark,
  PinMark,
  Stars,
  GoogleG,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Charged Studio — Who You'll Be Working With",
  description:
    "Charged Studio is a founder-led web design studio in Exeter. You work directly with Charlie Norona — a qualified project manager and designer — on websites built to grow your business across Devon and the South West.",
  alternates: { canonical: "https://chargedstudio.co.uk/about" },
  openGraph: {
    title: "About Charged Studio — Who You'll Be Working With",
    description:
      "A founder-led web studio in Exeter. Work directly with the person building your site — invested in your growth across Devon and the South West.",
    url: "https://chargedstudio.co.uk/about",
    siteName: "Charged Studio",
    type: "website",
  },
};

const PROOF = [
  { value: "APM PMQ", label: "Qualified project manager" },
  { value: "5.0", label: "From 16 Google reviews", stars: true },
  { value: "100/100", label: "Google PageSpeed score" },
  { value: "Exeter", label: "Devon & the South West" },
];

const PROCESS = [
  {
    step: "01",
    title: "We get to know you",
    body: "Before a pixel moves, we get inside your business — your customers, your goals, how you actually win work — so what we build fits you, not a template.",
  },
  {
    step: "02",
    title: "You get a clear plan",
    body: "A scope, timeline and milestones agreed up front. You always know what's happening, what's next, and what it costs. No surprises, ever.",
  },
  {
    step: "03",
    title: "You stay in control",
    body: "We design and build sharp, fast, on-brand work with regular check-ins — nothing is signed off until you're genuinely happy with it.",
  },
  {
    step: "04",
    title: "We look after it",
    body: "We go live, then stick around — hosting, updates and support — so your site keeps earning long after launch. You never touch a thing.",
  },
];

const REASONS = [
  {
    Icon: UserMark,
    title: "You deal with the founder",
    body: "Work directly with Charlie from the first call to launch and beyond — fast answers, real accountability, no being passed around a team.",
  },
  {
    Icon: CheckCircle,
    title: "Delivered to a plan",
    body: "A qualified project manager (APM PMQ) runs every build to a clear scope and timeline — so it lands on time, with no chaos and no surprises.",
  },
  {
    Icon: BoltMark,
    title: "Built to win work",
    body: "Fast, modern and engineered to convert. Your site is built to turn local searches into real enquiries — not just to look the part.",
  },
  {
    Icon: PinMark,
    title: "Local and invested",
    body: "Based in Exeter, working across Devon and the South West. We know your market — and your growth is how we measure our own.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Charged Studio",
  url: "https://chargedstudio.co.uk/about",
  mainEntity: {
    "@type": "Person",
    name: "Charlie Norona",
    jobTitle: "Founder & Creative Director",
    worksFor: {
      "@type": "Organization",
      name: "Charged Studio",
      url: "https://chargedstudio.co.uk",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "APM Project Management Qualification (PMQ)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Exeter",
      addressRegion: "Devon",
      addressCountry: "GB",
    },
    knowsAbout: [
      "Web design",
      "Web development",
      "Local SEO",
      "Answer Engine Optimisation",
      "Brand design",
      "Project management",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero — framed around the client from the first line */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-32 text-center md:pt-40">
        <Reveal>
          <Badge>About Charged Studio</Badge>
          <h1 className="mx-auto mt-6 max-w-4xl font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
            A studio built around{" "}
            <span className="text-accent">your business</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-inter text-lg leading-relaxed text-text/70 sm:text-xl">
            Charged is a small, founder-led web studio in Exeter. You work
            directly with the person designing and building your site — someone
            as invested in your growth as you are. No account managers, no
            hand-offs, no jargon.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/start-a-project">Start a Project</Button>
            <Button href="#founder" variant="secondary">
              Meet Charlie ↓
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Proof strip — quick trust, real numbers */}
      <section className="mx-auto mt-16 w-full max-w-6xl px-6 md:mt-24">
        <Reveal
          stagger
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-e1 lg:grid-cols-4"
        >
          {PROOF.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center bg-surface/60 px-4 py-8 text-center"
            >
              <span className="font-anton text-3xl uppercase leading-none text-accent sm:text-4xl">
                {p.value}
              </span>
              {p.stars && (
                <Stars
                  className="mt-2 h-3.5 w-3.5"
                  label="Rated 5.0 out of 5 on Google"
                />
              )}
              <span className="mt-3 font-inter text-xs leading-snug text-text/60">
                {p.label}
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Who you're dealing with — the founder */}
      <section
        id="founder"
        className="mx-auto mt-8 w-full max-w-7xl scroll-mt-28 px-6 py-20 md:py-28"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Founder cut-out on a soft accent glow */}
          <Reveal className="order-1 lg:order-none">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-6 bottom-0 rounded-full bg-accent/15 blur-3xl"
              />
              <Image
                src="/images/charlie-norona.png"
                alt="Charlie Norona, Founder & Creative Director of Charged Studio"
                fill
                sizes="(max-width: 1024px) 80vw, 36vw"
                className="relative object-contain object-bottom"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent" />
            </div>
          </Reveal>

          {/* Intro — reframed around what the client gets */}
          <Reveal className="order-2 lg:order-none">
            <Badge>Who you&apos;ll work with</Badge>
            <h2 className="mt-5 font-anton text-5xl uppercase leading-[0.9] text-text sm:text-6xl lg:text-7xl">
              Charlie
              <br />
              Norona
            </h2>
            <p className="mt-4 font-inter text-lg font-semibold uppercase tracking-[0.18em] text-accent">
              Founder &amp; Creative Director
            </p>

            <div className="mt-7 max-w-xl space-y-4 font-inter text-lg leading-relaxed text-text/70">
              <p>
                When you hire Charged, you get me — the person who&apos;ll design
                your site, build it, and pick up the phone when you need
                something. Not an account manager, not a junior, not a queue.
              </p>
              <p>
                I&apos;m a{" "}
                <span className="font-semibold text-text">
                  qualified project manager (APM PMQ)
                </span>{" "}
                as well as a designer — and that combination is the difference
                you feel. Your project runs to a clear plan with no surprises,
                and it comes out sharp, fast and built to bring in work. The
                polish of a creative studio, with the reliability of someone who
                runs projects for a living.
              </p>
            </div>

            <Button href="/contact" className="mt-9">
              Get in touch →
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Why we exist — the belief we'll fight for you on */}
      <section className="mx-auto w-full max-w-5xl border-t border-border px-6 py-20 md:py-28">
        <Reveal>
          <Badge>Why we exist</Badge>
          <div className="mt-8 max-w-3xl space-y-6 font-inter text-xl leading-relaxed text-text/80">
            <p>
              Most small businesses get two bad options: do it all yourself from
              scratch, or pay a big agency for a generic product that
              doesn&apos;t fit how you actually work.
            </p>
            <p>
              Charged exists to close that gap — websites, software and brand
              systems tailored to your exact goals and budget. We know what it
              feels like when good tools feel out of reach, so there are very few
              businesses we turn away.
            </p>
            <p className="font-semibold text-text">
              If you&apos;ve got the drive to run your own business, you deserve
              digital that helps you compete — not hold you back.
            </p>
          </div>
        </Reveal>
      </section>

      {/* How we help you — the process, framed as the client's experience */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <Badge>How we work</Badge>
          <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
            What working with us feels like.
          </h2>
          <p className="mt-5 font-inter text-lg leading-relaxed text-text/70">
            Every project runs on a clear process — as organised as it is
            creative. The hard thinking happens long before the design does, so
            the whole thing feels effortless from your side.
          </p>
        </Reveal>

        <Reveal
          stagger
          as="ul"
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROCESS.map((p) => (
            <li key={p.step} className="rounded-xl bg-surface/40 p-7 shadow-e1">
              <span className="font-anton text-3xl text-accent">{p.step}</span>
              <h3 className="mt-4 font-inter text-lg font-bold text-text">
                {p.title}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
                {p.body}
              </p>
            </li>
          ))}
        </Reveal>
      </section>

      {/* Why choose us — the differentiators, as customer benefits */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <Badge>Why choose Charged</Badge>
          <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
            Why businesses pick us.
          </h2>
        </Reveal>

        <Reveal
          stagger
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {REASONS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-5 rounded-xl bg-surface/40 p-7 shadow-e1"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-inter text-lg font-bold text-text">
                  {title}
                </h3>
                <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Social proof — a real client, in their words */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:py-24">
        <Reveal>
          <Stars className="mx-auto h-5 w-5" label="5 out of 5 stars" />
          <blockquote className="mt-6 font-anton text-2xl uppercase leading-tight text-text sm:text-3xl lg:text-4xl">
            &ldquo;They understood our vision and turned it into a platform our
            clients love. Their attention to detail and genuine care made the
            whole process{" "}
            <span className="text-accent">effortless</span>.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-2.5">
            <GoogleG className="h-5 w-5" />
            <span className="font-inter text-sm font-semibold text-text">
              Tariq Salfo
            </span>
            <span aria-hidden className="text-text/30">
              ·
            </span>
            <span className="font-inter text-sm text-text/60">
              5.0 from 16 Google reviews
            </span>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
