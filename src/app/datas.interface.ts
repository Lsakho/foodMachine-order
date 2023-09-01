
export interface RestoInterface {
    title: string;
    data: RestoCategoryInterface[];
}

export interface RestoCategoryInterface{
    title : string;
    uuid: string;
    recipes: recipeInterface[];
}

export interface recipeInterface{
    description : string;
    imageUrl: string;
    price: number;
    title: string;
    uuid: string;
}