import { RequestHandler } from 'express';
import mysql from 'mysql2/promise';
import { HouseModel } from 'houses/types';
import config from 'config';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import SQL from 'houses/sql';
import HouseNotFoundError from '../house-not-found-error';

const getHouse: RequestHandler<
  { id?: string },
  HouseModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const connection = await mysql.createConnection(config.database);

    const sql = `
    ${SQL.SELECT}
    where h.houseId = ${id}
    ${SQL.GROUP}`;

    const [houses] = await connection.query<mysql.RowDataPacket[]>(sql);
    if (houses.length === 0) throw new HouseNotFoundError(id);

    connection.end();

    res.json(houses[0] as HouseModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getHouse;
