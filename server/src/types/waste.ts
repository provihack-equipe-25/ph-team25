export enum MATERIAL_TYPE {
  ALGODAO = "Algodão",
  ELASTANO = "Elastano",
  LA = "Lã",
  SEDA = "Seda",
  VISCOSE = "Viscose",
  TENCEL = "Tencel",
  LINHO = "Linho",
  POLIESTER = "Poliéster",
}

export type waste = {
    id: string,
    companyId: string,
    name: string,
    type: MATERIAL_TYPE,
    quantity: string,
    taken: number,
    location: string,
    image: string
}
