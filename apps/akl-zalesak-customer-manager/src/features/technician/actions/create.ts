"use server";

import { redirect } from "next/navigation";


import { createTechnicianSchema } from "../schemas";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";
import { actionClient } from "~/utils";

export const createTechnician = actionClient
  .schema(createTechnicianSchema)
  .action(async ({ parsedInput }) => {
    const id = crypto.randomUUID();
    await db.insert(schema.techniciansTable).values({
      ...parsedInput,
      id,
    });
    return redirect(`/technician/${id}`);
  });
