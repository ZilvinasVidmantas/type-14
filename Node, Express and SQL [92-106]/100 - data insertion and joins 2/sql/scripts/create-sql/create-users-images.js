const createUsersImages = (hosts) => {
  const imagesInsertionRows = hosts
    .map(x => `('${x.image}')`)
    .join(',\n');

  return `
insert into image(src) values
('https://cdn.geekwire.com/wp-content/uploads/2015/03/Nick_Berry-300x300.jpg'),
${imagesInsertionRows};`;
}

module.exports = createUsersImages;