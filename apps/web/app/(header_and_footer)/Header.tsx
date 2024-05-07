import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@chaii/ui/components/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@chaii/ui/components/sheet";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { Route } from "next";
import { Button } from "@chaii/ui/components/button";

const NAVIGATION: { title: string; href: Route }[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Eshop",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 bg-primary text-white py-4 @container">
      <div className="flex justify-between container space-x-4">
        <Link href="/">
          <h1 className="text-3xl">Chaii Studio</h1>
        </Link>

        <Sheet>
          <SheetTrigger className="align-self-end @xl:hidden">
            <Bars2Icon className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader className="mb-8">
              <h2 className="text-left">Menu</h2>
            </SheetHeader>
            <NavigationMenu orientation="vertical" className="ms-auto">
              <NavigationMenuList className="flex-col space-x-0 space-y-2 items-end">
                {NAVIGATION.map(({ title, href }) => (
                  <NavigationMenuItem key={title}>
                    <Link href={href}>
                      <SheetTrigger asChild>
                        <Button variant="link" size="lg">
                          {title}
                        </Button>
                      </SheetTrigger>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>

        <NavigationMenu className="hidden @xl:flex">
          <NavigationMenuList className="flex space-x-4">
            {NAVIGATION.map(({ title, href }) => (
              <NavigationMenuItem key={title}>
                <Link href={href}>
                  <Button variant="link" className="text-white">
                    {title}
                  </Button>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
