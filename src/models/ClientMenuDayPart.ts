import { z } from "zod";

export enum ClientMenuType {
  PRODUCT = "PRODUCT",
  RECIPE = "RECIPE",
}

export const ClientMenuTypeZ = z.nativeEnum(ClientMenuType);
export type ClientMenuTypeZ = z.infer<typeof ClientMenuTypeZ>;

export const ClientMenuDayIngridientZ = z.object({
  ingridientType: ClientMenuTypeZ,
  uid: z.string(),
  weight: z.number().int().min(0),
});

export const ClientMenuDayPartZ = z.object({
  partName: z.string().min(1),
  icon: z.string().optional(),
  ingridients: z.array(ClientMenuDayIngridientZ.extend({
    alternatives: z.array(ClientMenuDayIngridientZ).optional(),
  })),
});
