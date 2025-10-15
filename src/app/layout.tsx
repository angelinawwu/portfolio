import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angelina Wu - Designer & Developer",
  description: "Designer who codes. Currently at UCLA studying Design and Statistics/Data Science. Passionate about creating meaningful experiences through design and technology.",
  keywords: ["design", "development", "UX", "UI", "frontend", "data science", "UCLA", "portfolio"],
  authors: [{ name: "Angelina Wu" }],
  creator: "Angelina Wu",
  openGraph: {
    title: "Angelina Wu - Designer & Developer",
    description: "Designer who codes. Currently at UCLA studying Design and Statistics/Data Science.",
    url: "https://angelinawwu.com",
    siteName: "Angelina Wu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelina Wu - Designer & Developer",
    description: "Designer who codes. Currently at UCLA studying Design and Statistics/Data Science.",
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
        {children}
      </body>
    </html>
  );
}
