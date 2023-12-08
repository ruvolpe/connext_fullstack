import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer />
      </ContactsProvider>
    </UserProvider>
  );
}

export default App;
