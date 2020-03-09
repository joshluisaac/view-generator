import { ProductFeeDiscount } from "./productFeeDiscount";
import {Validable} from "./validable";

export interface ProductFee extends Validable{
    productId: string;
    feeId: string;
    name?: string;
    feeType?: string;
    amount?: string;
    balanceRate?: string;
    transactionRate?: string;
    accruedRate?: string;
    accrualFrequency?: string;
    currency?: string;
    additionalValue?: string;
    additionalInfo?: string;
    additionalInfoUri?: string;
    discounts: ProductFeeDiscount[];
}
