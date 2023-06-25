import { useForm } from "react-hook-form";
import { Input } from "../../../../../components/input";
import { Modalselect } from "../../../../../components/select";
import { useContext,useState } from "react";
import { techContext } from "../../../../../providers/techContext";
import {StyledModalForm} from "../../../../../styles/modal";
import {StyledButton} from "../../../../../styles/buttons";
import {StyledContainerButtons} from "./style";

export const EditModalForm = () => {
  const { register, handleSubmit } = useForm({});
  const { putTech } = useContext(techContext);
  const { deleteTech } = useContext(techContext);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const title = localStorage.getItem("@TITLE");
  const status = localStorage.getItem("@STATUS");
  

  const submit = async (formData) => {
    await putTech(formData, setLoading);
  }

  const deleteSubmit = async () => {
    await deleteTech(setDeleteLoading);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(submit)(e);
  }

  const deleteHandleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(deleteSubmit)(e);
  }

  return (
    <StyledModalForm>
      <Input label={"Nome"} placeholder={title} readOnly/>
      <Modalselect label={"Status"} {...register("status")} />
      <StyledContainerButtons>
        <StyledButton buttonstyle="negative" buttonsize="modify"  onClick={handleFormSubmit} disabled={loading}>
          {loading ? "Salvando alteração..." : "Salvar Alterações"}
        </StyledButton>
        <StyledButton buttonstyle="disable" buttonsize="delete" onClick={deleteHandleFormSubmit} disabled={deleteLoading}>
          {deleteLoading ? "Excluindo..." : "Excluir"}
        </StyledButton>
      </StyledContainerButtons>
    </StyledModalForm>
  )
}