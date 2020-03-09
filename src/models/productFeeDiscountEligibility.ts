import {Validable} from "./validable";

export interface ProductFeeDiscountEligibility extends Validable{
    discountId: string;
    discountEligibilityType?: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
