import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@chaii/ui/components/tooltip";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container">
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="text-center">
              ©&nbsp;
              {new Intl.DateTimeFormat(undefined, {
                year: "numeric",
              }).format()}{" "}
              Chaii&nbsp;Studio
            </p>
          </TooltipTrigger>
          <TooltipContent>
            just kidding, intellectual property is a spook
          </TooltipContent>
        </Tooltip>
      </div>
    </footer>
  );
}
