"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { deleteServiceSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { servicesTable } from "db/schema";

export const deleteService = actionClient
  .schema(deleteServiceSchema)
  .action(async ({ parsedInput: { id } }) => {
    await db.delete(servicesTable).where(eq(servicesTable.id, id));

    return redirect("/");
  });
