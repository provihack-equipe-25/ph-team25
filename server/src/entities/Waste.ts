import { MATERIAL_TYPE } from "../types/waste";

export class Waste {
  constructor(
    private id: string,
    private companyId: string,
    private name: string,
    private type: MATERIAL_TYPE,
    private quantity: string,
    private taken: boolean,
    private location: string,
    private image: string
  ) {}

  public getId = (): string => {
    return this.id;
  };
  public getCompanyId = (): string => {
    return this.companyId;
  };
  public getName = (): string => {
    return this.name;
  };
  public getType = (): string => {
    return this.type;
  };
  public getQuantity = (): string => {
    return this.quantity;
  };
  public getTaken = (): boolean => {
    return this.taken;
  };
  public getLocation = (): string => {
    return this.location;
  };
  public getImage = (): string => {
    return this.image;
  };

  static wasteModelConversor = (data: any): Waste => {
    return new Waste(
      data.id,
      data.companyId,
      data.name,
      data.type,
      data.quantity,
      data.taken,
      data.location,
      data.image
    );
  };
}
