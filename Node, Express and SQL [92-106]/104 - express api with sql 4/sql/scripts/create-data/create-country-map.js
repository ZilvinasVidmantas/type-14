const createCountryMap = (countryTitles) => countryTitles.reduce((prevMap, countryTitle, i) => ({
  ...prevMap,
  [countryTitle]: i + 1
}), {});

module.exports = createCountryMap;