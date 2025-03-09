"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createTechnician } from "../actions";
import { createTechnicianSchema, CreateTechnicianSchema } from "../schemas";

import { TechnicianForm } from "./TechnicianForm";

import { SubmitButton } from "~/components/SubmitButton";
import { getDefaultValuesFromZodSchema } from "~/utils"

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
