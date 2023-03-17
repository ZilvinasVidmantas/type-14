import ServerSetupError from 'errors/server-setup-error';
import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import HouseModel from '../houses-model';
import { HouseDataBody, HouseViewModel } from '../types';
import houseDataValidationSchema from '../validation-schemas/house-data-validation-schema';

const createHouse: RequestHandler<
  {},
  HouseViewModel | ErrorResponse,
  HouseDataBody,
  {}
> = async (req, res) => {
  try {
    if (req.authUser === undefined) throw new ServerSetupError();
    const houseData = houseDataValidationSchema.validateSync(req.body, { abortEarly: false });

    const houseViewModel = await HouseModel.createHouse(houseData, req.authUser.id);

    res.status(201).json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default createHouse;
