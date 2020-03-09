"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var printLabel2 = function (labeledObj) { return console.log(labeledObj.label); };
var myObj = { size: 10, name: "Joshua", label: "Size 10 Object" };
printLabel(myObj);
printLabel2(myObj);
var keysOfProps = ["productId", "feeId", "name", "feeType", "amount", "balanceRate", "transactionRate", "accruedRate", "accrualFrequency", "currency", "additionalValue", "additionalInfo", "additionalInfoUri"];
console.log(keysOfProps); // ['id', 'name', 'age']
var readData = function (model) {
    console.log(Object.keys(model));
};
