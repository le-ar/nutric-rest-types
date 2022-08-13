import { z } from "zod";
import { RecipeZ } from "../models/Recipe";
import { RecipeInfoBlockTypeZ } from "../models/RecipeInfoBlockType";
import { CreateEnergyContentDtoZ } from "./CreateEnergyContent";

const CreateRecipeProductDtoZ = z.object({
  productUID: z.string().uuid(),
  weight: z.number().int(),
});

export const CreateRecipeDtoZ = RecipeZ.pick({
  name: true,
  img: true,
  shortInfo: true,
  weightType: true,
  weight: true,
}).extend({
  energyContent: CreateEnergyContentDtoZ,
  steps: z.array(
    z.object({
      text: z.string(),
      infoBlockType: RecipeInfoBlockTypeZ.optional().nullable(),
    })
  ),
  products: z.array(
    CreateRecipeProductDtoZ.extend({
      alternatives: z.array(CreateRecipeProductDtoZ).optional(),
    })
  ),
});

export const CreateRecipeResponseDtoZ = z.object({
  uid: z.string().uuid(),
});
