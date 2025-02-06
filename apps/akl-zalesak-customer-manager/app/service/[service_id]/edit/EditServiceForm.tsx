"use client";

import { useKey } from "rooks";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { assign } from "radash";
import { Button } from "@chaii/ui/components/button";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ServiceForm } from "../../service-form";

import { updateService, updateServiceSchema } from "./(update-service)";

import { getDefaultValuesFromZodSchema } from "utils/get-form-defaults";
import { servicesTable } from "db/schema";
import { SubmitButton } from "~/(components)/submit-button";

export const EditServiceForm = ({
  className,
  service,
}: {
  className?: string;
  service: typeof servicesTable.$inferSelect;
}) => {
  const { form, handleSubmitWithAction } = useHookFormAction(
    updateService,
    zodResolver(updateServiceSchema),
    {
      formProps: {
        defaultValues: assign(
          getDefaultValuesFromZodSchema(updateServiceSchema),
          service,
        ),
      },
    },
  );

  // Go back to service view on escape
  const router = useRouter();
  useKey("Escape", () => router.replace(`/service/${service.id}`));

  return (
    <ServiceForm
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
          <Link href={`/service/${service.id}`} replace>
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
