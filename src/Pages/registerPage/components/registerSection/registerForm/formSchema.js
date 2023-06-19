import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório").min(2, "É necessário pelo menos 3 caracteres"),
  email: z.string().nonempty("O email é obrigatório").email("Digite um email válido"),
  password: z.string().nonempty("O campo senha é obrigatório").min(8, "A senha precisa conter no minimo 8 caracteres")
  .regex(/(?=.*?[A-Za-z])/, "A senha precisa possuir pelo menos uma letra")
  .regex(/(?=.*?[0-9])/, "A senha deve possur pelo menos um número")
  .regex(/(?=.*?[#?!@$%^&*-])/, "A senha deve possuir pelo menos um caractere especial"),
  confirm: z.string().nonempty("Confirmar a senha é obrigatório"),
  bio: z.string().nonempty("É obrigatório o preenchimento deste campo"),
  contact: z.string().nonempty("É obrigatório fornecer um contato"),
  course_module: z.string().nonempty("É necessário escolher um módulo"),
}).refine(({password, confirm}) => confirm === password, {
  message: "Os campos de confirmação e senha devem corresponder",
  path:["confirm"],
})
