import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../../../services/api";
import { toast } from "react-toastify";
import { Input } from "../../../../../components/input";
import { Select } from "../../../../../components/select";
import {StyledFieldset} from "../../../../../styles/form";
import {StyledButton} from "../../../../../styles/buttons";

export const RegisterForm = ({setLoading, loading}) => {

  const { register, 
    handleSubmit, 
    reset, 
    formState: {errors} 
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(FormSchema),
  });

  const navigate = useNavigate();

  const createUser = async (formData) =>{
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
    } finally{
      setLoading(false);
    }
  }

  const submit = async (formData) =>{
    reset();
    await createUser(formData);
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
