import { z } from "zod";

export const formValidation = z.object({
  email: z
    .string()
    .min(1, "o e-mail é obrigatório")
    .email("o e-mail é obrigatório"),
  password: z
    .string()
    .nonempty("a senha é obrigatória")
    .min(8, "a senha precisa de no mínimo 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "é necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "é necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "é necessário pelo menos um número")
    .regex(
      /(?=.*?[#?!@$%^&*-])/,
      "é necessário pelo menos um caractere especial"
    ),
  name: z
    .string()
    .min(1, "o nome é obrigatório")
    .min(1, "o nome é obrigatório"),
  phone: z
    .string()
    .min(1, "o contato é obrigatório")
    .min(1, "o contato é obrigatório"),
});
