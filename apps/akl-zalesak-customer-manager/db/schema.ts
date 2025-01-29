import {
  text,
  decimal,
  pgTable,
  primaryKey,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";

// Technicians table
export const techniciansTable = pgTable("technicians", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email"), // Optional email contact
  phone: text("phone"), // Optional phone number
});

// Customers (Companies) table
export const customersTable = pgTable("customers", {
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

// Services table
export const servicesTable = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customersTable.id, { onDelete: "cascade" }),
  description: text("description").notNull(), // Service description
  cost: decimal("cost", {
    precision: 10,
    scale: 2,
  }).notNull(), // Payment amount for the service
  time: timestamp().notNull(),
});

// Technician-to-Service junction table
export const serviceTechniciansTable = pgTable(
  "service_technicians",
  {
    serviceId: uuid("service_id")
      .notNull()
      .references(() => servicesTable.id, { onDelete: "cascade" }),
    technicianId: uuid("technician_id")
      .notNull()
      .references(() => techniciansTable.id, { onDelete: "cascade" }),
    role: text("role", {
      enum: ["lead", "support", "logistics", "managment", "training"],
    }),
  },
  (table) => [primaryKey({ columns: [table.serviceId, table.technicianId] })],
);
