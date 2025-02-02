"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { deleteTechnicianSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { techniciansTable } from "db/schema";

export const deleteTechnician = actionClient
  .schema(deleteTechnicianSchema)
  .action(async ({ parsedInput: { id } }) => {
    await db.delete(techniciansTable).where(eq(techniciansTable.id, id));

    return redirect("/");
  });
