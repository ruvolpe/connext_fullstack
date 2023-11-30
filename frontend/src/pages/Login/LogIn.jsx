import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLogin } from "../../components/FormValidation/FormLogin";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  StyledButton,
  StyledDiv,
  StyledDivCircle,
  StyledDivCircle2,
  StyledForm,
  StyledH1,
  StyledInput,
  StyledLabel,
} from "./styles";

function LogIn() {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLogin),
  });

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <>
      <StyledDivCircle />
      <StyledDiv>
        <StyledH1>conext</StyledH1>
        <h2>a sua plataforma de contatos</h2>
        <StyledForm onSubmit={handleSubmit(submit)}>
          <StyledLabel htmlFor="">email</StyledLabel>
          <StyledInput type="text" {...register("email")} />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <StyledLabel htmlFor="">senha</StyledLabel>
          <StyledInput type="password" {...register("password")} />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <StyledButton type="submit">entrar</StyledButton>
        </StyledForm>
        <p>ainda não possui uma conta?</p>
        <Link to="/register">cadastre-se</Link>
      </StyledDiv>
      <StyledDivCircle2 />
    </>
  );
}

export default LogIn;
