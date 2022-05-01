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
exports.getCompanyByWasteProduced = void 0;
const CompanyDatabase_1 = require("../data/CompanyDatabase");
const getCompanyByWasteProduced = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const waste = req.query.waste;
        const result = yield new CompanyDatabase_1.CompanyDatabase().getCompanyByWasteProduced(waste);
        res.status(200).send(result);
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
exports.getCompanyByWasteProduced = getCompanyByWasteProduced;
//# sourceMappingURL=getCompanyByWasteProduced.js.map