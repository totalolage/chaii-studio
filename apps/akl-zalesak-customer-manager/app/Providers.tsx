"use client";

import { TooltipProvider } from "@chaii/ui/components/tooltip";
import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

import { TitleProvider } from "./(components)/title";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <TooltipProvider>
        <TitleProvider>{children}</TitleProvider>
      </TooltipProvider>
    </ClerkProvider>
  );
}
