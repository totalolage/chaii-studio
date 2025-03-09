"use client";

import { Form } from "@chaii/ui/components/form";
import NextForm from "next/form";
import { ReactNode } from "react";
import { Path, UseFormReturn } from "react-hook-form";

import { CreateTechnicianSchema, UpdateTechnicianSchema } from "../schemas";

import { TechnicianTemplate } from "./TechnicianTemplate";

import { InputField } from "~/components/InputField";

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
