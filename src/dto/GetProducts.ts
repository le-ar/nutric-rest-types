import { z } from "zod";
import { ProductZ } from "../models/Product";

export const GetProductsResponseDtoZ = z.array(ProductZ);
