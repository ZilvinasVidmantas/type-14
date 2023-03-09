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

// TODO: suformuoti miestų struktūrą

cityId = cityMap['Wychodne']['Poland']

const cityMap = {
  Wychodne: {
    Poland: 1
  },
  Leliunai: {
    Anyksciai: 25,
    Moletai: 33
  },
}
