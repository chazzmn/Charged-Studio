import type { Metadata } from "next";
import { Anton, Inter_Tight } from "next/font/google";
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
    <html lang="en" className={`${anton.variable} ${interTight.variable}`}>
      <body className="bg-charged-black text-charged-light font-inter antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
