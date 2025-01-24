"use client";

import { TooltipProvider } from "@chaii/ui/components/tooltip";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
