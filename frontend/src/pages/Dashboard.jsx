import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Dashboard() {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <header>
        <button onClick={userLogout}>Logout</button>
      </header>
      <main>
        <h1>Oi Dashboard</h1>
      </main>
    </>
  );
}

export default Dashboard;
