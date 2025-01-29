"use client";

import { Path, UseFormReturn } from "react-hook-form";
import { Form } from "@chaii/ui/components/form";
import NextForm from "next/form";
import { ReactNode } from "react";

import CustomerTemplate from "../customer-template";
import { CreateCustomerSchema } from "../create/schema";
import { UpdateCustomerSchema } from "../[customer_id]/edit/(update-customer)";

import { CustomerField } from "./CustomerField";

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
            <CustomerField
              control={form.control}
              name={"companyName" satisfies keyof Schema as Path<Schema>}
              label="Název společnosti"
              placeholder="ACME"
            />
          }
          contactPerson={
            <CustomerField
              control={form.control}
              name={"contactPerson" satisfies keyof Schema as Path<Schema>}
              label="Kontaktní osoba"
              placeholder="Jan Novák"
            />
          }
          contactEmail={
            <CustomerField
              control={form.control}
              name={"contactEmail" satisfies keyof Schema as Path<Schema>}
              label="Email"
              placeholder="jan.novak@example.com"
              type="email"
            />
          }
          streetAddress={
            <CustomerField
              control={form.control}
              name={"streetAddress" satisfies keyof Schema as Path<Schema>}
              label="Ulice"
              placeholder="Národní 2"
            />
          }
          city={
            <CustomerField
              control={form.control}
              name={"city" satisfies keyof Schema as Path<Schema>}
              label="Město"
              placeholder="Brno"
            />
          }
          postCode={
            <CustomerField
              control={form.control}
              name={"postCode" satisfies keyof Schema as Path<Schema>}
              label="PSČ"
              placeholder="123 45"
            />
          }
          country={
            <CustomerField
              control={form.control}
              name={"country" satisfies keyof Schema as Path<Schema>}
              label="Země"
              placeholder="Česká republika"
            />
          }
        />
      </NextForm>
    </Form>
  );
}
