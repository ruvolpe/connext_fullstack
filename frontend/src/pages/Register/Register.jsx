import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import {
  StyledDiv,
  StyledDivCircle,
  StyledDivCircle2,
  StyledH1,
} from "./styles";

function Register() {
  return (
    <>
      <StyledDivCircle />
      <StyledDiv>
        <StyledH1>cadastre-se</StyledH1>
        <RegisterForm />
        <Link to="/">log-in</Link>
      </StyledDiv>
      <StyledDivCircle2 />
    </>
  );
}

export default Register;
