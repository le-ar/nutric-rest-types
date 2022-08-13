import { z } from "zod";
import { ProductZ } from "./Product";

export const RecipeProductZ = z.object({
  uid: z.string().uuid(),
  product: ProductZ.pick({
    uid: true,
    isPublic: true,
    name: true,
    img: true,
    weightType: true,
  }),
  weight: z.number().int().min(0),
});

export const RecipeProductWithAlternativeZ = RecipeProductZ.extend({
  alternatives: z.array(RecipeProductZ).optional(),
});
