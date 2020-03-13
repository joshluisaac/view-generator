const generateHead = (modelProps: string[]) => {
  let html: string[] = [];
  modelProps.forEach(modelProp => {
    html.push(`<th>${modelProp}</th>`);
  });
  return `
    <thead>
      <tr>
        <th>No.</th>
        ${html.join("")}
      </tr>
    </thead>`;
};

const generateBody = (modelProps: string[], modelName: string) => {
  let html: string[] = [];
  modelProps.forEach(modelProp => {
    html.push(`<td>{${modelName}.${modelProp}}</td>`);
  });
  return `
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
};

export const generate = (modelProps: string[], modelName: string) => {
  return generateHead(modelProps).concat(generateBody(modelProps, modelName));
};
