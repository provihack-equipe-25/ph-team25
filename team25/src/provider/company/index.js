import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import base_url from "../../services/base_url";

const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
  const navigate = useNavigate();

  const userLogin = (datas) => {
    base_url.post(`/company/${datas}/id`);
  };
};
