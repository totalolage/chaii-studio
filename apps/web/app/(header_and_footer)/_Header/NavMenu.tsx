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

type NavItem = {
  title: string;
  href: Route;
};

type NavContext = {
  direction: "vertical" | "horizontal";
  onLinkClick?: () => void;
};
const navContext = createContext<NavContext>(null as any);

function MenuItem({ title, href }: NavItem) {
  const pathname = usePathname();
  const { onLinkClick } = use(navContext);

  return (
    <NavigationMenuItem key={title} asChild>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          active={pathname.startsWith(href)}
          className={cn(
            buttonVariants({ variant: "link", size: "lg" }),
            navigationMenuTriggerStyle(),
          )}
          onClick={onLinkClick}
        >
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

type NavItemCollection = {
  title: string;
  items: NavItem[];
};

function MenuItemCollection({ title, items }: NavItemCollection) {
  const navContextValue = use(navContext);
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <navContext.Provider value={navContextValue}>
          <NavigationMenuList>
            {items.map((item) => (
              <MenuItem key={item.title} {...item} />
            ))}
          </NavigationMenuList>
        </navContext.Provider>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

type NavTopItem = NavItem | NavItemCollection;

function TopNavItems({
  navItems,
  className,
  onLinkClick,
  direction,
}: {
  navItems: NavTopItem[];
  className?: string;
} & NavContext) {
  return (
    <navContext.Provider value={{ direction, onLinkClick }}>
      <NavigationMenuList
        className={cn(
          direction === "vertical" && "flex-col space-x-0 space-y-2 items-end",
          direction === "horizontal" &&
            "flex-row space-x-2 space-y-0 items-center",
          className,
        )}
      >
        {navItems.map((navItem) =>
          "items" in navItem ? (
            <MenuItemCollection key={navItem.title} {...navItem} />
          ) : (
            <MenuItem key={navItem.title} {...navItem} />
          ),
        )}
      </NavigationMenuList>
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
