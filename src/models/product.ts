import { ProductAdditionalInformation } from "./productAdditionalInformation";
import { ProductBundle } from "./productBundle";
import { ProductFeature } from "./productFeature";
import { ProductConstraint } from "./productConstraint";
import { ProductFee } from "./productFee";
import { ProductDepositRate } from "./productDepositRate";
import { ProductLendingRate } from "./productLendingRate";
import { ProductEligbility } from "./productEligibility";
import {Validable} from "./validable";
import {ProductCardArt} from "./productCardArt";

export interface Product extends Validable{
    productId?: string;
    effectiveFrom?: string;
    effectiveTo?: string;
    lastUpdated?: string;
    productCategory?: string;
    name?: string;
    description?: string;
    brand?: string;
    brandName?: string;
    applicationUri?: string;
    isTailored?: boolean;
    additionalInformation?: ProductAdditionalInformation;
    cardArt?: ProductCardArt[];
    bundles?: ProductBundle[];
    features?: ProductFeature[];
    constraints?: ProductConstraint[];
    eligibility?: ProductEligbility[];
    fees?: ProductFee[];
    depositRates?: ProductDepositRate[];
    lendingRates?: ProductLendingRate[];
}
