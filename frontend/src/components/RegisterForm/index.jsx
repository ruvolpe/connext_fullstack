import { FormInput } from "../../fragments/FormInput";
import { formValidation } from "../FormValidation/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledButton, StyledForm } from "./styles";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formValidation),
  });

  const submit = (formData) => {
    userRegister(formData);
  };

  return (
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
      <FormInput
        type="password"
        id="password"
        placeholder="digite aqui sua senha"
        label="senha"
        register={register("password")}
      />
      {errors.password ? <p>{errors.password.message}</p> : null}
      <StyledButton type="submit">cadastrar</StyledButton>
    </StyledForm>
  );
};
