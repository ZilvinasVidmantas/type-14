import config from 'config';
import { RequestHandler } from 'express';
import SQL from 'houses/sql';
import { HouseModel } from 'houses/types';
import mysql from 'mysql2/promise';

const getHouses: RequestHandler<
  {},
  HouseModel[],
  undefined,
  {}
> = async (req, res) => {
  const connection = await mysql.createConnection(config.database);

  const sql = `
  ${SQL.SELECT}
  ${SQL.GROUP}
  `;

  const [houses] = await connection.query(sql);

  connection.end();

  res.json(houses as HouseModel[]);
};

export default getHouses;
