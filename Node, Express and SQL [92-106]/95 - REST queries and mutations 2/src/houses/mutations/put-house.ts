import { RequestHandler } from 'express';
import { houses } from 'houses/data';
import { HouseModel, HouseDataBody } from 'houses/types';
import houseDataValidationSchema from 'houses/validation-schemas/house-data-validation-schema';

const putHouse: RequestHandler<
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
    const houseData = houseDataValidationSchema.validateSync(req.body);

    const foundHouseIndex = houses.findIndex((house) => String(house.id) === id);

    if (foundHouseIndex === -1) {
      res.status(404).json({ error: `House with id '${id}' was not found` });
      return;
    }

    const updatedHouse = {
      id: houses[foundHouseIndex].id,
      ...houseData,
    };

    houses.splice(foundHouseIndex, 1, updatedHouse);

    res.status(200).json(updatedHouse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(400).json({ error: message });
  }
};

export default putHouse;
