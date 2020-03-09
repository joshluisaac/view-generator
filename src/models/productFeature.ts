import {Validable} from "./validable";

export interface ProductFeature extends Validable{
    productId: string;
    featureType: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
