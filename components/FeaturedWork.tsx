import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";

const RESULTS = ["5 sites unified", "More enquiries", "Stronger brand"];

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
      <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Real project shot — Devon Nurseries homepage mockup */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src="/images/work/devon-nurseries-feature.jpg"
            alt="The Devon Nurseries website we designed and built, shown on a desktop monitor"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <div>
          <Badge>Case Study</Badge>
          <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
            Devon Nurseries
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            A five-site childcare group across Devon with fragmented branding and
            websites. We consolidated them into one credible, unified digital
            presence — easier to find, easier to trust, and built to bring in more
            enquiries.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {RESULTS.map((r) => (
              <li
                key={r}
                className="rounded-full border border-border bg-text/5 px-4 py-2 font-inter text-sm text-text/80"
              >
                {r}
              </li>
            ))}
          </ul>

          <Link
            href="/devon-nurseries"
            className="mt-8 inline-block font-inter text-sm font-bold uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
          >
            View the case study →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
