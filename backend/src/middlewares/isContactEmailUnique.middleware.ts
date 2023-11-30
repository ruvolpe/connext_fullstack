import { NextFunction, Request, Response } from "express";
import { Contact } from "../entities";
import { contactRepository } from "../repositories";
import { AppError } from "../errors";

export const isContactEmailUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  if (!email) return next();

  const foundEntity: Contact | null = await contactRepository.findOneBy({
    email,
  });
  if (foundEntity) throw new AppError("Email already exists", 409);

  return next();
};
