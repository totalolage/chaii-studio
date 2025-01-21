import { text, decimal, pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

// Technicians table
export const technicians = pgTable("technicians", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email"), // Optional email contact
  phone: text("phone"), // Optional phone number
});

// Customers (Companies) table
export const customers = pgTable("customers", {
  id: uuid("id").primaryKey().defaultRandom(),
  companyName: text("company_name").notNull(),
  address: text("address"), // Optional address
  contactPerson: text("contact_person"), // Optional contact person name
  contactEmail: text("contact_email"), // Optional email for communication
});

// Services table
export const services = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerId: uuid("customer_id")
    .notNull()
    .references(() => customers.id, { onDelete: "cascade" }),
  description: text("description").notNull(), // Service description
  lastPayment: decimal("last_payment", {
    precision: 2,
  }).notNull(), // Payment amount for the service
});

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
    role: text("role"), // Optional: role or responsibility during the service
  },
  (table) => [primaryKey({ columns: [table.serviceId, table.technicianId] })],
);
