import { ProductFeeDiscountEligibility } from "./productFeeDiscountEligibility";
import {Validable} from "./validable";

export interface ProductFeeDiscount extends Validable {
    feeId: string;
    discountId: string;
    description?: string;
    discountType?: string;
    amount?: string;
    balanceRate?: string;
    transactionRate?: string;
    accruedRate?: string;
    feeRate?: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
    eligibility?: ProductFeeDiscountEligibility[];
}
