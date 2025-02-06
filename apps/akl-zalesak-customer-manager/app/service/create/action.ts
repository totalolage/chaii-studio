"use server";

import { redirect } from "next/navigation";

import { createServiceSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { servicesTable } from "db/schema";

export const createService = actionClient
  .schema(createServiceSchema)
  .action(async ({ parsedInput }) => {
    const id = crypto.randomUUID();
    await db.insert(servicesTable).values({
      ...parsedInput,
      id,
    });
    return redirect(`/service/${id}`);
  });
