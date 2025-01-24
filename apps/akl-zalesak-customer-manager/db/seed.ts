/* eslint-disable import/no-unused-modules */
import { reset, seed } from "drizzle-seed";

import { db } from "./drizzle";
import * as schema from "./schema";

console.log("🧹 Resetting database...");
await reset(db, schema);

console.log("🌱 Seeding database...");
await seed(db, schema).refine((f) => ({
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
      services: Array.from({ length: 10 }, (_, index) => ({
        weight: 1 / 10,
        count: index + 1,
      })),
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
  servicesTechnicians: {
    columns: {
      role: f.valuesFromArray({ values: ["technician", "service"] }),
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
