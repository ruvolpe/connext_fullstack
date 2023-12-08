import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const token = localStorage.getItem("@TOKEN");

  const currentPath = window.location.pathname;
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const userLoad = async () => {
      try {
        const userId = localStorage.getItem("@USERID");
        const { data } = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    if (token && userId) {
      userLoad();
    }
  }, []);

  const userRegister = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userUpdate = async (formData, id) => {
    try {
      const { data } = await api.patch(`/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/login", formData);
      console.log(data);
      navigate("/dashboard");
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.id);
      location.reload(true);
    } catch (error) {
      console.log(error);
      toast("Credenciais inválidas");
    }
  };

  const userDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userUpdate,
        userDelete,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
