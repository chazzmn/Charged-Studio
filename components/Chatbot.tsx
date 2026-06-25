"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

/* ────────────────────────────────────────────────────────────────────────
   Charged Studio chatbot — scripted, no backend, no AI API.
   Ported from the Framer widget and expanded: broader intent matching,
   flows aligned to the websites-led positioning, light-theme styling,
   accessibility (dialog role, ESC, focus, aria-live), and session persistence.

   To add/edit answers: edit RESPONSES + detectIntent + SUGGESTION_MAP below.
   ──────────────────────────────────────────────────────────────────────── */

const LINKS = {
  start: "/start-a-project",
  audit: "/audit",
  contact: "/contact",
  booking: "https://calendly.com/hello-chargedstudio/15min",
};

type Role = "user" | "bot";
type CtaLink = { text: string; url: string };
type Flow = { text: string; suggestions?: string[]; link?: CtaLink };
type Message = { role: Role; text: string; suggestions?: string[]; link?: CtaLink };

const WELCOME =
  "Hi — welcome to Charged Studio. I'm here to help you find what you need or point you to the right person. What can I help with?";
const WELCOME_SUGGESTIONS = ["What you do", "Websites", "Pricing", "Free audit"];

const RESPONSES: Record<string, Flow> = {
  greeting: {
    text: "Hi — welcome to Charged Studio. Ask me about what we do, pricing, timelines, or how to get started. What are you after?",
    suggestions: ["What you do", "Websites", "Pricing", "Free audit"],
  },
  about: {
    text: "Charged Studio is a founder-led web studio in Exeter, building fast, modern websites for growing businesses across Devon and the South West — plus the software, SEO and branding to back them up. You work directly with Charlie, who's both a designer and a qualified project manager (APM PMQ), so the creative work runs on a real, structured process. Most clients stay on monthly, so we look after everything for them.",
    suggestions: ["Why Charged?", "Websites", "Pricing", "Free audit"],
  },
  webDesign: {
    text: "Your website should be your hardest-working salesperson. We build custom, fast, mobile-first sites designed to turn local searches into enquiries — not just look pretty. And we handle the lot: design, build, hosting, domain, updates and maintenance, with local SEO baked in from day one. You never have to touch the tech.",
    suggestions: ["Pricing", "How long does it take?", "Free audit"],
  },
  software: {
    text: "Beyond websites, we build bespoke tools around how your business actually runs — booking and enquiry systems, customer portals, dashboards, and workflow automations that take the busywork off your plate. We build to fit your existing setup rather than forcing a rip-and-replace.",
    suggestions: ["Get a quote", "Book a call"],
  },
  seo: {
    text: "We make sure the sites we build actually get found: local SEO for Exeter and Devon, a fully-optimised Google Business Profile, fast Core Web Vitals, and content built to rank. We also do AEO, so AI assistants recommend you — not your competitor.",
    suggestions: ["What's AEO?", "Free audit", "Get a quote"],
  },
  aeo: {
    text: "AEO is Answer Engine Optimisation — structuring your site so AI assistants and AI search can understand and recommend your business. Think schema, clean structure and clear FAQs. It's the next frontier of getting found, and most agencies aren't doing it yet.",
    suggestions: ["SEO", "Free audit", "Get a quote"],
  },
  branding: {
    text: "We craft sharp, consistent brand identities — logo, visual identity, guidelines and the assets to keep you looking professional everywhere. Branding supports the websites we build, so everything feels joined-up and intentional.",
    suggestions: ["Websites", "Get a quote"],
  },
  audit: {
    text: "Happy to take a look. Our free website audit reviews your speed, how you show up on Google, design and mobile experience, and where you might be losing enquiries — plain English, no jargon, no hard sell.",
    suggestions: ["Get a quote", "What you do"],
  },
  quote: {
    text: "Every project's priced to fit what you need — we don't do one-size-fits-all packages. We work both ways: one-off projects and monthly retainers. Tell us a bit about your project and we'll come back with a tailored quote within one working day.",
    suggestions: ["Start a project", "Book a call"],
  },
  timeline: {
    text: "Most websites take 2–4 weeks from kickoff, depending on scope. We move quickly without cutting corners, and you'll get a clear timeline up front so you always know what's happening and when.",
    suggestions: ["Pricing", "Start a project"],
  },
  location: {
    text: "We're based in Exeter and work with businesses right across Devon and the South West — and remotely with clients further afield. If your customers search for you locally, we can help you show up.",
    suggestions: ["Industries", "Get a quote"],
  },
  process: {
    text: "We keep it structured: immerse in your business, plan the scope and timeline, design and build with feedback points along the way, then launch and look after it. The hard thinking happens before any design does — that's the project-management background at work.",
    suggestions: ["Why Charged?", "Get a quote"],
  },
  retainer: {
    text: "Most clients stay on a monthly basis — we host, maintain, update and keep improving your site so it keeps pulling its weight long after launch. No worrying about the tech, ever.",
    suggestions: ["Pricing", "Book a call"],
  },
  different: {
    text: "A few things set us apart: you work directly with the founder, not an account manager — and Charlie's both a designer and a qualified project manager (APM PMQ), so it's creative work run with real structure. We're local to Devon, we build to perform (fast, found, converting), and most clients stay on monthly because we genuinely look after things. We're rated 5.0 from 16 reviews on Google.",
    suggestions: ["Reviews", "Pricing", "Start a project"],
  },
  reviews: {
    text: "We're rated 5.0 from 16 reviews on Google, and clients tend to stick around — most move onto a monthly plan after launch. Happy to point you to work relevant to your sector.",
    suggestions: ["Why Charged?", "Start a project"],
  },
  industries: {
    text: "We work with growing local service businesses — trades and construction, hospitality and food, health and wellbeing, salons, retail, professional services and more. If you've got customers searching for you locally, we can help.",
    suggestions: ["Websites", "Get a quote"],
  },
  booking: {
    text: "Let's get you booked in — grab a free 15-minute call and we'll talk through your project, no obligation.",
    suggestions: [],
  },
  contact: {
    text: "You can reach a real person any time — email hello@chargedstudio.co.uk or call +44 7453 388798. Prefer we come to you? Leave your details and we'll reply within one working day.",
    suggestions: ["Book a call", "Start a project"],
  },
  help: {
    text: "Here's what I can help with: what we do, websites, software & apps, SEO & getting found, branding, a free website audit, pricing and timelines, or booking a call. What's most useful?",
    suggestions: ["Websites", "Pricing", "Why Charged?", "Free audit"],
  },
  thanks: {
    text: "Anytime. If anything else comes up, I'm right here.",
    suggestions: ["Get a quote", "Book a call"],
  },
  unknown: {
    text: "I'm best on what we do, websites, software, SEO, branding, pricing, timelines and bookings. Ask me about any of those — or I can put you in touch with a human.",
    suggestions: ["What you do", "Get a quote", "Talk to a human"],
  },
};

