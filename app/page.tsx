import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WorkMarquee from "@/components/WorkMarquee";
import Services from "@/components/Services";
import ValueProp from "@/components/ValueProp";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Charged Studio — Web Design & Branding Agency, Exeter",
  description:
    "Charged Studio builds premium websites, brand identities, and digital assets for growing businesses. Based in Exeter, working with clients across the UK.",
  alternates: { canonical: "https://chargedstudio.co.uk" },
  openGraph: {
    title: "Charged Studio — Web Design & Branding Agency, Exeter",
    description:
      "Charged Studio builds premium websites, brand identities, and digital assets for growing businesses. Based in Exeter, working with clients across the UK.",
    url: "https://chargedstudio.co.uk",
    siteName: "Charged Studio",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WorkMarquee />
      <Services />
      <ValueProp />
      <FeaturedWork />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
