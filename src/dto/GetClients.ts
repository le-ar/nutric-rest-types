import { z } from "zod";

export const GetClientsResponseDtoZ = z.array(
  z.object({
    uid: z.string().uuid(),
    userProfole: z.object({
      firstName: z.string(),
      lastName: z.string(),
      middleName: z.string().optional(),
    }),
  })
);
