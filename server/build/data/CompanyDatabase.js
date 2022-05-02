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
exports.CompanyDatabase = void 0;
const Company_1 = require("../entities/Company");
const BaseDatabase_1 = require("./BaseDatabase");
class CompanyDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.registerCompany = (company) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection("companies").insert({
                    id: company.getId(),
                    company_name: company.getName(),
                    company_url: company.getUrl(),
                    company_image: company.getImage(),
                    cnpj: company.getCnpj(),
                    email: company.getEmail(),
                    password: company.getPassword(),
                    city: company.getCity(),
                    state: company.getState(),
                    address: company.getAddress(),
                    phone: company.getPhone(),
                    contact_number: company.getContactNumber(),
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.findCompanyByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield BaseDatabase_1.BaseDatabase.connection("companies").where({
                    email,
                });
                return company[0] && Company_1.Company.companyModelConversor(company[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.findCompanyByCnpj = (cnpj) => __awaiter(this, void 0, void 0, function* () {
            try {
                const company = yield BaseDatabase_1.BaseDatabase.connection("companies").where({
                    cnpj,
                });
                return company[0] && Company_1.Company.companyModelConversor(company[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getAllCompanies = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield BaseDatabase_1.BaseDatabase.connection("companies");
                const companiesArray = [];
                for (let company of companies) {
                    const wastes = yield BaseDatabase_1.BaseDatabase.connection("waste").where("company_id", company.id);
                    const needs = yield BaseDatabase_1.BaseDatabase.connection("material_needs").where("company_id", company.id);
                    const produced = yield BaseDatabase_1.BaseDatabase.connection("material_produces").where("company_id", company.id);
                    company = Object.assign(Object.assign({}, company), { wastes: wastes, needs: needs, produced: produced });
                    companiesArray.push(company);
                }
                return companiesArray;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getCompanyById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let company = yield BaseDatabase_1.BaseDatabase.connection("companies").where({
                    id,
                });
                const wastes = yield BaseDatabase_1.BaseDatabase.connection("waste").where("company_id", id);
                const needs = yield BaseDatabase_1.BaseDatabase.connection("material_needs").where("company_id", id);
                const produced = yield BaseDatabase_1.BaseDatabase.connection("material_produces").where("company_id", id);
                return Object.assign(Object.assign({}, company[0]), { wastes: wastes, needs: needs, produced: produced });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getCompanyByWasteProduced = (waste) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("companies")
                    .join("material_produces", "companies.id", "material_produces.company_id")
                    .select("company_id")
                    .whereILike("material_name", `%${waste}%`);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getCompanyByMaterialNeeds = (need) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection("companies")
                    .join("material_needs", "companies.id", "material_needs.company_id")
                    .select("company_id")
                    .whereILike("material_name", `%${need}%`);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.updateCompanyUrl = (id, link) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection("companies")
                    .update("company_url", link)
                    .where({ id });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.updateCompanyImage = (id, link) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection("companies")
                    .update("company_image", link)
                    .where({ id });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CompanyDatabase = CompanyDatabase;
//# sourceMappingURL=CompanyDatabase.js.map