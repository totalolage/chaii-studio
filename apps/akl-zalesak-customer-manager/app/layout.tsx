import "normalize.css";
import "@chaii/config-tailwind/globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { PropsWithChildren } from "react";
import { cn } from "@chaii/ui/lib/utils";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

// eslint-disable-next-line import/no-duplicates
import LogoSrc from "~/assets/logo.svg?url";
// eslint-disable-next-line import/no-duplicates
import Logo from "~/assets/logo.svg";
import { Providers } from "~/Providers";

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
  title: "Customer Managment - AKL Zálešák",
  icons: LogoSrc.src,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn(sans.variable, serif.variable, mono.variable)}
    >
      <Providers>
        <body className="grid min-h-dvh grid-rows-[auto_1fr_auto] items-center bg-white font-medium leading-tight text-black">
          <style>
            {`
              #clerk-components {
                display: none;
              }
            `}
          </style>
          <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-2 shadow-md">
            <Link href="/">
              <Logo alt="Logo" className="size-12 text-primary-600" />
            </Link>
            <h1 className="font-bold">AKL Zálešák Customer Managment</h1>
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </Providers>
    </html>
  );
}
