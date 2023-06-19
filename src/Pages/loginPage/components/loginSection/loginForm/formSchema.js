import {z} from "zod";

export const FormSchema = z.object({
  email: z.string().nonempty("É obrigatório o preenchimento do email"),
  password: z.string().nonempty("É obrigatório o preenchimento da senha")
})