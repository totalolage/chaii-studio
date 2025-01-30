import { Control, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@chaii/ui/components/form";
import { Input } from "@chaii/ui/components/input";
import { cn } from "@chaii/ui/lib/utils";
import { ComponentProps } from "react";

export const CustomerField = <Schema extends {}>({
  control,
  type,
  name,
  label,
}: {
  control: Control<Schema>;
  type?: ComponentProps<typeof Input>["type"];
  name: Path<Schema>;
  label: string;
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field, fieldState }) => (
      <FormItem className="relative mt-2 space-y-[unset]">
        <FormControl>
          <Input
            {...field}
            className={cn(
              "focus:placeholder-[transparent]",
              fieldState.invalid && "border-destructive",
            )}
            value={field.value ?? undefined}
            type={type}
            placeholder=""
          />
        </FormControl>
        <FormLabel
          className={cn(
            "center-y pointer-events-none absolute left-1 bg-white px-1.5 leading-none opacity-100 transition-all",
            "[input:is(:not(:placeholder-shown),:focus)+&]:bottom-full [input:placeholder-shown:not(:focus)+&]:text-base",
            fieldState.invalid ? "text-destructive" : "text-muted-foreground",
          )}
        >
          {label}
        </FormLabel>
        {fieldState.invalid && <FormMessage />}
      </FormItem>
    )}
  />
);
