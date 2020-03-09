"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeneratorUtils_1 = require("./GeneratorUtils");
var printLabel = function (labeledObj) { return console.log(labeledObj.label); };
var myObj = { size: 10, name: "Joshua", label: "Size 10 Object" };
printLabel(myObj);
//console.log(generate(keys<ProductBundle>(), "bundle"));
// console.log(generate(keys<ProductCardArt>(), "cardart"));
//console.log(generate(keys<ProductConstraint>(), "constraint"));
//
console.log(GeneratorUtils_1.generate(["productId", "eligibilityType", "additionalValue", "additionalInfo", "additionalInfoUri"], "eligibility"));
// console.log(generate(keys<ProductFeature>(), "feature"));
// console.log(generate(keys<ProductFee>(), "fee"));
// console.log(generate(keys<ProductFeeDiscount>(), "feediscount"));
// console.log(generate(keys<ProductFeeDiscountEligibility>(), "feediscounteligibility"));
//
// console.log(generate(keys<ProductDepositRate>(), "depositrate"));
// console.log(generate(keys<ProductRateTier>(), "depositratetier"));
//
// console.log(generate(keys<ProductLendingRate>(), "lendingrate"));
// console.log(generate(keys<ProductRateTier>(), "lendingratetier"));
