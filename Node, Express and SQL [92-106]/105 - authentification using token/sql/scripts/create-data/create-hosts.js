const createHosts = (houses) => houses
  .map(x => x.host)
  .filter((x, i, arr) => arr.findIndex(y => x.email === y.email) === i);

module.exports = createHosts;