/** Chip label → intent. */
const SUGGESTION_MAP: Record<string, string> = {
  "What you do": "about",
  "About Charged": "about",
  Websites: "webDesign",
  "Web Design": "webDesign",
  "Software & apps": "software",
  Software: "software",
  "SEO & getting found": "seo",
  SEO: "seo",
  "What's AEO?": "aeo",
  Branding: "branding",
  "Free audit": "audit",
  "Run free audit": "audit",
  Pricing: "quote",
  "Get a quote": "quote",
  "Start a project": "quote",
  "How long does it take?": "timeline",
  "Why Charged?": "different",
  Reviews: "reviews",
  Industries: "industries",
  "Book a call": "booking",
  "Our services": "help",
  "Talk to a human": "contact",
};

function detectIntent(msg: string): string {
  const m = msg.toLowerCase().trim();
  if (/^(hi|hello|hey|hiya|yo|sup|good (morning|afternoon|evening))\b/.test(m)) return "greeting";
  if (/\b(thanks|thank you|cheers|ta|appreciate|nice one)\b/.test(m)) return "thanks";
  if (/\b(why charged|why you|why should|what makes|different|better than|stand out|usp|trust)\b/.test(m)) return "different";
  if (/\b(review|reviews|rating|ratings|testimonial|testimonials|reputation|google review)\b/.test(m)) return "reviews";
  if (/\b(quote|price|pricing|cost|costs|how much|budget|package|rate|rates|afford|invest)\b/.test(m)) return "quote";
  if (/\b(how long|timeline|turnaround|how fast|how quick|when can|lead time|deadline)\b/.test(m)) return "timeline";
  if (/\b(where|based|location|area|exeter|devon|south west|cover|near me|come to)\b/.test(m)) return "location";
  if (/\b(industr|sector|niche|type of business|what businesses|who do you work|who are your clients)\b/.test(m)) return "industries";
  if (/\b(process|how do you work|how does it work|steps|approach|what happens)\b/.test(m)) return "process";
  if (/\b(retainer|monthly|ongoing|maintenance|maintain|manage|look after|support plan|subscription)\b/.test(m)) return "retainer";
  if (/\b(software|app|apps|application|booking system|portal|dashboard|automation|automate|internal tool|crm)\b/.test(m)) return "software";
  if (/\b(aeo|answer engine|ai search|chatgpt|llm)\b/.test(m)) return "aeo";
  if (/\b(seo|search engine|ranking|rank|google|found|visibility|core web vitals|pagespeed)\b/.test(m)) return "seo";
  if (/\b(brand|branding|logo|identity|guidelines|visual identity)\b/.test(m)) return "branding";
  if (/\b(web|website|websites|site|landing page|redesign|homepage|page|build me)\b/.test(m)) return "webDesign";
  if (/\b(audit|review my|check my|test my|analyse|analyze|score)\b/.test(m)) return "audit";
  if (/\b(book|booking|call|meeting|speak|talk|calendly|schedule|consultation|chat to)\b/.test(m)) return "booking";
  if (/\b(human|real person|someone|contact|email|phone|number|reach you|get in touch)\b/.test(m)) return "contact";
  if (/\b(who are you|about|what do you do|what does charged|your services|what services|tell me about)\b/.test(m)) return "about";
  if (/\b(help|what can you|options|what do you offer|services)\b/.test(m)) return "help";
  return "unknown";
}

