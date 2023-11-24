import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLogin } from "../components/FormValidation/FormLogin";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

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
      <header>
        <h1>Desafio FullStack</h1>
      </header>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="">Email</label>
          <input type="text" {...register("email")} />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <label htmlFor="">Senha</label>
          <input type="password" {...register("password")} />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <button type="submit">Entrar</button>
        </form>
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </div>
    </>
  );
}

export default LogIn;
