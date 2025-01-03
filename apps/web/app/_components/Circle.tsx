import { cn } from "@chaii/ui/lib/utils";
import { ComponentProps } from "react";

export function Circle1({ className, ...props }: ComponentProps<"svg">) {
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

export function Circle2({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width={(125 / 2) * 0.9}
      height={(47 / 2) * 0.9}
      viewBox="0 0 125 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-blue", className)}
      {...props}
    >
      <path
        d="M64.37 1.81006C57.21 2.65006 44.75 4.96004 32.31 10.04C20.32 14.94 0.0699872 26.76 2.28999 35.35C5.39999 47.4 51.73 44.29 55.44 44.03C85.29 41.87 122.53 31.6101 122.54 22.3101C122.54 13.9901 93.33 6.75004 68.76 9.17004C62.23 9.81004 56.71 11.0899 52.47 12.3199"
        stroke="currentColor"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
