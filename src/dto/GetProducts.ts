import { z } from "zod";
import { ProductZ } from "../models/Product";

export const GetProductsDtoZ = z.array(ProductZ);
