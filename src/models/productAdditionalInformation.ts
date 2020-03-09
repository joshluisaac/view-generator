import {Validable} from "./validable";

export interface ProductAdditionalInformation extends Validable{
    productId?: string;
    overviewUri?: string;
    termsUri?: string;
    eligibilityUri?: string;
    feesAndPricingUri?: string;
    bundleUri?: string
}
