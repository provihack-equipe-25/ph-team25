import { useEffect, useState } from "react";
import { useCompanies } from "../../provider/company";
import { useWaste } from "../../provider/waste";

const DashBoard = () => {
  const [comp, setComp] = useState();
  const [wst, setWst] = useState();

  const { getCompanyId, company, companys, getCompanyWaste, getCompanyNeeds } =
    useCompanies;
    
    const {}

  return <></>;
};
export default DashBoard;
