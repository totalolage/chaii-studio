import Link from "next/link";
import { NavMenuFull, NavMenuCompact } from "./NavMenu";
import { cn } from "@chaii/ui/lib/utils";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <header
      className={cn("sticky h-24 -top-10 bg-primary @container flex items-center", className)}
    >
      <div className="flex justify-between container space-x-4 py-2 sticky top-0">
        <Link href="/">
          <h1 className="text-white text-3xl">Chaii Studio</h1>
        </Link>

        <NavMenuFull className="hidden @xl:block" />
        <NavMenuCompact className="@xl:hidden" />
      </div>
    </header>
  );
}
