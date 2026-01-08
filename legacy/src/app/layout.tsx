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
    "Luxury biotech haircare powered by chitin & chitosan—high-shine, weightless smoothness, and a modern sustainability story inspired by insect-biotech purification.",
  keywords: [
    "Luxury sustainable hair care",
    "Natural biopolymer hair care",
    "French biotech beauty",
    "Chitin hair care",
    "Chitosan hair care",
    "BSFL chitosan",
    "Insect biotech cosmetics",
  ],
  openGraph: {
    title: "Luxitin",
    description:
      "Luxury biotech haircare powered by chitin & chitosan—high-shine, weightless smoothness, and a modern sustainability story inspired by insect-biotech purification.",
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white/90 focus:px-4 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-dvh max-w-[1400px] flex-col px-4 sm:px-6 lg:px-10">
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

