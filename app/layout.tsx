import React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloater from "@/components/SocialFloater";
import { SITE_CONFIG } from "@/lib/constants";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ultimate CNfans Spreadsheet 2026 | QC Verified Links & Finds",
  description: "Stop gambling with dead links. Access the #1 CNfans Spreadsheet for 2026. We list 1000+ QC-verified finds for Sneakers, Tech, and Hoodies. Shop the Gold Standard safely.",
  icons: {
    icon: SITE_CONFIG.icon,
    shortcut: SITE_CONFIG.icon,
    apple: SITE_CONFIG.icon,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-kf-offwhite text-kf-black selection:bg-kf-yellow selection:text-black min-h-screen flex flex-col`}>
        <Navbar />
        <SocialFloater />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}