"use client";

import { TooltipProvider } from "@chaii/ui/components/tooltip";
import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ClerkProvider>
  );
}
