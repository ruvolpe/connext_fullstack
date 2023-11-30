import { z } from "zod";

const contactSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  phone: z.string().max(30),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()).optional(),
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const contactReadSchema = z.array(contactSchema);

const contactUpdateSchema = contactSchema.partial();

export {
  contactSchema,
  contactCreateSchema,
  contactReadSchema,
  contactUpdateSchema,
};
