import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { servicesTable } from "db/schema";

export const createServiceSchema = createInsertSchema(servicesTable);
export type CreateServiceSchema = z.infer<typeof createServiceSchema>;
