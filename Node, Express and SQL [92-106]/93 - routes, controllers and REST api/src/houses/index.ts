import express from 'express';

const houses = express.Router();
// REST'ful

// get all
houses.get('/', (_req, res) => {
  res.send('get all houses');
});

// get one by id
houses.get('/:id', (_req, res) => {
  res.send('get one house');
});

// create one
houses.post('/', (_req, res) => {
  res.send('create one house');
});

// update one
houses.patch('/:id', (_req, res) => {
  res.send('updated one house');
});

// delete one
houses.delete('/:id', (_req, res) => {
  res.send('deleted one house');
});

export default houses;
