import { NextFunction, Request, Response } from "express";
import { Contact } from "../entities";
import { AppError } from "../errors";
import { contactRepository } from "../repositories";

export const ensureContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.contact_id);

  const foundEntity: Contact | null = await contactRepository.findOneBy({ id });
  if (!foundEntity) throw new AppError("Contact not found", 404);

  return next();
};
