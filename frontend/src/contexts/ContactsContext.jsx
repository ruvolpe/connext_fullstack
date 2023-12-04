import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";

export const ContactsContext = createContext({});

export const ContactsProvider = ({ children }) => {
  const [contacts, setContact] = useState();
  const token = localStorage.getItem("@TOKEN");

  const contactsLoad = async () => {
    try {
      const { data } = await api.get(`/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContact(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      contactsLoad();
    }
  }, [token]);

  const contactRegister = async (formData) => {
    try {
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContact([...contacts, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const contactUpdate = async (formData, id) => {
    try {
      const { data } = await api.patch(`/contacts/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContact([...contacts, data]);
      await contactsLoad();
    } catch (error) {
      console.log(error);
    }
  };

  const contactDelete = async (id) => {
    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await contactsLoad();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContact,
        contactRegister,
        contactUpdate,
        contactDelete,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
