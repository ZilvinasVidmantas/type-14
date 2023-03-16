import { RequestHandler } from 'express';

export const login: RequestHandler = (req, res) => {
  res.send('prisijungimas');
};
