import { z } from "zod";
import { ProductZ } from "../models/Product";
import { UserZ } from "../models/User";

export const GetMeResponseDtoZ = z.object({
  user: UserZ,
  profile: z.object({
    firstName: z.string(),
    lastName: z.string(),
    middleName: z.string().nullable().optional(),
  }),
  contacts: z.object({
    phone: z.string(),
  }),
  permissions: z.array(z.string()),
});
