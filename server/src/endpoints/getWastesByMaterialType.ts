import { Request, Response } from "express";
import { WasteDatabase } from "../data/WasteDatabase";

export const getWastesByMaterialType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const type = req.query.type as string;

    console.log(type);

    const result = await new WasteDatabase().getWasteByMaterialType(type);

    res.status(200).send(result);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
