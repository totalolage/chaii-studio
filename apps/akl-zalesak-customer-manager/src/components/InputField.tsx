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
import { Control, Path } from "react-hook-form";

export const InputField = <Schema extends {}>({
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
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
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
            "pointer-events-none absolute left-1 bg-white px-1.5 leading-none opacity-100 transition-all center-y",
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
