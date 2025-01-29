"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { deleteCustomerSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { customersTable } from "db/schema";

export const deleteCustomer = actionClient
  .schema(deleteCustomerSchema)
  .action(async ({ parsedInput: { id } }) => {
    await db.delete(customersTable).where(eq(customersTable.id, id));

    return redirect("/");
  });
