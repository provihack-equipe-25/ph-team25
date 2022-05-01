import { app } from "./config/app";
import { createCompany } from "./endpoints/createCompany";
import { createWaste } from "./endpoints/createWaste";
import { getCompanies } from "./endpoints/getCompanies";
import { getCompanyByMaterialNeeds } from "./endpoints/getCompanyByMaterialNeeds";
import { getCompanyByWasteProduced } from "./endpoints/getCompanyByWasteProduced";
import { getWastes } from "./endpoints/getWastes";
import { getWastesByCity } from "./endpoints/getWastesByCity";
import { getWastesByMaterialType } from "./endpoints/getWastesByMaterialType";
import { updateCompany } from "./endpoints/updateCompany";
import { updateWasteStatus } from "./endpoints/updateWasteStatus";


app.post("/company", createCompany);
app.post("/waste", createWaste);
app.get("/company", getCompanies);
app.get("/company/waste", getCompanyByWasteProduced);
app.get("/company/needs", getCompanyByMaterialNeeds);
app.get("/waste", getWastes);
app.get("/wastes-near-me", getWastesByCity);
app.get("/wastes-by-type", getWastesByMaterialType);
app.patch("/waste/:id/status", updateWasteStatus);
app.patch("/company/:id", updateCompany);
