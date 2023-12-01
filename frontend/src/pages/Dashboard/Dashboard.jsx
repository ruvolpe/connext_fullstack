import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledDivCircle, StyledDivCircle2 } from "./styles";
import { FormInput } from "../../fragments/FormInput";
import { contactFormValidation } from "../../components/ContactFormValidation/contactFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyledButton, StyledForm } from "./styles";
import { ContactsContext } from "../../contexts/ContactsContext";

function Dashboard() {
  const { user, userLogout } = useContext(UserContext);

  const { contactRegister, contacts, contactDelete } =
    useContext(ContactsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormValidation),
  });

  const submit = (formData) => {
    contactRegister(formData);
  };

  return (
    <>
      <StyledDivCircle />
      <header>
        <StyledButton onClick={userLogout}>Logout</StyledButton>
        <h1>Olá, {user.name}</h1>
      </header>
      <StyledDivCircle2 />
      <StyledForm onSubmit={handleSubmit(submit)}>
        <FormInput
          type="text"
          id="name"
          placeholder="digite aqui seu nome"
          label="nome"
          register={register("name")}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
        <FormInput
          type="email"
          id="email"
          placeholder="digite aqui seu email"
          label="email"
          register={register("email")}
        />
        {errors.email ? <p>{errors.email.message}</p> : null}
        <FormInput
          type="text"
          id="phone"
          placeholder="número de telefone"
          label="telefone"
          register={register("phone")}
        />
        {errors.phone ? <p>{errors.phone.message}</p> : null}
        <StyledButton type="submit">registrar novo contato</StyledButton>
      </StyledForm>
      <div>
        {contacts.map((contact) => (
          <>
            <p key={contact.id}>
              {contact.name}, {contact.phone}, {contact.email}
              <StyledButton>Editar</StyledButton>
              <StyledButton onClick={contactDelete(contact.id)}>
                Apagar
              </StyledButton>
            </p>
          </>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
