import { reset, seed } from "drizzle-seed";
import { BatchItem } from "drizzle-orm/batch";

import { db } from "./drizzle";
import * as schema from "./schema";
import { eq } from "drizzle-orm";
import { normallyDistributedRandom } from "utils/normally-distributed-random";

console.log("🧹 Resetting database...");
await reset(db, schema);

console.log("🌱 Seeding database...");
await seed(db, {
  customers: schema.customersTable,
  services: schema.servicesTable,
  technicians: schema.techniciansTable,
}).refine((f) => ({
  customers: {
    columns: {
      companyName: f.companyName(),
      contactEmail: f.email(),
      contactPerson: f.fullName(),
      streetAddress: f.streetAddress(),
      city: f.city(),
      postCode: f.postcode(),
      country: f.country(),
      latitude: f.number({
        minValue: -90,
        maxValue: 90,
        precision: 6,
      }),
      longitude: f.number({
        minValue: -180,
        maxValue: 180,
        precision: 6,
      }),
    },
    with: {
      services: [
        {
          weight: 1,
          count: Array.from({ length: 10 }, (_, index) => index + 1),
        },
      ],
    },
  },
  services: {
    columns: {
      cost: f.number({
        minValue: 0,
        maxValue: 10000,
        precision: 2,
      }),
      description: f.loremIpsum(),
      time: f.timestamp(),
    },
  },
  technicians: {
    columns: {
      name: f.fullName(),
      phone: f.phoneNumber(),
      email: f.email(),
    },
  },
}));

const [services, technicians] = await Promise.all([
  db.select({ id: schema.servicesTable.id }).from(schema.servicesTable),
  db.select({ id: schema.techniciansTable.id }).from(schema.techniciansTable),
]);

// For each service, randomly one to three technicians
const serviceTechnicians = services.map((service) => ({
  serviceId: service.id,
  technicians: Array.from({
    length: Math.floor(Math.random() * 3) + 1,
  }).reduce<{ selectedTechnicians: string[]; technicianPool: string[] }>(
    ({ selectedTechnicians, technicianPool }) => {
      const randomTechnician = technicianPool.splice(
        Math.floor(Math.random() * technicianPool.length),
        1,
      )[0]!;
      selectedTechnicians.push(randomTechnician);
      return { selectedTechnicians, technicianPool };
    },
    {
      technicianPool: technicians.map(({ id }) => id),
      selectedTechnicians: [],
    },
  ).selectedTechnicians,
}));

await db.batch([
  // Set custom timestamps for services based on normal distribution arond now
  ...services.map(({ id }) =>
    db
      .update(schema.servicesTable)
      .set({
        time: (() => {
          const now = new Date();
          const deviation = normallyDistributedRandom(0, 1000 * 60 * 60 * 24 * 7);
          return new Date(now.getTime() + deviation);
        })(),
      })
      .where(eq(schema.servicesTable.id, id)),
  ),
  // Apply service-technician relationships
  ...serviceTechnicians.flatMap(({ serviceId, technicians }) =>
    technicians.map((technicianId) =>
      db.insert(schema.serviceTechniciansTable).values({
        serviceId,
        technicianId,
        role: schema.serviceTechniciansTable.role.enumValues[
          Math.floor(
            Math.random() * schema.serviceTechniciansTable.role.enumValues.length,
          )
        ],
      }),
    ),
  ),
] satisfies BatchItem[] as any);
