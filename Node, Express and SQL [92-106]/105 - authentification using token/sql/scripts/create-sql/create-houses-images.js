const createHousesImages = (houses, startWithId) => {
  const imagesInsertionRows = houses.map(x => x.images).flat()
    .map(x => `('${x}')`)
    .join(',\n');

  const imagesInsertionSQL = `
insert into image(src) values
${imagesInsertionRows};
`;

  let imgId = startWithId;
  const houseImagesInsertionRows = houses
    .reduce((housesImages, house, i) => {
      const houseId = i + 1;
      const houseImages = house.images.map(x => ({ houseId, imageId: imgId++ }))

      return housesImages.concat(houseImages);
    }, [])
    .map(({ houseId, imageId }) => `(${houseId}, ${imageId})`)
    .join(',\n');

  const houseImagesInsertionSQL = `
insert into house_image(houseId, imageId) values
${houseImagesInsertionRows};`;

  return imagesInsertionSQL + houseImagesInsertionSQL;
}

module.exports = createHousesImages;
