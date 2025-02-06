import { createUpdateSchema } from "drizzle-zod";
import { z } from "zod";

import { servicesTable } from "db/schema";

export const updateServiceSchema = createUpdateSchema(servicesTable, {
  id: z.string().uuid(),
});
export type UpdateServiceSchema = z.infer<typeof updateServiceSchema>;
