import { notFound } from "next/navigation";
import { z } from "zod";

import { EditCustomerForm } from "~/features/customers/components";
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
      <EditCustomerForm customer={customer} />
    </main>
  );
}
