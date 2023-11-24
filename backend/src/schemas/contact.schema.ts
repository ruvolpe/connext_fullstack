import { z } from "zod";
import { userSchema } from "./user.schema";

const contactSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  phone: z.string().max(30),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  user: userSchema,
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  user: true,
});

const contactReadSchema = z.array(contactSchema);

export { contactSchema, contactCreateSchema, contactReadSchema };
