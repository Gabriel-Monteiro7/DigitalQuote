import * as Yup from "yup";
export const schema = Yup.object().shape({
  senha: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email("Escreva um email válido")
    .required("Campo obrigatório"),
});

export const fields = [
  {
    icone: "envelope",
    placeHolder: "Digite seu e-mail",
    label: "E-mail",
    name: "email",
    keyboardType: "email-address",
  },
  ,
  {
    icone: "eye",
    placeHolder: "Digite sua senha...",
    label: "Senha",
    name: "senha",
    password: true,
  },
];
