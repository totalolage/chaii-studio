"use client";

import { Route } from "next";
import { usePathname } from "next/navigation";
import { cn } from "@chaii/ui/lib/utils";

import MobileMenu from "./MobileMenu";

const compactHeaderRoutes: Route[] = ["/", "/our-work"];

export default function Header({ className }: { className?: string }) {
  const pathname = usePathname();
  const compact = compactHeaderRoutes.includes(pathname);

  return <MobileMenu className={cn("bg-white", className)} compact={compact} />;
}
