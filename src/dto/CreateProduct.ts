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

export const CreateProductResolveDtoZ = z.object({
  uid: z.string().uuid(),
});
