"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { shake } from "radash";

import { updateCustomerSchema } from "../schemas";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";
import { actionClient } from "~/utils";

export const updateCustomer = actionClient
  .schema(updateCustomerSchema)
  .action(async ({ parsedInput: { id, ...parsedInput } }) => {
    await db
      .update(schema.customersTable)
      .set(shake(parsedInput, (value) => !value))
      .where(eq(schema.customersTable.id, id));

    return redirect(`/customer/${id}`);
  });
