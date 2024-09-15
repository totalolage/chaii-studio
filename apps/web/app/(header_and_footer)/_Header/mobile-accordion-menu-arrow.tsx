import { ComponentProps } from "react";

// https://www.figma.com/design/SkUPwgldrXZp15i2rIs7JE/Chaii-website?node-id=7-1344&node-type=FRAME&t=4MgYCo4dU8BBZMNP-0
export default function MobileAccordionMenuArrow(props: ComponentProps<"svg">) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 1.20996V44.79M23 44.79L9.62 31.41M23 44.79L36.38 31.41"
        stroke="currentColor"
        stroke-width="3"
        stroke-miterlimit="10"
      />
    </svg>
  );
}
