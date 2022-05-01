import { Request, Response } from "express";
import { WasteDatabase } from "../data/WasteDatabase";

export const getWastes = async (req: Request, res: Response): Promise<void> => {
  try {
      const response = await new WasteDatabase().getAllWastes();
      res.status(200).send(response)
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
