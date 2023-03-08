const dbData = require('../old-data/db.json');

const { houses } = dbData;

const countriesTitles = [...new Set(houses.map(x => x.location.country))];
const countryMap = countriesTitles.reduce((prevMap, countryTitle, i) => ({
  ...prevMap,
  [countryTitle]: i + 1
}), {})

const insertionRows = countriesTitles
  .map(x => `('${x}')`)
  .join(',\n');

const insertionSQL = `
insert into country(title) values
${insertionRows};
`
console.log(insertionSQL);

module.exports = {
  insertionSQL,
  countryMap
};
