import { z } from "zod";

export const DeleteClientEnergyDtoZ = z.object({
  day: z.string().min(1).max(31),
  month: z.string().min(1).max(12),
  year: z.string().min(1),
  clientUid: z.string().uuid().min(1),
});
