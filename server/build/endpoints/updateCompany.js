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
exports.updateCompany = void 0;
const CompanyDatabase_1 = require("../data/CompanyDatabase");
const updateCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { url, image } = req.body;
        if (!url && !image) {
            res.statusCode = 422;
            throw new Error("Escolha ao menos uma informação para atualizar ou cancele a operação.");
        }
        if (url) {
            yield new CompanyDatabase_1.CompanyDatabase().updateCompanyUrl(id, url);
        }
        if (image) {
            yield new CompanyDatabase_1.CompanyDatabase().updateCompanyImage(id, image);
        }
        res.status(200).send({ message: "Informações atualizadas com sucesso!" });
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
exports.updateCompany = updateCompany;
//# sourceMappingURL=updateCompany.js.map