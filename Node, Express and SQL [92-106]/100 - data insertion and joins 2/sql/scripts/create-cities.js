const dbData = require('../old-data/db.json');
const { countryMap } = require('./create-countries');

const { houses } = dbData;

const insertionRows = houses
  .map(x => ({
    countryId: countryMap[x.location.country],
    title: x.location.city
  }))
  .map(({ countryId, title }) => `(${countryId}, '${title}')`)
  .join(',\n');

const insertionSQL = `
insert into city(countryId, title) values
${insertionRows};
`;

const countryCityMap = houses
  .map(x => x.location)
  .reduce((prevMap, { country, city }, i) => {
    const nextMap = {
      ...prevMap,
    }

    if (nextMap[country] === undefined) {
      nextMap[country] = {};
    }

    nextMap[country][city] = i + 1;


    return nextMap
  }, {})

console.log(insertionSQL);
console.log(countryCityMap)

module.exports = {
  countryCityMap,
}
