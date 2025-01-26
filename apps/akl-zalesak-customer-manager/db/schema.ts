import { relations } from "drizzle-orm";
import {
  text,
  decimal,
  pgTable,
  primaryKey,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";

// Technicians table
export const technicians = pgTable("technicians", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email"), // Optional email contact
  phone: text("phone"), // Optional phone number
});
export const techniciansRelations = relations(technicians, ({ many }) => ({
  services: many(serviceTechnicians),
}));

// Customers (Companies) table
export const customers = pgTable("customers", {
  id: uuid("id").primaryKey().defaultRandom(),
  companyName: text("company_name").notNull(),
  contactPerson: text("contact_person"), // Optional contact person name
  contactEmail: text("contact_email"), // Optional email for communication
  streetAddress: text("street_address"),
  city: text("city"),
  postCode: text("post_code"),
  country: text("country"),
  latitude: decimal("latitude"),
  longitude: decimal("longitude"),
});
export const customersRelations = relations(customers, ({ many }) => ({
  services: many(services),
}));

// Services table
export const services = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customers.id, { onDelete: "cascade" }),
  description: text("description").notNull(), // Service description
  cost: decimal("cost", {
    precision: 10,
    scale: 2,
  }).notNull(), // Payment amount for the service
  time: timestamp().notNull(),
});
export const servicesRelations = relations(services, ({ one, many }) => ({
  customer: one(customers, {
    fields: [services.customerId],
    references: [customers.id],
  }),
  technicians: many(serviceTechnicians),
}));

// Technician-to-Service junction table
export const serviceTechnicians = pgTable(
  "service_technicians",
  {
    serviceId: uuid("service_id")
      .notNull()
      .references(() => services.id, { onDelete: "cascade" }),
    technicianId: uuid("technician_id")
      .notNull()
      .references(() => technicians.id, { onDelete: "cascade" }),
    role: text("role", {
      enum: ["lead", "support", "logistics", "managment", "training"],
    }),
  },
  (table) => [primaryKey({ columns: [table.serviceId, table.technicianId] })],
);
export const serviceTechniciansRelations = relations(
  serviceTechnicians,
  ({ one }) => ({
    service: one(services, {
      fields: [serviceTechnicians.serviceId],
      references: [services.id],
    }),
    technician: one(technicians, {
      fields: [serviceTechnicians.technicianId],
      references: [technicians.id],
    }),
  }),
);
