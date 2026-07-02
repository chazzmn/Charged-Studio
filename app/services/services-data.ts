/**
 * Per-service content for the /services pages.
 * Websites lead; Software & SEO are growth services; Branding supports.
 * Edit copy here — the page template and hub render from this data.
 */

export type ServiceFeature = { title: string; body: string };
export type ServiceFaq = { q: string; a: string };
export type ServiceTier = { label: string; price: string; body: string };
export type ServiceStep = { step: string; title: string; body: string };

export type Service = {
  slug: string;
  name: string; // short label (nav, cards, cross-links)
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  outcome: string; // one-liner for the hub card
  priceFrom?: string; // short anchor for the hub card, e.g. "From £695"
  lead?: boolean;
  outcomes: string[]; // 1–2 punchy outcome statements
  features: ServiceFeature[];
  whoForLead: string;
  whoFor: string[];
  process: ServiceStep[];
  pricing: { tiers: ServiceTier[]; note: string };
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
      "Custom, fast, fully-managed website design for businesses across Exeter, Devon and the South West. Built to rank locally and turn visitors into enquiries. One-day websites from £495.",
    intro:
      "Your website is your hardest-working salesperson — open 24/7, in front of every customer who searches for what you do. We design and build fast, modern, mobile-first sites that look sharp and turn local searches into booked jobs and enquiries. And because we manage everything — hosting, domain, updates, maintenance — you never have to touch a thing.",
    outcome: "Custom, fast, fully-managed sites built to convert.",
    priceFrom: "From £495",
    lead: true,
    outcomes: [
      "More enquiries from the traffic you already have.",
      "A fast, modern site that ranks for the searches that win work.",
    ],
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
    whoForLead:
      "Websites are where most of our clients start. A new site is a fit if:",
    whoFor: [
      "Your current site is dated, slow, or doing nothing to bring in work.",
      "You're getting traffic but not enquiries — the site isn't converting.",
      "You're launching and need to look credible from day one.",
      "You want it handled — hosting, updates and support off your plate.",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        body: "We learn your business, customers and goals, then agree the scope, pages and timeline up front.",
      },
      {
        step: "02",
        title: "Design",
        body: "We design the key pages first and get your sign-off before building — so there are no surprises.",
      },
      {
        step: "03",
        title: "Build & optimise",
        body: "We build it fast and mobile-first, with SEO foundations and Core Web Vitals baked in.",
      },
      {
        step: "04",
        title: "Launch & look after",
        body: "We go live, then host, maintain and keep improving it on an ongoing basis.",
      },
    ],
    pricing: {
      tiers: [
        {
          label: "Website in a Day",
          price: "£495",
          body: "A sharp, single-page website — designed, built and live on your own domain in a day. Ideal for launches, campaigns and getting online fast.",
        },
        {
          label: "Landing pages",
          price: "From £695",
          body: "Ideal for new businesses, launches, and focused lead-generation campaigns.",
        },
        {
          label: "Business websites",
          price: "From £1,495",
          body: "For growing companies that need a stronger digital presence, clearer service pages, and a better enquiry flow.",
        },
        {
          label: "E-commerce & specialised",
          price: "From £2,495",
          body: "For businesses that need more complex user journeys, integrations, or custom functionality.",
        },
      ],
      note: "The Website in a Day build is a fixed £495 — just tell us what you're launching. Everything else is scoped to what you need, with a clear, fixed quote after a 15-minute call. No surprise costs.",
    },
    whyTitle: "Why it matters",
    whyBody: [
      "A slow, dated or hard-to-use website quietly costs you customers every day — they bounce, they lose trust, and they call the competitor whose site loaded first.",
      "We build the opposite: sites that feel fast and effortless, earn trust in seconds, and make it obvious how to get in touch. The result is more enquiries from the traffic you already get.",
    ],
    faqs: [
      {
        q: "How much does a website cost?",
        a: "Our fixed-price Website in a Day build is £495 — a sharp single-page site, live in a day. From there, custom landing pages start from £695, business websites from £1,495, and e-commerce or specialised builds from £2,495. Every project is scoped to what you need — tell us about yours and we'll send a tailored quote within a working day.",
      },
      {
        q: "Can you really build a website in a day?",
        a: "Yes — our fixed £495 Website in a Day is a focused, single-page site, not a twenty-page build rushed into a day. Speed comes from a tight process: a short brief, your logo and words, then we design, you review, and we launch on your own domain. It's perfect for a launch, campaign or getting online fast, and it can grow into a bigger build later.",
      },
      {
        q: "How long does it take?",
        a: "The Website in a Day build goes live in a day. Most other websites take 2–4 weeks from kickoff, depending on scope. You'll get a clear timeline up front so you always know what's happening.",
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
      "Bespoke booking systems, customer portals, dashboards and automations for growing businesses in Devon and the South West. Custom software from £1,250.",
    intro:
      "Some problems a website alone can't solve. When you're drowning in admin, juggling spreadsheets, or doing the same task fifty times a week, you need software built around how your business actually runs. We design and build bespoke tools — booking systems, customer portals, dashboards, automations — that quietly remove the busywork so you can focus on growing.",
    outcome: "Bespoke booking systems, portals, dashboards and automations.",
    priceFrom: "From £1,250",
    outcomes: [
      "Hours of manual admin removed from every week.",
      "Fewer mistakes, faster turnaround, and your time back.",
    ],
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
    whoForLead:
      "Custom software earns its place when off-the-shelf tools don't fit. It's a fit if:",
    whoFor: [
      "You're juggling spreadsheets, inboxes and manual steps that should be automated.",
      "You do the same task dozens of times a week.",
      "Existing tools almost work, but force you to bend your business around them.",
      "You need a booking system, customer portal or dashboard built around your workflow.",
    ],
    process: [
      {
        step: "01",
        title: "Map the problem",
        body: "We sit with how you actually work and pin down exactly what's costing you time.",
      },
      {
        step: "02",
        title: "Scope & prototype",
        body: "We agree the smallest build that solves it, and show you how it'll work before we build it.",
      },
      {
        step: "03",
        title: "Build & integrate",
        body: "We build it to fit around the tools you already use — not a rip-and-replace.",
      },
      {
        step: "04",
        title: "Launch & support",
        body: "We roll it out, help your team get going, and support it on an ongoing basis.",
      },
    ],
    pricing: {
      tiers: [
        {
          label: "Custom software",
          price: "From £1,250",
          body: "For internal tools, lightweight apps, and operational systems tailored to how your business works.",
        },
        {
          label: "Bespoke platforms",
          price: "From £6,000",
          body: "Multi-user platforms, customer portals and complex integrations that become core to how you run.",
        },
        {
          label: "Custom apps & systems",
          price: "From £12,000",
          body: "Full product builds — bespoke apps and operational systems designed, built and scaled from the ground up.",
        },
      ],
      note: "Software is scoped to the problem — we'll only suggest building it if it clearly saves you more than it costs. You'll get a clear quote after a call.",
    },
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
        a: "Custom software starts from £1,250 and is scoped to the problem. We'll only suggest building something if it'll clearly save you more than it costs. Get in touch and we'll talk it through honestly.",
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
      "Local SEO, Google Business Profile, Core Web Vitals and AEO for businesses across Exeter, Devon and the South West. SEO retainers from £295/month; one-off AEO setup from £450.",
    intro:
      "Being the best in town means nothing if nobody can find you. We get your business ranking for the searches that actually bring in work — locally, where it counts. That means technical SEO, a fully-optimised Google Business Profile, fast Core Web Vitals, and content built to rank. We also do AEO (Answer Engine Optimisation), so AI tools and search recommend you, not your competitor.",
    outcome: "Local SEO, Google Business Profile, speed and AEO.",
    priceFrom: "From £295/mo",
    outcomes: [
      "Found by the people already searching for what you do.",
      "Steady, compounding growth in local visibility and enquiries.",
    ],
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
    whoForLead:
      "SEO is for businesses that want to be found where it counts. It's a fit if:",
    whoFor: [
      "You're invisible for the searches your customers actually type.",
      "Competitors outrank you despite you being better at the job.",
      "Your Google Business Profile is unclaimed, thin, or under-optimised.",
      "You want visibility to grow month on month, not a one-off push.",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        body: "We benchmark where you rank now and find the fastest meaningful wins.",
      },
      {
        step: "02",
        title: "Foundations",
        body: "Technical fixes, site speed, and a fully-optimised Google Business Profile.",
      },
      {
        step: "03",
        title: "Content & local",
        body: "Pages and content built around real local search intent.",
      },
      {
        step: "04",
        title: "Track & refine",
        body: "Monthly reporting and ongoing optimisation as your rankings climb.",
      },
    ],
    pricing: {
      tiers: [
        {
          label: "Local SEO",
          price: "From £295/month",
          body: "For businesses that want steady visibility growth, local search improvements, and ongoing optimisation.",
        },
        {
          label: "Growth SEO",
          price: "From £750/month",
          body: "Broader, faster campaigns for competitive markets — more content, more pages, and ongoing link building.",
        },
        {
          label: "Market leadership",
          price: "From £1,500/month",
          body: "Aggressive multi-town, multi-service growth, built to own your local market and outrank everyone in it.",
        },
        {
          label: "AEO Setup & Audit",
          price: "From £450",
          body: "A one-off setup so AI answer engines — ChatGPT, Google AI Overviews, Perplexity — can find and recommend you: schema, structured content, FAQs, llms.txt and entity setup.",
        },
      ],
      note: "SEO works best as an ongoing partnership — we'll recommend the right level after reviewing your site and your local market. The AEO Setup & Audit is a one-off, and a great standalone starting point that plugs straight into ongoing SEO.",
    },
    whyTitle: "Why it matters",
    whyBody: [
      "When someone searches for what you do, you're either on the first page or you're invisible. There's no prize for second place.",
      "Local search is the highest-intent traffic there is — people looking now, ready to buy. Showing up there is often the single biggest lever for more enquiries.",
    ],
    faqs: [
      {
        q: "What is AEO?",
        a: "Answer Engine Optimisation — structuring your site so AI assistants and AI search can understand and recommend your business. Schema, clean structure and FAQs. It's the next frontier of getting found. We offer it as a one-off AEO Setup & Audit from £450, which plugs straight into ongoing SEO.",
      },
      {
        q: "How much does SEO cost?",
        a: "Retainers start from £295/month and scale with how competitive your market is and how fast you want to grow. We'll recommend the right level after reviewing your site.",
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
    outcomes: [
      "A brand that earns trust at a glance.",
      "A consistent look across every place your business shows up.",
    ],
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
    whoForLead:
      "Branding usually comes alongside a website build. It's a fit if:",
    whoFor: [
      "Your brand looks scrappy or inconsistent next to competitors.",
      "You've outgrown a DIY or clipart logo.",
      "You're launching and need to look credible from day one.",
      "Your website and brand don't feel like they belong together.",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        body: "We get clear on who you are, who you serve, and how you want to be seen.",
      },
      {
        step: "02",
        title: "Design",
        body: "Logo, type, colour and the visual system, designed in step with your site.",
      },
      {
        step: "03",
        title: "Systemise",
        body: "Guidelines and asset kits so everything you put out stays consistent.",
      },
      {
        step: "04",
        title: "Roll out",
        body: "Applied across your website and the assets you use day to day.",
      },
    ],
    pricing: {
      tiers: [
        {
          label: "Brand identity",
          price: "Quoted per project",
          body: "Logo, identity system, guidelines and assets — usually added to a website build and scoped to what you need.",
        },
      ],
      note: "Branding is priced to the project and often bundled with a website. We'll give you a clear quote after a quick call.",
    },
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
