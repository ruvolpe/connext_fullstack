import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import {
  ensureUserExists,
  isEmailUnique,
  isUserAdmin,
  isUserOwner,
  validateBody,
  verifyToken,
} from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userCreateSchema),
  isEmailUnique,
  userControllers.create
);

userRouter.get("/:id", verifyToken, userControllers.read);

userRouter.use("/:id", ensureUserExists);

userRouter.patch(
  "/:id",
  verifyToken,
  isUserOwner,
  validateBody(userUpdateSchema),
  userControllers.update
);

userRouter.delete("/:id", verifyToken, isUserOwner, userControllers.destroy);
