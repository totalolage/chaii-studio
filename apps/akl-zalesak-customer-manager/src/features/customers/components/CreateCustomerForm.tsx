"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createCustomer } from "../actions";
import { createCustomerSchema, CreateCustomerSchema } from "../schemas";

import { CustomerForm } from "./CustomerForm";

import { SubmitButton } from "~/components/SubmitButton";
import { getDefaultValuesFromZodSchema } from "~/utils";

export const CreateCustomerForm = ({ className }: { className?: string }) => {
  const form = useForm<CreateCustomerSchema>({
    defaultValues: getDefaultValuesFromZodSchema(createCustomerSchema),
    resolver: zodResolver(createCustomerSchema),
  });

  return (
    <CustomerForm
      form={form}
      action={form.handleSubmit((data) => createCustomer(data))}
      actions={
        <SubmitButton loading={form.formState.isSubmitting}>
          Create
        </SubmitButton>
      }
      className={className}
    />
  );
};
