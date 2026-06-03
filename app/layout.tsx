import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Script from "next/script";




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
    "S-Rank routes",
    "TacSim guide",
    "gadget builds",
  ],
  other: {
    "google-site-verification": "N21K5VoxWUyIIwGf5NZjvhvU2Ty_JC2EoVhMWPL-iro",
  },
});

/**
 * 渲染根布局，挂载字体、全站导航、页脚和页面主体容器。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-cream)] antialiased">
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-GY6J90DB6S"} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-GY6J90DB6S");
          `}
        </Script>
        <div className="site-grid" />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Analytics mode="production" />
      </body>
    </html>
  );
}
