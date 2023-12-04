import { useContext } from "react";
import {
  StyledForm,
  StyledButton,
  StyledModal,
  StyledModalOverlay,
  StyledCloseButton,
} from "./styles";
import { FormInput } from "../../fragments/FormInput";
import { contactFormValidation } from "../../components/ContactFormValidation/contactFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactsContext } from "../../contexts/ContactsContext";
import { useForm } from "react-hook-form";

const Modal = ({ isOpen, onClose, contact, children }) => {
  const { contactUpdate } = useContext(ContactsContext);
  if (!isOpen) {
    return null;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormValidation),
  });

  const submit = (formData) => {
    contactUpdate(formData, contact.id);
    onClose();
  };

  return (
    <StyledModalOverlay>
      <StyledModal>
        <StyledCloseButton onClick={onClose}>x</StyledCloseButton>
        <p>edite o seu contato</p>
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
          <StyledButton type="submit">atualizar contato</StyledButton>
        </StyledForm>
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default Modal;
