import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import BcryptService from 'services/bcrypt-service';
import JwtTokenService from 'services/jwt-token-service';
import { RegistrationBody, AuthResponse } from '../types';
import UserModel from '../user-model';
import registrationBodyValidationSchema from '../validation-schemas/registration-body-validation-schema';

export const register: RequestHandler<
  {},
  AuthResponse | ErrorResponse,
  Partial<RegistrationBody>,
  {}
> = async (req, res) => {
  try {
    const {
      passwordConfirmation,
      password,
      ...userData
    } = registrationBodyValidationSchema.validateSync(req.body, { abortEarly: false });

    await UserModel.checkEmail(userData.email);
    const userViewModel = await UserModel.createUser({
      ...userData,
      password: BcryptService.encrypt(password),
    });

    const token = JwtTokenService.create({
      email: userViewModel.email,
      id: userViewModel.id,
    });

    res.json({ user: userViewModel, token });
  } catch (err) {
    handleRequestError(err, res);
  }
};
