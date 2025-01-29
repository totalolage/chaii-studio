import { Button, buttonVariants } from "@chaii/ui/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chaii/ui/components/popover";
import { cn } from "@chaii/ui/lib/utils";
import { Building, PlusIcon } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { ComponentType, PropsWithChildren } from "react";

export const AddEntityButton = ({ className }: { className?: string }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn("bg-primary-500 hover:bg-primary-600", className)}
        >
          <PlusIcon className="size-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <menu>
          <EntityRow link="/customer/create" Icon={Building}>
            Create Customer
          </EntityRow>
        </menu>
      </PopoverContent>
    </Popover>
  );
};

const EntityRow = <T extends string>({
  link,
  children,
  Icon,
}: PropsWithChildren<{
  link: Route<T>;
  Icon: ComponentType<{ className?: string }>;
}>) => (
  <li>
    <Link
      href={link}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "flex w-full justify-start gap-1",
      )}
    >
      <Icon className="size-4" />
      <span className="pl-2">{children}</span>
    </Link>
  </li>
);
