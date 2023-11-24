import { Link } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";

function Register() {
  return (
    <>
      <div>
        <h1>Oi Register</h1>
        <RegisterForm />
        <Link to="/">LogIn</Link>
      </div>
    </>
  );
}

export default Register;
