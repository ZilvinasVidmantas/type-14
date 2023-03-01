import express from 'express';
import getHouses from './queries/get-houses';
import getHouse from './queries/get-house';
import createHouse from './mutations/create-house';
import deleteHouse from './mutations/delete-house';

const housesRouter = express.Router();

housesRouter.get('/', getHouses);
housesRouter.get('/:id', getHouse);

housesRouter.post('/', createHouse);

// update one
housesRouter.patch('/:id', (req, res) => {
  res.send('updated one house');
});

housesRouter.delete('/:id', deleteHouse);

export default housesRouter;
