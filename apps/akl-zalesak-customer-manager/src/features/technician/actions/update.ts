"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { shake } from "radash";

import { updateTechnicianSchema } from "../schemas";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";
import { actionClient } from "~/utils";

export const updateTechnician = actionClient
  .schema(updateTechnicianSchema)
  .action(async ({ parsedInput: { id, ...parsedInput } }) => {
    await db
      .update(schema.techniciansTable)
      .set(shake(parsedInput, (value) => !value))
      .where(eq(schema.techniciansTable.id, id));

    return redirect(`/technician/${id}`);
  });
