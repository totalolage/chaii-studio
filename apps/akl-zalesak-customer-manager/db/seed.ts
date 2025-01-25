import { reset, seed } from "drizzle-seed";
import { BatchItem } from "drizzle-orm/batch";

import { db } from "./drizzle";
import * as schema from "./schema";

console.log("🧹 Resetting database...");
await reset(db, schema);

console.log("🌱 Seeding database...");
await seed(db, {
  customers: schema.customers,
  services: schema.services,
  technicians: schema.technicians,
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
  db.select({ id: schema.services.id }).from(schema.services),
  db.select({ id: schema.technicians.id }).from(schema.technicians),
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

await db.batch(
  serviceTechnicians.flatMap(({ serviceId, technicians }) =>
    technicians.map((technicianId) =>
      db.insert(schema.serviceTechnicians).values({
        serviceId,
        technicianId,
        role: "lead",
      }),
    ),
  ) satisfies BatchItem[] as any,
);
