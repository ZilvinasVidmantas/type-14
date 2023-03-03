import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import ServerSetupError from 'errors/server-setup-error';
import HouseNotFoundError from 'houses/house-not-found-error';
import { houses } from 'houses/data';
import { HouseModel } from 'houses/types';

const getHouse: RequestHandler<
  { id?: string },
  HouseModel | ErrorResponse,
  undefined,
  {}
> = (req, res) => {
  const { id } = req.params;
  try {
    if (id === undefined) throw new ServerSetupError();
    const foundHouse = houses.find((house) => String(house.id) === id);
    if (foundHouse === undefined) throw new HouseNotFoundError(id);

    res.status(200).json(foundHouse);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getHouse;
