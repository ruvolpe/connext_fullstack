import { Request, Response } from "express";
import { contactServices } from "../services";
import {
  ContactRead,
  ContactReturn,
  ContactUpdate,
} from "../interfaces/contact.interface";
import { Contact } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user_id = Number(res.locals.decoded.sub);
  console.log(res.locals);
  const contact: ContactReturn = await contactServices.createContact(
    req.body,
    user_id
  );
  return res.status(201).json(contact);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const contact: ContactRead = await contactServices.readContact(
    res.locals.decoded.sub
  );
  return res.status(200).json(contact);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const contact_id = Number(req.params.contact_id);
  console.log(contact_id);
  const contact: ContactUpdate = await contactServices.updateContact(
    req.body,
    contact_id
  );
  return res.status(200).json(contact);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const contact_id = Number(req.params.contact_id);
  console.log(contact_id);
  await contactServices.destroyContact(contact_id);
  return res.status(204).json();
};

export default { create, read, update, destroy };
