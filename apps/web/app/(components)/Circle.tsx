import { cn } from "@chaii/ui/lib/utils";
import { ComponentProps } from "react";

export default function Circle({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width={(272 / 2) * 0.9}
      height={(131 / 2) * 0.9}
      viewBox="0 0 272 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-blue", className)}
      {...props}
    >
      <path
        d="M187.51 4.22932C155.81 0.639315 72.7 5.4393 20.14 50.2093C6.09995 62.1693 -1.15007 82.4893 7.23993 99.7393C23.5599 133.299 127.73 141.649 220.91 93.8793C237.41 85.4193 271.57 62.1793 268.6 43.8593C264.35 17.6093 207.3 3.26932 163.3 18.6993"
        stroke="currentColor"
        strokeWidth="6"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
