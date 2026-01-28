import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angelina Wu's Portfolio",
  description: "designing to delight",
  keywords: ["design", "development", "UX", "UI", "frontend", "data science", "UCLA", "portfolio", "design engineer", "product design", "design media arts"],
  authors: [{ name: "Angelina Wu" }],
  creator: "Angelina Wu",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Angelina Wu's Portfolio",
    description: "designing to delight",
    url: "https://angelinawwu.com",
    siteName: "Angelina Wu's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/OpenGraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angelina Wu's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelina Wu's Portfolio",
    description: "designing to delight",
    images: ["/OpenGraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <CustomCursor />
        <Loader />
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://app.rybbit.io/api/script.js"
          data-site-id="726cda46b399"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
