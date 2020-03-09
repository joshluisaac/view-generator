import { ProductTierApplicabilityCondition } from "./productTierApplicabilityCondition";

export interface ProductRateTierSubTier {
    name?: string;
    unitOfMeasure?: string;
    minimumValue?: number;
    maximumValue?: number;
    rateApplicationMethod?: string;
    applicabilityConditions?: ProductTierApplicabilityCondition;
}
