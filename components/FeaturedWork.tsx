import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";

const CASES = [
  {
    href: "/devon-nurseries",
    image: "/images/work/devon-nurseries-feature.jpg",
    alt: "The Devon Nurseries website we designed and built, shown on a desktop monitor",
    title: "Devon Nurseries",
    blurb:
      "A five-site childcare group with fragmented branding and websites, consolidated into one credible, unified digital presence — easier to find, easier to trust, built to bring in more enquiries.",
    results: ["5 sites unified", "More enquiries", "Stronger brand"],
  },
  {
    href: "/tend",
    image: "/images/work/tend-dashboard-dark.jpg",
    alt: "The Tend dashboard, a shift-scheduling tool showing live labour cost against forecast sales",
    title: "Tend",
    blurb:
      "A shift-scheduling tool for independent hospitality where labour cost is a live number you see while you plan — a Charged Studio product design project, resolved into a production-grade interface.",
    results: ["Product design", "UI system", "Light & dark"],
  },
  {
    href: "/chair",
    image: "/images/work/chair-booking-dark.jpg",
    alt: "The Chair booking tool, showing a salon's day calendar with chair utilisation and recovered revenue",
    title: "Chair",
    blurb:
      "A booking and retention tool for independent salons and clinics, where an empty chair is revenue you can't get back — a Charged Studio product design project, resolved into a production-grade interface.",
    results: ["Product design", "Booking UX", "Light & dark"],
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <Badge>Selected Work</Badge>
        <h2 className="mt-5 max-w-2xl font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
          Case studies
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {CASES.map((c) => (
          <Reveal key={c.href}>
            <Link href={c.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <h3 className="mt-6 font-anton text-2xl uppercase leading-tight text-text sm:text-3xl">
                {c.title}
              </h3>
              <p className="mt-3 font-inter text-base leading-relaxed text-text/70">
                {c.blurb}
              </p>

              <ul className="mt-5 flex flex-wrap gap-3">
                {c.results.map((r) => (
                  <li
                    key={r}
                    className="rounded-full border border-border bg-text/5 px-4 py-2 font-inter text-sm text-text/80"
                  >
                    {r}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-block font-inter text-sm font-bold uppercase tracking-widest text-accent transition-opacity group-hover:opacity-80">
                View the case study →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
