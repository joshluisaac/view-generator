import { keys } from "ts-transformer-keys";
import { generate } from "./GeneratorUtils";
import { ProductBundle } from "./models/productBundle";
import { ProductFee } from "./models/productFee";
import { ProductFeeDiscount } from "./models/productFeeDiscount";
import { ProductFeeDiscountEligibility } from "./models/productFeeDiscountEligibility";

import { ProductCardArt } from "./models/productCardArt";
import { ProductConstraint } from "./models/productConstraint";
import { ProductEligbility } from "./models/productEligibility";
import { ProductFeature } from "./models/productFeature";

import { ProductDepositRate } from "./models/productDepositRate";
import { ProductRateTier } from "./models/productRateTier";
import { ProductLendingRate } from "./models/productLendingRate";
import {ProductAdditionalInformation} from "./models/productAdditionalInformation";





interface LabeledValue {
  label: string;
  name: string;
}

const printLabel = (labeledObj: LabeledValue) => console.log(labeledObj.label);

let myObj = { size: 10, name: "Joshua", label: "Size 10 Object" };
printLabel(myObj);



//console.log(generate(keys<ProductBundle>(), "bundle"));
// console.log(generate(keys<ProductCardArt>(), "cardart"));
//console.log(generate(keys<ProductConstraint>(), "constraint"));
//
//console.log(generate(keys<ProductEligbility>(), "eligibility"));
// console.log(generate(keys<ProductFeature>(), "feature"));
//console.log(generate(keys<ProductFee>(), "fee"));
//console.log(generate(keys<ProductFeeDiscount>(), "feediscount"));
//console.log(generate(keys<ProductFeeDiscountEligibility>(), "feediscounteligibility"));
//
//console.log(generate(keys<ProductDepositRate>(), "depositrate"));
//console.log(generate(keys<ProductRateTier>(), "depositratetier"));
//
//console.log(generate(keys<ProductLendingRate>(), "lendingrate"));
//console.log(generate(keys<ProductRateTier>(), "lendingratetier"));

console.log(generate(keys<ProductAdditionalInformation>(), "additionalinfo"));


