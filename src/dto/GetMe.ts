import { z } from "zod";
import { ProductZ } from "../models/Product";
import { UserZ } from "../models/User";

export const GetMeResponseDtoZ = z.object({ user: UserZ });
