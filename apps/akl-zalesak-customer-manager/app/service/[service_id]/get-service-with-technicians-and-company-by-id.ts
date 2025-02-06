"use server";

import { eq, getTableColumns, sql } from "drizzle-orm";

import { db } from "db/drizzle";
import {
  customersTable,
  servicesTable,
  serviceTechniciansTable,
  techniciansTable,
} from "db/schema";

const techniciansSql = sql<
  {
    id: typeof techniciansTable.$inferSelect.id;
    name: typeof techniciansTable.$inferSelect.name;
    role: (typeof serviceTechniciansTable.role.enumValues)[number];
  }[]
>`
  COALESCE(
    JSONB_AGG(
      JSONB_BUILD_OBJECT(
        'id', ${techniciansTable.id}::text,
        'name', ${techniciansTable.name},
        'role', ${serviceTechniciansTable.role}::text
      )
    ),
    '[]'::jsonb
  )
`.as("technicians");

export async function getServiceWithTechniciansAndCompanyById(
  service_id: string,
) {
  // Going to need to use sql for the above query because it includes a many to many relationship
  const [service] = await db
    .select({
      ...getTableColumns(servicesTable),
      technicians: techniciansSql,
      customer: customersTable,
    })
    .from(servicesTable)
    .where(eq(servicesTable.id, service_id))
    .groupBy(servicesTable.id, customersTable.id)
    .innerJoin(
      customersTable,
      eq(servicesTable.customerId, customersTable.id),
    )
    .leftJoin(
      serviceTechniciansTable,
      eq(serviceTechniciansTable.serviceId, servicesTable.id),
    )
    .leftJoin(
      techniciansTable,
      eq(serviceTechniciansTable.technicianId, techniciansTable.id),
    );

  return service;
}
