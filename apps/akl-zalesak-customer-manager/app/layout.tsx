import "normalize.css";
import "@chaii/config-tailwind/global.css";

import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk, Yrsa } from "next/font/google";
import { PropsWithChildren } from "react";
import { cn } from "@chaii/ui/lib/utils";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@chaii/ui/components/tooltip";

import { Title } from "./(components)/title";

// eslint-disable-next-line import/no-duplicates
import LogoSrc from "~/assets/logo.svg?url";
// eslint-disable-next-line import/no-duplicates
import Logo from "~/assets/logo.svg";
import { Providers } from "~/Providers";

const sans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Yrsa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const mono = Geist_Mono({
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
        <body className="contents">
          <main className="grid min-h-dvh grid-rows-[auto_1fr_auto] bg-white font-medium leading-tight text-black">
            <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-2 shadow-md">
              <Link href="/">
                <Logo alt="Logo" className="size-12 text-primary-600" />
              </Link>
              <Title />
              <SignedIn>
                <Tooltip>
                  <TooltipTrigger>
                    <SignOutButton>
                      <LogOut className="size-6 text-primary-600" />
                    </SignOutButton>
                  </TooltipTrigger>
                  <TooltipContent>Odhlásit se</TooltipContent>
                </Tooltip>
              </SignedIn>
            </header>

            <article className="container py-10">{children}</article>
          </main>
        </body>
      </Providers>
    </html>
  );
}
