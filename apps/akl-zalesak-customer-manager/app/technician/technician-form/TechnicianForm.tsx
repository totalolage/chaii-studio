"use client";

import { Path, UseFormReturn } from "react-hook-form";
import { Form } from "@chaii/ui/components/form";
import NextForm from "next/form";
import { ReactNode } from "react";

import TechnicianTemplate from "../technician-template";
import { CreateTechnicianSchema } from "../create/schema";
import { UpdateTechnicianSchema } from "../[technician_id]/edit/(update-technician)";

import { InputField } from "~/(components)/input-field";

export function TechnicianForm<
  Schema extends CreateTechnicianSchema | UpdateTechnicianSchema,
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
  console.log(form.formState.errors);
  return (
    <Form {...form}>
      <NextForm className={className} action={action}>
        <TechnicianTemplate
          error={form.formState.errors.root?.["submit"]?.message}
          actions={actions}
          name={
            <InputField
              control={form.control}
              name={"name" satisfies keyof Schema as Path<Schema>}
              label="Jméno"
            />
          }
          phone={
            <InputField
              control={form.control}
              name={"phone" satisfies keyof Schema as Path<Schema>}
              label="Telefon"
              type="tel"
            />
          }
          email={
            <InputField
              control={form.control}
              name={"email" satisfies keyof Schema as Path<Schema>}
              label="Email"
              type="email"
            />
          }
        />
      </NextForm>
    </Form>
  );
}
