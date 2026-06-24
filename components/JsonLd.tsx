/**
 * JsonLd — renders a JSON-LD <script> for structured data (SEO + AEO).
 * Server-safe (no client hooks). Pass any schema.org object.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
