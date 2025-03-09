"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { deleteTechnicianSchema } from "../schemas";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";
import { actionClient } from "~/utils";

export const deleteTechnician = actionClient
  .schema(deleteTechnicianSchema)
  .action(async ({ parsedInput: { id } }) => {
    await db.delete(schema.techniciansTable).where(eq(schema.techniciansTable.id, id));

    return redirect("/");
  });
