import { Router } from "express";
import contactControllers from "../controllers/contact.controllers";
import {
  validateBody,
  verifyToken,
  ensureUserExists,
  isUserOwner,
  ensureContactExists,
  isEmailUnique,
  isContactEmailUnique,
} from "../middlewares";
import { contactCreateSchema, contactUpdateSchema } from "../schemas";

export const contactRouter: Router = Router();

contactRouter.use(verifyToken);

contactRouter.post(
  "",
  isContactEmailUnique,
  validateBody(contactCreateSchema),
  contactControllers.create
);

contactRouter.get("", contactControllers.read);

contactRouter.patch(
  "/:contact_id",
  validateBody(contactUpdateSchema),
  contactControllers.update
);

contactRouter.delete("/:contact_id", contactControllers.destroy);
