import { ProductRateTier } from "./productRateTier";
import {Validable} from "./validable";

export interface ProductDepositRate extends Validable{
    productId: string;
    depositRateId: string;
    depositRateType?: string;
    rate?: string;
    calculationFrequency?: string;
    applicationFrequency?: string;
    tiers: ProductRateTier[];
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
}
