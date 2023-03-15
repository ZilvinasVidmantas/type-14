import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { HouseViewModel, HouseDataBody } from 'houses/types';
import houseDataValidationSchema from 'houses/validation-schemas/house-data-validation-schema';
import HouseModel from '../houses-model/index';

const putHouse: RequestHandler<
  { id?: string },
  HouseViewModel | ErrorResponse,
  HouseDataBody,
  {}
> = async (req, res) => {
  const { id } = req.params;

  if (id === undefined) throw new ServerSetupError();

  try {
    const houseData = houseDataValidationSchema.validateSync(req.body);
    const houseViewModel = await HouseModel.replaceHouse(id, houseData);

    res.status(200).json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putHouse;
