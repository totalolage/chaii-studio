import { Button } from "@chaii/ui/components/button";
import { ChevronRight } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { ComponentProps } from "react";

export const ViewButton = ({
  href,
  className,
  ...props
}: ComponentProps<typeof Button> & {
  href: Route;
  className?: string;
}) => (
  <Link className={className} href={href}>
    <Button variant="ghost" size="icon" {...props}>
      <ChevronRight className="size-4" />
      <span className="sr-only">Zobrazit</span>
    </Button>
  </Link>
);
