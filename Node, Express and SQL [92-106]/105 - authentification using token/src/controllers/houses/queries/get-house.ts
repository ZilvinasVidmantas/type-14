import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { HouseViewModel } from '../types';
import HouseModel from '../houses-model';

const getHouse: RequestHandler<
  { id?: string },
  HouseViewModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const houseViewModel = await HouseModel.getHouse(id);

    res.json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getHouse;
