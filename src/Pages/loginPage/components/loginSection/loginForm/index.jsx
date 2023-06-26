import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema } from "./formSchema";
import { Input } from "../../../../../components/input";
import {StyledButton } from "../../../../../styles/buttons";
import {StyledFieldset} from "../../../../../styles/form";
import {InputPassword} from "../../../../../components/input";
import { useContext } from "react";
import { userContext } from "../../../../../providers/userContext";
import { useState } from "react";

export const LoginForm = ({children}) =>{

  const [loading, setLoading] = useState(false);
  const {showPassword} = useContext(userContext);

  const {register, 
    handleSubmit, 
    reset, 
    formState: {errors}
  } = useForm({
    mode: "onBlur",
    reValidateMode:"onBlur",
    resolver: zodResolver(FormSchema)
  })

  const {validateLogin} = useContext(userContext);

  const submit = async (formData) =>{
    await validateLogin(formData, setLoading)
    reset();
  }

  return(
    <form onSubmit={handleSubmit(submit)}>
      <StyledFieldset>
        <Input type="email" disabled={loading} label="Email" error={errors.email} {...register("email")} placeholder="Digite aqui seu email"/>
        <InputPassword type={showPassword ? "text" : "password"} disabled={loading} label="Senha" error={errors.password} {...register("password")} placeholder="Digite aqui a sua senha"/>
        <StyledButton buttonstyle="primary" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </StyledButton>
      </StyledFieldset>
      {children}
    </form>
  )
}