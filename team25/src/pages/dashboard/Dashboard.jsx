import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import WasteMaterial from "../../components/waste-material/WasteMaterial";
import { useCompanies } from "../../provider/company";
import base_url from "../../services/base_url";
import { HomeContainer } from "./styledDashboard";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [cpn, setCpn] = useState([
    {
      name: "abfashion",
      about:
        "O que há de mais atualizado no mundo da moda ao seu alcance. Coleções novas em todas as estações, criadas com curadoria especializada.",
      url: "https://abstartups.com.br/",
      image: "https://abstartups.com.br/wp-content/uploads/2020/09/logo1.png",
      cnpj: "10.199.778/0001-25",
      email: "fashion@abstartups.com",
      password: "23476234%%",
      city: "Belém",
      state: "PA",
      address: "Alameda Vicente Pinzon, 54",
      phone: "(11) 6300-0000",
      contactNumber: "(11) 99090-0000",
      materialNeeds: ["lã"],
      wasteProduced: "Seda",
    },
  ]);
  const [wastes, setwastes] = useState([
    {
      companyId: "53120fcd-71f8-49cd-b082-9f0d8604e422",
      name: "Touca",
      type: "Lã",
      quantity: "31",
      location: "Curitiba",
      image:
        "https://secure-static.vans.com.br/medias/sys_master/vans/vans/he3/h0b/h00/h00/9543472513054/4600500050004U-01-BASEIMAGE-Midres.jpg",
    },
  ]);

  return (
    <HomeContainer>
      <Header />
      <div className="company">
      <img src={cpn[0].image} alt="imagem"></img>
      <div className="info">

        <p id="name">{cpn[0].name}</p>
        <WasteMaterial name={cpn[0].wasteProduced}/>
        <WasteMaterial name={cpn[0].materialNeeds}/>
        <p>{cpn[0].url}</p>
        <p>{cpn[0].contactNumber}</p>
        <p>{cpn[0].email}</p>
        <h3>sobre</h3>
        <p>{cpn[0].about}</p>
      </div>
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
export default Dashboard;
