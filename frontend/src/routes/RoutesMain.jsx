import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

export const RoutesMain = ({ setIsLogin }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LogIn setIsLogin={setIsLogin} />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
