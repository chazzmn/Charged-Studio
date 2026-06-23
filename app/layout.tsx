import type { Metadata } from "next";
import { Anton, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const caramel = localFont({
  src: "../public/fonts/Caramel-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-caramel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charged Studio — Web Design & Digital Agency, Exeter",
  description:
    "Charged Studio builds premium websites, software, and digital products for growing businesses. Based in Exeter, working with clients across the UK.",
  metadataBase: new URL("https://chargedstudio.co.uk"),
  openGraph: {
    siteName: "Charged Studio",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${interTight.variable} ${caramel.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-charged-black font-inter text-charged-light antialiased">
        {/* Nav is fixed + transparent over the top of each page's hero.
            Pages without a full-bleed hero should add their own top spacing. */}
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
