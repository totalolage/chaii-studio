"use server";

import { redirect } from "next/navigation";

import { createTechnicianSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { techniciansTable } from "db/schema";

export const createTechnician = actionClient
  .schema(createTechnicianSchema)
  .action(async ({ parsedInput }) => {
    const id = crypto.randomUUID();
    await db.insert(techniciansTable).values({
      ...parsedInput,
      id,
    });
    return redirect(`/technician/${id}`);
  });
