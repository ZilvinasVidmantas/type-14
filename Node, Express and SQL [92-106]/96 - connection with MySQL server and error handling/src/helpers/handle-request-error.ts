import NotFoundError from 'errors/not-found-error';
import { Response } from 'express';
import { ValidationError } from 'yup';
import recursiveValidationErrorReducer from './recursive-validation-error-reducer';

const handleRequestError = (err: unknown, res: Response<ErrorResponse>) => {
  let status = 400;
  const errorResponse: ErrorResponse = {
    error: 'Request error',
  };

  if (err instanceof Error) errorResponse.error = err.message;
  if (err instanceof NotFoundError) status = 404;
  if (err instanceof ValidationError && err.errors.length > 0) {
    errorResponse.errors = err.inner.reduce(recursiveValidationErrorReducer, {});
  }

  res.status(status).json(errorResponse);
};

export default handleRequestError;