function buildBotMessage(intent: string): Message {
  const flow = RESPONSES[intent] ?? RESPONSES.unknown;
  const msg: Message = { role: "bot", text: flow.text, suggestions: flow.suggestions };
  if (intent === "quote") msg.link = { text: "Start a project →", url: LINKS.start };
  else if (intent === "audit") msg.link = { text: "Run a free audit →", url: LINKS.audit };
  else if (intent === "booking") msg.link = { text: "Book a free call →", url: LINKS.booking };
  else if (intent === "contact") msg.link = { text: "Go to contact →", url: LINKS.contact };
  return msg;
}

/* ── icons ─────────────────────────────────────────────────────────────── */
function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="16" y1="2" x2="8" y2="10" />
      <polygon points="16 2 11 16 8 10 2 7 16 2" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8.5 1 3 9h4.5l-1 6L13 7H8.5l1-6z" />
    </svg>
  );
}

const STORAGE_KEY = "charged-chat-v1";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [showNudge, setShowNudge] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* restore prior conversation (session only) */
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { messages: Message[]; hasOpened: boolean };
        if (saved.messages?.length) {
          setMessages(saved.messages);
          setHasOpened(true);
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  /* persist */
  useEffect(() => {
    if (messages.length) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, hasOpened: true }));
      } catch {
        /* ignore */
      }
    }
  }, [messages]);

  /* one-time proactive nudge */
  useEffect(() => {
    if (hasOpened) return;
    const t = setTimeout(() => setShowNudge(true), 6000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  /* auto-scroll within the panel only */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isTyping]);

  /* focus input on open */
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 280);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  /* ESC to close */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => () => {
    if (typingTimer.current) clearTimeout(typingTimer.current);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    setShowNudge(false);
    if (!hasOpened) {
      setHasOpened(true);
      setIsTyping(true);
      typingTimer.current = setTimeout(() => {
        setMessages([{ role: "bot", text: WELCOME, suggestions: WELCOME_SUGGESTIONS }]);
        setIsTyping(false);
      }, 500);
    }
  }, [hasOpened]);

  const send = useCallback((text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((prev) => [...prev, { role: "user", text: clean }]);
    setIsTyping(true);
    const intent = SUGGESTION_MAP[clean] ?? detectIntent(clean);
    typingTimer.current = setTimeout(() => {
      setMessages((prev) => [...prev, buildBotMessage(intent)]);
      setIsTyping(false);
    }, 550 + Math.random() * 650);
  }, []);

  const handleSend = () => {
    const t = input.trim();
    if (!t) return;
    setInput("");
    send(t);
  };

  return (
    <>
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Charged Studio chat"
        aria-hidden={!isOpen}
        className={`fixed z-[99999] flex flex-col overflow-hidden bg-surface font-inter shadow-e2 transition-all duration-300 ease-out motion-reduce:transition-none
          inset-0 rounded-none sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[560px] sm:max-h-[80vh] sm:w-[380px] sm:rounded-2xl
          ${isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent text-text-inverse">
              <BoltIcon />
            </span>
            <span>
              <span className="block text-[15px] font-bold text-text">Charged Studio</span>
              <span className="flex items-center gap-1.5 text-xs text-text/50">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
                Online now
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="flex items-center justify-center rounded-md p-1.5 text-text/50 transition-colors hover:bg-text/10 hover:text-text"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5" aria-live="polite">
          {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
              <div
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-sm bg-accent text-text-inverse"
                    : "rounded-bl-sm border border-border bg-text/5 text-text"
                }`}
              >
                {msg.text}
              </div>

              {msg.link &&
                (msg.link.url.startsWith("http") ? (
                  <a
                    href={msg.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-[13px] font-semibold text-text-inverse transition-opacity hover:opacity-90"
                  >
                    {msg.link.text}
                  </a>
                ) : (
                  <Link
                    href={msg.link.url}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-[13px] font-semibold text-text-inverse transition-opacity hover:opacity-90"
                  >
                    {msg.link.text}
                  </Link>
                ))}

              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex max-w-[90%] flex-wrap gap-2">
                  {msg.suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="whitespace-nowrap rounded-full border border-accent/40 px-3.5 py-1.5 text-xs font-medium text-text transition-colors hover:border-accent hover:bg-accent/10"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="inline-flex w-fit items-center gap-1.5 rounded-2xl rounded-bl-sm border border-border bg-text/5 px-4 py-3">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="block h-1.5 w-1.5 animate-bounce rounded-full bg-text/40"
                  style={{ animationDelay: `${d * 0.15}s` }}
                />
              ))}
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="flex flex-shrink-0 items-center gap-2 border-t border-border px-4 py-3 pb-5 sm:pb-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type a message…"
            aria-label="Type a message"
            className="flex-1 rounded-xl border border-border bg-text/5 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text/40 focus:border-accent"
          />
          <button
            type="button"
            onClick={handleSend}
            aria-label="Send message"
            disabled={!input.trim()}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-text-inverse transition-colors hover:opacity-90 disabled:cursor-default disabled:bg-text/10 disabled:text-text/40 disabled:hover:opacity-100"
          >
            <SendIcon />
          </button>
        </div>
        <p className="pb-4 text-center text-[10px] text-text/60 sm:pb-3">
          Powered by Charged Studio
        </p>
      </div>

      {/* Proactive nudge */}
      {showNudge && !isOpen && (
        <button
          type="button"
          onClick={open}
          className="fixed bottom-24 right-6 z-[99998] max-w-[220px] rounded-2xl rounded-br-sm bg-surface px-4 py-3 text-left font-inter text-sm text-text shadow-e2 transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
        >
          Got a question? Ask away — happy to help.
        </button>
      )}

      {/* Launcher */}
      <button
        type="button"
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className={`fixed bottom-6 right-6 z-[100000] h-14 w-14 items-center justify-center rounded-2xl bg-accent text-text-inverse shadow-glow transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transition-none ${
          isOpen ? "hidden sm:flex" : "flex"
        }`}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
}
