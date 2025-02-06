"use client";

import { Control, UseFormReturn } from "react-hook-form";
import { Form } from "@chaii/ui/components/form";
import NextForm from "next/form";
import { ReactNode } from "react";
import { format, isValid, parse } from "date-fns";

import ServiceTemplate from "../service-template";
import { CreateServiceSchema } from "../create/schema";
import { UpdateServiceSchema } from "../[service_id]/edit/(update-service)";

import { InputField } from "~/(components)/input-field";

export function ServiceForm<
  Schema extends CreateServiceSchema | UpdateServiceSchema,
>({
  form,
  className,
  actions,
  action,
}: {
  form: UseFormReturn<Schema>;
  className?: string;
  actions: ReactNode;
  action: () => void;
}) {
  //console.log(form.getValues(["time"])[0]);

  return (
    <Form {...form}>
      <NextForm className={className} action={action}>
        <ServiceTemplate
          error={form.formState.errors.root?.["submit"]?.message}
          actions={actions}
          time={
            <InputField
              control={
                form.control as Control<
                  CreateServiceSchema | UpdateServiceSchema
                >
              }
              name="time"
              label="Čas zakázky"
              type="datetime-local"
              step={60} // 1 minute step
              valueSerializer={(value) => {
                if (!value) return "";
                if (!isValid(value)) return "";
                return format(value, "yyyy-MM-dd'T'HH:mm");
              }}
              valueDeserializer={(value) =>
                parse(value, "yyyy-MM-dd'T'HH:mm", new Date())
              }
            />
          }
          company="Zákazník"
          technicians="Technici"
        />
      </NextForm>
    </Form>
  );
}
