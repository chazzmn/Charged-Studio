import type { Metadata } from "next";
import ProjectWizard from "@/components/ProjectWizard";

export const metadata: Metadata = {
  title: "Start a Project — Charged Studio",
  description:
    "Tell us about your project and we'll get back to you within one working day. Web design for service businesses across Devon and the South West.",
  alternates: { canonical: "https://chargedstudio.co.uk/start-a-project" },
  openGraph: {
    title: "Start a Project — Charged Studio",
    description:
      "Tell us about your project and we'll get back to you within one working day.",
    url: "https://chargedstudio.co.uk/start-a-project",
    siteName: "Charged Studio",
    type: "website",
  },
};

export default function StartAProjectPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 md:pt-40">
      <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Start a Project
      </p>
      <h1 className="mt-4 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl">
        Tell us what you need.
      </h1>
      <p className="mt-5 max-w-xl font-inter text-lg leading-relaxed text-text/70">
        Answer a few quick questions and we&apos;ll get back to you within one
        working day — no call required unless you want one. Takes about a minute.
      </p>

      <div className="mt-10 rounded-xl bg-surface/40 shadow-e1 p-6 sm:p-8">
        <ProjectWizard />
      </div>
    </section>
  );
}
