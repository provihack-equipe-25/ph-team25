import { MATERIAL_TYPE } from "../types/waste";

export class Waste {
    constructor(
        private id: string,
        private companyId: string,
        private name: string,
        private type: MATERIAL_TYPE,
        private 
    ){}
}