const createHouses = (houses, usersEmailIdMap, countryCityMap) => {
  const housesInsertionRows = houses
    .map(({
      host,
      location: { country, city },
      address,
      price
    }) => `(${usersEmailIdMap[host.email]}, ${countryCityMap[country][city]}, '${address}', ${price.slice(0, -1)})`)
    .join(',\n');;

  return `
insert into house(userId, cityId, address, price) values
${housesInsertionRows};`;
}

module.exports = createHouses;
