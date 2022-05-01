"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waste = void 0;
class Waste {
    constructor(id, companyId, name, type, quantity, taken, location, image) {
        this.id = id;
        this.companyId = companyId;
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.taken = taken;
        this.location = location;
        this.image = image;
        this.getId = () => {
            return this.id;
        };
        this.getCompanyId = () => {
            return this.companyId;
        };
        this.getName = () => {
            return this.name;
        };
        this.getType = () => {
            return this.type;
        };
        this.getQuantity = () => {
            return this.quantity;
        };
        this.getTaken = () => {
            return this.taken;
        };
        this.getLocation = () => {
            return this.location;
        };
        this.getImage = () => {
            return this.image;
        };
    }
}
exports.Waste = Waste;
Waste.wasteModelConversor = (data) => {
    return new Waste(data.id, data.companyId, data.name, data.type, data.quantity, data.taken, data.location, data.image);
};
//# sourceMappingURL=Waste.js.map