import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@chaii/ui/components/tooltip";
import { cn } from "@chaii/ui/lib/utils";

export default function FooterMeta({ className }: { className?: string }) {
  return (
    <div className={cn("text-2xs", className)}>
      <hr className="-z-20  w-full border-b-[1.5px] border-t-0 border-b-black" />
      <div className="flex justify-between px-[var(--footer-x-pad)] [&>*]:py-4">
        {copyright}
      </div>
      <hr className="-z-20  w-full border-b-[1.5px] border-t-0 border-b-black" />
    </div>
  );
}

const copyright = (
  <Tooltip>
    <TooltipTrigger asChild>
      <span className="cursor-help">
        ©&nbsp;
        {`${new Intl.DateTimeFormat(undefined, {
          year: "numeric",
        }).format()} Chaii`}
        &nbsp;Studio
      </span>
    </TooltipTrigger>
    <TooltipContent>
      just kidding, intellectual property is a farce
    </TooltipContent>
  </Tooltip>
);
