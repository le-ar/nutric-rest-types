import { z } from "zod";
import { VitaminContentZ } from "./VitaminContent";

export const EnergyContentZ = z.object({
  uid: z.string().uuid(),
  calories: z.number().int().min(0),
  proteins: z.number().int().min(0),
  fats: z.number().int().min(0),
  carbohydrates: z.number().int().min(0),
  vitamins: z.array(VitaminContentZ),
});
