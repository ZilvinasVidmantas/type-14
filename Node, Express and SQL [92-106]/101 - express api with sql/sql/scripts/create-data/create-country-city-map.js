const createCountryCityMap = (houses) => houses
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
  }, {});

module.exports = createCountryCityMap;