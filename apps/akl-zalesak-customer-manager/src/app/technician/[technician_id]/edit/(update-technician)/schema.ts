import { createUpdateSchema } from "drizzle-zod";
import { z } from "zod";

import { techniciansTable } from "db/schema";

export const updateTechnicianSchema = createUpdateSchema(techniciansTable, {
  id: z.string().uuid(),
  companyName: z
    .string()
    .transform((value) => (!value ? null : value))
    .nullable(),
});
export type UpdateTechnicianSchema = z.infer<typeof updateTechnicianSchema>;
