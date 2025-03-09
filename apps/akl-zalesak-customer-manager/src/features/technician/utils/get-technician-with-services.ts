"use server";

import { eq, getTableColumns, sql } from "drizzle-orm";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";

const servicesSql = sql<
  {
    id: typeof schema.servicesTable.$inferSelect.id;
    describe: typeof schema.servicesTable.$inferSelect.description;
    cost: typeof schema.servicesTable.$inferSelect.cost;
    time: typeof schema.servicesTable.$inferSelect.time;
    role: (typeof schema.serviceTechniciansTable.role.enumValues)[number];
  }[]
>`
  COALESCE(
    JSONB_AGG(
      JSONB_BUILD_OBJECT(
        'id', ${schema.servicesTable.id}::text,
        'description', ${schema.servicesTable.description},
        'cost', ${schema.servicesTable.cost},
        'time', ${schema.servicesTable.time}::text,
        'role', ${schema.serviceTechniciansTable.role}::text
      )
    ),
    '[]'::jsonb
  )
`.as("services");

export async function getTechnicianWithServices(technician_id: string) {
  // Going to need to use sql for the above query because it includes a many to many relationship
  const [technician] = await db
    .select({
      ...getTableColumns(schema.techniciansTable),
      services: servicesSql,
    })
    .from(schema.techniciansTable)
    .where(eq(schema.techniciansTable.id, technician_id))
    .groupBy(schema.techniciansTable.id)
    .leftJoin(
      schema.serviceTechniciansTable,
      eq(schema.serviceTechniciansTable.technicianId, schema.techniciansTable.id),
    )
    .leftJoin(
      schema.servicesTable,
      eq(schema.serviceTechniciansTable.serviceId, schema.servicesTable.id),
    );

  return technician;
}
