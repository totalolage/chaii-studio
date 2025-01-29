"use client";

import { useKey } from "rooks";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { assign } from "radash";
import { Button } from "@chaii/ui/components/button";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { CustomerForm } from "../../customer-form";

import { updateCustomer, updateCustomerSchema } from "./(update-customer)";

import { getDefaultValuesFromZodSchema } from "utils/get-form-defaults";
import { customersTable } from "db/schema";
import { SubmitButton } from "~/customer/customer-form/SubmitButton";

export const EditCustomerForm = ({
  className,
  customer,
}: {
  className?: string;
  customer: typeof customersTable.$inferSelect;
}) => {
  const { form, handleSubmitWithAction } = useHookFormAction(
    updateCustomer,
    zodResolver(updateCustomerSchema),
    {
      formProps: {
        defaultValues: assign(
          getDefaultValuesFromZodSchema(updateCustomerSchema),
          customer,
        ),
      },
    },
  );

  // Go back to customer view on escape
  const router = useRouter();
  useKey("Escape", () => router.replace(`/customer/${customer.id}`));

  return (
    <CustomerForm
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
          <Link href={`/customer/${customer.id}`} replace>
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
