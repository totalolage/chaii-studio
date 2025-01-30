import { Merge } from "type-fest";
import { Button } from "@chaii/ui/components/button";
import { Check } from "lucide-react";
import { ComponentProps } from "react";

export const SubmitButton = ({
  children,
  ...props
}: Merge<
  ComponentProps<typeof Button>,
  {
    children: string;
  }
>) => (
  <Button
    variant="default"
    size="icon"
    className="bg-green-600 hover:bg-green-700"
    type="submit"
    tabIndex={100}
    {...props}
  >
    <Check className="size-4" />
    <span className="sr-only">{children}</span>
  </Button>
);
