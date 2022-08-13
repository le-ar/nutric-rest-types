import { z } from "zod";
import { EnergyContentZ } from "../models/EnergyContent";
import { CreateVitaminContentDtoZ } from "./CreateVitaminContent";

export const CreateEnergyContentDtoZ = EnergyContentZ.extend({
  vitamins: z.array(CreateVitaminContentDtoZ),
}).omit({ uid: true });
