import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const PublicRoutes = () => {
  const { user } = useContext(UserContext);
  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};
