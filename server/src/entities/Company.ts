export class Company {
  constructor(
    private name: string,
    private cnpj: string,
    private email: string,
    private password: string,
    private city: string,
    private state: string,
    private address: string,
    private phone: string,
    private contactNumber: string
  ) {}

  public getName = (): string => {
    return this.name;
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
}
