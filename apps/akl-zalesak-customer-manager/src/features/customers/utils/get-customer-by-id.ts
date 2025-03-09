"use server";

import { eq } from "drizzle-orm";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";

export async function getCustomerById(customer_id: string) {
  const customer = await db.query.customersTable.findFirst({
    where: eq(schema.customersTable.id, customer_id),
  });

  return customer;
}
