import { Waste } from "../entities/Waste";
import { BaseDatabase } from "./BaseDatabase";

export class WasteDatabase extends BaseDatabase {
  public registerWaste = async (waste: Waste): Promise<any> => {
    try {
      await BaseDatabase.connection("waste").insert({
        id: waste.getId(),
        company_id: waste.getCompanyId(),
        waste_name: waste.getName(),
        material_type: waste.getType(),
        quantity: waste.getQuantity(),
        taken: waste.getTaken(),
        location: waste.getLocation(),
        image_url: waste.getImage(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getAllWastes = async () => {
    try {
      const wastes = await BaseDatabase.connection("waste");

      return wastes;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getWastesByCity = async (city: string): Promise<Waste[]> => {
    try {
      const result = await BaseDatabase.connection("waste").whereILike(
        "location",
        `%${city}%`
      );
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getWasteByMaterialType = async (type: string): Promise<Waste[]> => {
    try {
      const result = await BaseDatabase.connection("waste").whereILike(
        "material_type",
        `%${type}%`
      );

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public updateWasteStatus = async (id: string): Promise<void> => {
    try {
      const [target] = await BaseDatabase.connection("waste").select("taken").where({id});
      console.log(target)
      if (target.taken === 0){
        await BaseDatabase.connection("waste").update("taken", 1).where({id})
      }else{
        await BaseDatabase.connection("waste").update("taken", 0).where({id})
      }
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
