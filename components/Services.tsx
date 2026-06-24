import type { ComponentType } from "react";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { Chevron } from "@/components/icons";
import { SERVICES } from "@/app/services/services-data";
import {
  WebsiteGraphic,
  SearchGraphic,
  SoftwareGraphic,
  BrandingGraphic,
} from "@/components/graphics";

/**
 * Homepage Services — "pinned scroll" pattern. Each service row: title + CTA
 * stick on the left (lg+) while a coded graphic + an accordion of detail points
 * scroll past on the right. Native <details> accordions (no JS) + CSS reveals,
 * so this is a server component. Content from app/services/services-data.ts.
 */
const GRAPHIC: Record<string, ComponentType<{ show?: boolean }>> = {
  websites: WebsiteGraphic,
  seo: SearchGraphic,
  software: SoftwareGraphic,
  branding: BrandingGraphic,
};

function AccordionItem({ title, body }: { title: string; body: string }) {
  return (
    <details className="group border-b border-border last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <span className="font-inter text-base font-semibold text-text">{title}</span>
        <Chevron className="h-5 w-5 shrink-0 text-accent transition-transform duration-base ease-out group-open:rotate-180" />
      </summary>
      <p className="pb-5 font-inter text-sm leading-relaxed text-text/70">{body}</p>
    </details>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
      {/* Section intro */}
      <Reveal className="max-w-2xl">
        <Badge>What we do</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
          Everything your business needs to grow online.
        </h2>
        <p className="mt-5 font-inter text-lg leading-relaxed text-text/70">
          Websites first — plus the software, visibility, and brand to back them
          up. Most clients stay on monthly, so we look after the lot and you stay
          focused on running your business.
        </p>
      </Reveal>

      {/* Service rows */}
      <div className="mt-16 md:mt-20">
        {SERVICES.map((service, i) => {
          const Graphic = GRAPHIC[service.slug];
          return (
            <Reveal
              key={service.slug}
              className="grid grid-cols-1 gap-8 border-t border-border py-12 lg:grid-cols-2 lg:gap-16 lg:py-20"
            >
              {/* Left — sticks on lg+ */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-4">
                  <span className="font-anton text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Badge>{service.eyebrow}</Badge>
                </div>
                <h3 className="mt-5 font-anton text-3xl uppercase leading-[0.95] text-text sm:text-4xl">
                  {service.h1}
                </h3>
                <p className="mt-5 font-inter text-base leading-relaxed text-text/70">
                  {service.intro}
                </p>
                <Button
                  href={`/services/${service.slug}`}
                  variant="secondary"
                  size="sm"
                  className="mt-7"
                >
                  Explore {service.name} →
                </Button>
              </div>

              {/* Right — coded graphic + accordion of detail points */}
              <div className="lg:pt-2">
                {Graphic && (
                  <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface to-bg">
                    <div className="absolute inset-0">
                      <Graphic />
                    </div>
                  </div>
                )}
                {service.features.map((f) => (
                  <AccordionItem key={f.title} title={f.title} body={f.body} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
