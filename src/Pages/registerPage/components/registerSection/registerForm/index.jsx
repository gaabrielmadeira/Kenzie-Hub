import { useForm } from "react-hook-form";
import { FormSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../../components/input";
import { Select } from "../../../../../components/select";
import {StyledFieldset} from "../../../../../styles/form";
import {StyledButton} from "../../../../../styles/buttons";
import { useContext } from "react";
import { userContext } from "../../../../../providers/userContext";
import { useState } from "react";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { register, 
    handleSubmit, 
    reset, 
    formState: {errors} 
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(FormSchema),
  });

  const {createUser} = useContext(userContext);
  
  const submit = async (formData) =>{
    reset();
    await createUser(formData, setLoading);
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <StyledFieldset>
        <Input type="text" disabled={loading} label="Nome" {...register("name")} error={errors.name} placeholder="Digite aqui seu nome"/>
        <Input type="email" disabled={loading} label="Email" {...register("email")} error={errors.email} placeholder="Digite aqui seu email"/>
        <Input type="password" disabled={loading} label="Senha" {...register("password")} error={errors.password} placeholder="Digite aqui sua senha"/>
        <Input type="password" disabled={loading} label="Confirmar senha" {...register("confirm")} error={errors.confirm} placeholder="Digite novamente a sua senha"/>
        <Input type="text" disabled={loading} label="Bio" {...register("bio")} error={errors.bio} placeholder="Fale sobre você"/>
        <Input type="text" disabled={loading} label="Contato" {...register("contact")} error={errors.contact} placeholder="Opção de contato"/>
        <Select label="Selecionar Módulo" disabled={loading} {...register("course_module")}></Select>
        <StyledButton buttonstyle="negative" disabled={loading}>
          {loading ? "Cadastrando..." : "cadastrar"}
        </StyledButton>
      </StyledFieldset>
    </form>
  )
}
