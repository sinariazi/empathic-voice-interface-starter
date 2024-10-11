import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { LeftSidNav } from "@/components/LeftSideNav";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hume AI - EVI - Next.js Starter",
  description: "A Next.js starter using Hume AI's Empathic Voice Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col min-h-screen"
        )}
      >
        <LeftSidNav />
        <Nav />
        {children}
      </body>
    </html>
  );
}
