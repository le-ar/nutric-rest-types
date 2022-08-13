import { z } from "zod";
import { RecipeZ } from "../models/Recipe";

export const GetRecipesResponseDtoZ = z.array(
  RecipeZ.omit({ steps: true, products: true })
);
