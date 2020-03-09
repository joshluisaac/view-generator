import { keys } from 'ts-transformer-keys';


interface LabeledValue {
  label: string;
  name: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

const printLabel2 = (labeledObj: LabeledValue) => console.log(labeledObj.label);

let myObj = { size: 10, name: "Joshua", label: "Size 10 Object" };
printLabel(myObj);
printLabel2(myObj);

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

console.log(keysOfProps); // ['id', 'name', 'age']


const readData = (model:ProductFee) => {
    console.log(Object.keys(model));  
}

