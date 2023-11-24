import { RoutesMain } from "./routes/RoutesMain";
import { useState } from "react";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <UserProvider>
      <RoutesMain setIsLogin={setIsLogin} />
    </UserProvider>
  );
}

export default App;
