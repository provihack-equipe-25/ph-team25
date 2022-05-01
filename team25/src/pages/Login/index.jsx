import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Form, Input } from "./styles";
import { useCompanies } from "../../provider/company";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      navigate("/dashboard");
    }
  });
  const { userLogin } = useCompanies();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email invalid")
      .required("Digite um E-mail necessário"),
    senha: yup
      .string()
      .required("Digite sua senha")
      .min(8, "Minimo de 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit(userLogin)}>
        <Input {...register("email")} type="text" placeholder="E-mail" />
        <span>{errors.email?.message}</span>
        <Input {...register("senha")} type="password" placeholder="Senha" />
        <span>{errors.senha?.message}</span>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
