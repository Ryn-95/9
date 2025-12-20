import type { Metadata } from "next";
import { Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "9 - Agence Digitale",
  description: "Nous créons des produits numériques qui aident les entreprises à croître et à réussir dans le monde moderne.",
};

import { Cursor } from "@/components/ui/Cursor";
import Grain from "@/components/ui/Grain";
import Preloader from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${caveat.variable} antialiased relative bg-background text-foreground cursor-none`}
      >
        <Preloader />
        <Cursor />
        <Grain />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
