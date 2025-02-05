import { Button } from "@chaii/ui/components/button";
import { Edit } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { ComponentProps } from "react";

export const EditButton = ({
  href,
  className,
  ...props
}: ComponentProps<typeof Button> & {
  href: Route;
  className?: string;
}) => (
  <Link className={className} href={href} replace>
    <Button variant="outline" size="icon" {...props}>
      <Edit className="size-4" />
      <span className="sr-only">Upravit</span>
    </Button>
  </Link>
);
