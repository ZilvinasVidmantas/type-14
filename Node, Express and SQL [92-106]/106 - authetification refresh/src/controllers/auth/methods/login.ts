import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import BcryptService from 'services/bcrypt-service';
import UserModel from 'models/user-model';
import { Credentials, AuthResponse } from '../types';
import credentialsValidationSchema from '../validation-schemas/credentials-validation-schema';
import createAuthResponse from '../helpers/create-auth-response';

export const login: RequestHandler<
  {},
  AuthResponse | ErrorResponse,
  Partial<Credentials>,
  {}
> = async (req, res) => {
  try {
    const credentials = credentialsValidationSchema.validateSync(req.body, { abortEarly: false });
    const userEntity = await UserModel.getUserByEmail(credentials.email);

    const passwordIsCorrect = BcryptService.compare(credentials.password, userEntity.password);
    if (!passwordIsCorrect) throw new Error('Invalid password');

    res.json(createAuthResponse(userEntity));
  } catch (err) {
    handleRequestError(err, res);
  }
};
