import { z } from "zod";

export const CreateVitaminContentDtoZ = z.object({
  vitaminUID: z.string().uuid(),
  count: z.number().int().min(0),
});
