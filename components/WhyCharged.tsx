import type { SVGProps } from "react";
import Link from "next/link";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import { UserMark, PinMark, CheckCircle, BoltMark } from "@/components/icons";

/**
 * Why Charged — a calm trust + authority beat between the work marquee and the
 * (denser) services section. Gives the homepage breathing room while making the
 * case for the studio: founder-led, qualified, local, and in it for the long run.
 */

type Pillar = {
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    Icon: UserMark,
    title: "Founder-led",
    body: "Work directly with the person building your site. No account managers.",
  },
  {
    Icon: CheckCircle,
    title: "Qualified to deliver",
    body: "APM project-management trained — every build runs to a clear plan.",
  },
  {
    Icon: PinMark,
    title: "Local to the South West",
    body: "Based in Exeter, across Devon. We know what wins work here.",
  },
  {
    Icon: BoltMark,
    title: "In it for the long run",
    body: "Most clients stay on monthly — looked after long after launch.",
  },
];

export default function WhyCharged() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge>Why Charged</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
          A studio you can trust to{" "}
          <span className="text-accent">deliver</span>.
        </h2>
        <p className="mt-5 font-inter text-lg leading-relaxed text-text/70">
          Founder-led, Exeter-based, and backed by a real process — you work
          directly with the person invested in your business doing well.
        </p>
      </Reveal>

      {/* PageSpeed proof bar */}
      <Reveal
        stagger
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        {["Performance", "Accessibility", "Best Practices", "SEO"].map((label) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
          >
            <span className="font-anton text-lg leading-none text-accent">
              100
            </span>
            <span className="font-inter text-xs text-text/60">{label}</span>
          </div>
        ))}
        <span className="font-inter text-xs text-text/60">
          Google PageSpeed Insights · Mobile &amp; Desktop
        </span>
      </Reveal>

      <Reveal
        stagger
        className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
      >
        {PILLARS.map(({ Icon, title, body }) => (
          <div key={title} className="text-left">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-inter text-base font-bold text-text">
              {title}
            </h3>
            <p className="mt-1.5 font-inter text-sm leading-relaxed text-text/70">
              {body}
            </p>
          </div>
        ))}
      </Reveal>

      <div className="mt-12 text-center">
        <Link
          href="/about"
          className="font-inter text-sm font-bold uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
        >
          More about the studio →
        </Link>
      </div>
    </section>
  );
}
