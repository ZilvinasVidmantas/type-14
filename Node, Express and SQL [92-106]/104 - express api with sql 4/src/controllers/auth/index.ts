import { Router } from 'express';

const authController = Router();

authController.post('/register', (req, res) => {
  res.send('registracija');
});

authController.post('/login', (req, res) => {
  res.send('prisijungimas');
});

authController.post('/auth', (req, res) => {
  res.send('duomenų atnaujinimas');
});

export default authController;
