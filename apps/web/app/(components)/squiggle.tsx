import { cn } from "@chaii/ui/lib/utils";
import { ComponentProps } from "react";

// https://www.figma.com/design/SkUPwgldrXZp15i2rIs7JE/Chaii-website?node-id=7-1344&node-type=frame&t=inZ2AJA4Uhsx9S2r-0
export default function ChaiiSquiggle({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width="78"
      height="18.5"
      viewBox="0 0 156 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-canary", className)}
      {...props}
    >
      <path
        d="M8.54004 8.79102C16.26 8.79102 16.26 28.241 23.97 28.241C31.68 28.241 31.69 8.79102 39.4 8.79102C47.11 8.79102 47.12 28.241 54.83 28.241C62.54 28.241 62.55 8.79102 70.27 8.79102C77.99 8.79102 77.99 28.241 85.7 28.241C93.41 28.241 93.42 8.79102 101.14 8.79102C108.86 8.79102 108.86 28.241 116.58 28.241C124.3 28.241 124.3 8.79102 132.02 8.79102C139.74 8.79102 139.74 28.241 147.46 28.241"
        stroke="currentColor"
        stroke-width="17"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
}
