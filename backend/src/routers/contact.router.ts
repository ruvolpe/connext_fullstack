import { Router } from "express";
import contactControllers from "../controllers/contact.controllers";
import { validateBody, verifyToken } from "../middlewares";
import { contactCreateSchema } from "../schemas";

export const contactRouter: Router = Router();

contactRouter.post(
  "/:user_id",
  verifyToken,
  validateBody(contactCreateSchema),
  contactControllers.create
);

contactRouter.get("/:id", contactControllers.read);
