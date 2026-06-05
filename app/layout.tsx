import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StatusBar from "@/components/ui/StatusBar";

// Contexts
import { ThemeProvider } from "../contexts/ThemeContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "700"],
  style: ["italic", "normal"],
});

const SITE_DESCRIPTION =
  "Frontend Engineer specializing in React, Next.js, and TypeScript. I build optimized, accessible user experiences that turn complex product requirements into intuitive interfaces.";

export const metadata: Metadata = {
  title: "Jed Delich | Frontend Engineer",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Jed Delich | Frontend Engineer",
    description: SITE_DESCRIPTION,
    url: "https://jeddelich.com",
    siteName: "Frontend Software Engineer Portfolio",
    images: [
      {
        url: "https://jeddelich.com/my-portfolio.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: {
    apple: "/favicons/apple-touch-icon.png",
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inter.variable} ${jetBrainsMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://kit.fontawesome.com/b6ac0a8ac4.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ThemeProvider>
          <Navbar />
          <StatusBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
