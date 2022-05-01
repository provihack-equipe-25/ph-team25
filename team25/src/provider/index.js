import { CompaniesProvider } from "./company";
import { WasteProvider } from "./waste";

const Provider = ({ children }) => {
  return (
    <WasteProvider>
      <CompaniesProvider>{children}</CompaniesProvider>
    </WasteProvider>
  );
};

export default Provider;
