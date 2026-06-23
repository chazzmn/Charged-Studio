import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
      <div className="rounded-2xl border border-white/10 bg-charged-navy/40 px-6 py-16 text-center md:px-12 md:py-20">
        <h2 className="mx-auto max-w-3xl font-anton text-4xl uppercase leading-[0.95] text-charged-light sm:text-5xl lg:text-6xl">
          Ready to grow your business?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-inter text-lg leading-relaxed text-charged-light/70">
          Tell us what you need, or grab a free audit of your current site.
          We&apos;ll get back to you within one working day.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/start-a-project"
            className="bg-white px-8 py-4 text-center font-inter text-sm font-bold uppercase tracking-widest text-charged-black transition-colors hover:bg-neutral-200"
          >
            Start a Project
          </Link>
          <Link
            href="/audit"
            className="border border-white/30 px-8 py-4 text-center font-inter text-sm font-bold uppercase tracking-widest text-charged-light transition-colors hover:border-white/80"
          >
            Free Website Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
