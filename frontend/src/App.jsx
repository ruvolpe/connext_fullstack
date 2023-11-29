import { RoutesMain } from "./routes/RoutesMain";
import { useState } from "react";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";
import "./index.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <UserProvider>
      <RoutesMain setIsLogin={setIsLogin} />
    </UserProvider>
  );
}

export default App;
