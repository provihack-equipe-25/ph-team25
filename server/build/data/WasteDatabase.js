"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WasteDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class WasteDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.registerWaste = (waste) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection("waste").insert({
                    id: waste.getId(),
                    company_id: waste.getCompanyId(),
                    waste_name: waste.getName(),
                    material_type: waste.getType(),
                    quantity: waste.getQuantity(),
                    taken: waste.getTaken(),
                    location: waste.getLocation(),
                    image_url: waste.getImage(),
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getAllWastes = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const wastes = yield BaseDatabase_1.BaseDatabase.connection("waste");
                return wastes;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getWastesByCity = (city) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("waste").whereILike("location", `%${city}%`);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getWasteByMaterialType = (type) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("waste").whereILike("material_type", `%${type}%`);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.updateWasteStatus = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [target] = yield BaseDatabase_1.BaseDatabase.connection("waste").select("taken").where({ id });
                console.log(target);
                if (target.taken === 0) {
                    yield BaseDatabase_1.BaseDatabase.connection("waste").update("taken", 1).where({ id });
                }
                else {
                    yield BaseDatabase_1.BaseDatabase.connection("waste").update("taken", 0).where({ id });
                }
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.WasteDatabase = WasteDatabase;
//# sourceMappingURL=WasteDatabase.js.map