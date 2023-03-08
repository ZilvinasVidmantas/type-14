const dbData = require('../old-data/db.json');

const { houses } = dbData;

const hosts = houses
  .map(x => x.host)
  .filter((x, i, arr) => arr.findIndex(y => x.email === y.email) === i);

const imagesInsertionRows = hosts
  .map(x => `('${x.image})`)
  .join(',\n');

const imagesInsertionSql = `
insert into images(src) values
('https://cdn.geekwire.com/wp-content/uploads/2015/03/Nick_Berry-300x300.jpg'),
${imagesInsertionRows};
`;

const hostsInsertionRows = hosts
  .map(({
    name,
    surname,
    email,
    mobile,
  }, i) => `('${email}', 'laikinas', '${name}', '${surname}', '${mobile}', ${i + 2}, 'USER')`)
  .join(',\n');


const usersInsertionSql = `
insert into users(email, password, name, surname, mobile, imageId, role) values
('admin@gmail.com', 'Vilnius123!', 'Bangimantas', 'Ūsas', '+370 68957488', 1, 'ADMIN'),
${hostsInsertionRows};
`;

console.log(imagesInsertionSql);
console.log(usersInsertionSql);

module.exports = {
  users: hosts.map((x, i) => ({ ...x, id: i + 2 }))
}
