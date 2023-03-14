import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import HouseNotFoundError from 'houses/house-not-found-error';
import { HouseModel, HouseDataBody } from 'houses/types';
import partialHouseDataValidationSchema from 'houses/validation-schemas/partial-house-data-validation-schema';

const patchHouse: RequestHandler<
  { id?: string },
  HouseModel | ErrorResponse,
  HouseDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const houseData = partialHouseDataValidationSchema.validateSync(req.body);
    const foundHouse = houses.find((house) => String(house.id) === id);

    if (foundHouse === undefined) throw new HouseNotFoundError(id);

    Object.assign(foundHouse, houseData);

    res.status(200).json(foundHouse);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default patchHouse;
