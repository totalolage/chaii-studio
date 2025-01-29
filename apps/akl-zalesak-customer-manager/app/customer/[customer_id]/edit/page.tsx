import { z } from "zod";
import { notFound } from "next/navigation";

import { getCustomerById } from "../get-customer-by-id";

import { EditCustomerForm } from "./EditCustomerForm";

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
