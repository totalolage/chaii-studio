"use server";

import { redirect } from "next/navigation";

import { createCustomerSchema } from "../schemas";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";
import { actionClient } from "~/utils";

export const createCustomer = actionClient
  .schema(createCustomerSchema)
  .action(async ({ parsedInput }) => {
    const id = crypto.randomUUID();
    await db.insert(schema.customersTable).values({
      ...parsedInput,
      id,
    });
    return redirect(`/customer/${id}`);
  });

