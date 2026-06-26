import Button from "@/components/Button";
import AvailabilityPill from "@/components/AvailabilityPill";

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
      <div className="rounded-2xl bg-surface/40 shadow-e1 px-6 py-16 text-center md:px-12 md:py-20">
        <AvailabilityPill className="mb-6" />
        <h2 className="mx-auto max-w-3xl font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl lg:text-6xl">
          Ready to grow your business?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-inter text-lg leading-relaxed text-text/70">
          Tell us what you need, or grab a free audit of your current site.
          We&apos;ll get back to you within one working day.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/start-a-project">Start a Project</Button>
          <Button href="/audit" variant="secondary">
            Free Website Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
