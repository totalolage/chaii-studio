import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { customersTable } from "db/schema";

export const createCustomerSchema = createInsertSchema(customersTable, {
  companyName: z.string().min(1),
});
export type CreateCustomerSchema = z.infer<typeof createCustomerSchema>;
