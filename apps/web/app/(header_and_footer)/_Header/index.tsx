"use client";
import { NavMenuFull } from "./NavMenu";
import { cn } from "@chaii/ui/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@chaii/ui/components/accordion";
import { useRef, useState } from "react";
import { useOutsideClick } from "rooks";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  const [open, setOpen] = useState(false);

  const accordionTriggerRef = useRef(null);
  const accordionContentRef = useRef(null);
  useOutsideClick(accordionContentRef, (ev) => {
    // Prevents closing and instantly reopening the menu by clicking the trigger
    if (ev.target === accordionTriggerRef.current) return;
    setOpen(false);
  });

  return (
    <Accordion
      type="single"
      collapsible
      asChild
      value={open ? "menu" : ""}
      onValueChange={(value) => setOpen(value === "menu")}
      className={cn(
        "sticky flex flex-col justify-center border-b-3 border-b-black @container",
        className,
      )}
    >
      <header>
        <AccordionItem value="menu" className="border-0">
          <AccordionTrigger
            className="ml-auto h-[90px] justify-end py-0 !no-underline [&_.lucide-chevron-down]:hidden"
            ref={accordionTriggerRef}
          >
            menu
          </AccordionTrigger>
          <AccordionContent
            asChild
            className="absolute"
            ref={accordionContentRef}
          >
            <NavMenuFull />
          </AccordionContent>
        </AccordionItem>
      </header>
    </Accordion>
  );
}
