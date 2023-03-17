import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import ForbiddenError from 'errors/forbidden-error';
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
    if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
    const houseViewModel = await HouseModel.getHouse(id);

    if (req.authUser.role !== 'ADMIN' && req.authUser.id !== houseViewModel.host.id) {
      throw new ForbiddenError();
    }

    await HouseModel.deleteHouse(id);

    res.status(200).json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default deleteHouse;
