import { createContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [globalLoading, setGlobalLoading] = useState(false);
  

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
   
    const loadUser = async () => {
      try {
        setGlobalLoading(true);
        const getUser = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setUser(getUser.data);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }finally{
        setGlobalLoading(false);
      }
    }

    if (token && id) {
      loadUser()
    }
  }, [])

const createUser = async (formData, setLoading) => {
  setLoading(true)
  try {
    const response = await api.post("/users", formData)
    toast.success("Usuário criado com sucesso", {
      theme: "dark",
    });
    navigate("/");
  } catch (error) {
    toast.error("Erro ao criar usuário: " + error.response.data.message, {
      theme: "dark",
    });
  } finally {
    setLoading(false);
  }
}

const validateLogin = async (formData, setLoading) => {
  setLoading(true);
  try {
    const response = await api.post("/sessions", formData)
    toast.success('Usuário logado com sucesso', {
      theme: "dark",
    })
    setUser(response.data.user);
    const userToken = response.data.token;
    const userId = response.data.user.id;
    localStorage.setItem("@TOKEN", userToken);
    localStorage.setItem("@USERID", userId);
    navigate("/dashboard");
  } catch (error) {
    toast.error(error.response.data.message, {
      theme: "dark",
    })
  } finally {
    setLoading(false);
  }
}

const Logout = () => {
  setUser("");
  localStorage.removeItem("@TOKEN");
  localStorage.removeItem("@USERID");
  localStorage.removeItem("@TECHID");
  localStorage.removeItem("@TITLE");
}

return (
  <userContext.Provider value={{ user, globalLoading,  createUser, validateLogin, Logout}}>
    {children} 
  </userContext.Provider>
)
}