"use client";

import { useKey } from "rooks";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { assign } from "radash";
import { Button } from "@chaii/ui/components/button";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { TechnicianForm } from "../../technician-form";

import { updateTechnician, updateTechnicianSchema } from "./(update-technician)";

import { getDefaultValuesFromZodSchema } from "utils/get-form-defaults";
import { techniciansTable } from "db/schema";
import { SubmitButton } from "~/technician/technician-form/SubmitButton";

export const EditTechnicianForm = ({
  className,
  technician,
}: {
  className?: string;
  technician: typeof techniciansTable.$inferSelect;
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
