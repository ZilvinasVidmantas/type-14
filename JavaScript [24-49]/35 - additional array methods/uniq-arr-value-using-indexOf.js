const countValues = (array) => array.reduce((valueCountObj, x) => {
  if (valueCountObj[x] === undefined) {
    valueCountObj[x] = 0;
  }
  valueCountObj[x] += 1;

  return valueCountObj;
}, {});

const selectUniq = (array) => array.filter((x, i, arr) => arr.indexOf(x) === i);

const values = ['labas', 'vakaras', 'labas', 'rytas', 'labas', 'vakaras'];
const valueCountObj = countValues(values);
console.table(valueCountObj);

const uniqValues = selectUniq(values);
const uniqValueCountObj = countValues(uniqValues);
console.table(uniqValueCountObj);
