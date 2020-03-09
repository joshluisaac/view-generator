import {Validable} from "./validable";

export interface ProductConstraint extends Validable{
    productId: string;
    constraintType?: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
