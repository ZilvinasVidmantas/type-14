import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { HouseModel } from 'houses/types';

const getHouses: RequestHandler<
  {},
  HouseModel[],
  undefined,
  {}
> = (req, res) => {
  res.json(houses);
};

export default getHouses;
