import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { LeftSidNav } from "@/components/LeftSideNav";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import "../moodWhisper/globals.css";
import { FooterComponent } from "@/components/footer";

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
        <Nav />
        {/* Flex wrapper for LeftSideNav and main content */}
        <div className="flex flex-1 w-full mt-20">
          {/* Main content area that adjusts its width */}
          <main className="flex-grow transition-all duration-300 p-4 ml-[4rem] md:ml-[5rem] lg:ml-[6rem]">
            {children}
          </main>
        </div>
        <div className="mt-20">
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
