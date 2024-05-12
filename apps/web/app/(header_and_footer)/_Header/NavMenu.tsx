"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@chaii/ui/components/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@chaii/ui/components/sheet";
import Link from "next/link";
import { Route } from "next";
import { buttonVariants } from "@chaii/ui/components/button";
import { cn } from "@chaii/ui/lib/utils";
import { usePathname } from "next/navigation";
import { createContext, use, useState } from "react";
import { Bars2Icon } from "@heroicons/react/16/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@chaii/ui/components/accordion";

const itemStyle = cn(
  "text-sm",
  buttonVariants({ variant: "link", size: "lg" }),
  navigationMenuTriggerStyle(),
);

type NavItem = {
  title: string;
  href: Route;
};

const useIsNavItemActive = () => {
  const pathname = usePathname();
  return (item: NavItem) => pathname.startsWith(item.href);
};

type NavContext = {
  direction: "vertical" | "horizontal";
  onLinkClick?: () => void;
};
const navContext = createContext<NavContext>(null as any);

function MenuItem({
  navItem,
  className,
}: {
  navItem: NavItem;
  className?: string;
}) {
  const { onLinkClick } = use(navContext);
  const isNavItemActive = useIsNavItemActive();

  return (
    <NavigationMenuItem key={navItem.title} asChild>
      <Link href={navItem.href} legacyBehavior passHref>
        <NavigationMenuLink
          active={isNavItemActive(navItem)}
          className={cn(itemStyle, className)}
          onClick={onLinkClick}
        >
          {navItem.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

type NavItemCollection = {
  title: string;
  items: NavItem[];
};

const useIsNavItemCollectionActive = () => {
  const isNavItemActive = useIsNavItemActive();
  return (navItemCollection: NavItemCollection) =>
    navItemCollection.items.some(isNavItemActive);
};

function MenuItemCollectionHorizontal({ title, items }: NavItemCollection) {
  const navContextValue = use(navContext);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <navContext.Provider value={navContextValue}>
          <NavigationMenuList>
            {items.map((item) => (
              <MenuItem key={item.title} navItem={item} />
            ))}
          </NavigationMenuList>
        </navContext.Provider>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function MenuItemCollectionVertical({ title, items }: NavItemCollection) {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className={itemStyle}>{title}</AccordionTrigger>
      <AccordionContent asChild>
        <NavigationMenuList className="flex-col items-stretch space-x-0">
          {items.map((item) => (
            <MenuItem key={item.title} navItem={item} className="w-full" />
          ))}
        </NavigationMenuList>
      </AccordionContent>
    </AccordionItem>
  );
}

function MenuItemCollection(props: NavItemCollection) {
  const { direction } = use(navContext);

  switch (direction) {
    case "horizontal":
      return <MenuItemCollectionHorizontal {...props} />;
    case "vertical":
      return <MenuItemCollectionVertical {...props} />;
  }
}

type NavTopItem = NavItem | NavItemCollection;
const isNavItemCollection = (
  navItem: NavTopItem,
): navItem is NavItemCollection => "items" in navItem;

type NavTopItemsProps = {
  navItems: NavTopItem[];
  className?: string;
};

function TopNavItemsHorizontal({ navItems, className }: NavTopItemsProps) {
  return (
    <NavigationMenuList
      className={cn("flex-row space-x-2 space-y-0 items-center", className)}
    >
      {navItems.map((navItem) =>
        isNavItemCollection(navItem) ? (
          <MenuItemCollection key={navItem.title} {...navItem} />
        ) : (
          <MenuItem key={navItem.title} navItem={navItem} />
        ),
      )}
    </NavigationMenuList>
  );
}

function TopNavItemsVertical({ navItems, className }: NavTopItemsProps) {
  const isNavItemCollectionActive = useIsNavItemCollectionActive();
  const [value, setValue] = useState(
    navItems.filter(isNavItemCollection).find(isNavItemCollectionActive)?.title,
  );
  return (
    <Accordion
      type="single"
      collapsible
      className={className}
      value={value}
      onValueChange={setValue}
    >
      {navItems.map((navItem) =>
        isNavItemCollection(navItem) ? (
          <MenuItemCollection key={navItem.title} {...navItem} />
        ) : (
          <MenuItem key={navItem.title} navItem={navItem} />
        ),
      )}
    </Accordion>
  );
}

function TopNavItems({
  onLinkClick,
  direction,
  ...props
}: NavTopItemsProps & NavContext) {
  return (
    <navContext.Provider value={{ direction, onLinkClick }}>
      {(() => {
        switch (direction) {
          case "horizontal":
            return <TopNavItemsHorizontal {...props} />;
          case "vertical":
            return <TopNavItemsVertical {...props} />;
        }
      })()}
    </navContext.Provider>
  );
}

const NAVIGATION: NavTopItem[] = [
  {
    title: "Page 1",
    href: "/page1",
  },
  {
    title: "Page 2 and 3",
    items: [
      {
        title: "Page 2",
        href: "/page2",
      },
      {
        title: "Page 3",
        href: "/page3",
      },
    ],
  },
];

type NavMenuProps = {
  className?: string;
};

export function NavMenuCompact({ className }: NavMenuProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={className}>
        <Bars2Icon className="size-8 text-white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="mb-8">
          <h2 className="text-left">Menu</h2>
        </SheetHeader>
        <NavigationMenu
          orientation="vertical"
          className="self-end justify-self-center align-self-center flex-grow-0"
        >
          <TopNavItems
            navItems={NAVIGATION}
            onLinkClick={close}
            direction="vertical"
          />
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}

export function NavMenuFull({ className }: NavMenuProps) {
  return (
    <NavigationMenu orientation="horizontal" className={className}>
      <TopNavItems navItems={NAVIGATION} direction="horizontal" />
    </NavigationMenu>
  );
}
