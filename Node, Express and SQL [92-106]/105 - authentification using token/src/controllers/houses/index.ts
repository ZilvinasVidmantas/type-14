import express from 'express';
import jwtTokenMiddleware from 'middlewares/jwt-token-middleware';
import getHouses from './queries/get-houses';
import getHouse from './queries/get-house';
import createHouse from './mutations/create-house';
import deleteHouse from './mutations/delete-house';
import putHouse from './mutations/put-house';

const housesController = express.Router();

housesController.get('/', getHouses);
housesController.get('/:id', getHouse);

housesController.post('/', jwtTokenMiddleware, createHouse);
housesController.put('/:id', jwtTokenMiddleware, putHouse);
housesController.delete('/:id', jwtTokenMiddleware, deleteHouse);

export default housesController;
