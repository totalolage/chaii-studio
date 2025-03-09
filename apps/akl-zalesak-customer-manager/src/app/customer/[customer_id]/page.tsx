import { notFound } from "next/navigation";
import { z } from "zod";
import { Button } from "@chaii/ui/components/button";
import Link from "next/link";
import { Edit } from "lucide-react";

import CustomerTemplate from "../customer-template";

import { getCustomerById } from "./get-customer-by-id";
import { deleteCustomer } from "./(delete-customer)";

import { DeleteButton } from "~/(components)/delete-button";

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
