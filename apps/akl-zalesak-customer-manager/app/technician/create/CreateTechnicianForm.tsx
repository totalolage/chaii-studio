"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TechnicianForm } from "../(technician-form)";

import { createTechnicianSchema, CreateTechnicianSchema } from "./schema";
import { createTechnician } from "./action";

import { getDefaultValuesFromZodSchema } from "utils/get-form-defaults";
import { SubmitButton } from "~/(components)/submit-button";

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
          Vytvořit
        </SubmitButton>
      }
      className={className}
    />
  );
};
