import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import ForbiddenError from 'errors/forbidden-error';
import { HouseViewModel, HouseDataBody } from '../types';
import houseDataValidationSchema from '../validation-schemas/house-data-validation-schema';
import HouseModel from '../houses-model/index';

const putHouse: RequestHandler<
  { id?: string },
  HouseViewModel | ErrorResponse,
  HouseDataBody,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
    const houseToUpdate = await HouseModel.getHouse(id);

    if (req.authUser.role !== 'ADMIN' && req.authUser.id !== houseToUpdate.host.id) {
      throw new ForbiddenError();
    }
    const houseData = houseDataValidationSchema.validateSync(req.body);
    const houseViewModel = await HouseModel.replaceHouse(id, houseData);

    res.status(200).json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putHouse;
