import express from 'express';
import getHouses from './queries/get-houses';
import getHouse from './queries/get-house';
import createHouse from './mutations/create-house';
import deleteHouse from './mutations/delete-house';
import replaceHouse from './mutations/replace-house';

const housesRouter = express.Router();

housesRouter.get('/', getHouses);
housesRouter.get('/:id', getHouse);

housesRouter.post('/', createHouse);
housesRouter.put('/:id', replaceHouse);
// housesRouter.patch('/:id', updateHouse);
housesRouter.delete('/:id', deleteHouse);

export default housesRouter;
