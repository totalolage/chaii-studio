import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@chaii/ui/components/tooltip";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

export default function Footer() {
  return (
    <footer className="bg-primary py-4 text-white @container">
      <div className="container flex flex-col items-center @md:flex-row @md:justify-between">
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

        <a
          href="mailto:contact@chaii.studio"
          className="flex items-center space-x-1"
        >
          <EnvelopeIcon className="size-4" />
          <span>contact@chaii.studio</span>
        </a>
      </div>
    </footer>
  );
}
