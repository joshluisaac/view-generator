import {Validable} from "./validable";

export interface ProductBundle extends Validable{
    productId: string;
    name?: string;
    description?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
    productIds?: string[];
}
