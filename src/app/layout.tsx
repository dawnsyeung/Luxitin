import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxitin.example"),
  title: {
    default: "Luxitin",
    template: "%s · Luxitin",
  },
  description:
    "Discover Luxitin: high-purity chitin derived from black soldier fly larvae via advanced French biotechnology—luxurious hair care plus biodegradable chitin-based packaging.",
  keywords: [
    "Luxury sustainable hair care",
    "Natural biopolymer hair care",
    "French biotech beauty",
    "Chitin hair care",
    "Chitosan hair care",
    "Chitin-based packaging",
    "Biodegradable packaging",
    "BSFL chitosan",
    "Insect biotech cosmetics",
  ],
  openGraph: {
    title: "Luxitin",
    description:
      "Discover Luxitin: high-purity chitin derived from black soldier fly larvae via advanced French biotechnology—luxurious hair care plus biodegradable chitin-based packaging.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-dvh font-[family-name:var(--font-sans)]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[color:var(--bg-elevated)] focus:px-4 focus:py-2 focus:text-sm focus:text-[color:var(--fg)] focus:shadow"
        >
          Skip to content
        </a>
        <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1400px] flex-col px-4 sm:px-6 lg:px-10">
          <SiteHeader />
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

