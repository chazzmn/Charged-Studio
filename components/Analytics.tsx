import Script from "next/script";

/**
 * Google Analytics 4. Loads only in production so local dev doesn't pollute
 * the data. The Measurement ID is overridable via NEXT_PUBLIC_GA_ID (set it in
 * Vercel if it ever changes); falls back to the live property.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-9P8NYQN0KQ";

export default function Analytics() {
  if (process.env.NODE_ENV !== "production" || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
