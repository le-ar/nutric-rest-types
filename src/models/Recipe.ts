import { z } from "zod";
import { EnergyContentZ } from "./EnergyContent";
import { RecipeProductWithAlternativeZ } from "./RecipeProduct";
import { RecipeStepZ } from "./RecipeStep";
import { WeightTypeZ } from "./WeightType";

export const RecipeZ = z.object({
  uid: z.string().uuid(),
  name: z.string().min(4).max(64),
  img: z.string(),
  weightType: WeightTypeZ,
  weight: z.number().int().min(0),
  energyContent: EnergyContentZ,
  steps: z.array(RecipeStepZ),
  products: z.array(RecipeProductWithAlternativeZ),
});
