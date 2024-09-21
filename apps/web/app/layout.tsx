import "normalize.css";
import "@chaii/config-tailwind/globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { PropsWithChildren } from "react";
import { cn } from "@chaii/ui/lib/utils";

import { Providers } from "./Providers";

const sans = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const mono = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Chaii Studio",
  description: "From vision to deployment",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn(sans.variable, serif.variable, mono.variable)}
    >
      <Providers>{children}</Providers>
    </html>
  );
}
