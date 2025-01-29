import { z } from "zod";

export const deleteCustomerSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteCustomerSchema = z.infer<typeof deleteCustomerSchema>;
