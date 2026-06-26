"use client";

import { useEffect } from "react";

/**
 * WebMCP — exposes the studio's lead-capture forms as agent-callable tools via
 * the emerging W3C Web Model Context Protocol (`navigator.modelContext`).
 *
 * An in-browser AI agent can contact the studio or request a free audit through
 * a typed tool with a valid JSON schema, instead of scraping the page. Pure
 * progressive enhancement: feature-detected, so it's a no-op in browsers that
 * don't support WebMCP yet (Chrome behind a flag / Edge 147+ at time of writing).
 *
 * Spec: https://webmachinelearning.github.io/webmcp/docs/proposal.html
 */

type McpContent = { content: { type: "text"; text: string }[] };
type McpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (
    args: Record<string, unknown>,
    agent?: unknown,
  ) => Promise<McpContent> | McpContent;
};
interface ModelContext {
  provideContext?: (ctx: { tools: McpTool[] }) => void;
  registerTool?: (tool: McpTool) => void;
  unregisterTool?: (name: string) => void;
}

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function ok(text: string): McpContent {
  return { content: [{ type: "text", text }] };
}

async function submit(
  payload: Record<string, unknown>,
): Promise<McpContent> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (res.ok && json.ok) {
      return ok(
        "Sent. Charged Studio will reply within one working day. You can also email hello@chargedstudio.co.uk.",
      );
    }
    return ok(
      json.error ??
        "That didn't send. Please email hello@chargedstudio.co.uk instead.",
    );
  } catch {
    return ok(
      "Couldn't reach the server. Please email hello@chargedstudio.co.uk instead.",
    );
  }
}

const TOOLS: McpTool[] = [
  {
    name: "contact-charged-studio",
    description:
      "Send a message / project enquiry to Charged Studio, a web design studio in Exeter, Devon. Use when the user wants to get in touch, ask about a website, software or branding project, or request a quote.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "The enquirer's full name" },
        email: {
          type: "string",
          description: "A valid email address to reply to",
        },
        message: {
          type: "string",
          description:
            "What they need — e.g. a new website, a redesign, help getting found on Google",
        },
        business: {
          type: "string",
          description: "Their business or brand name (optional)",
        },
      },
      required: ["name", "email", "message"],
    },
    execute: (args) =>
      submit({
        kind: "project",
        name: str(args.name),
        email: str(args.email),
        message: str(args.message),
        business: str(args.business),
      }),
  },
  {
    name: "request-website-audit",
    description:
      "Request a free website audit from Charged Studio. Use when the user wants their existing website reviewed for speed, SEO, mobile or conversion.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "The requester's full name" },
        email: {
          type: "string",
          description: "A valid email address to send the audit to",
        },
        website: {
          type: "string",
          description: "The website address to audit, e.g. yourbusiness.co.uk",
        },
        business: {
          type: "string",
          description: "Their business or brand name (optional)",
        },
        industry: {
          type: "string",
          description: "Their industry or sector (optional)",
        },
      },
      required: ["name", "email", "website"],
    },
    execute: (args) =>
      submit({
        kind: "audit",
        name: str(args.name),
        email: str(args.email),
        website: str(args.website),
        business: str(args.business),
        industry: str(args.industry),
      }),
  },
];

export default function WebMCP() {
  useEffect(() => {
    const mc = navigator.modelContext;
    if (!mc?.provideContext) return;
    try {
      mc.provideContext({ tools: TOOLS });
    } catch {
      // No-op — never let an experimental API break the page.
    }
  }, []);

  return null;
}
