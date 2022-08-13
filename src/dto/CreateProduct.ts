import { z } from "zod";
import { ProductZ } from "../models/Product";
import { CreateEnergyContentDtoZ } from "./CreateEnergyContent";

export const CreateProductDtoZ = ProductZ.pick({
  name: true,
  img: true,
  weightType: true,
  category: true,
}).extend({
  energyContent: CreateEnergyContentDtoZ,
});

export const CreateProductResponseDtoZ = z.object({
  uid: z.string().uuid(),
});
