/**
 * Infinite scrolling band of real work shots — sits just under the hero as
 * instant proof. The track renders the list twice so the CSS marquee loops
 * seamlessly. Images are real homepage screenshots from public/images/work.
 */
import Image from "next/image";

type Work = { src: string; alt: string };

const WORK_ITEMS: Work[] = [
  { src: "/images/work/dn-home.jpg", alt: "Devon Nurseries website homepage" },
  { src: "/images/work/ashworth-vale-law.png", alt: "Ashworth & Vale solicitors website" },
  { src: "/images/work/chazzmn.jpg", alt: "CHAZZMN clothing brand website" },
  { src: "/images/work/brightwater-dental.png", alt: "Brightwater Dental practice website" },
  { src: "/images/work/picked-flavour.jpg", alt: "Yardley's Fruit & Veg greengrocer website" },
  { src: "/images/work/harbour-field-trades.png", alt: "Harbour & Field design & build website" },
  { src: "/images/work/meridian-accountancy.png", alt: "Meridian accountancy website" },
  { src: "/images/work/inner-edge.jpg", alt: "Inner Edge coaching brand website" },
  { src: "/images/work/align-chiropractor.png", alt: "Align Spine & Wellness chiropractor website" },
  { src: "/images/work/ember-oak-coffee.png", alt: "Ember & Oak coffee roasters website" },
  { src: "/images/work/coast-county-estate.png", alt: "Coast & County estate agents website" },
];

function Tile({ src, alt }: Work) {
  return (
    <div className="relative aspect-[16/10] w-[300px] shrink-0 overflow-hidden rounded-xl border border-border bg-surface sm:w-[400px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 300px, 400px"
        className="object-cover object-top"
      />
    </div>
  );
}

export default function WorkMarquee() {
  // Two passes of the list, so translateX(-50%) lands on an identical frame.
  const track = [...WORK_ITEMS, ...WORK_ITEMS];

  return (
    <section
      aria-label="Selected work"
      className="marquee-pause overflow-hidden py-12 md:py-16"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max gap-6 animate-marquee">
        {track.map((item, i) => (
          <Tile key={`${item.src}-${i}`} {...item} />
        ))}
      </div>
    </section>
  );
}
