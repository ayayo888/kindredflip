import React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFloater from "@/components/SocialFloater";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kindredflip - Discover Your Vibe",
  description: "A vibrant, curated discovery platform for trendy items, designed for Gen Z with a pop-art aesthetic.",
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