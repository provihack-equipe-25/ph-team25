import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { resolveTo } from "react-router/lib/router";
import base_url from "../../services/base_url";

const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
  const navigate = useNavigate();

  const userLogin = (datas) => {
    base_url
      .post(`/company/${datas}/id`)
      .then((response) => {
        localStorage.setItem("@userToken", response.data.access);
        navigate("/dashboard");
      })
      .catch((_) => {});
  };

  //   const userUpdate = (datas) => {
  //       const token = localStorage.getItem("@userToken")

  //       if(token) {
  //           base_url
  //           .patch(`/company/${token}`, datas)
  //           .then((response) => {

  //           })
  //       }
  //   }

  const getCompany = () => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      base_url
        .get("/company")
        .then((response) => {
          return response.data;
        })
        .catch(() => {
          localStorage.removeItem("@userToken");
        });
    }
  };

  const getCompanyId = () => {
    const token = localStorage.getItem("@userToken");
  };
};
