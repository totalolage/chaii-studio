"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ServiceForm } from "../service-form";
import { SubmitButton } from "../service-form/SubmitButton";

import { createServiceSchema, CreateServiceSchema } from "./schema";
import { createService } from "./action";

import { getDefaultValuesFromZodSchema } from "utils/get-form-defaults";

export const CreateServiceForm = ({ className }: { className?: string }) => {
  const form = useForm<CreateServiceSchema>({
    defaultValues: getDefaultValuesFromZodSchema(createServiceSchema),
    resolver: zodResolver(createServiceSchema),
  });

  return (
    <ServiceForm
      form={form}
      action={form.handleSubmit((data) => createService(data))}
      actions={
        <SubmitButton loading={form.formState.isSubmitting}>
          Create
        </SubmitButton>
      }
      className={className}
    />
  );
};
