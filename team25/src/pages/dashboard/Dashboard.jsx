import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { useCompanies } from "../../provider/company";
import base_url from "../../services/base_url";
import { HomeContainer } from "./styledDashboard";

export const Dashboard = (props) => {
  const navigate = useNavigate();
  const { getCompanyId, company } = useCompanies();
  const [cpn, setCpn] = useState();



  useEffect(()=>{
    const id = localStorage.getItem("@userToken");

    base_url
      .get(`/company/${id}`)
      .then((response) => {
        setCpn(response);
      })
      .catch(() => {});
    setCpn(company),
  }, [])

  console.log(cpn)

  return (
    <HomeContainer>
      <Header />
      KKKKKKKKKKKKKK
    </HomeContainer>
  );
};
