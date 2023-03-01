import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { PartialHouseData, HouseModel } from 'houses/types';
import houseDataValidationSchema from 'houses/validation-schemas/house-data-validation-schema';
import { createId } from 'helpers/create-id';

const createHouse: RequestHandler<
  {},
  HouseModel | ErrorResponse,
  PartialHouseData,
  {}
> = (req, res) => {
  try {
    const houseData = houseDataValidationSchema.validateSync(req.body);
    const createdHouse = {
      id: createId(),
      ...houseData,
    };

    houses.push(createdHouse);

    res.status(201).json(createdHouse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(400).json({ error: message });
  }
};

export default createHouse;
