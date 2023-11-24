import { Request, Response } from "express";
import { userServices } from "../services";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.createUser(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await userServices.readUser();
  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const user: UserUpdate = await userServices.updateUser(
    req.body,
    Number(req.params.id)
  );
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroyUser(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, destroy, update };
