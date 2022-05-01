import { CompaniesProvider } from "./company";

const Provider = ({ children }) => {
  return <CompaniesProvider>{children}</CompaniesProvider>;
};

export default Provider;
