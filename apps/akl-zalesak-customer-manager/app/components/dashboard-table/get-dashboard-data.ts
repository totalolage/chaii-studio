import { eq, gte, sql } from "drizzle-orm";

import { db } from "db/drizzle";
import {
  services as servicesTable,
  customers as customersTable,
  technicians as techniciansTable,
  serviceTechnicians as serviceTechniciansTable,
} from "db/schema";

const techniciansByService = db
  .select({
    serviceId: servicesTable.id,
    technicians: sql<
      {
        id: string;
        name: string;
        role: typeof serviceTechniciansTable.role.enumValues[number];
      }[]
    >`
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
  .where(gte(servicesTable.time, new Date()))
  .groupBy(servicesTable.id)
  .as("techniciansByService");

const dataQuery = db
  .select({
    service: {
      id: servicesTable.id,
      time: servicesTable.time,
    },
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
  .leftJoin(customersTable, eq(servicesTable.customerId, customersTable.id))
  .orderBy(servicesTable.time);

export const getDashboardTableData = async () => {
  const data = await dataQuery;
  return data;
};
