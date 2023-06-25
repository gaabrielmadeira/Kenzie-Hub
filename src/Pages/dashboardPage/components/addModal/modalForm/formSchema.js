import {z} from "zod";

export const  FormSchema = z.object({
  title:z.string().nonempty("Este campo é obrigatório"),
  status:z.string().nonempty("Este campo é obrigatório"),
})