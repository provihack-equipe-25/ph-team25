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
exports.MaterialsDatabase = void 0;
const generateId_1 = require("../services/generateId");
const BaseDatabase_1 = require("./BaseDatabase");
class MaterialsDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.insertNeed = (needs, companyId) => __awaiter(this, void 0, void 0, function* () {
            if (typeof needs === "string") {
                yield BaseDatabase_1.BaseDatabase.connection("material_needs").insert({
                    id: (0, generateId_1.generateId)(),
                    material_name: needs,
                    company_id: companyId,
                });
            }
            else {
                for (let need of needs) {
                    yield BaseDatabase_1.BaseDatabase.connection("material_needs").insert({
                        id: (0, generateId_1.generateId)(),
                        material_name: need,
                        company_id: companyId,
                    });
                }
            }
        });
        this.insertProduced = (products, companyId) => __awaiter(this, void 0, void 0, function* () {
            if (typeof products === "string") {
                yield BaseDatabase_1.BaseDatabase.connection("material_produces").insert({
                    id: (0, generateId_1.generateId)(),
                    material_name: products,
                    company_id: companyId,
                });
            }
            else {
                for (let product of products) {
                    yield BaseDatabase_1.BaseDatabase.connection("material_produces").insert({
                        id: (0, generateId_1.generateId)(),
                        material_name: product,
                        company_id: companyId,
                    });
                }
            }
        });
    }
}
exports.MaterialsDatabase = MaterialsDatabase;
//# sourceMappingURL=MaterialsDataBase.js.map