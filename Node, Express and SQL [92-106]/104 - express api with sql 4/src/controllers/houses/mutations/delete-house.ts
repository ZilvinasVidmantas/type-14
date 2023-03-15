import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { HouseViewModel } from '../types';
import HouseModel from '../houses-model';

const deleteHouse: RequestHandler<
  { id?: string },
  HouseViewModel | ErrorResponse,
  {},
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const houseViewModel = await HouseModel.getHouse(id);
    await HouseModel.deleteHouse(id);

    res.status(200).json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default deleteHouse;
