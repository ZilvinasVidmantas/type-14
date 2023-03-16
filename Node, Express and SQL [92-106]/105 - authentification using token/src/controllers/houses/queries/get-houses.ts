import { RequestHandler } from 'express';
import HouseModel from '../houses-model';
import { HouseViewModel } from '../types';

const getHouses: RequestHandler<
  {},
  HouseViewModel[],
  undefined,
  {}
> = async (req, res) => {
  const houseViewModelArray = await HouseModel.getHouses();
  res.json(houseViewModelArray);
};

export default getHouses;
