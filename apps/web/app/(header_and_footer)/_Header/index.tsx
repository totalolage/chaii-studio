import Link from "next/link";
import { NavMenuFull, NavMenuCompact } from "./NavMenu";
import { cn } from "@chaii/ui/lib/utils";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <header
      className={cn(
        "sticky -top-10 flex h-24 items-center bg-primary @container",
        className,
      )}
    >
      <div className="container sticky top-0 flex justify-between space-x-4 py-2">
        <Link href="/">
          <h1 className="text-3xl text-white">Chaii Studio</h1>
        </Link>

        <NavMenuFull className="hidden @xl:block" />
        <NavMenuCompact className="@xl:hidden" />
      </div>
    </header>
  );
}
