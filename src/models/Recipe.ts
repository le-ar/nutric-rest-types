import { z } from "zod";
import { EnergyContentZ } from "./EnergyContent";
import { RecipeProductWithAlternativeZ } from "./RecipeProduct";
import { RecipeStepZ } from "./RecipeStep";
import { WeightTypeZ } from "./WeightType";

export const RecipeZ = z.object({
  uid: z.string().uuid(),
  isPublic: z.boolean(),
  name: z.string().min(4).max(64),
  img: z.string(),
  shortInfo: z.string().min(8).max(512),
  weightType: WeightTypeZ,
  weight: z.number().int().min(0),
  energyContent: EnergyContentZ,
  steps: z.array(RecipeStepZ),
  products: z.array(RecipeProductWithAlternativeZ),
});
