import { z } from "zod";
import { RecipeInfoBlockTypeZ } from "./RecipeInfoBlockType";

export const RecipeStepZ = z.object({
  uid: z.string().uuid(),
  order: z.number().int(),
  text: z.string(),
  infoBlock: RecipeInfoBlockTypeZ.optional().nullable(),
});
