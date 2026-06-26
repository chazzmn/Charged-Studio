/**
 * WebMCP discovery manifest — served at /.well-known/webmcp (mapped via a rewrite
 * in next.config.ts) so AI agents and AEO crawlers can discover the studio's
 * agent-callable tools WITHOUT executing JavaScript.
 *
 * The tools are implemented declaratively on the live forms via
 * toolname/tooldescription (WebMCP Declarative API): the contact form (/contact)
 * and the audit form (/audit). Spec: https://webmachinelearning.github.io/webmcp/
 */

const MANIFEST = {
  name: "Charged Studio",
  description:
    "Web design studio in Exeter, Devon — websites, software, SEO and branding for service businesses across the South West.",
  version: "1.0.0",
  tools: [
    {
      name: "contactChargedStudio",
      description:
        "Send a message or project enquiry to Charged Studio. Use when the user wants to get in touch or ask about a website, software or branding project.",
    },
    {
      name: "requestWebsiteAudit",
      description:
        "Request a free website audit from Charged Studio. Use when the user wants their existing website reviewed for speed, SEO, mobile or conversion.",
    },
  ],
};

export const dynamic = "force-static";

export function GET() {
  return Response.json(MANIFEST);
}
