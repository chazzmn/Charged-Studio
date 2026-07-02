import type { SVGProps } from "react";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { UserMark, PinMark, CheckCircle, BoltMark, Stars } from "@/components/icons";

/**
 * Why Charged — a lightweight trust beat between the work marquee and the
 * (denser) services section. One job: build quick trust in a glance, then send
 * people to /about for the real proof. Deliberately text-light — icon + label
 * pillars, a single proof line, one CTA. No paragraphs (mobile stays calm).
 */

type Pillar = {
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  title: string;
};

const PILLARS: Pillar[] = [
  { Icon: UserMark, title: "Founder-led" },
  { Icon: CheckCircle, title: "APM-qualified" },
  { Icon: PinMark, title: "Exeter & Devon" },
  { Icon: BoltMark, title: "Long-term partner" },
];

export default function WhyCharged() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20 md:py-24">
      <Reveal className="text-center">
        <Badge>Why Charged</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
          A studio you can trust to{" "}
          <span className="text-accent">deliver</span>.
        </h2>
      </Reveal>

      {/* Four quick trust points — icon + label, no paragraphs */}
      <Reveal
        stagger
        className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4"
      >
        {PILLARS.map(({ Icon, title }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-3 font-inter text-sm font-bold text-text sm:text-base">
              {title}
            </h3>
          </div>
        ))}
      </Reveal>

      {/* Single compact proof line — the detail lives on /about */}
      <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-inter text-sm text-text/60">
        <span className="inline-flex items-center gap-1.5">
          <Stars className="h-3.5 w-3.5" label="Rated 5.0 out of 5 on Google" />
          5.0 on Google
        </span>
        <span aria-hidden className="text-text/30">·</span>
        <span>100/100 on Google PageSpeed</span>
      </Reveal>

      <div className="mt-10 text-center">
        <Button href="/about" variant="secondary" size="sm">
          More about the studio →
        </Button>
      </div>
    </section>
  );
}
