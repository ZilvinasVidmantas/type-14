import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import UserModel from 'models/user-model';
import { RegistrationBody, AuthResponse } from '../types';
import registrationBodyValidationSchema from '../validation-schemas/registration-body-validation-schema';
import createAuthResponse from '../helpers/create-auth-response';

export const register: RequestHandler<
  {},
  AuthResponse | ErrorResponse,
  Partial<RegistrationBody>,
  {}
> = async (req, res) => {
  try {
    const {
      passwordConfirmation,
      ...userData
    } = registrationBodyValidationSchema.validateSync(req.body, { abortEarly: false });

    await UserModel.checkEmail(userData.email);
    const userEntity = await UserModel.createUser(userData);

    res.json(createAuthResponse(userEntity));
  } catch (err) {
    handleRequestError(err, res);
  }
};
