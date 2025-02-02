"use server";

import { eq, getTableColumns, sql } from "drizzle-orm";

import { db } from "db/drizzle";
import {
  servicesTable,
  serviceTechniciansTable,
  techniciansTable,
} from "db/schema";

const servicesSql = sql<
  {
    id: typeof servicesTable.$inferSelect.id;
    describe: typeof servicesTable.$inferSelect.description;
    cost: typeof servicesTable.$inferSelect.cost;
    time: typeof servicesTable.$inferSelect.time;
    role: (typeof serviceTechniciansTable.role.enumValues)[number];
  }[]
>`
  COALESCE(
    JSONB_AGG(
      JSONB_BUILD_OBJECT(
        'id', ${servicesTable.id}::text,
        'description', ${servicesTable.description},
        'cost', ${servicesTable.cost},
        'time', ${servicesTable.time}::text,
        'role', ${serviceTechniciansTable.role}::text
      )
    ),
    '[]'::jsonb
  )
`.as("services");

export async function getTechnicianWithServices(technician_id: string) {
  // Going to need to use sql for the above query because it includes a many to many relationship
  const [technician] = await db
    .select({
      ...getTableColumns(techniciansTable),
      services: servicesSql,
    })
    .from(techniciansTable)
    .where(eq(techniciansTable.id, technician_id))
    .groupBy(techniciansTable.id)
    .leftJoin(
      serviceTechniciansTable,
      eq(serviceTechniciansTable.technicianId, techniciansTable.id),
    )
    .leftJoin(
      servicesTable,
      eq(serviceTechniciansTable.serviceId, servicesTable.id),
    );

  return technician;
}
