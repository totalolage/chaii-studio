"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomerForm } from "../customer-form";
import { SubmitButton } from "../customer-form/SubmitButton";

import { createCustomerSchema, CreateCustomerSchema } from "./schema";
import { createCustomer } from "./action";

import { getDefaultValuesFromZodSchema } from "utils/get-form-defaults";

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
