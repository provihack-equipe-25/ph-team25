import { Request, Response } from "express";
import { WasteDatabase } from "../data/WasteDatabase";

export const getWastesByCompanyId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const companyId = req.query.company as string;

    const result = await new WasteDatabase().getWasteByCompanyId(companyId);

    res.status(200).send(result);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
