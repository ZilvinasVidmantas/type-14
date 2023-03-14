import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import HouseNotFoundError from 'houses/house-not-found-error';
import { HouseViewModel, HouseDataBody } from 'houses/types';
import houseDataValidationSchema from 'houses/validation-schemas/house-data-validation-schema';

const putHouse: RequestHandler<
  { id?: string },
  HouseViewModel | ErrorResponse,
  HouseDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) throw new ServerSetupError();

  try {
    const houseData = houseDataValidationSchema.validateSync(req.body);
    const foundHouseIndex = houses.findIndex((house) => String(house.id) === id);
    if (foundHouseIndex === -1) throw new HouseNotFoundError(id);

    const updatedHouse = { id: houses[foundHouseIndex].id, ...houseData };

    houses.splice(foundHouseIndex, 1, updatedHouse);

    res.status(200).json(updatedHouse);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putHouse;
