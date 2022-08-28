import { z } from "zod";
import { EnergyContentZ } from "../models/EnergyContent";
import { WeightTypeZ } from "../models/WeightType";

export enum MenuIngrient {
  RECIPE = "RECIPE",
  PRODUCT = "PRODUCT",
}

export const GetMenuIngridientsResponseZ = z.array(
  z.object({
    uid: z.string().uuid(),
    name: z.string(),
    type: z.nativeEnum(MenuIngrient),
    weightType: WeightTypeZ,
    energyContent: EnergyContentZ,
  })
);
