const createCountries = (countriesTitles) => {
  const insertionRows = countriesTitles
    .map(x => `('${x}')`)
    .join(',\n');

  return `insert into country(title) values
${insertionRows};`;
}

module.exports = createCountries;