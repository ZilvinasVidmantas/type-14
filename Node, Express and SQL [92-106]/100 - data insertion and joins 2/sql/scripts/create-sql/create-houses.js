const createHouses = (houses, usersEmailIdMap, countryCityMap) => {
  const housesInsertionRows = houses
    .map(({
      host,
      location: { country, city },
      address,
    }) => `(${usersEmailIdMap[host.email]}, ${countryCityMap[country][city]}, '${address}')`)
    .join(',\n');;

  return `
insert into house(userId, cityId, address) values
${housesInsertionRows};`;
}

module.exports = createHouses;
