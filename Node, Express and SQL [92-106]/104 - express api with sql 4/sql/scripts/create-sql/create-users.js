const createUsers = (hosts) => {
  const hostsInsertionRows = hosts
    .map(({
      name,
      surname,
      email,
      mobile,
    }, i) => `('${email}', 'laikinas', '${name}', '${surname}', '${mobile}', ${i + 2}, 'USER')`)
    .join(',\n');


  return `
insert into user(email, password, name, surname, mobile, imageId, role) values
('admin@gmail.com', 'Vilnius123!', 'Bangimantas', 'Ūsas', '+370 68957488', 1, 'ADMIN'),
${hostsInsertionRows};`;
}

module.exports = createUsers;
