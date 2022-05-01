import { createContext, useState, useContext } from "react";
import base_url from "../../services/base_url";

const WasteContext = createContext();

export const WasteProvider = ({ children }) => {
  const [waste, setWaste] = useState();

  const getWaste = () => {
    base_url
      .get("/waste")
      .then((response) => {
        setWaste(response);
      })
      .catch(() => {});
  };

  const getWastebyId = (companyId) => {
    base_url
      .get(`/waste/${companyId}`)
      .then((response) => {
        setWaste(response);
      })
      .catch(() => {});
  };

  return (
    <WasteContext.Provider
      value={{
        waste,
        getWaste,
        getWastebyId,
      }}
    >
      {children}
    </WasteContext.Provider>
  );
};

export const useWaste = () => useContext(WasteContext);
