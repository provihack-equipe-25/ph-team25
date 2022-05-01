import { Request, Response } from "express";
import { CompanyDatabase } from "../data/CompanyDatabase";

export const getCompanyByWasteProduced = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const waste = req.query.waste as string;

    const result = await new CompanyDatabase().getCompanyByWasteProduced(waste);
    res.status(200).send(result);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
