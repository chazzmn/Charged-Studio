/**
 * Per-service content for the /services pages.
 * Websites lead; Software & SEO are growth services; Branding supports.
 * Edit copy here — the page template and hub render from this data.
 */

export type ServiceFeature = { title: string; body: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string; // short label (nav, cards, cross-links)
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  outcome: string; // one-liner for the hub card
  lead?: boolean;
  features: ServiceFeature[];
  whyTitle: string;
  whyBody: string[];
  faqs: ServiceFaq[];
};

export const SERVICES: Service[] = [
  {
    slug: "websites",
    name: "Website Design",
    eyebrow: "Websites",
    h1: "Websites that turn local searches into customers.",
    metaTitle: "Website Design in Exeter & Devon | Charged Studio",
    metaDescription:
      "Custom, fast, fully-managed website design for businesses across Exeter, Devon and the South West. Built to rank locally and turn visitors into enquiries.",
    intro:
      "Your website is your hardest-working salesperson — open 24/7, in front of every customer who searches for what you do. We design and build fast, modern, mobile-first sites that look sharp and turn local searches into booked jobs and enquiries. And because we manage everything — hosting, domain, updates, maintenance — you never have to touch a thing.",
    outcome: "Custom, fast, fully-managed sites built to convert.",
    lead: true,
    features: [
      {
        title: "Custom design",
        body: "No templates. Every site is designed around your business, your customers, and the way you actually win work.",
      },
      {
        title: "Built to convert",
        body: "Clear structure, strong calls to action and fast load times — engineered to turn visitors into enquiries, not just look pretty.",
      },
      {
        title: "Mobile-first",
        body: "Most of your customers are on their phones. Your site is built for them first, then scales up beautifully to desktop.",
      },
      {
        title: "Fully managed",
        body: "Hosting, domain, SSL, updates and maintenance all handled. One less thing on your plate.",
      },
      {
        title: "Local SEO foundations",
        body: "Built from the ground up to rank for the searches that matter across Devon and the South West.",
      },
      {
        title: "Ongoing support",
        body: "Most clients stay on monthly, so your site keeps improving long after launch.",
      },
    ],
    whyTitle: "Why it matters",
    whyBody: [
      "A slow, dated or hard-to-use website quietly costs you customers every day — they bounce, they lose trust, and they call the competitor whose site loaded first.",
      "We build the opposite: sites that feel fast and effortless, earn trust in seconds, and make it obvious how to get in touch. The result is more enquiries from the traffic you already get.",
    ],
    faqs: [
      {
        q: "How much does a website cost?",
        a: "Every project is priced to fit what you need — we don't do one-size-fits-all packages. Tell us about your project and we'll send a tailored quote within a working day.",
      },
      {
        q: "How long does it take?",
        a: "Most websites take 2–4 weeks from kickoff, depending on scope. You'll get a clear timeline up front so you always know what's happening.",
      },
      {
        q: "What happens after launch?",
        a: "We stick around. Hosting, updates, fixes and improvements are handled on an ongoing basis, so your site keeps pulling its weight.",
      },
    ],
  },
  {
    slug: "software",
    name: "Software & Apps",
    eyebrow: "Software & Apps",
    h1: "Tools that take the busywork out of your business.",
    metaTitle: "Custom Software & App Development, Exeter | Charged Studio",
    metaDescription:
      "Bespoke booking systems, customer portals, dashboards and automations for growing businesses in Devon and the South West. Built to help you operate smarter.",
    intro:
      "Some problems a website alone can't solve. When you're drowning in admin, juggling spreadsheets, or doing the same task fifty times a week, you need software built around how your business actually runs. We design and build bespoke tools — booking systems, customer portals, dashboards, automations — that quietly remove the busywork so you can focus on growing.",
    outcome: "Bespoke booking systems, portals, dashboards and automations.",
    features: [
      {
        title: "Booking & enquiry systems",
        body: "Let customers book, enquire and pay without the back-and-forth — and without you lifting a finger.",
      },
      {
        title: "Customer portals & dashboards",
        body: "Give clients a clean place to log in, see their info, and self-serve the things they'd otherwise email you about.",
      },
      {
        title: "Workflow automation",
        body: "Connect the tools you already use and automate the repetitive steps that eat your week.",
      },
      {
        title: "Built around you",
        body: "We start from your actual workflow, not an off-the-shelf product you have to bend your business around.",
      },
    ],
    whyTitle: "Why it matters",
    whyBody: [
      "Every hour you spend on manual admin is an hour you're not spending on the work that grows the business. Multiply that across a team and the cost is huge.",
      "The right tool pays for itself — fewer mistakes, faster turnaround, happier customers, and your time back.",
    ],
    faqs: [
      {
        q: "Can you integrate with tools we already use?",
        a: "Usually, yes — we build to fit around your existing stack wherever possible, rather than forcing a rip-and-replace.",
      },
      {
        q: "Is custom software expensive?",
        a: "It's scoped to the problem. We'll only suggest building something if it'll clearly save you more than it costs. Get in touch and we'll talk it through honestly.",
      },
      {
        q: "Do you maintain it afterwards?",
        a: "Yes — like our websites, bespoke tools can be supported and improved on an ongoing basis.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO & Getting Found",
    eyebrow: "SEO & Getting Found",
    h1: "Get found by the customers already searching for you.",
    metaTitle: "Local SEO Services in Exeter & Devon | Charged Studio",
    metaDescription:
      "Local SEO, Google Business Profile, Core Web Vitals and AEO for businesses across Exeter, Devon and the South West. Get found for the searches that win work.",
    intro:
      "Being the best in town means nothing if nobody can find you. We get your business ranking for the searches that actually bring in work — locally, where it counts. That means technical SEO, a fully-optimised Google Business Profile, fast Core Web Vitals, and content built to rank. We also do AEO (Answer Engine Optimisation), so AI tools and search recommend you, not your competitor.",
    outcome: "Local SEO, Google Business Profile, speed and AEO.",
    features: [
      {
        title: "Local SEO",
        body: "Rank for 'near me' and town-level searches across Exeter, Devon and the South West — the ones with real buying intent.",
      },
      {
        title: "Google Business Profile",
        body: "Set up and optimised properly, so you show up in the map pack with reviews, photos and the right information.",
      },
      {
        title: "Core Web Vitals & speed",
        body: "A fast site ranks higher and converts better. We find and fix what's dragging you down.",
      },
      {
        title: "AEO — Answer Engine Optimisation",
        body: "Structured so AI assistants and search can pull and recommend your business. Most agencies aren't doing this yet.",
      },
      {
        title: "Content that ranks",
        body: "Pages and posts built around what your customers actually type into Google.",
      },
    ],
    whyTitle: "Why it matters",
    whyBody: [
      "When someone searches for what you do, you're either on the first page or you're invisible. There's no prize for second place.",
      "Local search is the highest-intent traffic there is — people looking now, ready to buy. Showing up there is often the single biggest lever for more enquiries.",
    ],
    faqs: [
      {
        q: "What is AEO?",
        a: "Answer Engine Optimisation — structuring your site so AI assistants and AI search can understand and recommend your business. Schema, clean structure and FAQs. It's the next frontier of getting found.",
      },
      {
        q: "How long does SEO take?",
        a: "Local SEO can move quickly — weeks for wins like Google Business Profile, longer for competitive rankings. We focus on the fastest meaningful wins first.",
      },
      {
        q: "Do I need SEO if I have a new website?",
        a: "The two go hand in hand. We build SEO foundations into every site, then ongoing SEO compounds it. A great site nobody can find is a missed opportunity.",
      },
    ],
  },
  {
    slug: "branding",
    name: "Branding & Creative",
    eyebrow: "Branding & Creative",
    h1: "Look the part — everywhere your business shows up.",
    metaTitle: "Branding & Logo Design, Exeter | Charged Studio",
    metaDescription:
      "Brand identity, logo design and brand guidelines for growing businesses in Devon and the South West. Sharp, consistent, and built to earn trust at a glance.",
    intro:
      "Branding isn't just a logo — it's the feeling people get the moment they come across you. A sharp, consistent brand earns trust at a glance and makes you look like the obvious choice. We craft complete identities — logo, type, colour, guidelines and the assets to use them — that support the websites we build and keep you looking professional across every channel.",
    outcome: "Logo, identity systems and brand guidelines.",
    features: [
      {
        title: "Logo & identity",
        body: "A distinctive mark and visual system that actually represents your business — not a clipart afterthought.",
      },
      {
        title: "Brand guidelines",
        body: "A clear playbook for type, colour and usage, so everything you put out stays consistent.",
      },
      {
        title: "Asset kits",
        body: "The social templates, marketing assets and files you need to use your brand day to day.",
      },
      {
        title: "Made to match your site",
        body: "Your brand and your website built as one, so everything feels intentional and joined-up.",
      },
    ],
    whyTitle: "Why it matters",
    whyBody: [
      "People judge in seconds. A scrappy, inconsistent brand makes even a great business look risky — and costs you work before you've said a word.",
      "A considered brand does the opposite: it signals quality, builds trust fast, and makes your marketing work harder everywhere it appears.",
    ],
    faqs: [
      {
        q: "Do you only do branding, or websites too?",
        a: "Websites are our core — branding supports them. Most clients come for a site, and we make sure the brand around it is just as sharp.",
      },
      {
        q: "Can you refresh our existing brand?",
        a: "Absolutely — whether it's a full identity from scratch or a tidy-up of what you've got, we'll make it work harder.",
      },
    ],
  },
];

export function serviceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
