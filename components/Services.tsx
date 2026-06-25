import type { ComponentType } from "react";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/app/services/services-data";
import {
  WebsiteGraphic,
  SearchGraphic,
  SoftwareGraphic,
  BrandingGraphic,
} from "@/components/graphics";

/**
 * Homepage Services — a compact overview. Each row is a coded graphic + a short
 * one-liner and a CTA into the dedicated service page, where the full detail
 * lives. Graphic side alternates for scroll rhythm. Content from services-data.ts.
 */
const GRAPHIC: Record<string, ComponentType<{ show?: boolean }>> = {
  websites: WebsiteGraphic,
  seo: SearchGraphic,
  software: SoftwareGraphic,
  branding: BrandingGraphic,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
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
      <div className="mt-14 md:mt-16">
        {SERVICES.map((service, i) => {
          const Graphic = GRAPHIC[service.slug];
          const flip = i % 2 === 1;
          return (
            <Reveal
              key={service.slug}
              className="grid grid-cols-1 items-center gap-8 border-t border-border py-10 lg:grid-cols-2 lg:gap-16 lg:py-14"
            >
              {/* Text */}
              <div className={flip ? "lg:order-2" : undefined}>
                <div className="flex items-center gap-4">
                  <span className="font-anton text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Badge>{service.eyebrow}</Badge>
                </div>
                <h3 className="mt-5 font-anton text-2xl uppercase leading-[0.95] text-text sm:text-3xl lg:text-4xl">
                  {service.h1}
                </h3>
                <p className="mt-4 font-inter text-base leading-relaxed text-text/70">
                  {service.outcome}
                </p>
                <Button
                  href={`/services/${service.slug}`}
                  variant="secondary"
                  size="sm"
                  className="mt-6"
                >
                  Explore {service.name} →
                </Button>
              </div>

              {/* Coded graphic */}
              <div className={flip ? "lg:order-1" : undefined}>
                {Graphic && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface to-bg">
                    <div className="absolute inset-0">
                      <Graphic />
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
