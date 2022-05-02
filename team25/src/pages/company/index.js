import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { useCompanies } from "../../provider/company";
import base_url from "../../services/base_url";
import { HomeContainer } from "../dashboard/styledDashboard";

const Company = (props) => {
  const navigate = useNavigate();
  const [cpn, setCpn] = useState([
    {
      name: "C&iFood",
      about:
        "O que há de mais atualizado no mundo da moda ao seu alcance. Coleções novas em todas as estações, criadas com curadoria especializada.",
      url: "https://www.ifood.com.br",
      image:
        "https://www.abcdacomunicacao.com.br/wp-content/uploads/ifood_logo-baixa.png",
      cnpj: "10.199.778/0001-25",
      email: "ceifood@ifood.com",
      password: "23476234%%",
      city: "Osasco",
      state: "SP",
      address: "Avenida dos Autonomistas, nº 1496, Vila Yara",
      phone: "(11) 6300-0000",
      contactNumber: "(11) 99090-0000",
      materialNeeds: ["Tencel"],
      wasteProduced: "Elastano",
    },
  ]);
  const [wastes, setwastes] = useState([
    {
      companyId: "53120fcd-71f8-49cd-b082-9f0d8604e422",
      name: "Tecido",
      type: "Elastano",
      quantity: "40",
      location: "Osasco",
      image:
        "https://www.maximustecidos.com.br/fotos/grande/290763fg1/tecido-viscose-com-elastano-marsala.jpg",
    },
  ]);

  return (
    <HomeContainer>
      <Header />
      <img src={cpn[0].image} alt="imagem"></img>
      <div>
        <p>{cpn[0].name}</p>
        <p>{cpn[0].wasteProduced}</p>
        <p>{cpn[0].materialNeeds}</p>
        <p>{cpn[0].url}</p>
        <p>{cpn[0].contactNumber}</p>
        <p>{cpn[0].email}</p>
        <h3>sobre</h3>
        <p>{cpn[0].about}</p>
      </div>
      <h2>Materiais para descarte</h2>
      {wastes.map((e) => {
        return (
          <div>
            <img src={e.image} alt="iamgem" />
            <p>
              {e.name} - {e.quantity}Kg
            </p>
          </div>
        );
      })}
    </HomeContainer>
  );
};
export default Company;
