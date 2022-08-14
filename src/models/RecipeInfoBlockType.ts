import { z } from "zod";

export enum RecipeInfoBlockType {
  CURRENT = "CURRENT",
  PREV_DAY = "PREV_DAY",
  MORNING = "MORNING",
  NONE = "NONE",
}

export const RecipeInfoBlockTypeZ = z.nativeEnum(RecipeInfoBlockType);
export type RecipeInfoBlockTypeZ = z.infer<typeof RecipeInfoBlockTypeZ>;
