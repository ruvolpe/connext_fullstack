import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  StyledDivCircle,
  StyledDivCircle2,
  StyledMain,
  StyledScrollBox,
} from "./styles";
import { FormInput } from "../../fragments/FormInput";
import { contactFormValidation } from "../../components/ContactFormValidation/contactFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyledButton, StyledForm } from "./styles";
import { ContactsContext } from "../../contexts/ContactsContext";
import DeleteSVG from "../../assets/delete.svg";
import EditSVG from "../../assets/edit.svg";
import Modal from "../../components/Modal";
import EditUserModal from "../../components/EditUserModal";
import DeleteUserModal from "../../components/DeleteUserModal";

function Dashboard() {
  const { user, userLogout } = useContext(UserContext);

  const { contactRegister, contacts, contactDelete } =
    useContext(ContactsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormValidation),
  });

  const submit = (formData) => {
    contactRegister(formData);
    reset();
  };

  const [contactToUpdate, setContactToUpdate] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditUserIsOpen, setModalEditUserIsOpen] = useState(false);
  const [modalDeleteUserIsOpen, setModalDeleteUserIsOpen] = useState(false);

  const openModal = (contact) => {
    setContactToUpdate(contact);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeEditUserModal = () => {
    setModalEditUserIsOpen(false);
  };

  const openEditUserModal = () => {
    setModalEditUserIsOpen(true);
  };

  const openDeleteUserModal = () => {
    setModalDeleteUserIsOpen(true);
  };

  const closeDeleteUserModal = () => {
    setModalDeleteUserIsOpen(false);
  };

  return user ? (
    <StyledMain>
      <StyledScrollBox>
        <StyledDivCircle />
        <header>
          <StyledButton onClick={userLogout}>logout</StyledButton>
          <StyledButton onClick={openEditUserModal}>Editar conta</StyledButton>
          <StyledButton onClick={openDeleteUserModal}>
            Deletar conta
          </StyledButton>
          <h1>olá, {user.name}</h1>
        </header>
        <StyledDivCircle2 />
        <StyledForm onSubmit={handleSubmit(submit)}>
          <FormInput
            type="text"
            id="name"
            placeholder="nome do seu contato"
            label="nome"
            register={register("name")}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <FormInput
            type="email"
            id="email"
            placeholder="email do seu contato"
            label="email"
            register={register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <FormInput
            type="text"
            id="phone"
            placeholder="número de telefone do seu contato"
            label="telefone"
            register={register("phone")}
          />
          {errors.phone ? <p>{errors.phone.message}</p> : null}
          <StyledButton type="submit">registrar novo contato</StyledButton>
        </StyledForm>
        <div>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <p key={contact.id}>
                {contact.name}, {contact.phone}, {contact.email}
                <StyledButton onClick={() => openModal(contact)}>
                  <img src={EditSVG} alt="Editar" />
                </StyledButton>
                <StyledButton onClick={() => contactDelete(contact.id)}>
                  <img src={DeleteSVG} alt="Deletar" />
                </StyledButton>
              </p>
            ))
          ) : (
            <p>sem contatos, adicione um contato para começar!</p>
          )}
        </div>
      </StyledScrollBox>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        contact={contactToUpdate}
      />
      <EditUserModal
        isOpen={modalEditUserIsOpen}
        onClose={closeEditUserModal}
        user={user}
      />
      <DeleteUserModal
        isOpen={modalDeleteUserIsOpen}
        onClose={closeDeleteUserModal}
        user={user}
      />
    </StyledMain>
  ) : (
    <p>Loading</p>
  );
}

export default Dashboard;
