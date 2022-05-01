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
exports.getWastesByCity = void 0;
const WasteDatabase_1 = require("../data/WasteDatabase");
const getWastesByCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.query.city;
        const result = yield new WasteDatabase_1.WasteDatabase().getWastesByCity(city);
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
exports.getWastesByCity = getWastesByCity;
//# sourceMappingURL=getWastesByCity.js.map