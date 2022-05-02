import { MATERIAL_TYPE } from "../types/waste";

export class Company {
  constructor(
    private id: string,
    private name: string,
    private about: string,
    private url: string,
    private image: string,
    private cnpj: string,
    private email: string,
    private password: string,
    private city: string,
    private state: string,
    private address: string,
    private phone: string,
    private contactNumber: string,
    private materialNeeds: string[],
    private wasteProduced: string[]
  ) {}
  public getId = (): string => {
    return this.id;
  };
  public getName = (): string => {
    return this.name;
  };
  public getAbout = (): string => {
    return this.about;
  };
  public getUrl = (): string => {
    return this.url;
  };
  public getImage = (): string => {
    return this.image;
  };
  public getCnpj = (): string => {
    return this.cnpj;
  };
  public getEmail = (): string => {
    return this.email;
  };
  public getPassword = (): string => {
    return this.password;
  };
  public getCity = (): string => {
    return this.city;
  };
  public getState = (): string => {
    return this.state;
  };
  public getAddress = (): string => {
    return this.address;
  };
  public getPhone = (): string => {
    return this.phone;
  };
  public getContactNumber = (): string => {
    return this.contactNumber;
  };
  public getMaterialNeeds = (): string[] => {
    return this.materialNeeds;
  };
  public getWasteProduced = (): string[] => {
    return this.wasteProduced;
  };

  static companyModelConversor = (data: any): Company => {
    return new Company(
      data.id,
      data.name,
      data.about,
      data.url,
      data.image,
      data.cnpj,
      data.email,
      data.password,
      data.city,
      data.state,
      data.address,
      data.phone,
      data.contactNumber,
      data.materialNeeds,
      data.wasteProduced
    );
  };
}
