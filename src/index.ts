import { keys } from "ts-transformer-keys";

interface LabeledValue {
  label: string;
  name: string;
}

const printLabel = (labeledObj: LabeledValue) => console.log(labeledObj.label);

let myObj = { size: 10, name: "Joshua", label: "Size 10 Object" };
printLabel(myObj);

interface ProductFee {
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
}

const keysOfProps = keys<ProductFee>();
console.log(keysOfProps);

const generateHead = (modelProps: string[]) => {
  let html: string[] = [];
  modelProps.forEach(modelProp => {
    html.push(`<th>${modelProp}</th>`);
  });
  const template = `
  <thead>
    <tr>
      <th>No.</th>
      ${html.join("")}
    </tr>
  </thead>`;
  return template;
};

const generateBody = (modelProps: string[], modelName: string) => {
  let html: string[] = [];
  modelProps.forEach(modelProp => {
    html.push(`<td>{${modelName}.${modelProp}}</td>`);
  });
  const template = `
  <tbody>
  {${modelName}s.map((${modelName}, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        ${html.join("")}
      </tr>
    );
  })}
</tbody>`;
  return template;
};


console.log(generateHead(keysOfProps));
console.log(generateBody(keysOfProps, "fee"));


