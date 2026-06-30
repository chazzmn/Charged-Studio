import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqPageLd } from "@/lib/structured-data";
import { HOME_FAQS } from "@/app/faq-data";
import Hero from "@/components/Hero";
import WorkMarquee from "@/components/WorkMarquee";
import WhyCharged from "@/components/WhyCharged";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Web Design Exeter & Devon | 5.0-Rated — Charged Studio",
  description:
    "Founder-led web design studio in Exeter building fast, modern websites that turn local searches into enquiries. 5.0-rated, APM-qualified. Get a free audit.",
  alternates: { canonical: "https://chargedstudio.co.uk" },
  openGraph: {
    title: "Web Design Exeter & Devon | 5.0-Rated — Charged Studio",
    description:
      "Founder-led web design studio in Exeter building fast, modern websites that turn local searches into enquiries. 5.0-rated, APM-qualified. Get a free audit.",
    url: "https://chargedstudio.co.uk",
    siteName: "Charged Studio",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageLd(HOME_FAQS)} />
      <Hero />
      <WorkMarquee />
      <SectionDivider />
      <WhyCharged />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <FeaturedWork />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTASection />
    </>
  );
}
