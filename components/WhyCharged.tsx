import type { SVGProps } from "react";
import Link from "next/link";
import Badge from "@/components/Badge";
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
    body: "You deal directly with the person designing and building your site — start to finish. No account managers, no outsourcing.",
  },
  {
    Icon: CheckCircle,
    title: "Qualified to deliver",
    body: "APM PMQ project-management trained, so every build runs on a clear, planned process — on time, no chaos.",
  },
  {
    Icon: PinMark,
    title: "Local to the South West",
    body: "Based in Exeter, working across Devon. We know your customers, your patch, and what wins work here.",
  },
  {
    Icon: BoltMark,
    title: "In it for the long run",
    body: "Most clients stay on monthly. We look after your site long after launch, so it keeps pulling its weight.",
  },
];

export default function WhyCharged() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>Why Charged</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
          A studio you can trust to{" "}
          <span className="text-accent">deliver</span>.
        </h2>
        <p className="mt-5 font-inter text-lg leading-relaxed text-text/70">
          Charged is founder-led and based in Exeter — so you work directly with
          the person doing the work, backed by a real process and someone
          genuinely invested in your business doing well.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map(({ Icon, title, body }) => (
          <div key={title} className="text-center sm:text-left">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-inter text-lg font-bold text-text">
              {title}
            </h3>
            <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
              {body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
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
