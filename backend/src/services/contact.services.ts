import { Contact } from "../entities";
import { contactRepository, userRepository } from "../repositories";
import {
  ContactCreate,
  ContactRead,
  ContactReturn,
  ContactUpdate,
} from "../interfaces/contact.interface";
import { contactSchema, contactReadSchema } from "../schemas";
import { AppError } from "../errors";

const createContact = async (
  payload: ContactCreate,
  user_id: number
): Promise<ContactReturn> => {
  const body = payload;
  const user = await userRepository.findOne({ where: { id: user_id } });
  if (!user) {
    throw new Error("Contact must be associated with an user");
  }
  const contact: Contact = contactRepository.create({
    ...body,
    user: user,
  });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

const readContact = async (id: number): Promise<ContactRead> => {
  return contactReadSchema.parse(
    await contactRepository.find({ where: { user: { id: id } } })
  );
};

const updateContact = async (
  payload: ContactUpdate,
  contact_id: number
): Promise<ContactUpdate> => {
  const contact: Contact | null = await contactRepository.findOne({
    where: { id: contact_id },
  });
  if (!contact) {
    throw new AppError("Contact does not exist.");
  }
  const updatedContact: Contact = contactRepository.create({
    ...contact,
    ...payload,
  });
  await contactRepository.save(updatedContact);

  return contactSchema.parse(updatedContact);
};

const destroyContact = async (contact_id: number): Promise<void> => {
  const contact: Contact | null = await contactRepository.findOne({
    where: { id: contact_id },
  });
  if (!contact) {
    throw new AppError("Contact does not exist.");
  }

  await contactRepository.delete({ id: contact_id });
};

export default { createContact, readContact, updateContact, destroyContact };
