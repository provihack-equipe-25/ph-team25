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
exports.createWaste = void 0;
const WasteDatabase_1 = require("../data/WasteDatabase");
const Waste_1 = require("../entities/Waste");
const generateId_1 = require("../services/generateId");
const createWaste = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyId, name, type, quantity, location, image } = req.body;
        const id = (0, generateId_1.generateId)();
        if (!name || !type || !quantity || !location || !image) {
            res.statusCode = 422;
            throw new Error("Por favor, preencha todos os campos.");
        }
        let taken = false;
        const newWaste = new Waste_1.Waste(id, companyId, name, type, quantity, taken, location, image);
        yield new WasteDatabase_1.WasteDatabase().registerWaste(newWaste);
        res.status(201).send({ message: "Anúncio cadastrado com sucesso!" });
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500).send("Internal server error.");
        }
        else {
            res.send({ message: error.message });
        }
    }
});
exports.createWaste = createWaste;
//# sourceMappingURL=createWaste.js.map