import { Request, Response } from "express";
import { CompanyDatabase } from "../data/CompanyDatabase";

export const getCompanyByMaterialNeeds = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const needs = req.query.needs as string;

    const result = await new CompanyDatabase().getCompanyByMaterialNeeds(needs);
    res.status(200).send(result);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
