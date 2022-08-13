import { z } from "zod";

export const VitaminZ = z.object({
  uid: z.string().uuid(),
  name: z.string(),
});
