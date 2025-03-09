"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TechnicianForm } from "../technician-form";
import { SubmitButton } from "../technician-form/SubmitButton";

import { createTechnicianSchema, CreateTechnicianSchema } from "./schema";
import { createTechnician } from "./action";

import { getDefaultValuesFromZodSchema } from "utils/get-form-defaults";

export const CreateTechnicianForm = ({ className }: { className?: string }) => {
  const form = useForm<CreateTechnicianSchema>({
    defaultValues: getDefaultValuesFromZodSchema(createTechnicianSchema),
    resolver: zodResolver(createTechnicianSchema),
  });

  return (
    <TechnicianForm
      form={form}
      action={form.handleSubmit((data) => createTechnician(data))}
      actions={
        <SubmitButton loading={form.formState.isSubmitting}>
          Create
        </SubmitButton>
      }
      className={className}
    />
  );
};
