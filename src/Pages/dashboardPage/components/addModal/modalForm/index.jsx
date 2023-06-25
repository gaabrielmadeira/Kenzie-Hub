import { useForm } from "react-hook-form";
import { Input } from "../../../../../components/input";
import { Modalselect } from "../../../../../components/select";
import { StyledButton } from "../../../../../styles/buttons";
import { useContext, useState } from "react";
import { techContext } from "../../../../../providers/techContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "./formSchema";
import {StyledModalForm} from "../../../../../styles/modal";

export const ModalForm = () => {
  const [loading, setLoading] = useState(false);

  const { register, 
    handleSubmit, 
    reset, 
    formState: {errors} 
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(FormSchema) 
  });
  const {postTech} = useContext(techContext);

  const submit = async (formData) => {
    reset()
    await postTech(formData, setLoading);
  }

  return (
    <StyledModalForm onSubmit={handleSubmit(submit)}>
      <Input label="Nome" {...register("title")} error={errors.title} placeholder="Digite a tecnologia" disabled={loading}/>
      <Modalselect label="Selecionar status" {...register("status")} error={errors.status} disabled={loading}></Modalselect>
      <StyledButton buttonstyle="primary" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar Tecnolgia"}
        </StyledButton>
    </StyledModalForm>
  )
}