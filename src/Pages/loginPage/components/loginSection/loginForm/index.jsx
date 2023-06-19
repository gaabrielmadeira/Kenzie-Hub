import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema } from "./formSchema";
import { api } from "../../../../../services/api";
import { Input } from "../../../../../components/input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {StyledButton } from "../../../../../styles/buttons";
import {StyledFieldset} from "../../../../../styles/form";
import {InputPassword} from "../../../../../components/input";

export const LoginForm = ({children, setLoading, loading , setUser}) =>{

  const navigate = useNavigate();

  const {register, 
    handleSubmit, 
    reset, 
    formState: {errors}
  } = useForm({
    mode: "onBlur",
    reValidateMode:"onBlur",
    resolver: zodResolver(FormSchema)
  })

  const validateLogin = async (formData) =>{
    setLoading(true);
    try {
        const response = await api.post("/sessions", formData)
        toast.success("Usuário logado com sucesso");
        setUser(response.data.user);
        const userToken = response.data.token;
        const userId = response.data.user.id;
        localStorage.setItem("@TOKEN", userToken);
        localStorage.setItem("@USERID", userId);
        navigate("/Dashboard");
    } catch (error) {
        toast.error(error.response.data.message);
    }finally{
      setLoading(false);
    }
  }

  const submit = async (formData) =>{
    await validateLogin(formData)
    reset();
  }

  return(
    <form onSubmit={handleSubmit(submit)}>
      <StyledFieldset>
        <Input type="email" disabled={loading} label="Email" error={errors.email} {...register("email")} placeholder="Digite aqui seu email"/>
        <InputPassword type="password" disabled={loading} label="Senha" error={errors.password} {...register("password")} placeholder="Digite aqui a sua senha"/>
        <StyledButton buttonstyle="primary" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </StyledButton>
      </StyledFieldset>
      {children}
    </form>
  )
}