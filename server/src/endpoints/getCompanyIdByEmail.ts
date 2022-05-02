import { Request, Response } from "express";
import { CompanyDatabase } from "../data/CompanyDatabase";

export const getCompanyIdByEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const email = req.params.email;
    const result = await new CompanyDatabase().getCompanyIdByEmail(email);

    res.status(200).send(result);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
