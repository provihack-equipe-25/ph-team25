import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { resolveTo } from "react-router/lib/router";
import base_url from "../../services/base_url";

const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
  const [companys, setCompanys] = useState([]);
  const [company, setCompany] = useState(null);

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
          setCompanys(response.data);
        })
        .catch(() => {
          localStorage.removeItem("@userToken");
          setCompanys([]);
        });
    }
  };

  const getCompanyId = (id) => {
    base_url
      .get(`/company/${id}`)
      .then((response) => {
        setCompany(response.data);
      })
      .catch(() => {});
  };

  const getCompanyWaste = (waste) => {
    base_url
      .get(`/company/${waste}`)
      .then((response) => {
        setCompanys(response.data);
      })
      .catch(() => {});
  };

  const getCompanyNeeds = (needs) => {
    base_url
      .get(`/company/${needs}`)
      .then((response) => {
        setCompanys(response.data);
      })
      .catch(() => {});
  };
};
