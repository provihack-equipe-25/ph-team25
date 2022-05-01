import { Request, Response } from "express";
import { MaterialsDatabase } from "../data/MaterialsDataBase";

export const createMaterialNeedsByCompanyId = async (req: Request, res: Response): Promise<void> => {
    try {
        const companyId: string = req.params.id;
        const needs: string[] | string = req.body.needs
        await new MaterialsDatabase().insertNeed(needs, companyId);

        res.status(201).send({message: "Necessidade registrada com sucesso!"})
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error.");
          } else {
            res.send({ message: error.message });
          }
    }
}