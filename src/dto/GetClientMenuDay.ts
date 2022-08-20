import { z } from "zod";
import {
  ClientMenuDayIngridientZ,
  ClientMenuDayPartZ,
} from "../models/ClientMenuDayPart";
import { EnergyContentZ } from "../models/EnergyContent";

export const GetClientMenuDayResponseZ = z.object({
  day: z.number().int().min(1).max(31),
  month: z.number().int().min(1).max(12),
  year: z.number().int(),
  clientEnergyContent: EnergyContentZ.optional(),
  parts: z
    .array(
      ClientMenuDayPartZ.extend({
        ingridients: z
          .array(
            ClientMenuDayIngridientZ.extend({
              name: z.string(),
              energyContent: EnergyContentZ,
              alternatives: z
                .array(
                  ClientMenuDayIngridientZ.extend({
                    name: z.string(),
                    energyContent: EnergyContentZ,
                  })
                )
                .optional(),
            })
          )
          .optional(),
      })
    )
    .optional(),
});
