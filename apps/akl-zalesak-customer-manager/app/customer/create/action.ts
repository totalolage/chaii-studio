"use server";

import { redirect } from "next/navigation";

import { createCustomerSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { customersTable } from "db/schema";

export const createCustomer = actionClient
  .schema(createCustomerSchema)
  .action(async ({ parsedInput }) => {
    const id = crypto.randomUUID();
    await db.insert(customersTable).values({
      ...parsedInput,
      id,
    });
    return redirect(`/customer/${id}`);
  });
