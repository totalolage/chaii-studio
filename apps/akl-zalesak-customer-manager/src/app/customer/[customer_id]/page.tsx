import { Button } from "@chaii/ui/components/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { z } from "zod";

import { DeleteButton } from "~/components/DeleteButton";
import { deleteCustomer } from "~/features/customers/actions";
import { CustomerTemplate } from "~/features/customers/components";
import { getCustomerById } from "~/features/customers/utils";

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ customer_id: string }>;
}) {
  const { customer_id: customerId } = await params;

  const parsedCustomerId = z.string().uuid().safeParse(customerId);
  if (!parsedCustomerId.success) return notFound();

  const customer = await getCustomerById(parsedCustomerId.data);
  if (!customer) return notFound();

  return (
    <main className="container mx-auto py-10">
      <CustomerTemplate
        actions={
          <>
            <DeleteButton
              id={customer.id}
              action={deleteCustomer}
              title="Zrušit zákazníka"
              description="Jste si jistí, že chcete zrušit tohoto zákazníka?"
            />
            <Link href={`/customer/${customer.id}/edit`} replace>
              <Button variant="outline" size="icon">
                <Edit className="size-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </Link>
          </>
        }
        companyName={customer.companyName}
        contactPerson={customer.contactPerson}
        contactEmail={customer.contactEmail}
        streetAddress={customer.streetAddress}
        city={customer.city}
        postCode={customer.postCode}
        country={customer.country}
      />
    </main>
  );
}
