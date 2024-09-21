"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@chaii/ui/lib/utils";
import { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import { useOutsideClick } from "rooks";
import { Route } from "next";
import { usePathname } from "next/navigation";
import { curry } from "lodash/fp";
import ChaiiSquiggle from "~/(components)/squiggle.sm";
import ArrowUpIcon from "~/(components)/(icons)/arrow-up";

export default function MobileMenu({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
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
  const isActiveLink = isActiveLinkFab(pathname);

  const activeLink = LINKS.find(isActiveLink);

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
        <AccordionPrimitive.Item value="menu" className="text-sm font-semibold">
          <AccordionPrimitive.Header className="flex flex-col">
            <AccordionPrimitive.Trigger
              ref={accordionTriggerRef}
              className="[&[data-state=open]_svg]:rotate-180"
            >
              <div
                className={cn(
                  "flex items-center justify-end px-4",
                  ITEM_HEIGHT,
                )}
              >
                menu
              </div>
              <hr className="w-full  border-b-[1.5px] border-t-0 border-b-black" />
              {!compact && (
                <div className="relative">
                  <ArrowUpIcon className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 transition-transform duration-200" />
                  {activeLink && (
                    <MenuItem href={activeLink}>
                      {linkLabels[activeLink]}
                    </MenuItem>
                  )}
                </div>
              )}
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content
            ref={accordionContentRef}
            className={cn(
              "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            )}
          >
            <NavigationMenuPrimitive.Root
              orientation="vertical"
              onClick={() => setOpen(false)}
            >
              {LINKS.filter((link) => compact || !isActiveLink(link)).map(
                (href) => (
                  <MenuLink key={href} href={href}>
                    {linkLabels[href]}
                  </MenuLink>
                ),
              )}
            </NavigationMenuPrimitive.Root>
          </AccordionPrimitive.Content>
          <hr
            className={cn(
              "w-full  border-b-[1.5px] border-t-0 border-b-black",
              compact && "[[data-state=closed]_&]:hidden",
            )}
          />
        </AccordionPrimitive.Item>
      </header>
    </AccordionPrimitive.Root>
  );
}

const ITEM_HEIGHT = "h-[45px]";
function MenuItem({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: Route;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex items-center justify-center",
        ITEM_HEIGHT,
        className,
      )}
    >
      {children}
      {useIsActive(href) && (
        <ChaiiSquiggle className="absolute left-1/2 top-1/2 -z-50 -translate-x-1/2 -translate-y-1/2" />
      )}
    </span>
  );
}

function MenuLink({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: Route;
  className?: string;
}) {
  const isActive = useIsActive(href);
  return (
    <NavigationMenuPrimitive.Link asChild active={isActive}>
      <Link href={href}>
        <MenuItem href={href} className={className}>
          {children}
        </MenuItem>
      </Link>
    </NavigationMenuPrimitive.Link>
  );
}

const LINKS = ["/", "/about-us", "/our-work"] satisfies Route[];

const linkLabels: Record<(typeof LINKS)[number], string> = {
  "/": "Home",
  "/about-us": "About us",
  "/our-work": "Work",
};

const isActiveLinkFab = curry((pathname: string, link: Route) => {
  const linksByLength = LINKS.sort((a, b) => b.length - a.length);
  const mostMatchingLink = linksByLength.find((link) =>
    pathname.startsWith(link),
  );
  return mostMatchingLink === link;
});
const useIsActive = (link: Route) => isActiveLinkFab(usePathname())(link);
