import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import HouseNotFoundError from 'houses/house-not-found-error';
import { HouseModel } from 'houses/types';

const deleteHouse: RequestHandler<
  { id?: string },
  HouseModel | ErrorResponse,
  {},
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();

    const foundHouseIndex = houses.findIndex((house) => String(house.id) === id);
    if (foundHouseIndex === -1) throw new HouseNotFoundError(id);

    const [foundHouse] = houses.splice(foundHouseIndex, 1);

    res.status(200).json(foundHouse);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default deleteHouse;
