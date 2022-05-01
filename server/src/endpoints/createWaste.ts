import { Request, Response } from "express";
import { WasteDatabase } from "../data/WasteDatabase";
import { Waste } from "../entities/Waste";
import { generateId } from "../services/generateId";

export const createWaste = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { companyId, name, type, quantity, location, image } = req.body;
    const id = generateId();

    if (!name || !type || !quantity || !location || !image) {
      res.statusCode = 422;
      throw new Error("Por favor, preencha todos os campos.");
    }

    let taken = false;

    const newWaste = new Waste(
      id,
      companyId,
      name,
      type,
      quantity,
      taken,
      location,
      image
    );
    await new WasteDatabase().registerWaste(newWaste);

    res.status(201).send({ message: "Anúncio cadastrado com sucesso!" });
  } catch (error: any) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
