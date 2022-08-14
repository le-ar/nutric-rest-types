import { z } from "zod";
import { phone } from "phone";

export const CreateClientDtoZ = z.object({
  lastName: z.string().min(1),
  firstName: z.string().min(1),
  middleName: z.string().min(1).optional(),
  phone: z.string().refine(
    (val) => phone(val).isValid,
    (val) => ({
      message: `${val} is not a valid phone number`,
    })
  ).transform(val => phone(val).phoneNumber),
});

export const CreateClientResponseDtoZ = z.object({
  uid: z.string().uuid(),
});
