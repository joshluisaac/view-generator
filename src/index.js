"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var printLabel = function (labeledObj) { return console.log(labeledObj.label); };
var myObj = { size: 10, name: "Joshua", label: "Size 10 Object" };
printLabel(myObj);
var keysOfProps = ["productId", "feeId", "name", "feeType", "amount", "balanceRate", "transactionRate", "accruedRate", "accrualFrequency", "currency", "additionalValue", "additionalInfo", "additionalInfoUri"];
console.log(keysOfProps);
var generateHead = function (modelProps) {
    var html = [];
    modelProps.forEach(function (modelProp) {
        html.push("<th>" + modelProp + "</th>");
    });
    var template = "\n  <thead>\n    <tr>\n      <th>No.</th>\n      " + html.join("") + "\n    </tr>\n  </thead>";
    return template;
};
var generateBody = function (modelProps, modelName) {
    var html = [];
    modelProps.forEach(function (modelProp) {
        html.push("<td>{" + modelName + "." + modelProp + "}</td>");
    });
    var template = "\n  <tbody>\n  {" + modelName + "s.map((" + modelName + ", index) => {\n    return (\n      <tr key={index}>\n        <td>{index + 1}</td>\n        " + html.join("") + "\n      </tr>\n    );\n  })}\n</tbody>";
    return template;
};
console.log(generateHead(keysOfProps));
console.log(generateBody(keysOfProps, "fee"));
