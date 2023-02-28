import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { HouseModel } from '../types';

const getHouse: RequestHandler<
  { id?: string },
  HouseModel | { error: string },
  undefined,
  {}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'Server setup error' });
    return;
  }

  const foundHouse = houses.find((house) => String(house.id) === id);

  if (foundHouse === undefined) {
    res.status(404).json({ error: `House with id '${id}' was not found` });
    return;
  }

  res.status(200).json(foundHouse);
};

export default getHouse;
