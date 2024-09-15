"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@chaii/ui/lib/utils";
import { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import { useOutsideClick } from "rooks";
import { Route } from "next";
import { usePathname } from "next/navigation";
import { ValueOf } from "type-fest";
import { partition } from "lodash/fp";
import ChaiiSquiggle from "~/(components)/squiggle";
import ArrowUpIcon from "~/(components)/(icons)/arrow-up";

export default function MobileMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  const accordionTriggerRef = useRef<HTMLButtonElement>(null);
  const accordionContentRef = useRef<HTMLDivElement>(null);
  useOutsideClick(accordionContentRef, (ev) => {
    // Prevents closing and instantly reopening the menu by clicking the trigger
    if (
      ev.target instanceof HTMLElement &&
      accordionTriggerRef.current?.contains(ev.target)
    )
      return;
    setOpen(false);
  });

  const pathname = usePathname();
  const [[activeLink], inactiveLinks] = partition(
    (link) => getBestMatchingLink(pathname) === link,
    LINKS,
  );

  const linkLabels = {
    "/": "Home",
    "/page1": "Page 1",
    "/page2": "Page 2",
    "/page3": "Page 3",
  };

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      asChild
      value={open ? "menu" : ""}
      onValueChange={(value) => setOpen(value === "menu")}
      className={cn(
        "sticky flex flex-col justify-center @container",
        className,
      )}
    >
      <header>
        <AccordionPrimitive.Item
          value="menu"
          className="border-b-[1.5px] border-b-black text-sm font-semibold"
        >
          <AccordionPrimitive.Header className="flex flex-col">
            <AccordionPrimitive.Trigger
              ref={accordionTriggerRef}
              className="[&[data-state=open]_svg]:rotate-180"
            >
              <div
                className={cn(
                  "flex items-center justify-end border-b-[1.5px] border-b-black px-4",
                  ITEM_HEIGHT,
                )}
              >
                menu
              </div>
              <hr className="w-full" />
              <div className="relative">
                <ArrowUpIcon className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 transition-transform duration-200" />
                {activeLink && (
                  <>
                    <span className={menuItemStyles}>
                      {linkLabels[activeLink]}
                    </span>
                    <ChaiiSquiggle className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2" />
                  </>
                )}
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content
            ref={accordionContentRef}
            className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          >
            <NavigationMenuPrimitive.Root
              orientation="vertical"
              onClick={() => setOpen(false)}
            >
              {inactiveLinks.map((href) => (
                <MenuLink key={href} href={href}>
                  {linkLabels[href]}
                </MenuLink>
              ))}
            </NavigationMenuPrimitive.Root>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      </header>
    </AccordionPrimitive.Root>
  );
}

function MenuLink({
  children,
  href,
  className,
  active,
}: {
  children: ReactNode;
  href: Route;
  className?: string;
  active?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Link
      asChild
      active={active}
      className={cn(menuItemStyles, className)}
    >
      <Link href={href}>{children}</Link>
    </NavigationMenuPrimitive.Link>
  );
}

const ITEM_HEIGHT = "h-[45px]";
const menuItemStyles = cn("flex items-center justify-center", ITEM_HEIGHT);

const LINKS = ["/", "/page1", "/page2", "/page3"] satisfies Route[];
const getBestMatchingLink = (pathname: string): ValueOf<typeof LINKS> => {
  const linksByLength = LINKS.toSorted((a, b) => b.length - a.length);
  const mostMatchingLink = linksByLength.find((link) =>
    pathname.startsWith(link),
  );
  return mostMatchingLink || "/";
};
