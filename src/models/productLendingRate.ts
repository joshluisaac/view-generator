import {ProductRateTier} from "./productRateTier";
import {Validable} from "./validable";

export interface ProductLendingRate extends Validable{
    productId: string;
    lendingRateId: string;
    lendingRateType?: string;
    rate?: string;
    comparisonRate?: string;
    calculationFrequency?: string;
    applicationFrequency?: string;
    interestPaymentDue?: string;
    tiers: ProductRateTier[];
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
