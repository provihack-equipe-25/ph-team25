import { Request, Response } from "express";
import { WasteDatabase } from "../data/WasteDatabase";

export const updateWasteStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;

        await new WasteDatabase().updateWasteStatus(id);

        res.status(200).send({message: "Status atualizado com sucesso!"})
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error.");
          } else {
            res.send({ message: error.message });
          }
    }
}