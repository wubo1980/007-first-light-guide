import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Script from "next/script";

import { buildMetadata } from "@/lib/seo";
import { siteMeta } from "@/data/site-meta";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: siteMeta.name,
  description: siteMeta.description,
  path: "/",
  keywords: [
    "007 First Light guide",
    "007 First Light walkthrough",
    "007 First Light missions",
    "James Bond game tips",
    "stealth game guide",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <head>
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-cream)] antialiased">
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteMeta.ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${siteMeta.ga4Id}");
          `}
        </Script>
        <div className="site-grid" />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
