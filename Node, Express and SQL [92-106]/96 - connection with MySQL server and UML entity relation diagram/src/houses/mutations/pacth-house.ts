import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { HouseModel, HouseDataBody } from 'houses/types';
import partialHouseDataValidationSchema from 'houses/validation-schemas/partial-house-data-validation-schema';

const patchHouse: RequestHandler<
  { id?: string },
  HouseModel | ErrorResponse,
  HouseDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'Server setup error' });
    return;
  }

  try {
    const houseData = partialHouseDataValidationSchema.validateSync(req.body);
    const foundHouse = houses.find((house) => String(house.id) === id);

    if (foundHouse === undefined) {
      res.status(404).json({ error: `House with id '${id}' was not found` });
      return;
    }

    Object.assign(foundHouse, houseData);

    res.status(200).json(foundHouse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(400).json({ error: message });
  }
};

export default patchHouse;
