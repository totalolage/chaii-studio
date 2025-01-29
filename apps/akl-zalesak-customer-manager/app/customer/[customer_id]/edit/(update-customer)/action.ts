"use server";

import { shake } from "radash";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { updateCustomerSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { customersTable } from "db/schema";

export const updateCustomer = actionClient
  .schema(updateCustomerSchema)
  .action(async ({ parsedInput: { id, ...parsedInput } }) => {
    await db
      .update(customersTable)
      .set(shake(parsedInput, (value) => !value))
      .where(eq(customersTable.id, id));

    return redirect(`/customer/${id}`);
  });
