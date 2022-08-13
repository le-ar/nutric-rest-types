import { z } from "zod";
import { CreateEnergyContentDtoZ } from "./CreateEnergyContent";
import { ProductCategoryZ } from "./ProductCategory";
import { WeightTypeZ } from "./WeightType";

export const CreateProductDtoZ = z.object({
  name: z.string().min(4).max(32),
  img: z.string().min(1),
  weightType: WeightTypeZ,
  category: ProductCategoryZ,
  energyContent: CreateEnergyContentDtoZ,
});
