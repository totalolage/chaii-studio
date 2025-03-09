import { z } from "zod";

export const deleteTechnicianSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteTechnicianSchema = z.infer<typeof deleteTechnicianSchema>;
