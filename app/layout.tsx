import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { LeftSidNav } from "@/components/LeftSideNav";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mood Whisper",
  description: "Listening to what matters.",
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
        <div className="mt-12 ml-16"> {children}</div>
      </body>
    </html>
  );
}
