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
exports.createMaterialProducesByCompanyId = void 0;
const MaterialsDataBase_1 = require("../data/MaterialsDataBase");
const createMaterialProducesByCompanyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.params.id;
        const produces = req.body.produces;
        yield new MaterialsDataBase_1.MaterialsDatabase().insertProduced(produces, companyId);
        res.status(201).send({ message: "Material produzido registrado com sucesso!" });
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
exports.createMaterialProducesByCompanyId = createMaterialProducesByCompanyId;
//# sourceMappingURL=createMaterialProducesByCompanyId.js.map