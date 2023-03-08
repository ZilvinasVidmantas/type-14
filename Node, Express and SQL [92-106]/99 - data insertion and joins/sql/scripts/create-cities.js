const dbData = require('../old-data/db.json');
const { countryMap } = require('./create-countries');

const { houses } = dbData;
const insertionRows = houses
  .map(x => [countryMap[x.location.country], x.location.city])
  .map(([id, title]) => `(${id}, '${title}')`)
  .join(',\n');

const insertionSQL = `
insert into city(countryId, title) values
${insertionRows};
`
console.log(insertionSQL)
