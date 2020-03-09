import { ProductTierApplicabilityCondition } from "./productTierApplicabilityCondition";
import { ProductRateTierSubTier } from "./productRateTierSubTier";
import {Validable} from "./validable";

export interface ProductRateTier extends Validable{
    rateId: string;
    name?: string;
    unitOfMeasure?: string;
    minimumValue?: number;
    maximumValue?: number;
    rateApplicationMethod?: string;
    applicabilityConditions?: ProductTierApplicabilityCondition;
    subTier: ProductRateTierSubTier;
}
