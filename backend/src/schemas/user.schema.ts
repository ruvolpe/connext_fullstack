import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  phone: z.string().max(30),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userReturnSchema = userSchema.omit({ password: true });
const userReadSchema = userReturnSchema.array();

const userUpdateSchema = userSchema.partial().omit({ admin: true });

export {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
};
