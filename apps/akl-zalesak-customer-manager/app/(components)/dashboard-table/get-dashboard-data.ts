import { eq, gte, sql } from "drizzle-orm";

import { db } from "db/drizzle";
import {
  servicesTable,
  customersTable,
  techniciansTable,
  serviceTechniciansTable,
} from "db/schema";

const techniciansSql = sql<
  {
    id: typeof techniciansTable.$inferSelect.id;
    name: typeof techniciansTable.$inferSelect.name;
    email: typeof techniciansTable.$inferSelect.email;
    phone: typeof techniciansTable.$inferSelect.phone;
    role: (typeof serviceTechniciansTable.role.enumValues)[number];
  }[]
>`
      COALESCE(
        JSONB_AGG(
          JSONB_BUILD_OBJECT(
            'id', ${techniciansTable.id}::text,
            'name', ${techniciansTable.name},
            'email', ${techniciansTable.email},
            'phone', ${techniciansTable.phone},
            'role', ${serviceTechniciansTable.role}::text
          )
        ) FILTER (WHERE ${techniciansTable.id} IS NOT NULL),
        '[]'::jsonb
      )
      `.as("technicians");

const techniciansByService = db
  .select({
    serviceId: servicesTable.id,
    technicians: techniciansSql,
  })
  .from(servicesTable)
  .leftJoin(
    serviceTechniciansTable,
    eq(servicesTable.id, serviceTechniciansTable.serviceId),
  )
  .leftJoin(
    techniciansTable,
    eq(serviceTechniciansTable.technicianId, techniciansTable.id),
  )
  .where(gte(servicesTable.time, new Date()))
  .groupBy(servicesTable.id)
  .as("techniciansByService");

const dataQuery = db
  .select({
    service: servicesTable,
    technicians: techniciansByService.technicians,
    customer: customersTable,
  })
  .from(techniciansByService)
  .innerJoin(
    servicesTable,
    eq(techniciansByService.serviceId, servicesTable.id),
  )
  .leftJoin(customersTable, eq(servicesTable.customerId, customersTable.id))
  .orderBy(servicesTable.time);

export const getDashboardTableData = async () => {
  const data = await dataQuery;
  return data;
};
