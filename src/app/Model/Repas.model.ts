export interface RepasModel{
    categoryId : number;
    Plat : string;
    Description : string;
    Prix : number
}

export interface RepasDetail{
    id : number;
    plat : string;
    description : string;
    prix : number
    categoryId : number;
}