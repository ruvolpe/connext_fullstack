import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledDivCircle, StyledDivCircle2 } from "./styles";

function Dashboard() {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <StyledDivCircle />
      <header>
        <button onClick={userLogout}>Logout</button>
      </header>
      <main>
        <h1>Olá, {user.name}</h1>
      </main>
      <StyledDivCircle2 />
    </>
  );
}

export default Dashboard;
