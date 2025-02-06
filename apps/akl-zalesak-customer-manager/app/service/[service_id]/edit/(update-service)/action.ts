"use server";

import { shake } from "radash";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { updateServiceSchema } from "./schema";

import { actionClient } from "utils/safe-action";
import { db } from "db/drizzle";
import { servicesTable } from "db/schema";

export const updateService = actionClient
  .schema(updateServiceSchema)
  .action(async ({ parsedInput: { id, ...parsedInput } }) => {
    await db
      .update(servicesTable)
      .set(shake(parsedInput, (value) => !value))
      .where(eq(servicesTable.id, id));

    return redirect(`/service/${id}`);
  });
