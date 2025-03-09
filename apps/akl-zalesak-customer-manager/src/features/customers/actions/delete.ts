"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { deleteCustomerSchema } from "../schemas";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";
import { actionClient } from "~/utils";

export const deleteCustomer = actionClient
  .schema(deleteCustomerSchema)
  .action(async ({ parsedInput: { id } }) => {
    await db.delete(schema.customersTable).where(eq(schema.customersTable.id, id));

    return redirect("/");
  });
