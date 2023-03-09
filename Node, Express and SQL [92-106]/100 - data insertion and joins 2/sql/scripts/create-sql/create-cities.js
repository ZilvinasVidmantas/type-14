const createCities = (houses, countryMap) => {
  const insertionRows = houses
    .map(x => ({
      countryId: countryMap[x.location.country],
      title: x.location.city
    }))
    .map(({ countryId, title }) => `(${countryId}, '${title}')`)
    .join(',\n');

  return `
insert into city(countryId, title) values
${insertionRows};`;
}


module.exports = createCities;
