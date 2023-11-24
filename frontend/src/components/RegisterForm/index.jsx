import { FormInput } from "../../fragments/FormInput";
import { formValidation } from "../FormValidation/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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
    <form onSubmit={handleSubmit(submit)}>
      <FormInput
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        label="Nome"
        register={register("name")}
      />
      {errors.name ? <p>{errors.name.message}</p> : null}
      <FormInput
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        label="Email"
        register={register("email")}
      />
      {errors.email ? <p>{errors.email.message}</p> : null}
      <FormInput
        type="text"
        id="phone"
        placeholder="Número de telefone"
        label="Telefone"
        register={register("phone")}
      />
      <FormInput
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        label="Senha"
        register={register("password")}
      />
      {errors.password ? <p>{errors.password.message}</p> : null}
      {/* <FormInput
        type="password"
        id="confirmPassword"
        placeholder="Digite novamente a sua senha"
        label="Confirmar senha"
        register={register("confirmPassword")}
      /> */}
      {/* {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null} */}
      <button type="submit">Cadastrar</button>
    </form>
  );
};
