import { Request, Response } from "express";
import { MaterialsDatabase } from "../data/MaterialsDataBase";

export const createMaterialProducesByCompanyId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const companyId: string = req.params.id;
    const produces: string[] | string = req.body.produces;
    await new MaterialsDatabase().insertProduced(produces, companyId);

    res.status(201).send({ message: "Material produzido registrado com sucesso!" });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
