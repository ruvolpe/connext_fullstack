import { Router } from "express";
import sessionControllers from "../controllers/session.controllers";
import { validateBody } from "../middlewares";
import { sessionSchema } from "../schemas";

export const sessionRouter: Router = Router();

sessionRouter.post("", validateBody(sessionSchema), sessionControllers.create);
