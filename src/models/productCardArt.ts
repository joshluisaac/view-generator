import {Validable} from "./validable";


export interface ProductCardArt extends Validable {
    productId?: string;
    title?: string;
    imageUri?: string;
}