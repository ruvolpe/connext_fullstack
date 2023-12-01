import { z } from "zod";

export const contactFormValidation = z.object({
  email: z
    .string()
    .min(1, "o e-mail é obrigatório")
    .email("o e-mail é obrigatório"),
  name: z.string().min(1, "o nome é obrigatório"),
  phone: z.string().min(1, "o contato é obrigatório"),
});
