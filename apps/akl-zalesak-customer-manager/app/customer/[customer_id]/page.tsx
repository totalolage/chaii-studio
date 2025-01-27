import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { z } from "zod";

import CustomerDetails from "./customer-details";

import { db } from "db/drizzle";
import { customersTable } from "db/schema";
import { SetTitle } from "~/components/title";

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ customer_id: string }>;
}) {
  const { customer_id } = await params;

  const parsedCustomerId = z.string().uuid().safeParse(customer_id);
  if (!parsedCustomerId.success) return notFound();

  const [customerEntry] = await db
    .select({
      customer: customersTable,
    })
    .from(customersTable)
    .where(eq(customersTable.id, customer_id));
  if (!customerEntry) return notFound();

  const { customer } = customerEntry;
  return (
    <>
      <SetTitle>Customer</SetTitle>
      <main className="container mx-auto py-10">
        <CustomerDetails customer={customer} />
      </main>
    </>
  );
}
