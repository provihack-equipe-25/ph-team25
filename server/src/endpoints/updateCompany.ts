import { Request, Response } from "express";
import { CompanyDatabase } from "../data/CompanyDatabase";

export const updateCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const { url, image } = req.body;

    if (!url && !image) {
      res.statusCode = 422;
      throw new Error(
        "Escolha ao menos uma informação para atualizar ou cancele a operação."
      );
    }

    if (url) {
      await new CompanyDatabase().updateCompanyUrl(id, url);
    }
    if (image) {
      await new CompanyDatabase().updateCompanyImage(id, image);
    }

    res.status(200).send({ message: "Informações atualizadas com sucesso!" });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send({ message: error.message });
    }
  }
};
