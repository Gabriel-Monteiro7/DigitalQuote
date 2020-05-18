import * as Yup from "yup";
export const schema = Yup.object().shape({
  givenName: Yup.string().required("Campo obrigatório"),
  familyName: Yup.string().required("Campo obrigatório"),
  senha: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email("Escreva um email válido")
    .required("Campo obrigatório"),
  confirmar_senha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas não correspondem")
    .required("Campo obrigatório"),
});

export const fields = [
  {
    placeHolder: "Seu nome",
    label: "Nome",
    name: "givenName",
  },
  {
    placeHolder: "Seu sobrenome",
    label: "Sobrenome",
    name: "familyName",
  },
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
  {
    icone: "eye",
    placeHolder: "Repita sua senha",
    label: "Confirmar senha",
    name: "confirmar_senha",
    password: true,
  },
];
