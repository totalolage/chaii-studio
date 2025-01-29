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

export  const CustomerField = <Schema extends {}>({
  control,
  type,
  name,
  label,
  placeholder,
}: {
  control: Control<Schema>;
  type?: ComponentProps<typeof Input>["type"];
  name: Path<Schema>;
  label: string;
  placeholder: string;
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field, fieldState }) => (
      <FormItem className="relative mt-2 space-y-[unset]">
        <FormLabel
          className={cn(
            "absolute bottom-[calc(100%_-_0.4em)] left-1 bg-white px-1.5 leading-none",
            fieldState.invalid ? "text-destructive" : "text-muted-foreground",
          )}
        >
          {label}
        </FormLabel>
        <FormControl>
          <Input
            {...field}
            className={cn(fieldState.invalid && "border-destructive")}
            value={field.value ?? undefined}
            type={type}
            placeholder={placeholder}
          />
        </FormControl>
        {fieldState.invalid && <FormMessage />}
      </FormItem>
    )}
  />
);
