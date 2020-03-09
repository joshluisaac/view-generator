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

export const generate = (modelProps: string[], modelName: string) => {
  return generateHead(modelProps).concat(generateBody(modelProps, modelName));
};
