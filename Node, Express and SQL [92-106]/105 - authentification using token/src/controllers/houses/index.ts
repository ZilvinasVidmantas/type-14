import express from 'express';
import getHouses from './queries/get-houses';
import getHouse from './queries/get-house';
import createHouse from './mutations/create-house';
import deleteHouse from './mutations/delete-house';
import putHouse from './mutations/put-house';

const housesController = express.Router();

housesController.get('/', getHouses);
housesController.get('/:id', getHouse);

housesController.post('/', createHouse);
housesController.put('/:id', putHouse);
housesController.delete('/:id', deleteHouse);

export default housesController;
