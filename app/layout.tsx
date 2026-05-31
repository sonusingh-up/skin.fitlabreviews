import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SkinHeader from "@/components/layout/SkinHeader";
import SkinFooter from "@/components/layout/SkinFooter";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const SKIN_URL = "https://skin.fitlabreviews.com";
const GA_ID = "G-N23DKB7H8K";

const skinWebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SKIN_URL}/#website`,
  url: SKIN_URL,
  name: "Fitlabreviews Skin",
  description:
    "Evidence-led skincare guides, ingredient profiles, condition breakdowns, and daily routines. Science-first skin health — editorially independent.",
  publisher: { "@id": "https://fitlabreviews.com/#organization" },
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  metadataBase: new URL(SKIN_URL),
  title: {
    default: "Skin Health — Evidence-Led Skincare · Fitlabreviews",
    template: "%s · Fitlabreviews Skin",
  },
  description:
    "Evidence-led skincare guides, ingredient breakdowns, daily routines, and condition profiles. Science-first skin health for informed decisions.",
  keywords: [
    "skincare", "skin health", "skincare ingredients", "retinol guide",
    "niacinamide", "skin routines", "acne treatment", "eczema skincare",
    "evidence-based skincare", "dermatology research", "skincare science",
  ],
  authors: [{ name: "Fitlabreviews Editorial" }],
  creator: "Fitlabreviews",
  publisher: "Fitlabreviews",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SKIN_URL,
    siteName: "Fitlabreviews Skin",
    title: "Skin Health — Evidence-Led Skincare · Fitlabreviews",
    description:
      "Research-grade skincare guides, ingredient profiles, and condition breakdowns. Evidence-led, editorially independent.",
    images: [{ url: "/logo-banner.svg", width: 1200, height: 300, alt: "Fitlabreviews Skin — Evidence-Led Skincare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitlabreviews Skin — Evidence-Led Skincare",
    description: "Research-grade skincare guides, ingredient profiles, and condition breakdowns.",
    images: ["/logo-banner.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // No alternates.canonical here — each page sets its own.
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
      style={{ backgroundColor: "#F2EBD9" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(skinWebSiteSchema) }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", backgroundColor: "#F2EBD9", color: "#1A1714" }}
      >
        <SkinHeader />
        <main className="flex-1">{children}</main>
        <SkinFooter />
      </body>
    </html>
  );
}
