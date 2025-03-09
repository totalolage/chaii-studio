import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import schema from "~/db/schema";

export const createTechnicianSchema = createInsertSchema(schema.techniciansTable, {
  name: z.string().min(1),
});
export type CreateTechnicianSchema = z.infer<typeof createTechnicianSchema>;
