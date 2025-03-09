"use client";

import { Button } from "@chaii/ui/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { assign } from "radash";
import { useKey } from "rooks";

import { updateTechnician } from "../actions";
import { updateTechnicianSchema } from "../schemas";

import { TechnicianForm } from "./TechnicianForm";

import { SubmitButton } from "~/components/SubmitButton";
import schema from "~/db/schema";
import { getDefaultValuesFromZodSchema } from "~/utils";

export const EditTechnicianForm = ({
  className,
  technician,
}: {
  className?: string;
  technician: typeof schema.techniciansTable.$inferSelect;
}) => {
  const { form, handleSubmitWithAction } = useHookFormAction(
    updateTechnician,
    zodResolver(updateTechnicianSchema),
    {
      formProps: {
        defaultValues: assign(
          getDefaultValuesFromZodSchema(updateTechnicianSchema),
          technician,
        ),
      },
    },
  );

  // Go back to technician view on escape
  const router = useRouter();
  useKey("Escape", () => router.replace(`/technician/${technician.id}`));

  return (
    <TechnicianForm
      form={form}
      action={handleSubmitWithAction}
      actions={
        <>
          <SubmitButton
            loading={form.formState.isSubmitting}
            disabled={!form.formState.isDirty}
          >
            Update
          </SubmitButton>
          <Link href={`/technician/${technician.id}`} replace>
            <Button variant="secondary" size="icon">
              <X className="size-4" />
              <span className="sr-only">Cancel</span>
            </Button>
          </Link>
        </>
      }
      className={className}
    />
  );
};
