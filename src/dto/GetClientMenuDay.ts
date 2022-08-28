import { z } from "zod";
import {
  ClientMenuDayIngridientZ,
  ClientMenuDayPartZ,
} from "../models/ClientMenuDayPart";
import { EnergyContentZ } from "../models/EnergyContent";
import { WeightTypeZ } from "../models/WeightType";

export const GetClientMenuDayResponseZ = z.object({
  day: z.number().int().min(1).max(31),
  month: z.number().int().min(1).max(12),
  year: z.number().int(),
  clientEnergyContent: EnergyContentZ.optional(),
  paid: z.boolean(),
  parts: z
    .array(
      ClientMenuDayPartZ.extend({
        ingridients: z
          .array(
            ClientMenuDayIngridientZ.extend({
              name: z.string(),
              energyContent: EnergyContentZ,
              weightType: WeightTypeZ,
              alternatives: z
                .array(
                  ClientMenuDayIngridientZ.extend({
                    name: z.string(),
                    energyContent: EnergyContentZ,
                    weightType: WeightTypeZ,
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
