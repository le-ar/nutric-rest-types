import { z } from "zod";
import { CreateVitaminContentDtoZ } from "./CreateVitaminContent";

export const CreateEnergyContentDtoZ = z.object({
  calories: z.number().int().min(0),
  proteins: z.number().int().min(0),
  fats: z.number().int().min(0),
  carbohydrates: z.number().int().min(0),
  vitamins: z.array(CreateVitaminContentDtoZ),
});
