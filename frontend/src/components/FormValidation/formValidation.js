import { z } from "zod";

export const formValidation = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail é obrigatório"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(8, "A senha precisa de no mínimo 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    ),
  // confirmPassword: z.string().min(1, "A confirmação de senha é obrigatória"),
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .min(1, "O nome é obrigatório"),
  phone: z
    .string()
    .min(1, "O contato é obrigatório")
    .min(1, "O contato é obrigatório"),
});
// .refine(({ password, confirmPassword }) => password === confirmPassword, {
//   message: "As senhas precisam corresponderem",
//   path: ["confirmPassword"],
// });
