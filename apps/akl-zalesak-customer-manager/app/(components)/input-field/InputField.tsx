import { Control, FieldPathValue, Path } from "react-hook-form";
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
import { Merge } from "type-fest";

export const InputField = <Schema extends {}, Name extends Path<Schema>>({
  control,
  type,
  name,
  label,
  valueSerializer = (value) => value as string,
  valueDeserializer = (value) => value,
  ...props
}: Merge<
  ComponentProps<typeof Input>,
  {
    control: Control<Schema>;
    type?: ComponentProps<typeof Input>["type"];
    name: Name;
    label: string;
    valueSerializer?: (value: FieldPathValue<Schema, Name>) => string;
    valueDeserializer?: (value: string) => FieldPathValue<Schema, Name>;
  }
>) => {
  return (
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
              value={valueSerializer(field.value ?? undefined)}
              onChange={(event) => {
                console.log(event.target.value);
                field.onChange(valueDeserializer(event.target.value));
              }}
              type={type}
              placeholder=""
              {...props}
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
};
