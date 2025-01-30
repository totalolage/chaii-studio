"use server";

import { eq } from "drizzle-orm";

import { db } from "db/drizzle";
import { techniciansTable } from "db/schema";

export async function getTechnicianById(technician_id: string) {
  const technician = await db.query.techniciansTable.findFirst({
    where: eq(techniciansTable.id, technician_id),
  });

  return technician;
}
