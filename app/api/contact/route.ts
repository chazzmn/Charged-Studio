/**
 * Contact / lead-capture endpoint.
 *
 * Sender is swappable and invisible to the front-end:
 *   1. If RESEND_API_KEY is set  → send via Resend (fully owned, on your domain).
 *   2. else if FORMSPREE_ENDPOINT → forward to your existing Formspree form.
 *   3. else                       → 503 with a clear "not configured" message.
 *
 * No third-party SDK — both paths are plain fetch calls.
 * Env vars (see .env.local.example):
 *   RESEND_API_KEY, CONTACT_FROM, CONTACT_TO, FORMSPREE_ENDPOINT
 */

type Payload = {
  kind?: "project" | "audit";
  name?: string;
  email?: string;
  business?: string;
  website?: string;
  industry?: string;
  challenge?: string;
  message?: string;
  // Honeypot — bots fill this, humans never see it.
  company_url?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot tripped → pretend success, drop silently.
  if (data.company_url) {
    return Response.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const kind = data.kind === "audit" ? "audit" : "project";

  if (!name || !EMAIL_RE.test(email)) {
    return Response.json(
      { ok: false, error: "Please enter your name and a valid email." },
      { status: 422 },
    );
  }
  if (kind === "audit" && !(data.website ?? "").trim()) {
    return Response.json(
      { ok: false, error: "Please enter your website address." },
      { status: 422 },
    );
  }

  const subject =
    kind === "audit"
      ? `New audit request — ${name}`
      : `New project enquiry — ${name}`;

  const lines = [
    `Type: ${kind === "audit" ? "Free website audit" : "Project enquiry"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    data.business ? `Business: ${data.business.trim()}` : null,
    data.website ? `Website: ${data.website.trim()}` : null,
    data.industry ? `Industry: ${data.industry.trim()}` : null,
    data.challenge ? `Biggest challenge: ${data.challenge.trim()}` : null,
    data.message ? `\nMessage:\n${data.message.trim()}` : null,
  ].filter(Boolean) as string[];

  const text = lines.join("\n");
  const html = `<div style="font-family:system-ui,sans-serif;line-height:1.6">${lines
    .map((l) => `<p style="margin:0 0 6px">${escapeHtml(l).replace(/\n/g, "<br/>")}</p>`)
    .join("")}</div>`;

  const to = process.env.CONTACT_TO || "hello@chargedstudio.co.uk";

  // --- 1. Resend ---------------------------------------------------------
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const from = process.env.CONTACT_FROM || "Charged Studio <onboarding@resend.dev>";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, reply_to: email, subject, text, html }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, detail);
      return Response.json(
        { ok: false, error: "Something went wrong sending your message. Please email hello@chargedstudio.co.uk." },
        { status: 502 },
      );
    }
    return Response.json({ ok: true });
  }

  // --- 2. Formspree fallback --------------------------------------------
  const formspree = process.env.FORMSPREE_ENDPOINT;
  if (formspree) {
    const res = await fetch(formspree, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, subject, message: text, _replyto: email }),
    });
    if (!res.ok) {
      console.error("Formspree forward failed:", res.status);
      return Response.json(
        { ok: false, error: "Something went wrong. Please email hello@chargedstudio.co.uk." },
        { status: 502 },
      );
    }
    return Response.json({ ok: true });
  }

  // --- 3. Not configured -------------------------------------------------
  console.error(
    "Contact form not configured: set RESEND_API_KEY or FORMSPREE_ENDPOINT in the environment.",
  );
  return Response.json(
    { ok: false, error: "Contact form is not set up yet. Please email hello@chargedstudio.co.uk." },
    { status: 503 },
  );
}
