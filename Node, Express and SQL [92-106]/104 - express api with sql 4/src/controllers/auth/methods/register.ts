import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import { RegistrationBody } from '../types';
import registrationBodyValidationSchema from '../validation-schemas/registration-body-validation-schema';

export const register: RequestHandler<
  {},
  any, // TODO: suvienodinti atsakymų duomenis,
  Partial<RegistrationBody>,
  {}
> = (req, res) => {
  try {
    const registrationBody = registrationBodyValidationSchema.validateSync(req.body, {
      abortEarly: false,
    });
    res.json(registrationBody);
  } catch (err) {
    handleRequestError(err, res);
  }
};
