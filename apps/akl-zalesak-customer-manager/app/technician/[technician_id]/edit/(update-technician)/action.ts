"use server";

import { shake } from "radash";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { updateTechnicianSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { techniciansTable } from "db/schema";

export const updateTechnician = actionClient
  .schema(updateTechnicianSchema)
  .action(async ({ parsedInput: { id, ...parsedInput } }) => {
    await db
      .update(techniciansTable)
      .set(shake(parsedInput, (value) => !value))
      .where(eq(techniciansTable.id, id));

    return redirect(`/technician/${id}`);
  });
