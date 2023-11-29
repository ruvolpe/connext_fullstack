import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import { StyledDiv, StyledH1 } from "./styles";

function Register() {
  return (
    <>
      <StyledDiv>
        <StyledH1>cadastre-se</StyledH1>
        <RegisterForm />
        <Link to="/">log-in</Link>
      </StyledDiv>
    </>
  );
}

export default Register;
