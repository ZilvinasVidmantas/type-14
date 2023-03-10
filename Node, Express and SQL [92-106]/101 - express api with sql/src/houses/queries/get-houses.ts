import config from 'config';
import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { HouseModel } from 'houses/types';
import mysql from 'mysql2/promise';

const getHouses: RequestHandler<
  {},
  HouseModel[],
  undefined,
  {}
> = async (req, res) => {
  const connection = await mysql.createConnection(config.database);

  const [queryResult] = await connection.query('SELECT * FROM ts14.house;');

  console.log(queryResult);

  connection.end();

  res.json(houses);
};

export default getHouses;
