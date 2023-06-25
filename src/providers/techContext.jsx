import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { userContext } from "./userContext";


export const techContext = createContext({});

export const TechProvider = ({ children }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { user } = useContext(userContext);
  const [techList, setTechList] = useState(user.techs);

  const openModal = () => {
    setOpenAddModal(true);
  }

  const closeModal = () => {
    setOpenAddModal(false);
  }

  const openEdit = (techId, techTitle) => {
    setOpenEditModal(true);
    localStorage.setItem("@TECHID", techId);
    localStorage.setItem("@TITLE", techTitle);
  }

  const closeEdit = () => {
    setOpenEditModal(false);
  }

  const postTech = async (formData, setLoading) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      console.log(data);
      setTechList((newTech) => [...newTech, data])
      toast.success("Tecnologia inserida com sucesso", {
        theme: "dark",
      })
    } catch (error) {
      toast.error(error.data.message, {
        theme: "dark",
      })
    }finally{
      setLoading(false);
    }
  }

  const putTech = async (formData, setLoading) => {
    setLoading(true);
      try {
        const token = localStorage.getItem("@TOKEN");
        const techId = localStorage.getItem("@TECHID");
        const {data} = await api.put(`/users/techs/${techId}`, formData,{
          headers:{
            Authorization: `bearer ${token}`,
          }
        })
        setTechList((prevTechList) =>
        prevTechList.map((tech) =>
          tech.id === techId ? { ...tech, status: data.status } : tech
        )
      );
        toast.success("Status atualizado com sucesso", {
          theme: "dark",
        })
      } catch (error) {
        toast.error(data.error.message, {
          theme: "dark",
        })
      }finally{
        setLoading(false);
      }
  }

  const deleteTech = async (setDeleteLoading) => {
    setDeleteLoading(true);
    try {
      const techId = localStorage.getItem("@TECHID");
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `bearer ${token}`,
        }
      })
      setTechList((prevList) => 
        prevList.filter((tech) => tech.id != techId && {...tech} 
        ) 
      );
      toast.success("Tecnologia deletada com sucesso", {
        theme: "dark",
      })
    } catch (error) {
      toast.error(error.data.message, {
        theme: "dark",
      })
    }finally{
      setDeleteLoading(false);
    }
  }

    return (
      <techContext.Provider value={{ openAddModal, setOpenAddModal, openModal, closeModal, postTech, techList, openEdit, closeEdit, openEditModal, setOpenEditModal, putTech, deleteTech}}>
        {children}
      </techContext.Provider>
    )
  }