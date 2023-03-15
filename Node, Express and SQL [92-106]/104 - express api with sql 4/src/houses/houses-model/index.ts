import config from 'config';
import HouseNotFoundError from 'houses/house-not-found-error';
import { HouseViewModel, HouseData } from 'houses/types';
import mysql from 'mysql2/promise';
import SQL from './sql';

const getHouses = async (): Promise<HouseViewModel[]> => {
  const connection = await mysql.createConnection(config.database);

  const sql = `
  ${SQL.SELECT}
  ${SQL.GROUP}
  `;

  const [houses] = await connection.query(sql);

  connection.end();

  return houses as HouseViewModel[];
};

const getHouse = async (id: string): Promise<HouseViewModel> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
  ${SQL.SELECT}
  where h.houseId = ?
  ${SQL.GROUP}`;
  const bindings = [id];

  const [houses] = await connection.query<mysql.RowDataPacket[]>(preparedSql, bindings);
  connection.end();

  if (houses.length === 0) throw new HouseNotFoundError(id);

  return houses[0] as HouseViewModel;
};

const deleteHouse = async (id: string): Promise<void> => {
  const connection = await mysql.createConnection(config.database);
  const preparedSql = `
    DELETE from user_house_rating
    WHERE houseId = ?;

    DELETE from user_liked_house
    WHERE houseId = ?;

    SET @houseImagesIds = (
      select group_concat(imageId) 
      from house_image 
      where houseId = ?
      group by houseId);  

    DELETE from house_image
    WHERE houseId = ?;

    DELETE from image
    WHERE find_in_set(imageId, @houseImagesIds);

    DELETE from house
    WHERE houseId = ?;`;

  const bindings = [id, id, id, id, id];
  await connection.query(preparedSql, bindings);
  connection.end();
};

const createHouse = async (houseData: HouseData): Promise<HouseViewModel> => {
  const connection = await mysql.createConnection(config.database);

  // TODO: priimti ir įdėti user'io id (kuomet bus įgalinta autentifikacija)
  const preparedSql = `
insert into house (address, title, price, cityId, userId) values
(?, ?, ?, ?, 2);

set @created_house_id = last_insert_id();

insert into image (src) values
${houseData.images.map(() => '(?)').join(',\n')};

set @first_image_id = last_insert_id();

insert into house_image(imageId, houseId)
select imageId, @created_house_id as houseId
from image
where imageId >= @first_image_id;

${SQL.SELECT}
where h.houseId = @created_house_id
${SQL.GROUP};
`;

  const bindings = [
    houseData.address,
    houseData.title,
    houseData.price,
    houseData.cityId,
    ...houseData.images,
  ];

  const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(preparedSql, bindings);
  const [house] = queryResult[queryResult.length - 1] as HouseViewModel[];

  connection.end();

  return house;
};

const replaceHouse = async (houseId: string, houseData: HouseData): Promise<HouseViewModel> => {
  const connection = await mysql.createConnection(config.database);

  const preparedSql = `
update house
set address = ?, title= ?, price=?, cityId=?
where houseId = ?;

set @houseImagesIds = (
  select group_concat(imageId) 
    from house_image 
    where houseId = ?
    group by houseId);

delete from house_image
where houseId = ?;

delete from image
where find_in_set(imageId, @houseImagesIds);

insert into image (src) values
${houseData.images.map(() => '(?)').join(',\n')};

set @first_image_id = last_insert_id();

insert into house_image(imageId, houseId)
select imageId, ? as houseId
from image
where imageId >= @first_image_id;

${SQL.SELECT}
where h.houseId = ?
${SQL.GROUP};
`;

  const bindings = [
    houseData.address,
    houseData.title,
    houseData.price,
    houseData.cityId,
    houseId,
    houseId,
    houseId,
    ...houseData.images,
    houseId,
    houseId,
  ];

  const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(preparedSql, bindings);
  const [house] = queryResult[queryResult.length - 1] as HouseViewModel[];

  connection.end();

  return house;
};

const HouseModel = {
  getHouses,
  getHouse,
  deleteHouse,
  createHouse,
  replaceHouse,
};

export default HouseModel;
