import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import CustomCursor from "@/components/CustomCursor";
import PixelTrailWrapper from "@/components/PixelTrailWrapper";

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
    icon: '/icon.png',
    apple: '/icon.png',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <PixelTrailWrapper />
          <CustomCursor />
          <Sidebar />
          
          {/* Main content area - offset by sidebar on desktop */}
          <main className="lg:ml-72 min-h-screen pt-14 lg:pt-0">
            <div className="page-transition">
              {children}
            </div>
          </main>
          
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
