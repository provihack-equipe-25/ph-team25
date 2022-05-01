import { Request, Response } from "express";
import { CompanyDatabase } from "../data/CompanyDatabase";
import { MaterialsDatabase } from "../data/MaterialsDataBase";
import { Company } from "../entities/Company";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { HashManager } from "../services/HashManager";

export const createCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      url,
      image,
      cnpj,
      email,
      password,
      city,
      state,
      address,
      phone,
      contactNumber,
      materialNeeds,
      wasteProduced,
    } = req.body;
    const id = generateId();
    const hash = await new HashManager().hash(password);

    if (
      !name ||
      !url ||
      !image ||
      !cnpj ||
      !email ||
      !password ||
      !city ||
      !state ||
      !address ||
      !phone ||
      !contactNumber ||
      !materialNeeds ||
      !wasteProduced
    ) {
      res.statusCode = 422;
      throw new Error("Por favor, preencha todos os campos.");
    }

    const companyMail = await new CompanyDatabase().findCompanyByEmail(email);
    if (companyMail) {
      res.statusCode = 422;
      throw new Error("Ops! Este email já está cadastrado.");
    }
    const companyCnpj = await new CompanyDatabase().findCompanyByCnpj(cnpj);
    if (companyCnpj) {
      res.statusCode = 422;
      throw new Error("Ops! Este CNPJ já está cadastrado.");
    }

    const newCompany = new Company(
      id,
      name,
      url,
      image,
      cnpj,
      email,
      hash,
      city,
      state,
      address,
      phone,
      contactNumber,
      materialNeeds,
      wasteProduced
    );

    await new CompanyDatabase().registerCompany(newCompany);
    await new MaterialsDatabase().insertNeed(materialNeeds, id);
    await new MaterialsDatabase().insertProduced(wasteProduced, id);
    const token = new Authenticator().generate({ id, cnpj });

    res
      .status(201)
      .send({ message: "Cadastro realizado com sucesso!", token: token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
