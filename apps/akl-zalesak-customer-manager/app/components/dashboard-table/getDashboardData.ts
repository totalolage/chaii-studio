import { eq, sql } from "drizzle-orm";

import { db } from "db/drizzle";
import {
  services as servicesTable,
  customers as customersTable,
  technicians as techniciansTable,
  serviceTechnicians as serviceTechniciansTable,
  technicianServiceRoleEnum,
} from "db/schema";

const techniciansByService = db
  .select({
    serviceId: servicesTable.id,
    technicians: sql<{ id: string; name: string; role: typeof technicianServiceRoleEnum.enumValues[number] | null }[]>`
        JSON_AGG(
          JSON_OBJECT(
            ARRAY[
              'id', ${techniciansTable.id}::text,
              'name', ${techniciansTable.name},
              'role', ${serviceTechniciansTable.role}::text
            ]
          )
        )
      `.as("technicians"),
  })
  .from(servicesTable)
  .innerJoin(
    serviceTechniciansTable,
    eq(servicesTable.id, serviceTechniciansTable.serviceId),
  )
  .innerJoin(
    techniciansTable,
    eq(serviceTechniciansTable.technicianId, techniciansTable.id),
  )
  .groupBy(servicesTable.id)
  .as("techniciansByService");

const dataQuery = db
  .select({
    service: servicesTable,
    technicians: techniciansByService.technicians,
    customer: {
      id: customersTable.id,
      name: customersTable.companyName,
    },
  })
  .from(techniciansByService)
  .innerJoin(
    servicesTable,
    eq(techniciansByService.serviceId, servicesTable.id),
  )
  .leftJoin(customersTable, eq(servicesTable.customerId, customersTable.id));

export const getDashboardTableData = async () => {
  const data = await dataQuery;
  return data;
};
