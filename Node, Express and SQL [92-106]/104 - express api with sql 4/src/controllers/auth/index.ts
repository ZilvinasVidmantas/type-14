import { Router } from 'express';
import { auth } from './methods/auth';
import { login } from './methods/login';
import { register } from './methods/register';

const authController = Router();

authController.post('/register', register);
authController.post('/login', login);
authController.post('/auth', auth);

export default authController;
