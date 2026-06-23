import type { Metadata } from "next";
import Badge from "@/components/Badge";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Charged Studio — The Story Behind the Brand",
  description:
    "Learn about Charged Studio, founder Charlie Norona, and the belief-led approach that makes us different. Based in Exeter, built for businesses ready to grow.",
  alternates: { canonical: "https://chargedstudio.co.uk/about" },
  openGraph: {
    title: "About Charged Studio — The Story Behind the Brand",
    description:
      "The belief-led studio behind Charged. Based in Exeter, working with businesses across the South West.",
    url: "https://chargedstudio.co.uk/about",
    siteName: "Charged Studio",
    type: "website",
  },
};

const VALUES = [
  {
    title: "Websites that work",
    body: "Not just good-looking — built to load fast, rank locally, and turn visitors into enquiries. A website should earn its keep.",
  },
  {
    title: "A real partner",
    body: "We're not a vendor you brief and forget. We learn your business, stay close, and treat your growth as the measure of our work.",
  },
  {
    title: "Local and hands-on",
    body: "Based in Exeter, working across Devon and the South West. You get a real person who knows your patch — not a faceless agency.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 pt-32 md:pt-40">
        <Badge>About</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-charged-light sm:text-5xl lg:text-6xl">
          Built on belief.
        </h1>
        <p className="mt-5 max-w-2xl font-inter text-lg leading-relaxed text-charged-light/70">
          Charged Studio is a creative studio for growing businesses — websites
          first, plus the software, visibility, and brand to back them up. We
          believe the businesses that deserve to win are too often let down by
          their digital presence. We&apos;re here to change that.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5 font-inter text-lg leading-relaxed text-charged-light/70">
          <p>
            Charlie Norona started Charged with a belief most agencies don&apos;t
            act on: that a website isn&apos;t a one-off project you tick off — it&apos;s
            the foundation a business grows on, and it deserves looking after.
          </p>
          <p>
            Too many small businesses across Devon get handed a template, an
            invoice, and a goodbye. We do the opposite. We build sharp, fast,
            modern sites — then stick around to keep them working, so you can
            focus on running your business while your digital presence pulls its
            weight.
          </p>
          <p>
            We&apos;re small, deliberately. That means you deal with the people
            actually doing the work, every step of the way.
          </p>
        </div>

        {/* Photo placeholder — swap for /public/images/charlie-norona.png */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-charged-navy to-charged-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-anton text-3xl uppercase text-charged-light/10">
              Charlie Norona
            </span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-white/10 bg-charged-navy/40 p-8"
            >
              <h2 className="font-inter text-xl font-bold text-charged-light">
                {v.title}
              </h2>
              <p className="mt-3 font-inter text-base leading-relaxed text-charged-light/70">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
