"use client";

import { Path, UseFormReturn } from "react-hook-form";
import { Form } from "@chaii/ui/components/form";
import NextForm from "next/form";
import { ReactNode } from "react";

import CustomerTemplate from "../customer-template";
import { CreateCustomerSchema } from "../create/schema";
import { UpdateCustomerSchema } from "../[customer_id]/edit/(update-customer)";

import { InputField } from "~/(components)/input-field";

export function CustomerForm<
  Schema extends CreateCustomerSchema | UpdateCustomerSchema,
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
        <CustomerTemplate
          error={form.formState.errors.root?.["submit"]?.message}
          actions={actions}
          companyName={
            <InputField
              control={form.control}
              name={"companyName" satisfies keyof Schema as Path<Schema>}
              label="Název společnosti"
            />
          }
          contactPerson={
            <InputField
              control={form.control}
              name={"contactPerson" satisfies keyof Schema as Path<Schema>}
              label="Kontaktní osoba"
            />
          }
          contactEmail={
            <InputField
              control={form.control}
              name={"contactEmail" satisfies keyof Schema as Path<Schema>}
              label="Email"
              type="email"
            />
          }
          streetAddress={
            <InputField
              control={form.control}
              name={"streetAddress" satisfies keyof Schema as Path<Schema>}
              label="Ulice"
            />
          }
          city={
            <InputField
              control={form.control}
              name={"city" satisfies keyof Schema as Path<Schema>}
              label="Město"
            />
          }
          postCode={
            <InputField
              control={form.control}
              name={"postCode" satisfies keyof Schema as Path<Schema>}
              label="PSČ"
            />
          }
          country={
            <InputField
              control={form.control}
              name={"country" satisfies keyof Schema as Path<Schema>}
              label="Země"
            />
          }
        />
      </NextForm>
    </Form>
  );
}
