import config from 'config';
import HouseNotFoundError from 'houses/house-not-found-error';
import { HouseViewModel } from 'houses/types';
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
};

const HouseModel = {
  getHouses,
  getHouse,
  deleteHouse,
};

export default HouseModel;
