"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateHead = function (modelProps) {
    var html = [];
    modelProps.forEach(function (modelProp) {
        html.push("<th>" + modelProp + "</th>");
    });
    var template = "\n    <thead>\n      <tr>\n        <th>No.</th>\n        " + html.join("") + "\n      </tr>\n    </thead>";
    return template;
};
var generateBody = function (modelProps, modelName) {
    var html = [];
    modelProps.forEach(function (modelProp) {
        html.push("<td>{" + modelName + "." + modelProp + "}</td>");
    });
    var template = "\n    <tbody>\n    {" + modelName + "s.map((" + modelName + ", index) => {\n      return (\n        <tr key={index}>\n          <td>{index + 1}</td>\n          " + html.join("") + "\n        </tr>\n      );\n    })}\n  </tbody>";
    return template;
};
exports.generate = function (modelProps, modelName) {
    return generateHead(modelProps).concat(generateBody(modelProps, modelName));
};
