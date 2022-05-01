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
exports.createCompany = void 0;
const CompanyDatabase_1 = require("../data/CompanyDatabase");
const MaterialsDataBase_1 = require("../data/MaterialsDataBase");
const Company_1 = require("../entities/Company");
const Authenticator_1 = require("../services/Authenticator");
const generateId_1 = require("../services/generateId");
const HashManager_1 = require("../services/HashManager");
const createCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, url, image, cnpj, email, password, city, state, address, phone, contactNumber, materialNeeds, wasteProduced, } = req.body;
        const id = (0, generateId_1.generateId)();
        const hash = yield new HashManager_1.HashManager().hash(password);
        if (!name ||
            !url ||
            !image ||
            !cnpj ||
            !email ||
            !password ||
            !city ||
            !state ||
            !address ||
            !phone ||
            !contactNumber ||
            !materialNeeds ||
            !wasteProduced) {
            res.statusCode = 422;
            throw new Error("Por favor, preencha todos os campos.");
        }
        const companyMail = yield new CompanyDatabase_1.CompanyDatabase().findCompanyByEmail(email);
        if (companyMail) {
            res.statusCode = 422;
            throw new Error("Ops! Este email já está cadastrado.");
        }
        const companyCnpj = yield new CompanyDatabase_1.CompanyDatabase().findCompanyByCnpj(cnpj);
        if (companyCnpj) {
            res.statusCode = 422;
            throw new Error("Ops! Este CNPJ já está cadastrado.");
        }
        const newCompany = new Company_1.Company(id, name, url, image, cnpj, email, hash, city, state, address, phone, contactNumber, materialNeeds, wasteProduced);
        yield new CompanyDatabase_1.CompanyDatabase().registerCompany(newCompany);
        yield new MaterialsDataBase_1.MaterialsDatabase().insertNeed(materialNeeds, id);
        yield new MaterialsDataBase_1.MaterialsDatabase().insertProduced(wasteProduced, id);
        const token = new Authenticator_1.Authenticator().generate({ id, cnpj });
        res
            .status(201)
            .send({ message: "Cadastro realizado com sucesso!", token: token });
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error.");
        }
        else {
            res.send({ message: error.message });
        }
    }
});
exports.createCompany = createCompany;
//# sourceMappingURL=createCompany.js.map