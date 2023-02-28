import express from 'express';
import getHouses from './queries/get-houses';
import getHouse from './queries/get-house';

const housesRouter = express.Router();

housesRouter.get('/', getHouses);
housesRouter.get('/:id', getHouse);

// create one
housesRouter.post('/', (req, res) => {
  console.log(req.body);
  res.send('create one house');
});

// update one
housesRouter.patch('/:id', (req, res) => {
  res.send('updated one house');
});

// delete one
housesRouter.delete('/:id', (req, res) => {
  res.send('deleted one house');
});

export default housesRouter;
