import { z } from "zod";

export const UserZ = z.object({
  uid: z.string().uuid(),
  daysBalance: z.number().int(),
});
