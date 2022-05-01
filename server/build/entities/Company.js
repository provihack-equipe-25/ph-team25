"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(id, name, url, image, cnpj, email, password, city, state, address, phone, contactNumber, materialNeeds, wasteProduced) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.image = image;
        this.cnpj = cnpj;
        this.email = email;
        this.password = password;
        this.city = city;
        this.state = state;
        this.address = address;
        this.phone = phone;
        this.contactNumber = contactNumber;
        this.materialNeeds = materialNeeds;
        this.wasteProduced = wasteProduced;
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getUrl = () => {
            return this.url;
        };
        this.getImage = () => {
            return this.image;
        };
        this.getCnpj = () => {
            return this.cnpj;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getPassword = () => {
            return this.password;
        };
        this.getCity = () => {
            return this.city;
        };
        this.getState = () => {
            return this.state;
        };
        this.getAddress = () => {
            return this.address;
        };
        this.getPhone = () => {
            return this.phone;
        };
        this.getContactNumber = () => {
            return this.contactNumber;
        };
        this.getMaterialNeeds = () => {
            return this.materialNeeds;
        };
        this.getWasteProduced = () => {
            return this.wasteProduced;
        };
    }
}
exports.Company = Company;
Company.companyModelConversor = (data) => {
    return new Company(data.id, data.name, data.url, data.image, data.cnpj, data.email, data.password, data.city, data.state, data.address, data.phone, data.contactNumber, data.materialNeeds, data.wasteProduced);
};
//# sourceMappingURL=Company.js.map