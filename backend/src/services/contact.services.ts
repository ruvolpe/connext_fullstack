import { Contact } from "../entities";
import { contactRepository, userRepository } from "../repositories";
import {
  ContactCreate,
  ContactRead,
  ContactUpdate,
} from "../interfaces/contact.interface";
import { contactSchema, contactReadSchema } from "../schemas";

const createContact = async (
  payload: ContactCreate,
  user_id: number
): Promise<Contact> => {
  const body = payload;
  const user = await userRepository.findOne({ where: { id: user_id } });
  const contact: Contact = contactRepository.create({
    ...body,
  });

  if (user) {
    contact.user = user!;
  } else {
    throw new Error("Contact must be associated with an user");
  }

  await contactRepository.save(contact);

  return contact;
};

const readContact = async (): Promise<ContactRead> => {
  return contactReadSchema.parse(await contactRepository.find());
};

const updateContact = async (
  payload: ContactUpdate,
  id: number
): Promise<ContactUpdate> => {
  const contact: Contact | null = await contactRepository.findOne({
    where: { id },
  });
  const updatedContact: Contact = contactRepository.create({
    ...contact,
    ...payload,
  });
  await contactRepository.save(updatedContact);

  return contactSchema.parse(updatedContact);
};

const destroyContact = async (contact: Contact): Promise<void> => {
  await contactRepository.softRemove(contact);
};

export default { createContact, readContact, updateContact, destroyContact };
