import express from 'express';
import getHouses from './queries/get-houses';
import getHouse from './queries/get-house';
import createHouse from './mutations/create-house';
import deleteHouse from './mutations/delete-house';
import putHouse from './mutations/put-house';
import patchHouse from './mutations/pacth-house';

const housesRouter = express.Router();

housesRouter.get('/', getHouses);
housesRouter.get('/:id', getHouse);

housesRouter.post('/', createHouse);
housesRouter.put('/:id', putHouse);
housesRouter.patch('/:id', patchHouse);
housesRouter.delete('/:id', deleteHouse);

export default housesRouter;
