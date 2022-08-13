import { z } from "zod";
import { VitaminZ } from "./Vitamin";

export const VitaminContentZ = z.object({
  uid: z.string().uuid(),
  vitamin: VitaminZ,
  count: z.number().int().min(0),
});
