import { ProductAdditionalInformation } from "./productAdditionalInformation";
import {ProductCardArt} from "./productCardArt";

export interface ProductSummary {
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
}
