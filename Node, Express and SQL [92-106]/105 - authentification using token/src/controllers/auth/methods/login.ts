import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import BcryptService from 'services/bcrypt-service';
import JwtTokenService from 'services/jwt-token-service';
import { Credentials, AuthResponse } from '../types';
import UserModel from '../user-model';
import credentialsValidationSchema from '../validation-schemas/credentials-validation-schema';

export const login: RequestHandler<
  {},
  AuthResponse | ErrorResponse,
  Partial<Credentials>,
  {}
> = async (req, res) => {
  try {
    const credentials = credentialsValidationSchema.validateSync(req.body, { abortEarly: false });
    const { password, ...userViewModel } = await UserModel.getUserByEmail(credentials.email);

    const passwordIsCorrect = BcryptService.compare(credentials.password, password);
    if (!passwordIsCorrect) throw new Error('Invalid password');

    const token = JwtTokenService.create({
      email: userViewModel.email,
      id: userViewModel.id,
    });

    res.json({ user: userViewModel, token });
  } catch (err) {
    handleRequestError(err, res);
  }
};
