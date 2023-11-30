import { z } from "zod";
import {
  contactCreateSchema,
  contactReadSchema,
  contactSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Contact } from "../entities";

type ContactCreate = z.infer<typeof contactCreateSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;
type ContactUpdate = DeepPartial<Contact>;
type ContactReturn = z.infer<typeof contactSchema>;

type ContactRepo = Repository<Contact>;

export {
  ContactCreate,
  ContactRead,
  ContactUpdate,
  ContactRepo,
  ContactReturn,
};
