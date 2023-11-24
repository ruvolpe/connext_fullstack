import { Request, Response } from "express";
import { contactServices } from "../services";
import { ContactRead } from "../interfaces/contact.interface";
import { Contact } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user_id = Number(req.params.user_id);
  const contact: Contact = await contactServices.createContact(
    req.body,
    user_id
  );
  return res.status(201).json(contact);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const contact: ContactRead = await contactServices.readContact();
  return res.status(200).json(contact);
};

export default { create, read };
