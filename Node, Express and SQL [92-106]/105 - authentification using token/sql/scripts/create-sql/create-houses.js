const createHouses = (houses, usersEmailIdMap, countryCityMap) => {
  const housesInsertionRows = houses
    .map(({
      host,
      location: { country, city },
      address,
      price,
      title,
    }) => `(${usersEmailIdMap[host.email]}, ${countryCityMap[country][city]}, '${address}', ${price.slice(0, -1)}, '${title}')`)
    .join(',\n');;

  return `
insert into house(userId, cityId, address, price, title) values
${housesInsertionRows};`;
}

module.exports = createHouses;
