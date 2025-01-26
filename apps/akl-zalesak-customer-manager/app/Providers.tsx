"use client";

import { TooltipProvider } from "@chaii/ui/components/tooltip";
import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";

import { getClient } from "apollo/get-ssr-client";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <ApolloNextAppProvider makeClient={getClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </ApolloNextAppProvider>
    </ClerkProvider>
  );
}
