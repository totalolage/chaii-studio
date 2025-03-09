import { createUpdateSchema } from "drizzle-zod";
import { z } from "zod";

import { customersTable } from "db/schema";

export const updateCustomerSchema = createUpdateSchema(customersTable, {
  id: z.string().uuid(),
  companyName: z
    .string()
    .transform((value) => (!value ? null : value))
    .nullable(),
});
export type UpdateCustomerSchema = z.infer<typeof updateCustomerSchema>;
