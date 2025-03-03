import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arbicho.uz"),
  keywords: [
    "ARBIChO",
    "Al Beruniy olimpiadasi",
    "Al Beruniy olimpiada",
    "Abu Rayhan Biruni",
    "Chemistry Olympiad",
    "International Chemistry Competition",
    "Science Competition",
    "Young Chemists",
    "Global Science Contest",
    "Chemistry Contest",
    "Scientific Excellence",
    "STEM Olympiad",
    "Chemistry Challenge",
    "Biruni Chemistry Olympiad",
    "International Science Olympiad",
    "High School Chemistry Competition",
    "Chemistry Talent Recognition",
    "Global Chemistry Contest",
    "Future Scientists",
    "Chemistry Students",
    "Chemistry Exam",
    "Olympiad Preparation",
  ],
  title:
    "Abu Rayhan Biruni International Chemistry Olympiad | Global Science Competition",
  openGraph: {
    description:
      "Compete in the Abu Rayhan Biruni International Chemistry Olympiad, a prestigious global competition for young chemists. Test your skills, gain recognition, and connect with future scientists.",
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
      >
        <Header />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
