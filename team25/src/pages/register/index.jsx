import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Form, Input } from "./styles";
import { useCompanies } from "../../provider/company";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      navigate("/dashboard");
    }
  });

  const formSchema = yup.object().shape({
      nome:
      imagem:
      cnpj:
      email:
      senha:
      endereço:
      telefone:
      numerodeContato:
      materialDesejado:
      materialDisponivel:


  })


};
