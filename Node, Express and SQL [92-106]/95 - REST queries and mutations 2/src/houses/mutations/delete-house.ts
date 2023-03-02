import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { HouseModel } from 'houses/types';

const deleteHouse: RequestHandler<
  { id?: string },
  HouseModel | ErrorResponse,
  {},
  {}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'Server setup error' });
  }

  const foundHouseIndex = houses.findIndex((house) => String(house.id) === id);

  if (foundHouseIndex === -1) {
    res.status(404).json({ error: `House with id '${id}' was not found` });
    return;
  }

  const foundHouse = houses[foundHouseIndex];
  houses.splice(foundHouseIndex, 1);

  res.status(200).json(foundHouse);
};

export default deleteHouse;
