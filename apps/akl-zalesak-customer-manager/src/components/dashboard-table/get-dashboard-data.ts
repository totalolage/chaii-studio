import { eq, gte, sql } from "drizzle-orm";

import { db } from "~/db/drizzle";
import schema from "~/db/schema";

const techniciansSql = sql<
  {
    id: typeof schema.techniciansTable.$inferSelect.id;
    name: typeof schema.techniciansTable.$inferSelect.name;
    email: typeof schema.techniciansTable.$inferSelect.email;
    phone: typeof schema.techniciansTable.$inferSelect.phone;
    role: (typeof schema.serviceTechniciansTable.role.enumValues)[number];
  }[]
>`
      COALESCE(
        JSONB_AGG(
          JSONB_BUILD_OBJECT(
            'id', ${schema.techniciansTable.id}::text,
            'name', ${schema.techniciansTable.name},
            'email', ${schema.techniciansTable.email},
            'phone', ${schema.techniciansTable.phone},
            'role', ${schema.serviceTechniciansTable.role}::text
          )
        ) FILTER (WHERE ${schema.techniciansTable.id} IS NOT NULL),
        '[]'::jsonb
      )
      `.as("technicians");

const techniciansByService = db
  .select({
    serviceId: schema.servicesTable.id,
    technicians: techniciansSql,
  })
  .from(schema.servicesTable)
  .leftJoin(
    schema.serviceTechniciansTable,
    eq(schema.servicesTable.id, schema.serviceTechniciansTable.serviceId),
  )
  .leftJoin(
    schema.techniciansTable,
    eq(schema.serviceTechniciansTable.technicianId, schema.techniciansTable.id),
  )
  .where(gte(schema.servicesTable.time, new Date()))
  .groupBy(schema.servicesTable.id)
  .as("techniciansByService");

const dataQuery = db
  .select({
    service: schema.servicesTable,
    technicians: techniciansByService.technicians,
    customer: schema.customersTable,
  })
  .from(techniciansByService)
  .innerJoin(
    schema.servicesTable,
    eq(techniciansByService.serviceId, schema.servicesTable.id),
  )
  .leftJoin(schema.customersTable, eq(schema.servicesTable.customerId, schema.customersTable.id))
  .orderBy(schema.servicesTable.time);

export const getDashboardTableData = async () => {
  const data = await dataQuery;
  return data;
};
