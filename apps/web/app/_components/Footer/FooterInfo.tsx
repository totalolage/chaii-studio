import { cn } from "@chaii/ui/lib/utils";
import { Route } from "next";
import Link from "next/link";

export default function FooterInfo({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4 px-[var(--footer-x-pad)]", className)}>
      <div className="mx-auto w-fit space-y-2">
        {address}
        {contacts}
      </div>
      <div className="flex items-center self-stretch">
        {pages}
        <span className="flex-1 text-center text-5xl font-bold text-blue">
          ✱
        </span>
        {socials}
      </div>
    </div>
  );
}

const address = (
  <div className="flex flex-col">
    <span>Sokolovská 1680/178</span>
    <span>180 00 Praha 8 - Libeň</span>
    <span>Czech Republic</span>
  </div>
);

const contacts = (
  <ul className="flex flex-col">
    {[
      "contact@chaii.studio",
      "chloe.winkel@chaii.studio",
      "filip.kalny@chaii.studio",
    ].map((email) => (
      <li key={email}>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
    ))}
  </ul>
);

const pages = (
  <nav className="flex flex-col">
    {(
      [
        { label: "work", href: "/our-work" },
        { label: "about us", href: "/about-us" },
        { label: "services", href: "/services" },
        { label: "shop", href: "/shop" },
      ] satisfies {
        label: string;
        href: Route;
      }[]
    ).map(({ label, href }) => (
      <Link key={href} href={href}>
        {label}
      </Link>
    ))}
  </nav>
);

const socials = (
  <ul className="flex flex-col text-right">
    {[
      { label: "instagram", href: "https://www.instagram.com/chaii.design" },
      {
        label: "linkedin",
        href: "https://www.linkedin.com/company/chaii-studio",
      },
      { label: "behance", href: "https://www.behance.net/chaii-studio" },
    ].map(({ label, href }) => (
      <li key={href}>
        <a href={`https://www.chaii.studio`}>{label}</a>
      </li>
    ))}
  </ul>
);
