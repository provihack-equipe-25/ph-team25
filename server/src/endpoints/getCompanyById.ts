import { Request, Response } from "express";
import { CompanyDatabase } from "../data/CompanyDatabase";

export const getCompanyById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const response = await new CompanyDatabase().getCompanyById(id);
    res.status(200).send(response);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
