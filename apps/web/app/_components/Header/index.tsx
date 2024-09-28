"use client";

import { Route } from "next";
import { usePathname } from "next/navigation";
import { cn } from "@chaii/ui/lib/utils";

import MobileMenu from "./chaii-mobile-accordion";

const compactHeaderRoutes: Route[] = ["/", "/our-work"];

export default function Header({
  className,
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const compact = compactHeaderRoutes.some((route) => pathname.startsWith(route));

  return <MobileMenu className={cn("bg-background", className)} compact={compact} />;
}
