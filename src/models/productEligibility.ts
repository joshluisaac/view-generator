import {Validable} from "./validable";

export interface ProductEligbility extends Validable{
    productId: string;
    eligibilityType?: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
