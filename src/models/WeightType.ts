import { z } from 'zod';

export enum WeightType {
  PIECE = 'PIECE',
  MILLILITERS = 'MILLILITERS',
  GRAMS = 'GRAMS',
}

export const WeightTypeZ = z.nativeEnum(WeightType);
export type WeightTypeZ = z.infer<typeof WeightTypeZ>;
