import { z } from 'zod';

export enum ProductCategory {
  MEAT = 'MEAT',
  POULTRY_MEAT = 'POULTRY_MEAT',
  VEGETABLES = 'VEGETABLES',
  FRUIT = 'FRUIT',
  BERRIES = 'BERRIES',
}

export const ProductCategoryZ = z.nativeEnum(ProductCategory);
export type ProductCategoryZ = z.infer<typeof ProductCategoryZ>;
