import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import {
  PageContainer,
  Form,
  Input,
  ActionContainer,
  FormContainer,
  DecorationContainer,
} from "./styles"
import { useCompanies } from "../../provider/company"
import BaseButton from "../../components/base-button/BaseButton"
import AppSymbol from "../../components/app-symbol/AppSymbol"
import login from "../../assets/login.png"

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("@userToken")
    if (token) {
      navigate("/dashboard")
    }
  })
  // const { userLogin } = useCompanies()

  const userLogin = () => {
    localStorage.setItem('@userToken', "50868835-0ae9-426f-a286-553eabd3e531")
    navigate('/dashboard')
  }

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Digite um E-mail"),
    senha: yup
      .string()
      .required("Digite sua senha")
      .min(8, "Minimo de 8 caracteres"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (

    <PageContainer>
      <AppSymbol />

      <FormContainer>
        <Form onSubmit={handleSubmit(userLogin)}>
          <h1>Entre agora</h1>
          <Input {...register("email")} type="text" placeholder="E-mail" />
          <span>{errors.email?.message}</span>
          <Input {...register("senha")} type="password" placeholder="Senha" />
          <span>{errors.senha?.message}</span>
          <ActionContainer>
            <a href="/login">Esqueceu a senha?</a>
            <BaseButton>Entrar</BaseButton>
          </ActionContainer>
          <p>
            Não tem uma conta ainda? <a onClick={() => userLogin()}>Faça o seu cadastro</a>
          </p>
        </Form>
      </FormContainer>
      <DecorationContainer>
        <h1>Boas vindas</h1>
        <h2>
          Descarte e recicle tecidos têxteis. Contribua para o meio ambiente.
        </h2>
        <img src={login} alt="camiseta para descarte em um notebook" />
      </DecorationContainer>
    </PageContainer>
  )
}

export default Login
