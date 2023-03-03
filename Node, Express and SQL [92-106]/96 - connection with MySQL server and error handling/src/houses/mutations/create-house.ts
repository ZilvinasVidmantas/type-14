import { RequestHandler } from 'express';
import createId from 'helpers/create-id';
import handleRequestError from 'helpers/handle-request-error';
import { houses } from 'houses/data';
import { HouseDataBody, HouseModel } from 'houses/types';
import houseDataValidationSchema from 'houses/validation-schemas/house-data-validation-schema';

const createHouse: RequestHandler<
  {},
  HouseModel | ErrorResponse,
  HouseDataBody,
  {}
> = (req, res) => {
  try {
    const houseData = houseDataValidationSchema.validateSync(req.body, { abortEarly: false });
    const createdHouse = { id: createId(), ...houseData };
    houses.push(createdHouse);

    res.status(201).json(createdHouse);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default createHouse;
