const createUsers = (hosts) => {
  const hostsInsertionRows = hosts
    .map(({
      name,
      surname,
      email,
      mobile,
    }, i) => `('${email}', '$2b$10$/oolJQxqMnjLmsB8iaaBguk67FPht.zUAXTb2A1zRTF70mv8WmzG6', '${name}', '${surname}', '${mobile}', ${i + 2}, 'USER')`)
    .join(',\n');


  return `
insert into user(email, password, name, surname, mobile, imageId, role) values
('admin@gmail.com', '$2b$10$/oolJQxqMnjLmsB8iaaBguk67FPht.zUAXTb2A1zRTF70mv8WmzG6', 'Bangimantas', 'Ūsas', '+370 68957488', 1, 'ADMIN'),
${hostsInsertionRows};`;
}

module.exports = createUsers;
