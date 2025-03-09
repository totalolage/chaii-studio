import { createUpdateSchema } from "drizzle-zod";
import { z } from "zod";

import schema from "~/db/schema";

export const updateTechnicianSchema = createUpdateSchema(schema.techniciansTable, {
  id: z.string().uuid(),
  companyName: z
    .string()
    .transform((value) => (!value ? null : value))
    .nullable(),
});
export type UpdateTechnicianSchema = z.infer<typeof updateTechnicianSchema>;
