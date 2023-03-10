const createCountryTitles = (houses) => [...new Set(houses.map(x => x.location.country))];

module.exports = createCountryTitles;