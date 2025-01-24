import { cn } from "@chaii/ui/lib/utils";
import { ComponentProps } from "react";

export default function Asterisk({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width={(81 / 2) * 0.95}
      height={(77 / 2) * 0.95}
      viewBox="0 0 81 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-canary", className)}
      {...props}
    >
      <path
        d="M26.8499 76.9297L8.50992 63.5798L22.1299 44.9697L0.419922 38.0898L7.15992 16.3798L29.1399 23.5298V0.739746H51.7899V23.5298L73.4999 16.3798L80.5099 38.0898L58.5299 44.9697L72.1499 63.5798L53.8099 76.9297L40.4599 58.1898L26.8399 76.9297H26.8499Z"
        fill="currentColor"
      />
    </svg>
  );
}
