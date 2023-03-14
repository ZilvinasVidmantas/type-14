const fs = require('fs');
const oldData = require('../old-data/db.json');
const createCountryTitles = require('./create-data/create-country-titles');
const createCountryMap = require('./create-data/create-country-map');
const createHosts = require('./create-data/create-hosts');
const createUsersEmailIdMap = require('./create-data/create-user-email-id-map');
const createCountryCityMap = require('./create-data/create-country-city-map');
const createCountries = require('./create-sql/create-countries');
const createCities = require('./create-sql/create-cities');
const createUsersImages = require('./create-sql/create-users-images');
const createUsers = require('./create-sql/create-users');
const createHouses = require('./create-sql/create-houses');
const createHousesImages = require('./create-sql/create-houses-images');

const { houses } = oldData;
const countryTitles = createCountryTitles(houses);
const countryMap = createCountryMap(countryTitles);
const hosts = createHosts(houses);
const usersEmailIdMap = createUsersEmailIdMap(hosts);
const countryCityMap = createCountryCityMap(houses);
const startWithId = hosts.length + 2;

const countriesSql = createCountries(countryTitles)
const citiesSql = createCities(houses, countryMap);
const userImagesSql = createUsersImages(hosts);
const usersSql = createUsers(hosts);
const housesSql = createHouses(houses, usersEmailIdMap, countryCityMap);
const housesImagesSql = createHousesImages(houses, startWithId);

const dataInsertionMigration = [
  countriesSql,
  citiesSql,
  userImagesSql,
  usersSql,
  housesSql,
  housesImagesSql,
].join('\n');

const date = new Date();
const dateStr = date.toLocaleString('lt-LT', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})
  .replaceAll(':', '-')
  .replaceAll(' ', '-')
fs.writeFile(
  `sql/migrations/migration-${dateStr}-data-insertion.sql`,
  dataInsertionMigration, (err) => err && console.log(err)
);

