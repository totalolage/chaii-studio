"use server";

import { eq } from "drizzle-orm";

import { db } from "db/drizzle";
import { customersTable } from "db/schema";

export async function getCustomerById(customer_id: string) {
  const customer = await db.query.customersTable.findFirst({
    where: eq(customersTable.id, customer_id),
  });

  return customer;
}
