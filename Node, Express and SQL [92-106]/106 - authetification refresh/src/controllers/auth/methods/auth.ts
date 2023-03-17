import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { AuthResponse } from '../types';
import createAuthResponse from '../helpers/create-auth-response';

export const auth: RequestHandler<
  {},
  AuthResponse | ErrorResponse,
  {},
  {}
> = (req, res) => {
  try {
    if (req.authUser === undefined) throw new ServerSetupError();

    res.status(200).json(createAuthResponse(req.authUser));
  } catch (err) {
    handleRequestError(err, res);
  }
};
