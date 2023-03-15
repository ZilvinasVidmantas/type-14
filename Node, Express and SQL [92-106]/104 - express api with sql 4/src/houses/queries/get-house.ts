import { RequestHandler } from 'express';
import { HouseViewModel } from 'houses/types';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import HouseModel from 'houses/houses-model';

const getHouse: RequestHandler<
  { id?: string },
  HouseViewModel | ErrorResponse,
  undefined,
  {}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const houseViewModel = await HouseModel.getHouse(id);

    res.json(houseViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default getHouse;
