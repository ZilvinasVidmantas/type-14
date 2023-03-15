import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import handleRequestError from 'helpers/handle-request-error';
import { RegistrationBody, UserViewModel } from '../types';
import UserModel from '../user-model';
import registrationBodyValidationSchema from '../validation-schemas/registration-body-validation-schema';

export const register: RequestHandler<
  {},
  UserViewModel | ErrorResponse,
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
      password: bcrypt.hashSync(password, 10),
    });

    res.json(userViewModel);
  } catch (err) {
    handleRequestError(err, res);
  }
};
