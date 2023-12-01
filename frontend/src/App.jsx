import { RoutesMain } from "./routes/RoutesMain";
import { useState } from "react";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";
import "./index.css";
import { ContactsProvider } from "./contexts/ContactsContext";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <UserProvider>
      <ContactsProvider>
        <RoutesMain setIsLogin={setIsLogin} />
      </ContactsProvider>
    </UserProvider>
  );
}

export default App;
