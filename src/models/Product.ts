import { z } from "zod";
import { EnergyContentZ } from "./EnergyContent";
import { ProductCategoryZ } from "./ProductCategory";
import { WeightTypeZ } from "./WeightType";

export const ProductZ = z.object({
  uid: z.string().uuid(),
  isPublic: z.boolean(),
  hasPublishRequest: z.boolean(),
  name: z.string().min(4).max(32),
  img: z.string(),
  weightType: WeightTypeZ,
  category: ProductCategoryZ,
  energyContent: EnergyContentZ,
});
