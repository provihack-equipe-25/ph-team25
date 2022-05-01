import { generateId } from "../services/generateId";
import { BaseDatabase } from "./BaseDatabase";

export class MaterialsDatabase extends BaseDatabase {
  public insertNeed = async (needs: string[] | string, companyId: string) => {
    if (typeof needs === "string") {
      await BaseDatabase.connection("material_needs").insert({
        id: generateId(),
        material_name: needs,
        company_id: companyId,
      });
    } else {
      for (let need of needs) {
        await BaseDatabase.connection("material_needs").insert({
          id: generateId(),
          material_name: need,
          company_id: companyId,
        });
      }
    }
  };
  public insertProduced = async (products: string[], companyId: string) => {
    if (typeof products === "string") {
      await BaseDatabase.connection("material_produces").insert({
        id: generateId(),
        material_name: products,
        company_id: companyId,
      });
    } else {
      for (let product of products) {
        await BaseDatabase.connection("material_produces").insert({
          id: generateId(),
          material_name: product,
          company_id: companyId,
        });
      }
    }
  };
}
