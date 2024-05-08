import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@chaii/ui/components/tooltip";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4 @container">
      <div className="container flex items-center flex-col @md:flex-row @md:justify-between @md:items-normal">

        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              ©&nbsp;
              {new Intl.DateTimeFormat(undefined, {
                year: "numeric",
              }).format()}{" "}
              Chaii&nbsp;Studio
            </span>
          </TooltipTrigger>
          <TooltipContent>
            just kidding, intellectual property is a farce
          </TooltipContent>
        </Tooltip>

        <a href="mailto:contact@chaii.studio" className="flex space-x-1 items-center">
          <EnvelopeIcon className="size-4" />
          <span>contact@chaii.studio</span>
        </a>
          
      </div>
    </footer>
  );
}
